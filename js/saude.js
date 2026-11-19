/* Saúde da playlist: uma tela que mostra o que está faltando ou sujo na playlist, com botão de correção em cada item.
   Reaproveita o que o painel já tem (script.js carrega antes): BY_PLAYLIST, NI, needsUpdate, needsLink, genreTargets, similarTitles, normC,
   splitArtistsAll, openDataUpdate, openDups, openFixOrder, askReverse, openModal, songTable, faixas, nf, pct, esc.
   Nenhuma ação gasta busca sozinha: os botões só abrem as telas que já pedem confirmação. */
(() => {
"use strict";
const HEALTH_W = {a: 25, b: 5, c: 10, e: 15, f: 10, g: 10, gw: 0, h: 5, ad: 5, sg: 0, dr: 5, dm: 5, nm: 0, tn: 0, gd: 0, sy: 0, cx: 5};   // peso de cada verificação na nota (soma 100: nunca zera só por isso; peso 0 = só informa)
const FULL_AT = 0.25;                                                       // com 25% das faixas afetadas o item já custa o peso inteiro
const MAX_SEC = 20 * 60;

const DUR_CHECK_KEY = "catalogo-musical:dur-check";
const ALBUM_NAME_IGN_KEY = "catalogo-musical:album-name-ign";
const ALBUM_NAME_IGN = (() => { try { return new Set(JSON.parse(localStorage.getItem(ALBUM_NAME_IGN_KEY) || "[]")); } catch(e) { return new Set(); } })();
const saveAlbumNameIgn = () => { try { localStorage.setItem(ALBUM_NAME_IGN_KEY, JSON.stringify([...ALBUM_NAME_IGN])); } catch(e) {} };

const TRACK_TITLE_IGN_KEY = "catalogo-musical:track-title-ign";
const TRACK_TITLE_IGN = (() => { try { return new Set(JSON.parse(localStorage.getItem(TRACK_TITLE_IGN_KEY) || "[]")); } catch(e) { return new Set(); } })();
const saveTrackTitleIgn = () => { try { localStorage.setItem(TRACK_TITLE_IGN_KEY, JSON.stringify([...TRACK_TITLE_IGN])); } catch(e) {} };

const TRACK_TITLE_CLEAN_KEY = "catalogo-musical:track-title-clean";
const TRACK_TITLE_CLEAN = (() => { try { return JSON.parse(localStorage.getItem(TRACK_TITLE_CLEAN_KEY) || "[]"); } catch(e) { return []; } })();
const saveTrackTitleClean = () => { try { localStorage.setItem(TRACK_TITLE_CLEAN_KEY, JSON.stringify(TRACK_TITLE_CLEAN)); } catch(e) {} };

const ALB_CLEAN_KEY = "catalogo-musical:alb-clean";
const ALB_CLEAN = (() => { try { return JSON.parse(localStorage.getItem(ALB_CLEAN_KEY) || "[]"); } catch(e) { return []; } })();
const saveAlbClean = () => { try { localStorage.setItem(ALB_CLEAN_KEY, JSON.stringify(ALB_CLEAN)); } catch(e) {} };

const SAME_YEAR_CFM_KEY = "catalogo-musical:same-year-cfm";
const SAME_YEAR_CFM = (() => { try { return new Set(JSON.parse(localStorage.getItem(SAME_YEAR_CFM_KEY) || "[]")); } catch(e) { return new Set(); } })();
const saveSameYearCfm = () => { try { localStorage.setItem(SAME_YEAR_CFM_KEY, JSON.stringify([...SAME_YEAR_CFM])); } catch(e) {} };

const ALB_CHECK_KEY = "catalogo-musical:alb-check";
const ALB_CHECK_VER = "v4";
const ALB_CHECK = (() => { try { const r = JSON.parse(localStorage.getItem(ALB_CHECK_KEY) || "null") || {}; return r._ver === ALB_CHECK_VER ? r : {_ver: ALB_CHECK_VER}; } catch(e) { return {_ver: ALB_CHECK_VER}; } })();
const saveAlbCheck = () => { try { localStorage.setItem(ALB_CHECK_KEY, JSON.stringify(ALB_CHECK)); } catch(e) {} };
const albCheckKey = (artist, albumRaw) => normC((splitArtistsRaw(artist)[0] || artist)) + "|" + normC(albumRaw);

const ARTIST_DISC_KEY = "catalogo-musical:artist-disc";
const ARTIST_DISC_VER = "v1";
const ARTIST_DISC = (() => {
  try {
    const r = JSON.parse(localStorage.getItem(ARTIST_DISC_KEY) || "null") || {};
    if (r._ver !== ARTIST_DISC_VER) return {_ver: ARTIST_DISC_VER};
    // limpa entradas vazias (falhas cacheadas de execuções anteriores)
    for (const k of Object.keys(r)) if (k !== "_ver" && Array.isArray(r[k]) && r[k].length === 0) delete r[k];
    return r;
  } catch(e) { return {_ver: ARTIST_DISC_VER}; }
})();
const saveArtistDisc = () => { try { localStorage.setItem(ARTIST_DISC_KEY, JSON.stringify(ARTIST_DISC)); } catch(e) {} };
let _healthRef = null;   // { md, body, rerender } — mantém o modal de saúde aberto ao navegar entre sub-modais

// detecta sufixos de edição/versão no final do nome do álbum e sugere o nome limpo
const EDITION_RE1 = /\s+[-–—]\s*[(\[]?(?:(?:super\s+)?(?:deluxe|remaster(?:ed)?|expanded|(?:\d+(?:st|nd|rd|th)\s+)?anniversary|special|limited|collector'?s|platinum)(?:\s+(?:(?:super\s+)?(?:deluxe|expanded|special|limited)(?:\s+(?:edition|version|remaster))?|edition|version|remaster))?(?:\s+\d{4})?|\d{4}\s+remaster(?:ed)?|bonus\s+tracks?(?:\s+version)?)[)\]]?\s*$/i;
const EDITION_RE2 = /\s+[(\[](?:(?:super\s+)?(?:deluxe|remaster(?:ed)?|expanded|(?:\d+(?:st|nd|rd|th)\s+)?anniversary|special|limited|collector'?s|platinum)(?:\s+(?:(?:super\s+)?(?:deluxe|expanded|special|limited)(?:\s+(?:edition|version|remaster))?|edition|version|remaster))?(?:\s+\d{4})?|\d{4}\s+remaster(?:ed)?|bonus\s+tracks?(?:\s+version)?)[)\]]\s*$/i;

// detecta sufixos de versão no final do TÍTULO da faixa (remix, remaster, live, acústico, etc.)
const TRACK_SUFFIX_RE = /\s*[(\[](?:(?:super\s+)?(?:deluxe|expanded|(?:\d+(?:st|nd|rd|th)\s+)?anniversary|special|limited|platinum|collector'?s|bonus\s+tracks?)(?:\s+(?:edition|version))?(?:\s+\d{4})?|(?:\d{4}\s+)?remaster(?:ed)?(?:\s+\d{4})?|(?:[\w-]+\s+){0,3}remix|(?:club|radio|extended|dub|progressive|original|acoustic|chill)\s+mix|live(?:\s+(?:at|from|version|recording|session)[\w\s,.'()\[\]-]{0,50})?|acoustic(?:\s+(?:version|mix|session))?|instrumental(?:\s+version)?|(?:early\s+)?demo(?:\s+version)?|(?:radio|single|mono|extended|alternate(?:ive)?|original|album|video|hyper)\s+(?:edit|version|mix))[)\]]\s*$|\s+[-–—]\s*(?:(?:\d{4}\s+)?remaster(?:ed)?(?:\s+\d{4})?|(?:[\w-]+\s+){0,3}remix|live(?:\s+(?:version|recording))?|acoustic(?:\s+version)?|instrumental(?:\s+version)?|from\s+[""""].+)\s*$/i;
function suggestCleanName(name){
  if (!name || name === NI) return null;
  const c = name.replace(EDITION_RE1, '').replace(EDITION_RE2, '').trim();
  return c && c !== name && c.length >= 2 ? c : null;
}
function albumNameIssues(list){
  const seen = new Map();
  for (const t of list){
    if (!t.albumRaw || t.albumRaw === NI || ALBUM_NAME_IGN.has(t.albumRaw)) continue;
    if (!seen.has(t.albumRaw)) seen.set(t.albumRaw, []);
    seen.get(t.albumRaw).push(t);
  }
  const out = [];
  for (const [rawName, tracks] of seen){
    const cleanName = suggestCleanName(rawName);
    if (cleanName) out.push({rawName, cleanName, tracks});
  }
  return out;
}

function suggestCleanTrackTitle(title){
  if (!title || title === NI) return null;
  const c = title.replace(TRACK_SUFFIX_RE, '').trim();
  return c && c !== title && c.length >= 2 ? c : null;
}
function trackTitleKey(t){ return normC(t.artist) + "|" + normC(t.title); }

function trackTitleIssues(list){
  // índice: normC(artist)|normC(title) → tracks com esse título limpo (para detectar gêmeo)
  const byClean = new Map();
  for (const t of list){
    if (!t.title || t.title === NI) continue;
    const k = normC(t.artist) + "|" + normC(t.title);
    if (!byClean.has(k)) byClean.set(k, []);
    byClean.get(k).push(t);
  }
  const seen = new Set(), out = [];
  for (const t of list){
    if (!t.title || t.title === NI) continue;
    const ign = trackTitleKey(t);
    if (TRACK_TITLE_IGN.has(ign)) continue;
    const cleanTitle = suggestCleanTrackTitle(t.title);
    if (!cleanTitle) continue;
    if (seen.has(ign)) continue; seen.add(ign);
    const twinKey = normC(t.artist) + "|" + normC(cleanTitle);
    const twins = (byClean.get(twinKey) || []).filter(x => x.n !== t.n);
    out.push({rawTitle: t.title, cleanTitle, t, twins});
  }
  return out;
}

// { [trackKey]: { status: "ok"|"warn"|"mismatch", confirmed: bool, appleMs: number|null, mbMs: number|null } }
const DUR_CHECK = (() => { try { return JSON.parse(localStorage.getItem(DUR_CHECK_KEY) || "null") || {}; } catch(e) { return {}; } })();
const saveDurCheck = () => { try { localStorage.setItem(DUR_CHECK_KEY, JSON.stringify(DUR_CHECK)); } catch(e) {} };
const durKey = t => `${normC(t.artist)}|${normC(t.title)}`;

const uniq = list => [...new Set(list)];
const plural = (n, um, varios) => `${nf(n)} ${n === 1 ? um : varios}`;

// grafias diferentes do mesmo artista ("Guns N' Roses" x "Guns N Roses"): mesmo normC, texto diferente (só maiúscula não conta: o painel já junta)
function artistSpellings(list){
  const g = new Map();
  for (const t of list){
    if (t.artist === NI) continue;
    for (const name of splitArtistsAll(t.artist)){
      const k = normC(name); if (!k) continue;
      if (!g.has(k)) g.set(k, new Map());
      const v = g.get(k), low = name.toLowerCase();
      if (!v.has(low)) v.set(low, {name, count: 0});
      v.get(low).count++;
    }
  }
  return [...g.values()].filter(v => v.size > 1).map(v => [...v.values()].sort((a, b) => b.count - a.count));
}

function genreDivergence(list){
  const seen = new Set(), out = [];
  for (const t of list){
    if (t.artist === NI) continue;
    for (const p of splitArtists(t.artist)){
      if (seen.has(p)) continue; seen.add(p);
      const bySource = allGenresBySource(p);
      const sp = bySource.Spotify; if (!sp) continue;
      const rSp = rootGenre(sp); if (!rSp) continue;
      const conflicts = Object.entries(bySource)
        .filter(([src]) => src !== "Spotify")
        .map(([src, genres]) => ({src, genres, root: rootGenre(genres)}))
        .filter(c => c.root && c.root !== rSp);
      if (conflicts.length) out.push({artist: p, spGenres: sp, conflicts, tracks: list.filter(t2 => splitArtists(t2.artist).includes(p))});
    }
  }
  return out;
}
function healthChecks(list = BY_PLAYLIST){
  const N = list.length;
  const noData = list.filter(t => !t.m && t.artist !== NI && !!t.title);
  const noLink = list.filter(needsLink);
  // a Apple cobre o gênero só temporariamente (pra gráficos e insights): continua pendente até o Spotify classificar
  const genres = genreTargets(list.map(t => ({artist: t.artist, meta: t.m})));
  const ni = list.filter(t => t.artist === NI || t.albumRaw === NI || !t.dateRaw);
  const sim = similarTitles(), dupTracks = uniq(sim.dups.flatMap(x => x.rs));
  // faixas com 0s continuam sendo "warn" simples (sem busca necessária)
  const zeroDur = list.filter(t => t.sec === 0);
  // faixas com >20min: split por status no DUR_CHECK
  const longDur = list.filter(t => t.sec > MAX_SEC);
  const longDurPending = longDur.filter(t => { const c = DUR_CHECK[durKey(t)]; return !c || (c.status === "mismatch" && !c.confirmed); }); // pesa na nota
  const longDurWarn = longDur.filter(t => { const c = DUR_CHECK[durKey(t)]; return c && (c.status === "ok" || (c.status === "warn") || (c.status === "mismatch" && c.confirmed)); }); // só aviso, não pesa
  const oddDur = [...zeroDur, ...longDurPending]; // o que pesa na nota
  const oddDurWarn = longDurWarn; // só aviso
  const sugs = list.filter(t => t.m && t.m.ty && t.m.ty !== "album" && ASING[singleKey(t)] && ASING[singleKey(t)].album && !ASING_IGN.has(singleKey(t)));   // sugestão da Apple: não pesa na nota
  const review = list.filter(t => t.dfix);   // dfix: data corrigida pelo site, à espera de conferência manual
  const missingDate = missingDateAlbums(list);
  const spell = artistSpellings(list), ai = ALBUM_INFO, autoG = ai.groups.filter(g => !g.confirmed);
  const nmIssues = albumNameIssues(list);
  const tnIssues = trackTitleIssues(list);
  const gdIssues = genreDivergence(list);
  const syGroups = sameYearAlbums(list);
  const cxGroups = crossedDataIssues(list);
  const cxPending = cxPendingCount(list);
  const mk = (k, count, frac, level, extra) => ({k, count, frac, level: count ? level : "ok", w: HEALTH_W[k], ...extra});
  const items = [
    // w:25 — crítico
    mk("a", noData.length, noData.length / N, "warn", {tracks: noData}),
    // w:15
    mk("e", ni.length, ni.length / N, "warn", {tracks: ni}),
    // w:10 — warn antes de help
    mk("f", sim.dups.length + sim.covers.length, (dupTracks.length + uniq(sim.covers.flatMap(x => x.rs)).length) / N, "warn", {tracks: [...dupTracks, ...uniq(sim.covers.flatMap(x => x.rs))], dups: sim.dups.length, covers: sim.covers.length}),
    mk("g", oddDur.length, oddDur.length / N, "warn", {tracks: oddDur}),
    mk("c", genres.length, Math.min(1, genres.length / Math.max(1, uniq(list.flatMap(t => t.bands)).length)), "help", {artists: genres}),
    // w:5 — warn
    mk("ad", ai.doubts.length + autoG.length, Math.min(1, (ai.doubts.reduce((n, e) => n + e.ca + e.cb, 0) + autoG.reduce((n, g) => n + g.variants.reduce((m, v) => m + v.count, 0), 0)) / N), "warn", {doubts: ai.doubts.length, autos: autoG.length}),
    mk("dr", review.length, review.length / N, "warn", {tracks: review}),
    mk("dm", missingDate.length, missingDate.reduce((n, x) => n + x.tracks.length, 0) / N, "warn", {albums: missingDate}),
    mk("sy", syGroups.filter(x => !x.confirmed).length, Math.min(1, syGroups.filter(x => !x.confirmed).reduce((n, x) => n + x.tracks.length, 0) / N), "warn", {groups: syGroups}),
    mk("cx", cxGroups.reduce((n, g) => n + g.tracks.length, 0), Math.min(1, cxGroups.reduce((n, g) => n + g.tracks.length, 0) / N), "warn", {groups: cxGroups, pending: cxPending}),
    // w:5 — help
    mk("b", noLink.length, noLink.length / N, "help", {tracks: noLink}),
    mk("h", spell.length, Math.min(1, spell.length / Math.max(1, uniq(list.flatMap(t => t.bands)).length)), "help", {groups: spell}),
    // w:0 — informativos
    mk("gw", oddDurWarn.length, 0, "help", {tracks: oddDurWarn, longDurWarn: true}),
    mk("sg", sugs.length, 0, "help", {tracks: sugs}),
    mk("nm", nmIssues.length, 0, "help", {albums: nmIssues}),
    mk("tn", tnIssues.length, 0, "help", {tracks: tnIssues}),
    mk("gd", gdIssues.length, 0, "help", {artists: gdIssues}),
  ];
  for (const it of items) it.penalty = it.count ? Math.min(it.w, it.w * Math.min(1, it.frac / FULL_AT)) : 0;
  const total = items.reduce((s, it) => s + it.penalty, 0);
  // qualquer problema tira ao menos 1 ponto: 100 só quando está tudo certo
  const score = Math.max(0, items.some(it => it.count && it.w) ? Math.min(99, Math.round(100 - total)) : 100);
  // sem nada do Spotify: a, b e c dominam e basta um "Atualizar dados"
  const noSpotify = N > 0 && noData.length === N;
  return {N, items, score, noSpotify};
}

const META = {
  a: {t: "Músicas sem dados do Spotify", ok: "Todas as músicas têm os dados do Spotify.", d: n => `${plural(n, "música está", "músicas estão")} sem os dados do Spotify.`, act: "upd"},
  b: {t: "Músicas sem o link guardado", ok: "Todas as músicas com dados têm o link guardado.", d: n => `${plural(n, "música tem", "músicas têm")} dados mas não tem o link do Spotify salvo.`, act: "upd"},
  c: {t: "Artistas sem gênero", ok: "Todos os artistas têm gênero do Spotify.", d: n => `${plural(n, "artista está", "artistas estão")} sem gênero do Spotify.`, act: "upd"},
  e: {t: "Campos \u201cNão identificado\u201d", ok: "Nenhum artista, álbum ou data em branco.", d: n => `${plural(n, "faixa tem", "faixas têm")} artista, álbum ou data em branco.`, act: "list"},
  ad: {t: "Álbuns duplicados", ok: "Nenhum álbum duplicado ou aguardando confirmação.", d: (n, it) => { const d = (it && it.doubts) || 0, a = n - d; return d && a ? `${plural(d, "par de álbuns", "pares de álbuns")} em dúvida e ${plural(a, "grupo", "grupos")} aguardando confirmação.` : d ? `${plural(d, "par de álbuns pode", "pares de álbuns podem")} ser o mesmo álbum.` : `${plural(a, "grupo de álbuns", "grupos de álbuns")} considerados iguais — confirme ou separe.`; }, act: "adoubt"},
  f: {t: "Duplicadas e covers", ok: "Nenhuma música repetida ou título suspeito de cover.", d: (n, it) => { const d = (it && it.dups) || 0, c = n - d; return d && c ? `${plural(d, "grupo repetido", "grupos repetidos")} e ${plural(c, "título", "títulos")} com artistas diferentes.` : d ? `${plural(d, "caso de música provavelmente repetida", "casos de músicas provavelmente repetidas")} (mesmo título e artista).` : `${plural(c, "título aparece", "títulos aparecem")} com artistas diferentes — avalie se é cover ou música distinta.`; }, act: "dupcv"},
  g: {t: "Duração suspeita", ok: "Nenhuma duração estranha.", d: n => `${plural(n, "faixa tem", "faixas têm")} duração de 0 s ou acima de 20 minutos.`, act: "dur"},
  gw: {t: "Duração longa confirmada", ok: "Nenhuma faixa com duração longa confirmada pendente.", d: n => `${plural(n, "faixa tem", "faixas têm")} duração longa confirmada — pode editar ou confirmar novamente.`, act: "dur"},
  sg: {t: "Singles com álbum na Apple", ok: "Nenhuma sugestão de álbum para singles.", d: n => `${plural(n, "faixa marcada como single ou EP existe", "faixas marcadas como single ou EP existem")} num álbum, segundo a Apple.`, act: "singles"},
  dr: {t: "Datas para conferir à mão", ok: "Nenhuma data pendente de conferência.", d: n => `${plural(n, "faixa tem", "faixas têm")} data montada automaticamente — confirme se está correta.`, act: "list"},
  dm: {t: "Datas sem dia e mês", ok: "Nenhuma data indefinida.", d: n => `${plural(n, "álbum está", "álbuns estão")} apenas com o ano — adicione a data completa manualmente.`, act: "datefix"},
  nm: {t: "Nomes com sufixo de edição", ok: "Nenhum nome de álbum com sufixo de edição.", d: n => `${plural(n, "álbum tem", "álbuns têm")} sufixo de edição no nome (Remastered, Deluxe…).`, act: "nm"},
  tn: {t: "Títulos com sufixo de versão", ok: "Nenhum título de faixa com sufixo de versão.", d: n => `${plural(n, "faixa tem", "faixas têm")} sufixo de versão no título (Remix, Live…).`, act: "tn"},
  gd: {t: "Gênero divergente entre fontes", ok: "Nenhum gênero divergente detectado.", d: n => `${plural(n, "artista tem", "artistas têm")} gênero divergente entre Spotify, Apple e MusicBrainz.`, act: "gd"},
  h: {t: "Grafias parecidas do mesmo artista", ok: "Nenhum artista escrito de duas formas.", d: n => `${plural(n, "artista aparece", "artistas aparecem")} escrito de mais de um jeito.`, act: "spell"},
  sy: {t: "Álbuns do mesmo artista no mesmo ano", ok: "Nenhum artista com dois álbuns no mesmo ano.", d: n => `${plural(n, "artista tem", "artistas têm")} dois ou mais álbuns lançados no mesmo ano — confirme se as datas estão certas.`, act: "sameyear"},
  cx: {t: "Integridade dos dados", ok: "Nenhum dado de artista/álbum inconsistente.", d: (n, it) => { const p = it && it.pending ? ` · verificando…` : ""; return `${plural(n, "faixa foi", "faixas foram")} corrompida${n !== 1 ? "s" : ""} na importação.${p}`; }, act: "cx"}
};
const LEVEL = {ok: "ok", warn: "atenção", help: "ajuda"};

function ring(score){
  const r = 44, c = 2 * Math.PI * r, col = healthScoreColor(score);
  return `<svg class="sd-ring" viewBox="0 0 100 100" role="img" aria-label="Nota ${score} de 100"><circle cx="50" cy="50" r="${r}" fill="none" stroke="var(--line)" stroke-width="8"/>
    <circle cx="50" cy="50" r="${r}" fill="none" stroke="${col}" stroke-width="8" stroke-linecap="round" stroke-dasharray="${(c * score / 100).toFixed(1)} ${c.toFixed(1)}" transform="rotate(-90 50 50)"/>
    <text x="50" y="52" text-anchor="middle" dominant-baseline="middle" class="sd-score">${score}</text><text x="50" y="68" text-anchor="middle" class="sd-of">de 100</text></svg>`;
}

// "2001", "2001-05" ou "2001-05-17" (ou vazio); duração "3:45" ou segundos
const DATE_OK = /^\d{4}(-(0[1-9]|1[0-2])(-(0[1-9]|[12]\d|3[01]))?)?$/;
const parseDur = v => { v = v.trim(); if (!v) return 0; const m = /^(\d+):([0-5]?\d)$/.exec(v); if (m) return +m[1] * 60 + +m[2]; return /^\d+$/.test(v) ? +v : null; };
function editTrack(t){
  const body = document.createElement("div"), f = (id, label, val, ph = "") => `<label class="sd-f"><span>${label}</span><input type="text" id="${id}" value="${esc(val)}" placeholder="${ph}" autocomplete="off"></label>`;
  body.innerHTML = `<div class="confirm"><p class="muted">A faixa #${t.n} mantém os dados do Spotify (link, explícita, tipo). Só muda o que você editar aqui.</p>
    ${f("ed-title", "Música", t.title)}${f("ed-artist", "Artista", t.artist === NI ? "" : t.artist)}${f("ed-album", "Álbum", t.albumRaw === NI ? "" : t.albumRaw)}
    ${f("ed-date", "Lançamento", /^\d{4}-01-01$/.test(t.dateRaw) && t.date !== t.dateRaw ? t.date : t.dateRaw, "AAAA-MM-DD (ou só AAAA)")}${f("ed-dur", "Duração", t.sec ? durTxt(t.sec) : "", "m:ss")}
    <p class="err" id="ed-err" hidden></p></div>`;
  const foot = document.createElement("div"); foot.className = "mfrow";
  foot.innerHTML = `<span class="sp"></span><button class="gbtn" type="button" data-c>Cancelar</button><button class="pbtn" type="button" data-ok>Salvar</button>`;
  const md = openModal({title: "Editar música", sub: esc(t.title), body, foot, size: "sm"});
  const q = id => md.m.querySelector("#" + id), err = q("ed-err");
  foot.querySelector("[data-c]").onclick = md.close;
  foot.querySelector("[data-ok]").onclick = async () => {
    const title = q("ed-title").value.trim(), date = q("ed-date").value.trim(), sec = parseDur(q("ed-dur").value);
    const bad = !title ? "A música precisa de um título." : !DATE_OK.test(date) && date ? "Data inválida: use AAAA-MM-DD, AAAA-MM ou só AAAA." : sec === null ? "Duração inválida: use m:ss (ex.: 3:45)." : "";
    err.hidden = !bad; err.textContent = bad; if (bad) return;
    const ok = await confirmModal({title: "Salvar a edição?", ok: "Salvar",
      html: `<p>A faixa <strong>#${t.n}</strong> será atualizada e o painel recalculado. Nada é buscado no Spotify.</p>`});
    if (!ok) return;
    const rows = currentRows().map(r => r[0] !== t.n ? r : [r[0], title, q("ed-artist").value.trim(), q("ed-album").value.trim(), sec, date, ...(r[6] ? [r[6]] : [])]);
    ssSet("health", "1");   // depois de recarregar, a Saúde reabre pra continuar corrigindo
    commitRows(rows, `Faixa #${t.n} editada`);
  };
}

// sugestão (não obrigatória): trocar single/EP/coletânea por "faixa de álbum", com o álbum que a Apple achou
function openSingles(tracks){
  let list = [...tracks];
  const pending = new Map();   // t.n → ASING entry (acumula; só commita ao aplicar)
  const body = document.createElement("div"), foot = document.createElement("div"); foot.className = "mfrow";

  const updateFoot = () => {
    const n = pending.size;
    foot.innerHTML = `<span class="sp"></span><button class="gbtn" type="button" data-c>Fechar${n ? " sem aplicar" : ""}</button>${n ? `<button class="pbtn" type="button" data-apply>Aplicar ${plural(n, "faixa", "faixas")}</button>` : ""}`;
    foot.querySelector("[data-c]").onclick = () => md.close();
    const ap = foot.querySelector("[data-apply]");
    if (ap) ap.onclick = applyAll;
  };

  const applyAll = () => {
    if (!pending.size) return;
    ssSet("health", "1");
    commitRows(currentRows().map(r => { const a = pending.get(r[0]); if (!a) return r; const m = {...(r[6] || {}), ty: "album"}; if (a.tn) m.tn = a.tn; if (a.tt) m.tt = a.tt; return [r[0], r[1], r[2], a.album, r[4], r[5], m]; }), `${plural(pending.size, "faixa virou", "faixas viraram")} faixa${pending.size > 1 ? "s" : ""} de álbum`);
  };

  const renderRows = () => {
    body.innerHTML = `<div class="confirm"><p>A Apple achou estas faixas dentro de um álbum. Escolha o que fazer com cada uma — <strong>não pesa na nota</strong>.</p>
      <div class="du-rows">${list.map(t => { const a = ASING[singleKey(t)]; return `<div class="alb-row" data-n="${t.n}">
        <div class="alb-main">
          <strong>${esc(t.title)}</strong> <span class="muted" style="font-size:12px">· ${esc(t.artist)}</span><br>
          <span class="alb-old">${esc(t.albumRaw === NI ? "—" : t.albumRaw)} (${TYPE_PT[t.m.ty] || t.m.ty})</span><br>
          <strong class="alb-new">${esc(a.album)}</strong>${a.tn && a.tt ? ` <span class="muted" style="font-size:12px">· faixa ${a.tn} de ${a.tt}</span>` : ""}
        </div>
        <div class="alb-btns">
          <button class="gbtn nm-red"  type="button" data-skip="${t.n}" title="Confirmar que é single">É single</button>
          <button class="pbtn nm-ok"   type="button" data-ok="${t.n}"   title="Aceitar álbum da Apple">${IC_CHECK} Converter</button>
        </div>
      </div>`; }).join("")}</div></div>`;
  };

  renderRows(); updateFoot();
  const md = openModal({title: "Faixas que são de álbum", sub: "Sugestão da Apple", body, foot, size: "md", onClose: () => openHealth()});

  body.addEventListener("click", e => {
    const skip = e.target.closest("[data-skip]"), ok = e.target.closest("[data-ok]");
    if (skip){
      const t = list.find(x => x.n === +skip.dataset.skip); if (!t) return;
      ASING_IGN.add(singleKey(t)); saveASingIgn();
      pending.delete(t.n);
      list = list.filter(x => x.n !== t.n);
      if (!list.length){ md.close(); return; }
      renderRows(); updateFoot();
    } else if (ok){
      const t = list.find(x => x.n === +ok.dataset.ok); if (!t) return;
      pending.set(t.n, ASING[singleKey(t)]);
      list = list.filter(x => x.n !== t.n);
      if (!list.length){ applyAll(); return; }
      renderRows(); updateFoot();
    }
  });
}

/* ---------- álbuns do mesmo artista lançados no mesmo ano (qualquer precisão de data) ---------- */
function sameYearAlbums(list){
  const by = new Map();
  for (const t of list){
    if (t.artist === NI || t.albumRaw === NI || !t.date) continue;
    const year = String(t.date).slice(0, 4);
    if (!/^\d{4}$/.test(year)) continue;
    const main = (splitArtistsRaw(t.artist)[0] || "").toLowerCase();
    const k = normC(main) + "|" + year;
    if (!by.has(k)) by.set(k, {k, art: splitArtistsRaw(t.artist)[0] || t.artist, year, albums: new Map(), tracks: []});
    const x = by.get(k);
    if (!x.albums.has(t.album)) x.albums.set(t.album, []);
    x.albums.get(t.album).push(t);
    x.tracks.push(t);
  }
  const out = [];
  for (const x of by.values()){
    if (x.albums.size < 2) continue;
    out.push({k: x.k, art: x.art, year: x.year, albums: [...x.albums.entries()].map(([name, tracks]) => ({name, tracks, album: tracks[0].albumRaw, date: tracks[0].date, k: adateKey(tracks[0].artist, tracks[0].albumRaw)})), tracks: x.tracks, confirmed: SAME_YEAR_CFM.has(x.k)});
  }
  return out;
}

/* ---------- álbuns do mesmo artista lançados no mesmo ano ou com menos de 2 meses de distância ---------- */
const isFull = d => /^\d{4}-\d{2}-\d{2}$/.test(d || "");
// álbuns sem data completa após tentar todas as fontes automáticas: o site tentou e não achou → precisa de correção manual
function missingDateAlbums(list){
  const by = new Map();
  for (const t of list){
    if (t.artist === NI || t.albumRaw === NI) continue;
    const k = adateKey(t.artist, t.albumRaw);
    if (!Object.prototype.hasOwnProperty.call(ADATES, k) || ADATES[k]) continue;   // não tentou ainda, ou já tem data
    if (isFull(t.date) && !yearOnly(t.date)) continue;   // já tem data real completa
    if (!by.has(k)) by.set(k, {k, album: t.albumRaw, date: t.date, tracks: []});
    by.get(k).tracks.push(t);
  }
  return [...by.values()];
}
// busca a data original do álbum (não do remaster): MusicBrainz first-release-date → iTunes discografia (mais antiga) → Deezer
async function findOriginalDate(artist, album){
  const main = splitArtistsRaw(artist)[0];
  // cleanTitle remove sufixos de remaster/live ("- 2011 Remaster", "(Remastered)"); albCore remove edições restantes
  const albClean = albCore(cleanTitle(album)).join(" ");
  try { const m = await mbAlbumDate(main, albClean); if (isFull(m)) return m; } catch(e) {}
  await new Promise(r => setTimeout(r, 1200));
  try {
    const who = (await itunes(`search?entity=musicArtist&limit=5&term=${encodeURIComponent(main)}`)).find(r => normC(r.artistName || "") === normC(main));
    if (who){
      await new Promise(r => setTimeout(r, 3200));
      const albs = (await itunes(`lookup?id=${who.artistId}&entity=album&limit=200`)).filter(r => r.wrapperType === "collection");
      const ok = albs.filter(r => albCore(r.collectionName || "").join(" ") === albClean && r.releaseDate);
      ok.sort((x, y) => String(x.releaseDate).localeCompare(String(y.releaseDate)));
      if (ok[0] && isFull(String(ok[0].releaseDate).slice(0, 10))) return String(ok[0].releaseDate).slice(0, 10);
    }
  } catch(e) {}
  try { const m = await deezerAlbumDate(main, albClean); if (isFull(m)) return m; } catch(e) {}
  return null;
}
function editAlbumDate(al){
  const body = document.createElement("div"), foot = document.createElement("div"); foot.className = "mfrow";
  body.innerHTML = `<div class="confirm"><p>Nova data de lançamento de <strong>${esc(al.album)}</strong> (vale para as ${faixas(al.tracks.length)} do álbum).</p><label class="sd-f"><span>Lançamento</span><input type="text" id="ea-date" value="${esc(al.date)}" placeholder="AAAA-MM-DD (ou só AAAA)" autocomplete="off"></label><p class="err" id="ea-err" hidden></p></div>`;
  foot.innerHTML = `<span class="sp"></span><button class="gbtn" type="button" data-c>Cancelar</button><button class="pbtn" type="button" data-ok>Salvar</button>`;
  const md = openModal({title: "Editar data do álbum", body, foot, size: "sm"});
  foot.querySelector("[data-c]").onclick = md.close;
  foot.querySelector("[data-ok]").onclick = () => {
    const d = body.querySelector("#ea-date").value.trim(), err = body.querySelector("#ea-err");
    if (!DATE_OK.test(d)){ err.hidden = false; err.textContent = "Data inválida: use AAAA-MM-DD, AAAA-MM ou só AAAA."; return; }
    const ns = new Set(al.tracks.map(t => t.n));
    DREV.add(al.k); saveDFix(); ssSet("health", "1");
    commitRows(currentRows().map(r => ns.has(r[0]) ? [r[0], r[1], r[2], r[3], r[4], d, ...(r[6] ? [r[6]] : [])] : r), `Data do álbum ${al.album} atualizada`);
  };
}


function openDateFix(albums){
  const body = document.createElement("div");
  const row = (al, i) => `<div class="alb-row" data-i="${i}"><div class="alb-main"><div><strong>${esc(al.album)}</strong> <span class="alb-art">${esc(splitArtistsRaw(al.tracks[0].artist)[0])} · ${al.date ? esc(al.date.slice(0, 4)) : "sem data"}</span></div><div class="alb-why">O site tentou Apple Music, MusicBrainz, Deezer e TheAudioDB — nenhum retornou a data completa.</div></div><div class="alb-btns"><button class="gbtn" type="button" data-edit="${i}">Editar data</button></div></div>`;
  body.innerHTML = `<p class="mdesc">Estes álbuns só têm o ano. O site já buscou automaticamente em todas as fontes e não achou o dia e mês. Informe a data manualmente para resolver: pesa ${HEALTH_W.dm} pontos na nota enquanto estiver pendente.</p>${albums.map(row).join("")}`;
  const md = openModal({title: "Datas sem dia e mês", body, size: "lg", onClose: () => openHealth()});
  body.addEventListener("click", e => {
    const ed = e.target.closest("[data-edit]");
    if (ed) editAlbumDate(albums[+ed.dataset.edit]);
  });
}
async function checkDurWithSources(t) {
  const key = durKey(t);
  const mainArtist = splitArtistsRaw(t.artist)[0] || t.artist;
  let appleMs = null, mbMs = null;
  const TOLERANCE = 30000; // 30s de tolerância

  // 1) Apple Music via iTunes Search
  try {
    await new Promise(r => setTimeout(r, 400));
    const res = await itunes(`search?entity=song&limit=5&term=${encodeURIComponent(mainArtist + " " + t.title)}`);
    const match = (res || []).find(x => x.trackTimeMillis && normC(x.trackName || "") === normC(t.title) && normC(x.artistName || "").includes(normC(mainArtist)));
    if (match) appleMs = match.trackTimeMillis;
  } catch(e) {}

  // 2) MusicBrainz
  try {
    await new Promise(r => setTimeout(r, 1200));
    const j = await mbJSON("recording/?query=" + encodeURIComponent(`recording:"${t.title}" AND artist:"${mainArtist}"`) + "&limit=10");
    const match = ((j && j.recordings) || []).find(r => r.length && normC(r.title || "") === normC(t.title) && normC((r["artist-credit"] || []).map(c => c.name || (c.artist && c.artist.name) || "").join("")).includes(normC(mainArtist)));
    if (match) mbMs = match.length;
  } catch(e) {}

  const trackMs = t.sec * 1000;
  const appleOk = appleMs !== null ? Math.abs(appleMs - trackMs) <= TOLERANCE : null;
  const mbOk = mbMs !== null ? Math.abs(mbMs - trackMs) <= TOLERANCE : null;

  // Se ambos falharam (null): status "warn" (aviso sem penalidade, nenhum confirmou nem negou)
  // Se ao menos um confirmou (ok===true): status "ok" → vira "warn" (aviso sem penalidade)
  // Se ao menos um negou (ok===false) e nenhum confirmou: status "mismatch" → pesa na nota até o usuário resolver

  let status;
  if (appleOk === true || mbOk === true) status = "ok";
  else if (appleOk === false || mbOk === false) status = "mismatch";
  else status = "warn"; // ambos null: não conseguiu verificar

  DUR_CHECK[key] = { status, confirmed: false, appleMs, mbMs, lastSec: t.sec };
  saveDurCheck();
  return DUR_CHECK[key];
}

async function fetchArtistDisc(mainArtist){
  const ak = normC(mainArtist);
  if (!ak) return [];
  if (ARTIST_DISC[ak] !== undefined) return ARTIST_DISC[ak];
  try {
    await new Promise(r => setTimeout(r, 400));
    const artists = await itunes(`search?entity=musicArtist&limit=5&term=${encodeURIComponent(mainArtist)}`);
    const who = (artists || []).find(r => { const rA = normC(r.artistName || ""); return rA === ak || rA.includes(ak) || ak.includes(rA); });
    if (who){
      await new Promise(r => setTimeout(r, 3200));
      const albs = await itunes(`lookup?id=${who.artistId}&entity=album&limit=200`);
      const disc = (albs || [])
        .filter(r => r.wrapperType === "collection")
        .map(r => albCore(cleanTitle(r.collectionName || "")).join(" ").trim())
        .filter(Boolean);
      if (disc.length > 0){ ARTIST_DISC[ak] = disc; saveArtistDisc(); return disc; }
    }
  } catch(e) {}
  return []; // não cacheia falhas — próxima chamada tentará de novo
}

async function checkAlbumInCatalog(artist, albumRaw){
  const key = albCheckKey(artist, albumRaw);
  const mainArtist = (splitArtistsRaw(artist)[0] || artist).trim();
  const albClean = albCore(cleanTitle(albumRaw)).join(" ").trim() || normC(albumRaw).trim();
  const mA = normC(mainArtist);
  const FAKE_RE = /karaoke|tribute|cover\s+(version|band|series)|made\s+famous|originally\s+performed|instrumental\s+version|backing\s+track/i;

  const save = r => { ALB_CHECK[key] = r; saveAlbCheck(); if (_healthRef) _healthRef.rerender(); return r; };

  if (!albClean || albClean.length < 2) return save({status: "warn", foundArtist: null});

  const albumMatch = r => {
    const rC = albCore(cleanTitle(r.collectionName || "")).join(" ");
    return rC === albClean || normC(r.collectionName || "") === normC(albumRaw);
  };
  const artistMatch = r => { const rA = normC(r.artistName || ""); return rA === mA || rA.includes(mA) || mA.includes(rA); };

  // Passo 1 — Discografia completa do artista via iTunes (método mais confiável)
  // Se o artista existe no iTunes, verificamos se o álbum está na discografia deles
  const disc = await fetchArtistDisc(mainArtist);
  if (disc.length > 0){
    const inDisc = disc.some(d => d === albClean || (d.length > 4 && albClean.length > 4 && (d.includes(albClean) || albClean.includes(d))));
    if (inDisc) return save({status: "ok", foundArtist: null});

    // Artista existe no iTunes mas álbum NÃO está na discografia → quem tem esse álbum?
    let foundArtist = null;
    try {
      await new Promise(r => setTimeout(r, 400));
      const res = await itunes(`search?entity=album&limit=20&term=${encodeURIComponent(albClean)}`);
      if (res && res.length > 0){
        const hits = res.filter(r => albumMatch(r) && !FAKE_RE.test(r.artistName || ""));
        if (hits.some(artistMatch)) return save({status: "ok", foundArtist: null});
        if (hits.length > 0) foundArtist = hits[0].artistName || null;
      }
    } catch(e) {}
    return save(foundArtist ? {status: "mismatch", foundArtist} : {status: "warn", foundArtist: null});
  }

  // Artista não encontrado no iTunes — fallback MusicBrainz + iTunes direto
  try {
    await new Promise(r => setTimeout(r, 1200));
    const j = await mbJSON("release/?query=" + encodeURIComponent(`release:"${albClean}" AND artist:"${mainArtist}"`) + "&limit=5");
    if (((j && j.releases) || []).length > 0) return save({status: "ok", foundArtist: null});
  } catch(e) {}

  try {
    await new Promise(r => setTimeout(r, 400));
    const res = await itunes(`search?entity=album&limit=10&term=${encodeURIComponent(mainArtist + " " + albClean)}`);
    if ((res || []).some(r => artistMatch(r) && albumMatch(r))) return save({status: "ok", foundArtist: null});
  } catch(e) {}

  return save({status: "warn", foundArtist: null});
}

if (STORE) {
  const longTracks = BY_PLAYLIST.filter(t => t.sec > MAX_SEC);
  const needCheck = longTracks.filter(t => {
    const c = DUR_CHECK[durKey(t)];
    return !c; // ainda não checou
  });
  // Se a duração foi editada (sec mudou), reseta o confirmed e re-verifica
  for (const t of longTracks) {
    const c = DUR_CHECK[durKey(t)];
    if (c && c.lastSec !== undefined && c.lastSec !== t.sec) {
      DUR_CHECK[durKey(t)] = { status: undefined, confirmed: false, appleMs: null, mbMs: null, lastSec: t.sec };
      saveDurCheck();
      if (!needCheck.find(x => durKey(x) === durKey(t))) {
        coverQueue.push({ job: async () => { await checkDurWithSources(t); } });
      }
    } else if (c) {
      DUR_CHECK[durKey(t)] = { ...c, lastSec: t.sec };
      saveDurCheck();
    }
  }
  for (const t of needCheck) {
    coverQueue.push({ job: async () => { await checkDurWithSources(t); } });
  }
  if (needCheck.length) pumpCovers();
}

if (STORE){
  const COMP_RE_Q = /\b(greatest\s+hits?|best\s+of|compilation|soundtrack|trilha\s+sonora|colet[aâ]nea|various\s+artists?|v[aá]rios\s+artistas?)\b/i;
  const need = new Map();
  for (const t of BY_PLAYLIST){
    if (!t.artist || t.artist === NI || !t.albumRaw || t.albumRaw === NI) continue;
    if (COMP_RE_Q.test(t.albumRaw)) continue;
    const k = albCheckKey(t.artist, t.albumRaw);
    if (!ALB_CHECK[k]) need.set(k, {artist: t.artist, albumRaw: t.albumRaw});
  }
  for (const {artist, albumRaw} of need.values())
    coverQueue.push({job: async () => { await checkAlbumInCatalog(artist, albumRaw); }});
  if (need.size) pumpCovers();
}

function openDurReview(tracks) {
  const body = document.createElement("div");
  const fmt = ms => ms !== null ? durTxt(Math.round(ms / 1000)) : "—";
  const statusLabel = t => {
    const c = DUR_CHECK[durKey(t)];
    if (!c) return '<span class="muted">aguardando verificação…</span>';
    if (c.status === "ok") return '<span style="color:var(--emerald)">✓ Confirmada pela Apple/MusicBrainz</span>';
    if (c.status === "mismatch") return '<span style="color:#F87171">✗ Duração diverge das fontes</span>';
    return '<span class="muted">Fontes não encontraram a música</span>';
  };
  const srcInfo = t => {
    const c = DUR_CHECK[durKey(t)];
    if (!c || (!c.appleMs && !c.mbMs)) return "";
    const parts = [];
    if (c.appleMs !== null) parts.push(`Apple: ${fmt(c.appleMs)}`);
    if (c.mbMs !== null) parts.push(`MusicBrainz: ${fmt(c.mbMs)}`);
    return `<span class="muted" style="font-size:.82em">${parts.join(" · ")}</span>`;
  };

  body.innerHTML = `<div class="confirm"><p>Estas faixas têm mais de 20 min. Confirme se a duração está certa ou edite.</p>
    <div class="du-rows">${tracks.map(t => `<div class="alb-row" data-n="${t.n}">
      <div class="alb-main">
        <div><strong>${esc(t.title)}</strong> · ${esc(t.artist)}</div>
        <div class="alb-why">${durTxt(t.sec)} · ${statusLabel(t)}</div>
        ${srcInfo(t) ? `<div>${srcInfo(t)}</div>` : ""}
      </div>
      <div class="alb-btns">
        <button class="gbtn" type="button" data-confirm="${t.n}">Confirmar duração</button>
        <button class="gbtn" type="button" data-edit="${t.n}">Editar</button>
      </div>
    </div>`).join("")}</div></div>`;

  let changed = false;
  const md = openModal({title: "Duração suspeita", body, size: "lg", onClose: () => { if (changed) openHealth(); }});

  body.addEventListener("click", e => {
    const cf = e.target.closest("[data-confirm]"), ed = e.target.closest("[data-edit]");
    if (cf) {
      const t = tracks.find(x => x.n === +cf.dataset.confirm);
      if (t) {
        const c = DUR_CHECK[durKey(t)] || {};
        DUR_CHECK[durKey(t)] = { ...c, confirmed: true, status: c.status || "warn" };
        saveDurCheck();
        changed = true;
        cf.closest(".alb-row").remove();
        if (!body.querySelector(".alb-row")) md.close();
      }
    } else if (ed) {
      const t = tracks.find(x => x.n === +ed.dataset.edit);
      if (t) editTrack(t);
    }
  });
}

const IC_CHECK = '<svg width="13" height="13" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8.5l3.5 3.5 6.5-7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>';
const IC_PEN   = '<svg width="13" height="13" viewBox="0 0 16 16" aria-hidden="true"><path d="M10.5 3 13 5.5 6 12.5 3 13l.5-3Z" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>';

function openGenreDivergence(issues){
  const body = document.createElement("div");
  body.innerHTML = `<div class="confirm"><p>O Spotify classifica estes artistas num gênero diferente do que a Apple ou o MusicBrainz indicam. Pode ser que a classificação do Spotify esteja errada ou seja simplesmente mais específica — <strong>não pesa na nota</strong>.</p>
    <div class="du-rows">${issues.map(x => `<div class="alb-row">
      <div class="alb-main">
        <strong>${esc(x.artist)}</strong> <span class="muted" style="font-size:12px">· ${faixas(x.tracks.length)}</span><br>
        <span class="alb-new">Spotify: ${esc(x.spGenres.slice(0, 3).join(", "))}</span><br>
        ${x.conflicts.map(c => `<span class="alb-old">${esc(c.src)}: ${esc(c.genres.slice(0, 3).join(", "))}</span>`).join("<br>")}
      </div>
    </div>`).join("")}</div></div>`;
  const foot = document.createElement("div"); foot.className = "mfrow";
  foot.innerHTML = `<span class="sp"></span><button class="pbtn" type="button" data-c>Fechar</button>`;
  const md = openModal({title: "Gênero divergente entre fontes", sub: "Opcional · não pesa na nota", body, foot, size: "lg"});
  foot.querySelector("[data-c]").onclick = () => md.close();
}
function openTrackTitleClean(issues){
  const toApply = issues.map(x => ({n: x.t.n, artist: x.t.artist, raw: x.rawTitle, clean: x.cleanTitle}));
  for (const a of toApply) if (!TRACK_TITLE_CLEAN.some(e => e.n === a.n)) TRACK_TITLE_CLEAN.push(a);
  saveTrackTitleClean();
  const nMap = new Map(toApply.map(a => [a.n, a.clean]));
  ssSet("health", "1");
  ssSet("tt-clean-undo", "1");
  commitRows(
    currentRows().map(r => nMap.has(r[0]) ? [r[0], nMap.get(r[0]), r[2], r[3], r[4], r[5], ...(r[6] ? [r[6]] : [])] : r),
    `${plural(toApply.length, "título de faixa limpo", "títulos de faixas limpos")} (sufixo removido)`
  );
}

function openTrackTitleUndo(back){
  // remove entradas cujo número de faixa já não existe na playlist
  const nsNow = new Set(BY_PLAYLIST.map(t => t.n));
  const staleT = TRACK_TITLE_CLEAN.filter(e => !nsNow.has(e.n));
  if (staleT.length){ for (const e of staleT) TRACK_TITLE_CLEAN.splice(TRACK_TITLE_CLEAN.indexOf(e), 1); saveTrackTitleClean(); }
  if (!TRACK_TITLE_CLEAN.length) return;
  const body = document.createElement("div");

  const rb = () => {
    const twNote = x => {
      const tw = BY_PLAYLIST.filter(t => t.n !== x.n && suggestCleanTrackTitle(t.title) === null && normC(t.title) === normC(x.clean));
      return tw.length ? `<span class="muted" style="font-size:11px;display:block;margin-top:2px">\u26a0 vers\u00e3o limpa j\u00e1 na playlist: <em>${esc(tw.map(t => `#${t.n} ${t.title}`).join(", "))}</em></span>` : "";
    };
    body.innerHTML = `<div class="confirm"><div class="du-rows">${TRACK_TITLE_CLEAN.map(e => `<div class="alb-row">
        <div class="alb-main">
          <span class="alb-old">${esc(e.raw)}</span><br>
          <strong class="alb-new">${esc(e.clean)}</strong>
          <span class="muted" style="font-size:12px"> \u00b7 ${esc(e.artist)} \u00b7 #${e.n}</span>
          ${twNote(e)}
        </div>
        <div class="alb-btns"><button class="gbtn" type="button" data-cfm-n="${e.n}">Confirmar</button><button class="gbtn nm-red" type="button" data-undo-n="${e.n}">\u21a9 Desfazer</button></div>
      </div>`).join("")}</div></div>`;
  };
  rb();
  const md = openModal({title: `T\u00edtulos com sufixo de vers\u00e3o \u2014 ${plural(TRACK_TITLE_CLEAN.length, "limpeza aplicada", "limpezas aplicadas")}`, sub: "Opcional \u00b7 n\u00e3o pesa na nota", body, size: "lg", onClose: () => { if (back) back(); }});
  body.addEventListener("click", e => {
    const cfm = e.target.closest("[data-cfm-n]");
    const undo = e.target.closest("[data-undo-n]");
    if (cfm) {
      const n = +cfm.dataset.cfmN;
      const entry = TRACK_TITLE_CLEAN.find(x => x.n === n); if (!entry) return;
      TRACK_TITLE_CLEAN.splice(TRACK_TITLE_CLEAN.indexOf(entry), 1); saveTrackTitleClean();
      if (!TRACK_TITLE_CLEAN.length){ md.close(); return; }
      rb();
    } else if (undo) {
      const n = +undo.dataset.undoN;
      const entry = TRACK_TITLE_CLEAN.find(x => x.n === n); if (!entry) return;
      TRACK_TITLE_CLEAN.splice(TRACK_TITLE_CLEAN.indexOf(entry), 1); saveTrackTitleClean();
      TRACK_TITLE_IGN.add(normC(entry.artist) + "|" + normC(entry.raw)); saveTrackTitleIgn();
      ssSet("health", "1");
      commitRows(currentRows().map(r => r[0] === n ? [n, entry.raw, r[2], r[3], r[4], r[5], ...(r[6] ? [r[6]] : [])] : r),
        `T\u00edtulo revertido: "${entry.clean}" \u2192 "${entry.raw}"`);
    }
  });
}

function openAlbumNameClean(issues){
  const toApply = issues;
  for (const x of toApply){
    if (!ALB_CLEAN.some(e => e.raw === x.rawName)){
      const tracks = currentRows()
        .filter(r => { const t = BY_PLAYLIST.find(b => b.n === r[0]); return t && t.albumRaw === x.rawName; })
        .map(r => ({n: r[0], origTitle: r[1]}));
      ALB_CLEAN.push({raw: x.rawName, clean: x.cleanName, tracks});
    }
  }
  saveAlbClean();
  const pending = new Map(toApply.map(x => [x.rawName, x.cleanName]));
  ssSet("health", "1");
  ssSet("alb-clean-undo", "1");
  commitRows(currentRows().map(r => {
    const t = BY_PLAYLIST.find(b => b.n === r[0]);
    const newName = t && pending.get(t.albumRaw);
    if (!newName) return r;
    const newTitle = suggestCleanTrackTitle(r[1]) || r[1];
    return [r[0], newTitle, r[2], newName, r[4], r[5], ...(r[6] ? [r[6]] : [])];
  }), `${plural(toApply.length, "álbum renomeado", "álbuns renomeados")} (sufixo removido)`);
}

function openAlbumNameUndo(back){
  // remove entradas cujo álbum já não existe na playlist (faixas removidas ou playlist trocada)
  const albumsNow = new Set(BY_PLAYLIST.map(t => t.albumRaw));
  const stale = ALB_CLEAN.filter(e => !albumsNow.has(e.raw) && !albumsNow.has(e.clean));
  if (stale.length){ for (const e of stale) ALB_CLEAN.splice(ALB_CLEAN.indexOf(e), 1); saveAlbClean(); }
  if (!ALB_CLEAN.length) return;
  const body = document.createElement("div");

  const rb = () => {
    body.innerHTML = `<div class="confirm"><div class="du-rows">${ALB_CLEAN.map((e, i) => `<div class="alb-row">
        <div class="alb-main">
          <span class="alb-old">${esc(e.raw)}</span> <span class="alb-arrow">\u2192</span>
          <strong class="alb-new">${esc(e.clean)}</strong>
          <span class="muted" style="font-size:12px"> \u00b7 ${faixas((e.tracks||[]).length)}</span>
        </div>
        <div class="alb-btns"><button class="gbtn" type="button" data-cfm-i="${i}">Confirmar</button><button class="gbtn nm-red" type="button" data-undo-i="${i}">\u21a9 Desfazer</button></div>
      </div>`).join("")}</div></div>`;
  };
  rb();
  const md = openModal({title: `Nomes com sufixo de edi\u00e7\u00e3o \u2014 ${plural(ALB_CLEAN.length, "limpeza aplicada", "limpezas aplicadas")}`, sub: "Opcional \u00b7 n\u00e3o pesa na nota", body, size: "lg", onClose: () => { if (back) back(); }});
  body.addEventListener("click", e => {
    const cfm = e.target.closest("[data-cfm-i]");
    const undo = e.target.closest("[data-undo-i]");
    if (cfm) {
      const i = +cfm.dataset.cfmI;
      const entry = ALB_CLEAN[i]; if (!entry) return;
      ALB_CLEAN.splice(i, 1); saveAlbClean();
      if (!ALB_CLEAN.length){ md.close(); return; }
      rb();
    } else if (undo) {
      const i = +undo.dataset.undoI;
      const entry = ALB_CLEAN[i]; if (!entry) return;
      ALB_CLEAN.splice(i, 1); saveAlbClean();
      ALBUM_NAME_IGN.add(entry.raw); saveAlbumNameIgn();
      ssSet("health", "1");
      const restoreMap = new Map((entry.tracks||[]).map(t => [t.n, {title: t.origTitle, album: entry.raw}]));
      commitRows(currentRows().map(r => {
        const orig = restoreMap.get(r[0]);
        return orig ? [r[0], orig.title, r[2], orig.album, r[4], r[5], ...(r[6] ? [r[6]] : [])] : r;
      }), `\u00c1lbum revertido: "${entry.clean}" \u2192 "${entry.raw}"`);
    }
  });
}

function openResetAdjustments(parentMd){
  const RESET_KEYS = [
    "catalogo-musical:alb-clean",
    "catalogo-musical:album-name-ign",
    "catalogo-musical:track-title-ign",
    "catalogo-musical:track-title-clean",
    "catalogo-musical:dur-check",
    "catalogo-musical:album-merges",
    "catalogo-musical:artist-alias",
    "catalogo-musical:dups-versions",
    "catalogo-musical:dups-ignored",
    "catalogo-musical:dups-confirmed",
    "catalogo-musical:dups-joined",
    "catalogo-musical:apple-dates",
    "catalogo-musical:same-year-cfm",
  ];
  const body = document.createElement("div");
  body.innerHTML = `
    <p>Todos os ajustes manuais serão apagados e os títulos/álbuns limpos serão revertidos:</p>
    <ul class="rst-list">
      <li>Títulos de faixas limpos (sufixos revertidos)</li>
      <li>Nomes de álbuns limpos (revertidos)</li>
      <li>Álbuns e títulos ignorados na verificação</li>
      <li>Artistas mesclados e duplicatas resolvidas</li>
      <li>Versões confirmadas de faixas</li>
      <li>Datas automáticas buscadas pela Apple</li>
    </ul>
    <p class="muted" style="font-size:12px;margin-top:10px">A página vai recarregar.</p>
    <div class="rst-foot">
      <button type="button" class="gbtn" id="rst-cancel">Cancelar</button>
      <button type="button" class="gbtn rst-confirm-btn" id="rst-confirm">Limpar tudo</button>
    </div>`;
  const md = openModal({title: "Limpar todos os ajustes?", body, size: "sm"});
  body.querySelector("#rst-cancel").addEventListener("click", () => md.close());
  body.querySelector("#rst-confirm").addEventListener("click", () => {
    // Revert track title cleanings and album name cleanings before clearing keys
    const titleClean = TRACK_TITLE_CLEAN.slice();
    const albClean = ALB_CLEAN.slice();
    const titleMap = new Map(titleClean.map(e => [e.n, e.raw]));
    const albMap = new Map();
    for (const e of albClean) for (const t of (e.tracks||[])) albMap.set(t.n, {title: t.origTitle, album: e.raw});
    if (titleMap.size || albMap.size){
      const stored = readStore();
      if (stored && stored.rows){
        stored.rows = stored.rows.map(r => {
          const n = r[0];
          const origTitle = titleMap.get(n) || (albMap.has(n) ? albMap.get(n).title : r[1]);
          const origAlbum = albMap.has(n) ? albMap.get(n).album : r[3];
          return [n, origTitle, r[2], origAlbum, r[4], r[5], ...(r[6] ? [r[6]] : [])];
        });
        writeStore(stored);
      }
    }
    for (const k of RESET_KEYS){ try { localStorage.removeItem(k); } catch(e){} }
    md.close(); parentMd.close();
    toast("Ajustes apagados. Recarregando…");
    setTimeout(() => location.reload(), 900);
  });
}

function openHealthHistory(){
  const body = document.createElement("div"); body.className = "sd sh";
  const catSecs = {Música:[], Álbum:[], Artista:[], Data:[]};
  const capF = s => s ? s.charAt(0).toUpperCase() + s.slice(1) : s;

  // — Música: versões confirmadas, títulos limpos, títulos ignorados —

  // versões de faixas confirmadas (VERS)
  const versions = Object.entries(typeof VERS!=="undefined"?VERS:{});
  if (versions.length){
    const VL = typeof VERS_LABEL!=="undefined"?VERS_LABEL:{};
    catSecs.Música.push(`<div class="sh-sec"><div class="sh-h"><b>Versões confirmadas</b><small>${versions.length}</small></div><ul class="sh-list">${versions.map(([k,v])=>`<li><span class="sh-lbl">${esc(v.title||k)} <em>${esc(VL[v.type]||"outra versão")}</em></span><button class="gbtn" data-undo="vers" data-id="${esc(k)}">Desfazer</button></li>`).join("")}</ul></div>`);
  }

  // títulos de faixas limpos (sufixo removido)
  if (TRACK_TITLE_CLEAN.length){
    catSecs.Música.push(`<div class="sh-sec"><div class="sh-h"><b>Títulos limpos</b><small>${TRACK_TITLE_CLEAN.length} faixa${TRACK_TITLE_CLEAN.length!==1?"s":""}</small></div><ul class="sh-list">${TRACK_TITLE_CLEAN.map(e=>`<li><span class="sh-lbl"><span style="text-decoration:line-through;opacity:.55">${esc(e.raw)}</span> → <strong>${esc(e.clean)}</strong> <span style="font-size:11px;opacity:.6">· ${esc(e.artist)}</span></span></li>`).join("")}</ul></div>`);
  }

  // títulos ignorados na Saúde
  if (TRACK_TITLE_IGN.size){
    catSecs.Música.push(`<div class="sh-sec"><div class="sh-h"><b>Títulos ignorados na Saúde</b><small>${TRACK_TITLE_IGN.size}</small></div><ul class="sh-list">${[...TRACK_TITLE_IGN].map(k=>{ const [art,ttl]=k.split("|"); return `<li><span class="sh-lbl">${esc(ttl||k)}${art?` <em>${esc(art)}</em>`:""}</span><button class="gbtn" data-undo="tign" data-id="${esc(k)}">Desfazer</button></li>`; }).join("")}</ul></div>`);
  }

  // — Álbum: álbuns unificados/separados, nomes limpos, álbuns ignorados —

  // álbuns unificados / separados manualmente
  const albSim = Object.entries(ALBMERGE||{}).filter(([,v])=>v==="sim");
  const albNao = Object.entries(ALBMERGE||{}).filter(([,v])=>v==="nao");
  if (albSim.length||albNao.length){
    let rows = "";
    for (const [id] of albSim){
      const pts = id.split("|"); const bName = pts.pop(), aName = pts.pop(), artName = pts.join("|");
      rows += `<li><span class="sh-lbl"><em>${esc(capF(artName))}</em> · ${esc(aName)} + ${esc(bName)}</span><button class="gbtn" data-undo="alb" data-id="${esc(id)}">Desfazer</button></li>`;
    }
    for (const [id] of albNao){
      const pts = id.split("|"); const bName = pts.pop(), aName = pts.pop(), artName = pts.join("|");
      rows += `<li><span class="sh-lbl sh-neg"><em>${esc(capF(artName))}</em> · ${esc(aName)} ≠ ${esc(bName)}</span><button class="gbtn" data-undo="alb" data-id="${esc(id)}">Desfazer</button></li>`;
    }
    catSecs.Álbum.push(`<div class="sh-sec"><div class="sh-h"><b>Álbuns unificados / separados</b><small>${albSim.length} iguais · ${albNao.length} diferentes</small></div><ul class="sh-list">${rows}</ul></div>`);
  }

  // nomes de álbuns limpos (sufixo removido)
  if (ALB_CLEAN.length){
    catSecs.Álbum.push(`<div class="sh-sec"><div class="sh-h"><b>Nomes de álbuns limpos</b><small>${ALB_CLEAN.length} álbum${ALB_CLEAN.length!==1?"s":""}</small></div><ul class="sh-list">${ALB_CLEAN.map(e=>`<li><span class="sh-lbl"><span style="text-decoration:line-through;opacity:.55">${esc(e.raw)}</span> → <strong>${esc(e.clean)}</strong></span></li>`).join("")}</ul></div>`);
  }

  // nomes de álbuns ignorados na Saúde
  if (ALBUM_NAME_IGN.size){
    catSecs.Álbum.push(`<div class="sh-sec"><div class="sh-h"><b>Álbuns ignorados na Saúde</b><small>${ALBUM_NAME_IGN.size}</small></div><ul class="sh-list">${[...ALBUM_NAME_IGN].map(n=>`<li><span class="sh-lbl">${esc(n)}</span><button class="gbtn" data-undo="aign" data-id="${esc(n)}">Desfazer</button></li>`).join("")}</ul></div>`);
  }

  // — Artista: artistas mesclados —

  const aliases = Object.entries(ALIAS||{});
  if (aliases.length){
    catSecs.Artista.push(`<div class="sh-sec"><div class="sh-h"><b>Artistas mesclados</b><small>${aliases.length} nome${aliases.length!==1?"s":""}</small></div><ul class="sh-list">${aliases.map(([k,v])=>`<li><span class="sh-lbl">${esc(k)} → <strong>${esc(v)}</strong></span><button class="gbtn" data-undo="alias" data-id="${esc(k)}">Desfazer</button></li>`).join("")}</ul></div>`);
  }

  // — Data: datas preenchidas automaticamente —

  const adCount = Object.keys(typeof ADATES!=="undefined"?ADATES:{}).length;
  if (adCount){
    catSecs.Data.push(`<div class="sh-sec sh-info"><div class="sh-h"><b>Datas completadas automaticamente</b><small>${adCount} pela Apple</small></div><p class="sh-note">Preenchidas em segundo plano. O dado original continua intacto na playlist.</p></div>`);
  }

  const CAT_LABELS = ["Música","Álbum","Artista","Data"];
  const allSecs = CAT_LABELS.filter(c => catSecs[c].length).map(c =>
    `<div class="sh-cat-h">${c}</div>${catSecs[c].join("")}`
  );
  body.innerHTML = allSecs.length ? allSecs.join("") : `<p class="muted" style="padding:8px 0">Nenhuma alteração registrada ainda.</p>`;
  const md = openModal({title: "Ajustes feitos", sub: "Automáticos e manuais — clique para desfazer", body, size: "md"});
  body.addEventListener("click", e => {
    const b = e.target.closest("[data-undo]"); if (!b) return;
    const id = b.dataset.id, type = b.dataset.undo;
    if (type === "alb"){ delete ALBMERGE[id]; saveAlbMerge(); b.closest("li").remove(); toast("Desfeito. O painel atualiza ao fechar."); }
    else if (type === "alias"){ undoAlias(id); }
    else if (type === "vers"){ if (typeof VERS!=="undefined"){ delete VERS[id]; saveVers(); } b.closest("li").remove(); toast("Versão desfeita."); }
    else if (type === "tign"){ TRACK_TITLE_IGN.delete(id); saveTrackTitleIgn(); b.closest("li").remove(); toast("Faixa voltou à verificação."); }
    else if (type === "aign"){ ALBUM_NAME_IGN.delete(id); saveAlbumNameIgn(); b.closest("li").remove(); toast("Álbum voltou à verificação."); }
    if (!body.querySelector("li")) md.close();
  });
}

function openRescanProgress(priorityKeys, total){
  const SRC = ["iTunes", "MusicBrainz", "Deezer"];
  const sid = s => s.toLowerCase().replace(/[^a-z]/g, "");
  // estado compartilhado: sobrevive ao fechar/reabrir o modal
  const state = {
    sources: Object.fromEntries(SRC.map(s => [s, {album: "aguardando…", done: 0, finished: false}])),
    changes: [],  // [{source, main, album, oldDate, newDate}]
    notFound: null, // null = ainda processando; array = concluído
    isDone: false,
  };
  let bubble = null, curMd = null, curHandlers = null;
  // noDate: Map de k → {k,main,album} — álbuns sem data encontrada até agora (removido quando acha)
  state.noDate = new Map();

  const rowChange = c => `<li style="font-size:12px;display:flex;flex-wrap:wrap;align-items:baseline;gap:4px 8px;padding:3px 0;border-bottom:1px solid var(--line)"><strong style="flex-shrink:0">${esc(c.album)}</strong><span style="color:var(--ink-3)">${esc(c.main)}</span><span style="margin-left:auto;white-space:nowrap;color:var(--ink-3)">${esc(c.oldDate||"—")} → <strong style="color:var(--ok,#3a3)">${esc(c.newDate)}</strong></span><span style="font-size:10px;color:var(--ink-3);letter-spacing:.04em">[${esc(c.source)}]</span></li>`;

  function buildBody(){
    const body = document.createElement("div");
    const ndList = [...state.noDate.values()];
    body.innerHTML = `<style>.rp-spin{display:inline-block;animation:rp-rot .8s linear infinite}@keyframes rp-rot{to{transform:rotate(360deg)}}</style>
      <div style="border:1px solid var(--line);border-radius:8px;overflow:hidden;margin-bottom:14px">
        ${SRC.map((s, i) => { const st = state.sources[s]; return `<div style="display:grid;grid-template-columns:100px 1fr auto;align-items:center;gap:8px;padding:7px 12px;${i?"border-top:1px solid var(--line)":""}"><span style="font-size:12px;font-weight:700;color:var(--ink-3)">${s}</span><span id="rps-${sid(s)}-alb" style="font-size:12px;color:var(--ink-3);overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${esc(st.finished?"concluído":st.album)}</span><span style="display:flex;align-items:center;gap:5px"><span id="rps-${sid(s)}-icon" class="${st.finished?"":"rp-spin"}" style="font-size:14px">${st.finished?"✓":"↺"}</span><span id="rps-${sid(s)}-cnt" style="font-size:11px;color:var(--ink-3);white-space:nowrap">${st.done}/${total}</span></span></div>`; }).join("")}
      </div>
      <div id="rp-cw"${state.changes.length?"":" hidden"}>
        <div id="rp-ch" style="font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--ink-3);margin-bottom:6px">Alterações encontradas (${state.changes.length})</div>
        <ul id="rp-cl" style="list-style:none;padding:0;margin:0 0 12px;max-height:180px;overflow-y:auto;display:flex;flex-direction:column">${state.changes.map(rowChange).join("")}</ul>
      </div>
      <div id="rp-ew"${ndList.length?"":" hidden"}>
        <div id="rp-eh" style="font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--ink-3);margin-bottom:6px">Sem data encontrada (${ndList.length})</div>
        <ul id="rp-el" style="list-style:none;padding:0;margin:0 0 12px;max-height:160px;overflow-y:auto;display:flex;flex-direction:column"></ul>
      </div>`;
    // popula a lista de erros com referências DOM guardadas no handler
    const ndEls = new Map(); // k → li
    const elList = body.querySelector("#rp-el");
    for (const x of ndList){
      const li = document.createElement("li");
      li.style.cssText = "font-size:12px;padding:3px 0;border-bottom:1px solid var(--line);color:var(--ink-3)";
      li.textContent = `${x.album} · ${x.main}`;
      elList.appendChild(li); ndEls.set(x.k, li);
    }
    if (state.isDone){
      const btn = document.createElement("button");
      btn.className = "pbtn"; btn.style.cssText = "width:100%;margin-top:8px";
      btn.textContent = `Fechar${state.changes.length ? ` · ${state.changes.length} alteração${state.changes.length!==1?"ões":""}` : ""}`;
      btn.addEventListener("click", () => curMd && curMd.close());
      body.appendChild(btn);
    }
    const h = {
      srcUpdate({source, album, done: d, finished}){
        const a = body.querySelector(`#rps-${sid(source)}-alb`), c = body.querySelector(`#rps-${sid(source)}-cnt`), ic = body.querySelector(`#rps-${sid(source)}-icon`);
        if (!a) return;
        a.textContent = finished ? "concluído" : album;
        c.textContent = `${d}/${total}`;
        if (finished){ ic.classList.remove("rp-spin"); ic.textContent = "✓"; }
      },
      addChange(c){
        const wrap = body.querySelector("#rp-cw"), list = body.querySelector("#rp-cl"), hdr = body.querySelector("#rp-ch");
        wrap.hidden = false;
        const tmp = document.createElement("ul"); tmp.innerHTML = rowChange(c);
        list.prepend(tmp.firstElementChild);
        if (hdr) hdr.textContent = `Alterações encontradas (${state.changes.length})`;
      },
      addNoDate({k, main, album}){
        if (ndEls.has(k)) return;
        const ew = body.querySelector("#rp-ew"), eh = body.querySelector("#rp-eh");
        ew.hidden = false;
        const li = document.createElement("li");
        li.style.cssText = "font-size:12px;padding:3px 0;border-bottom:1px solid var(--line);color:var(--ink-3)";
        li.textContent = `${album} · ${main}`;
        elList.appendChild(li); ndEls.set(k, li);
        if (eh) eh.textContent = `Sem data encontrada (${state.noDate.size})`;
      },
      removeNoDate(k){
        const li = ndEls.get(k);
        if (li){ li.remove(); ndEls.delete(k); }
        const ew = body.querySelector("#rp-ew"), eh = body.querySelector("#rp-eh");
        if (eh) eh.textContent = `Sem data encontrada (${state.noDate.size})`;
        if (!state.noDate.size) ew.hidden = true;
      },
      finish(){
        const btn = document.createElement("button");
        btn.className = "pbtn"; btn.style.cssText = "width:100%;margin-top:8px";
        btn.textContent = `Fechar${state.changes.length ? ` · ${state.changes.length} alteração${state.changes.length!==1?"ões":""}` : ""}`;
        btn.addEventListener("click", () => curMd && curMd.close());
        body.appendChild(btn);
      }
    };
    return {body, h};
  }

  const CIRC = +(2 * Math.PI * 14).toFixed(2);
  function showBubble(){
    if (bubble || state.isDone) return;
    if (!document.querySelector("#rp-kf")){ const st = document.createElement("style"); st.id = "rp-kf"; st.textContent = ".rp-spin{display:inline-block;animation:rp-rot .8s linear infinite}@keyframes rp-rot{to{transform:rotate(360deg)}}"; document.head.appendChild(st); }
    bubble = document.createElement("button");
    bubble.id = "rescan-bubble";
    bubble.setAttribute("aria-label", "Revisão em andamento — clique para ver detalhes");
    bubble.style.cssText = "position:fixed;bottom:24px;right:24px;z-index:9999;background:linear-gradient(180deg,hsla(var(--h),43%,13%,.97),hsla(var(--h),50%,7%,.99));color:var(--ink);border:1px solid var(--line-2);border-radius:18px;padding:10px 16px 10px 10px;cursor:pointer;box-shadow:0 8px 32px -8px rgba(0,0,0,.55);display:flex;align-items:center;gap:10px;transition:box-shadow .2s";
    bubble.innerHTML = `<svg viewBox="0 0 36 36" width="38" height="38" style="flex:none;overflow:visible"><circle cx="18" cy="18" r="14" fill="none" stroke="hsla(var(--h),40%,40%,.35)" stroke-width="3.2"/><circle id="rb-arc" cx="18" cy="18" r="14" fill="none" stroke="var(--glow)" stroke-width="3.2" stroke-linecap="round" stroke-dasharray="0 ${CIRC}" transform="rotate(-90 18 18)" style="transition:stroke-dasharray .4s"/><text x="18" y="22" text-anchor="middle" font-size="8.5" font-weight="700" fill="var(--ink)" id="rb-pct">0%</text></svg><div style="min-width:0;text-align:left"><div style="font-size:12.5px;font-weight:700;white-space:nowrap">Revisão em andamento</div><div id="rb-sub" style="font-size:11px;color:var(--ink-3);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:180px">aguardando…</div></div>`;
    bubble.addEventListener("click", () => { hideBubble(); openModal_(); });
    document.body.appendChild(bubble);
    updateBubble();
  }
  function hideBubble(){ if (bubble){ bubble.remove(); bubble = null; } }
  function updateBubble(){
    if (!bubble) return;
    const totalDone = SRC.reduce((sum, s) => sum + state.sources[s].done, 0);
    const totalSteps = total * SRC.length;
    const pct = totalSteps ? Math.min(100, Math.round(100 * totalDone / totalSteps)) : 0;
    const arc = bubble.querySelector("#rb-arc"), pctEl = bubble.querySelector("#rb-pct"), sub = bubble.querySelector("#rb-sub");
    if (arc) arc.setAttribute("stroke-dasharray", `${+(CIRC * pct / 100).toFixed(1)} ${CIRC}`);
    if (pctEl) pctEl.textContent = `${pct}%`;
    if (sub){
      const act = SRC.find(s => !state.sources[s].finished && state.sources[s].album !== "aguardando…");
      sub.textContent = act ? `${act}: ${state.sources[act].album}` : `${totalDone}/${totalSteps} verificadas`;
    }
  }

  function openModal_(){
    const {body, h} = buildBody();
    curHandlers = h;
    curMd = openModal({title: state.isDone ? "Revisão concluída" : "Revisando dados…", body, size: "md",
      onClose(){ curHandlers = null; curMd = null; if (!state.isDone) showBubble(); }});
  }

  startFullRescan(priorityKeys, {
    onSourceUpdate(data){
      Object.assign(state.sources[data.source], data);
      if (curHandlers) curHandlers.srcUpdate(data);
      updateBubble();
    },
    onProgress(c){
      state.changes.push(c);
      // se essa fonte achou data para um álbum que estava na lista de erro → remove
      if (state.noDate.has(c.k)){ state.noDate.delete(c.k); if (curHandlers) curHandlers.removeNoDate(c.k); }
      updateBubble();
      if (curHandlers) curHandlers.addChange(c);
    },
    onNoDate({k, main, album}){
      // só adiciona se o álbum ainda não tem data (outra fonte pode ter achado em paralelo)
      if (state.noDate.has(k) || ADATES[k]) return;
      state.noDate.set(k, {k, main, album});
      if (curHandlers) curHandlers.addNoDate({k, main, album});
    },
    onDone(){
      state.isDone = true;
      hideBubble();
      if (curHandlers) curHandlers.finish();
    }
  });

  showBubble();
}
function openSameYearDetail(x){
  // todos os álbuns desse artista na playlist, agrupados por nome de álbum
  const main = normC((splitArtistsRaw(x.tracks[0].artist)[0] || "").toLowerCase());
  const byAlbum = new Map();
  for (const t of BY_PLAYLIST){
    if (t.artist === NI || t.albumRaw === NI || !t.date) continue;
    if (normC((splitArtistsRaw(t.artist)[0] || "").toLowerCase()) !== main) continue;
    if (!byAlbum.has(t.albumRaw)) byAlbum.set(t.albumRaw, {name: t.albumRaw, year: String(t.date).slice(0, 4), tracks: []});
    byAlbum.get(t.albumRaw).tracks.push(t);
  }
  const conflictAlbums = new Set(x.albums.map(a => a.name));
  const rows = [...byAlbum.values()].sort((a, b) => a.year.localeCompare(b.year));
  const body = document.createElement("div");
  body.innerHTML = `<div class="confirm"><div class="du-rows">${rows.map(a => {
    const conflict = conflictAlbums.has(a.name);
    return `<div class="alb-row"${conflict ? ' style="background:color-mix(in srgb,var(--warn,#f59e0b) 10%,transparent);border-left:3px solid var(--warn,#f59e0b);padding-left:9px"' : ''}>
      <div class="alb-main">
        <strong>${esc(a.name)}</strong>${conflict ? ' <span style="font-size:11px;font-weight:700;color:var(--warn,#f59e0b);letter-spacing:.04em">MESMO ANO</span>' : ''}
        <span class="muted" style="font-size:12px"> · ${a.year} · ${faixas(a.tracks.length)}</span>
      </div>
    </div>`;
  }).join("")}</div></div>`;
  openModal({title: `Discografia de ${esc(x.art)} na playlist`, sub: `Destacado: álbuns de ${x.year}`, body, size: "md"});
}

function crossedDataIssues(list){
  const COMP_RE = /\b(greatest\s+hits?|best\s+of|compilation|soundtrack|trilha\s+sonora|colet[aâ]nea|various\s+artists?|v[aá]rios\s+artistas?)\b/i;
  const byAlbum = new Map();
  for (const t of list){
    if (!t.albumRaw || t.albumRaw === NI) continue;
    const k = normC(t.albumRaw);
    if (!byAlbum.has(k)) byAlbum.set(k, {album: t.albumRaw, tracks: []});
    byAlbum.get(k).tracks.push(t);
  }
  const groups = [];
  const flaggedAlbumKeys = new Set();
  for (const {album, tracks} of byAlbum.values()){
    if (COMP_RE.test(album)) continue;
    if (tracks.length < 2) continue;
    const artistMap = new Map();
    for (const t of tracks){
      if (t.artist === NI) continue;
      const primary = (splitArtistsRaw(t.artist)[0] || t.artist).trim();
      const nk = normC(primary);
      if (!artistMap.has(nk)) artistMap.set(nk, {name: primary, tracks: []});
      artistMap.get(nk).tracks.push(t);
    }
    if (artistMap.size >= 2){
      const artists = [...artistMap.values()].sort((a, b) => b.tracks.length - a.tracks.length);
      groups.push({album, tracks, artists, source: "local"});
      flaggedAlbumKeys.add(normC(album));
    }
  }
  // Mismatches detectados pela API (álbum não pertence a esse artista segundo iTunes/MB)
  const apiByAlbum = new Map();
  for (const t of list){
    if (!t.artist || t.artist === NI || !t.albumRaw || t.albumRaw === NI) continue;
    if (COMP_RE.test(t.albumRaw)) continue;
    if (flaggedAlbumKeys.has(normC(t.albumRaw))) continue;
    const ck = albCheckKey(t.artist, t.albumRaw);
    const check = ALB_CHECK[ck];
    if (check && check.status === "mismatch"){
      const ak = normC(t.albumRaw);
      if (!apiByAlbum.has(ak)) apiByAlbum.set(ak, {album: t.albumRaw, tracks: [], foundArtist: check.foundArtist});
      apiByAlbum.get(ak).tracks.push(t);
    }
  }
  for (const {album, tracks, foundArtist} of apiByAlbum.values())
    groups.push({album, tracks, artists: [{name: tracks[0].artist, tracks}], source: "api", foundArtist});
  return groups;
}

function cxPendingCount(list){
  const COMP_RE = /\b(greatest\s+hits?|best\s+of|compilation|soundtrack|trilha\s+sonora|colet[aâ]nea|various\s+artists?|v[aá]rios\s+artistas?)\b/i;
  const seen = new Set();
  let n = 0;
  for (const t of list){
    if (!t.artist || t.artist === NI || !t.albumRaw || t.albumRaw === NI) continue;
    if (COMP_RE.test(t.albumRaw)) continue;
    const k = albCheckKey(t.artist, t.albumRaw);
    if (seen.has(k)) continue; seen.add(k);
    if (!ALB_CHECK[k]) n++;
  }
  return n;
}

function openCrossedData(groups){
  const body = document.createElement("div");
  const fixes = new Map(); // t.n → {status, data, link, msg}

  // Separa faixas corrompidas por API (título+álbum errados) de conflitos locais (mesmo álbum, 2 artistas)
  const apiTracks = [];
  const localGroups = [];
  for (const g of groups){
    if (g.source === "api") for (const t of g.tracks) apiTracks.push({t, foundArtist: g.foundArtist, album: g.album});
    else localGroups.push(g);
  }
  apiTracks.sort((a, b) => a.t.n - b.t.n);

  let autoStatus = ""; // "" | "loading" | "done" | "err" | "no-token"
  let autoMsg = "";

  const render = () => {
    const verifiedCount = [...fixes.values()].filter(f => f.status === "ok").length;
    const pendingCount = apiTracks.filter(x => !fixes.get(x.t.n) || fixes.get(x.t.n).status !== "ok").length;
    const autoStatusHtml = autoStatus === "loading"
      ? `<span class="muted" style="font-size:12px">Corrigindo…</span>`
      : autoStatus === "done"
      ? `<span style="font-size:12px;color:var(--emerald)">✓ ${esc(autoMsg)}</span>`
      : autoStatus === "no-token"
      ? autoMsg === "reconnect"
        ? `<span style="font-size:12px;color:var(--red)">Token inválido — </span><button class="gbtn" type="button" id="cx-sp-connect" style="font-size:12px">Reconectar Spotify</button>`
        : `<span style="font-size:12px;color:var(--red)">Spotify não conectado — </span><button class="gbtn" type="button" id="cx-sp-connect" style="font-size:12px">Conectar Spotify</button>`
      : autoStatus === "err"
      ? `<span style="font-size:12px;color:var(--red)">✗ ${esc(autoMsg)}</span>`
      : "";
    body.innerHTML = `
      ${apiTracks.length && pendingCount > 0 ? `
        <p class="mdesc">${pendingCount === 1 ? "Uma faixa tem" : `${nf(pendingCount)} faixas têm`} dados corrompidos. Abra o Spotify, selecione todas as músicas da playlist (<strong>Ctrl+A</strong>) e copie (<strong>Ctrl+C</strong>), depois cole abaixo.</p>
        <div style="display:flex;gap:6px;align-items:flex-start;margin-bottom:4px">
          <textarea id="cx-pl-inp" rows="3"
            placeholder="Cole aqui o conteúdo copiado da playlist do Spotify…" autocomplete="off" spellcheck="false"
            style="flex:1;padding:5px 8px;font-size:13px;background:var(--inp-bg,var(--bg2));border:1px solid var(--line);border-radius:6px;color:inherit;outline:none;min-width:0;resize:vertical;font-family:inherit"></textarea>
          <button class="pbtn" type="button" id="cx-auto-btn" style="flex-shrink:0;align-self:flex-end">Corrigir</button>
        </div>
        ${autoStatusHtml ? `<div style="margin-bottom:8px">${autoStatusHtml}</div>` : ""}
      ` : ""}
      <div class="du-rows">
        ${apiTracks.map(({t}) => {
          const fix = fixes.get(t.n) || {};
          const statusHtml = fix.status === "loading"
            ? `<span class="muted" style="font-size:12px">Verificando…</span>`
            : fix.status === "ok"
            ? `<span style="font-size:12px;color:var(--emerald)">✓ ${esc(fix.data.title)} · ${esc(fix.data.album)}</span>`
            : fix.status === "err" && fix.msg !== "no-token"
            ? `<span style="font-size:12px;color:var(--red)">✗ ${esc(fix.msg)}</span>`
            : "";
          return `<div class="alb-row" style="flex-direction:column;align-items:stretch;gap:6px">
            <div style="display:flex;align-items:center;justify-content:space-between;gap:8px">
              <div><strong>#${t.n}</strong> <span class="muted">· ${esc(t.artist)}</span>${statusHtml ? " " + statusHtml : ""}</div>
              <div style="display:flex;gap:4px;flex-shrink:0">
                ${fix.status !== "ok" ? `<button class="gbtn" type="button" data-manual="${t.n}" style="font-size:11px">${(fix._manual || false) ? "Ocultar" : "Link manual"}</button>` : ""}
                <button class="gbtn" type="button" data-edit="${t.n}" style="font-size:11px">Editar</button>
              </div>
            </div>
            ${fix._manual || fix.status === "err" ? `<div style="display:flex;gap:6px;align-items:center">
              <input type="text" class="cx-link-inp" data-n="${t.n}"
                placeholder="https://open.spotify.com/track/…" autocomplete="off" spellcheck="false"
                style="flex:1;padding:5px 8px;font-size:13px;background:var(--inp-bg,var(--bg2));border:1px solid var(--line);border-radius:6px;color:inherit;outline:none;min-width:0"
                value="${esc(fix.link || "")}">
              <button class="gbtn" type="button" data-verify="${t.n}" style="flex-shrink:0">Verificar</button>
            </div>` : ""}
          </div>`;
        }).join("")}
        ${localGroups.length && apiTracks.length ? `<div style="margin-top:8px;border-top:1px solid var(--line);padding-top:8px"></div>` : ""}
        ${localGroups.map((g, gi) => {
          const majority = g.artists[0], minority = g.artists.slice(1);
          return `<div class="alb-row">
            <div class="alb-main">
              <div><strong>${esc(g.album)}</strong> <span class="muted">· ${faixas(g.tracks.length)}</span></div>
              <div style="margin-top:4px"><span class="alb-new">${esc(majority.name)}</span> <span class="muted" style="font-size:12px">${faixas(majority.tracks.length)}</span>${minority.map(a => ` · <span class="alb-old">${esc(a.name)}</span> <span class="muted" style="font-size:12px">${faixas(a.tracks.length)}</span>`).join("")}</div>
            </div>
            <div class="alb-btns"><button class="gbtn" type="button" data-local-exp="${gi}">Ver faixas</button></div>
          </div>
          <div id="cx-local-${gi}" hidden style="margin-bottom:6px">
            ${g.tracks.map(t => `<div class="alb-row" style="margin-left:16px;border-left:2px solid var(--line);padding-left:10px">
              <div class="alb-main"><div><strong>#${t.n}</strong> ${esc(t.title)}</div><div style="font-size:12px" class="muted">${esc(t.artist)}</div></div>
              <div class="alb-btns"><button class="gbtn" type="button" data-edit="${t.n}">Editar</button></div>
            </div>`).join("")}
          </div>`;
        }).join("")}
      </div>
      ${verifiedCount > 0 ? `<div style="margin-top:12px;text-align:right">
        <button class="pbtn" type="button" id="cx-save-btn">Salvar ${verifiedCount === 1 ? "1 correção" : `${nf(verifiedCount)} correções`}</button>
      </div>` : ""}`;
  };
  render();

  const md = openModal({
    title: "Integridade dos dados",
    sub: `${nf(apiTracks.length + localGroups.reduce((n,g)=>n+g.tracks.length,0))} faixa${(apiTracks.length + localGroups.length) !== 1 ? "s" : ""} com dados inconsistentes`,
    body, size: "lg", onClose: () => openHealth()
  });

  async function getToken(){
    try {
      const oauth = typeof loadSpotifyOAuth === "function" ? loadSpotifyOAuth() : null;
      if (oauth && oauth.access_token){
        if (!oauth.expires_at || Date.now() < oauth.expires_at) return oauth.access_token;
        // expirado: usa spotifyUserToken que gerencia rotação do refresh token PKCE
        if (typeof spotifyUserToken === "function"){
          try { const tok = await spotifyUserToken(); if (tok) return tok; } catch(e2){}
        }
        return oauth.access_token; // último recurso: retorna expirado
      }
    } catch(e) {}
    // sem OAuth: credenciais de cliente
    try {
      const creds = typeof loadSpotifyCreds === "function" ? loadSpotifyCreds() : null;
      if (creds?.id && creds?.secret) return await spotifyToken(creds.id, creds.secret);
    } catch(e) {}
    return null;
  }

  function hasOAuthStored(){
    try { const o = loadSpotifyOAuth(); return !!(o && o.access_token); } catch(e) { return false; }
  }

  async function verifyLink(trackN){
    const item = apiTracks.find(x => x.t.n === trackN);
    if (!item) return;
    const inp = body.querySelector(`input[data-n="${trackN}"]`);
    const link = inp ? inp.value.trim() : "";
    const ids = typeof parseSpotifyIds === "function" ? parseSpotifyIds(link) : [];
    if (!ids.length){
      fixes.set(trackN, {status: "err", msg: "Link inválido — cole um link open.spotify.com/track/…", link});
      render(); return;
    }
    fixes.set(trackN, {status: "loading", link});
    render();
    try {
      const token = await getToken();
      if (token){
        const r = await fetch(`https://api.spotify.com/v1/tracks/${ids[0]}`, {headers: {Authorization: `Bearer ${token}`}});
        if (!r.ok){ if (r.status === 401 || r.status === 403){ /* cai no path sem auth */ } else { throw new Error(`Spotify retornou HTTP ${r.status}.`); } }
        else {
          const tr = await r.json();
          const fetchedArtists = (tr.artists || []).map(a => a.name);
          const storedPrimary = (splitArtistsRaw(item.t.artist)[0] || item.t.artist).trim();
          const artistOk = fetchedArtists.some(fa => { const nFa = normC(fa), nSt = normC(storedPrimary); return nFa === nSt || nFa.includes(nSt) || nSt.includes(nFa); });
          if (!artistOk){ fixes.set(trackN, {status:"err", msg:`Esta faixa é de "${fetchedArtists[0]||"?"}", não de "${storedPrimary}".`, link}); render(); return; }
          const newMeta = {...(item.t.m||{}), id:tr.id};
          if (tr.album?.album_type) newMeta.ty=tr.album.album_type;
          if (tr.explicit!==undefined) newMeta.x=tr.explicit?1:0;
          if (tr.track_number) newMeta.tn=tr.track_number;
          if (tr.album?.total_tracks) newMeta.tt=tr.album.total_tracks;
          fixes.set(trackN, {status:"ok", data:{title:tr.name, album:tr.album?.name||item.t.albumRaw, sec:tr.duration_ms?Math.round(tr.duration_ms/1000):item.t.sec, date:tr.album?.release_date||item.t.dateRaw, meta:newMeta}, link});
          render(); return;
        }
      }
      // sem token ou 401/403: tenta MusicBrainz + iTunes
      fixes.set(trackN, {status:"loading", link}); render();
      const mb = await mbLookup(ids[0], `https://open.spotify.com/track/${ids[0]}`)
                 || await mbLookup(ids[0], `spotify:track:${ids[0]}`);
      if (!mb){ fixes.set(trackN, {status:"err", msg:"Não encontrado no MusicBrainz. Sem login não é possível verificar.", link}); render(); return; }
      const artist2 = (splitArtistsRaw(item.t.artist)[0]||item.t.artist).trim();
      let album2=item.t.album, sec2=mb.sec||item.t.sec, date2=item.t.dateRaw;
      try {
        const q=encodeURIComponent(artist2+" "+mb.title);
        const ri=await fetch(`https://itunes.apple.com/search?term=${q}&media=music&entity=song&limit=10`);
        if (ri.ok){ const ji=await ri.json(); const hit=(ji.results||[]).find(x=>normC(x.trackName)===normC(mb.title)&&(normC(x.artistName)===normC(artist2)||normC(x.artistName).includes(normC(artist2))||normC(artist2).includes(normC(x.artistName)))); if(hit){if(hit.collectionName)album2=hit.collectionName;if(hit.trackTimeMillis)sec2=Math.round(hit.trackTimeMillis/1000);if(hit.releaseDate)date2=hit.releaseDate.slice(0,10);} }
      } catch(e2){}
      fixes.set(trackN, {status:"ok", data:{title:mb.title, album:album2, sec:sec2, date:date2, meta:{...(item.t.m||{}),id:ids[0]}}, link});
      render();
    } catch(e) {
      fixes.set(trackN, {status: "err", msg: e.message || String(e), link});
      render();
    }
  }

  async function applyFixes(){
    const toFix = [...fixes.entries()].filter(([, f]) => f.status === "ok");
    if (!toFix.length) return;
    const ok = await confirmModal({title: "Salvar correções?", ok: "Salvar",
      html: `<p>Serão atualizadas <strong>${toFix.length}</strong> faixa${toFix.length > 1 ? "s" : ""} com os dados corretos do Spotify.</p>`});
    if (!ok) return;
    const fixMap = new Map(toFix.map(([n, f]) => [n, f.data]));
    const rows = currentRows().map(r => {
      const fix = fixMap.get(r[0]);
      if (!fix) return r;
      return [r[0], fix.title, r[2], fix.album, fix.sec, fix.date, fix.meta];
    });
    ssSet("health", "1");
    commitRows(rows, `${toFix.length === 1 ? "1 faixa corrigida" : `${toFix.length} faixas corrigidas`} via Spotify`);
  }

  function parseClipboardRows(text){
    // Parseia clipboard do Spotify (tab-separado) → Map<posição, {title,artist,album,sec,date}>
    // Suporta com ou sem número de posição na primeira coluna
    const rows = new Map();
    const lines = text.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
    let rowIdx = 0;
    for (const line of lines){
      const cols = line.split("\t");
      if (cols.length < 2) continue;
      let pos, title, artist, album, durStr, date;
      if (/^\d+$/.test(cols[0].trim()) && cols.length >= 3){
        // formato com posição: n\ttítulo\tartista\tálbum\tduração\tdata
        pos = parseInt(cols[0]);
        [, title, artist, album, durStr, date] = cols;
      } else {
        // formato sem posição: título\tartista\tálbum\tduração\tdata
        rowIdx++;
        pos = rowIdx;
        [title, artist, album, durStr, date] = cols;
      }
      if (!pos || !title || !artist) continue;
      let sec = 0;
      if (durStr){ const m = (durStr || "").trim().match(/^(\d+):(\d+)/); if (m) sec = +m[1]*60 + +m[2]; }
      rows.set(pos, {title: title.trim(), artist: artist.trim(), album: (album||"").trim(), sec, date: (date||"").trim()});
    }
    return rows;
  }

  function extractAllIds(text){
    // extrai IDs de faixas preservando duplicatas e ordem
    const ids = [];
    for (const tok of text.split(/[\s,]+/)){ const m = tok.match(/track[/:]([A-Za-z0-9]{22})/); if (m) ids.push(m[1]); }
    return ids;
  }

  function autoFixFromPaste(text){
    autoStatus = "loading"; autoMsg = "";
    render();

    // 1. Tenta links de faixas em ordem (pasta toda a playlist)
    const orderedIds = extractAllIds(text);
    if (orderedIds.length > 0){
      const maxN = Math.max(...apiTracks.map(x => x.t.n));
      if (orderedIds.length >= maxN){
        // IDs suficientes para indexar por posição
        const posMap = new Map(); // t.n → track ID correto
        for (const {t} of apiTracks){
          if (fixes.get(t.n)?.status === "ok") continue;
          const id = orderedIds[t.n - 1];
          if (id) posMap.set(t.n, id);
        }
        if (posMap.size > 0){ autoFixFromPositionIds(posMap); return; }
      }
      // IDs insuficientes (só as corrompidas) — tenta por artista
      autoFixFromTrackIds([...new Set(orderedIds)]);
      return;
    }

    // 2. Tenta clipboard tab-separado por posição (Ctrl+A+C no Spotify)
    const clipRows = parseClipboardRows(text);
    if (clipRows.size > 0){
      let fixed = 0;
      for (const {t} of apiTracks){
        if (fixes.get(t.n)?.status === "ok"){ fixed++; continue; }
        const row = clipRows.get(t.n);
        if (!row) continue;
        const sp = (splitArtistsRaw(t.artist)[0] || t.artist).trim();
        const artistOk = normC(row.artist) === normC(sp) || normC(row.artist).includes(normC(sp)) || normC(sp).includes(normC(row.artist));
        if (!artistOk) continue;
        fixes.set(t.n, {status:"ok", data:{title:row.title, album:row.album||t.album, sec:row.sec||t.sec, date:row.date||t.dateRaw, meta:t.m||{}}, link:""});
        fixed++;
      }
      const skipped = apiTracks.filter(x => !fixes.get(x.t.n) || fixes.get(x.t.n).status !== "ok").length;
      if (fixed === 0){ autoStatus = "err"; autoMsg = `Leu ${nf(clipRows.size)} linhas mas nenhuma posição bateu — verifique se copiou toda a playlist em ordem.`; }
      else if (skipped > 0){ autoStatus = "done"; autoMsg = `${nf(fixed)} corrigida${fixed!==1?"s":""}. ${nf(skipped)} não encontrada${skipped!==1?"s":""}.`; for (const {t} of apiTracks){ if (!fixes.get(t.n)||fixes.get(t.n).status!=="ok") fixes.set(t.n,{...(fixes.get(t.n)||{}),_manual:true}); } }
      else { autoStatus = "done"; autoMsg = `Todas as ${nf(fixed)} faixas corrigidas. Clique em Salvar para aplicar.`; }
      render(); return;
    }

    autoStatus = "err"; autoMsg = "Formato não reconhecido — cole links do Spotify ou conteúdo copiado da playlist."; render();
  }

  async function autoFixFromPositionIds(posMap){
    // posMap: Map<t.n, spotifyTrackId> — IDs obtidos pela posição na playlist colada
    try {
      const token = await getToken();
      if (!token){ await autoFixNoAuth(posMap); return; }
      const ids = [...posMap.values()];
      const r = await fetch(`https://api.spotify.com/v1/tracks?ids=${ids.join(",")}`, {headers:{Authorization:`Bearer ${token}`}});
      if (!r.ok){
        let d=""; try{const ej=await r.json();d=ej?.error?.message||"";}catch(e2){}
        if (r.status===401||r.status===403){ await autoFixNoAuth(posMap); return; }
        throw new Error(`Spotify HTTP ${r.status}${d?": "+d:""}`);
      }
      const tracks = (await r.json()).tracks || [];
      let fixed = 0;
      for (const [n, id] of posMap){
        const tr = tracks.find(t => t && t.id === id);
        if (!tr) continue;
        const item = apiTracks.find(x => x.t.n === n);
        if (!item) continue;
        const {t} = item;
        const fetchedArtists = (tr.artists||[]).map(a=>a.name);
        const sp = (splitArtistsRaw(t.artist)[0]||t.artist).trim();
        const artistOk = fetchedArtists.some(fa=>{const nFa=normC(fa),nSt=normC(sp); return nFa===nSt||nFa.includes(nSt)||nSt.includes(nFa);});
        if (!artistOk) continue;
        const newMeta={...(t.m||{}),id:tr.id};
        if(tr.album?.album_type) newMeta.ty=tr.album.album_type;
        if(tr.explicit!==undefined) newMeta.x=tr.explicit?1:0;
        if(tr.track_number) newMeta.tn=tr.track_number;
        if(tr.album?.total_tracks) newMeta.tt=tr.album.total_tracks;
        fixes.set(n,{status:"ok",data:{title:tr.name,album:tr.album?.name||t.album,sec:tr.duration_ms?Math.round(tr.duration_ms/1000):t.sec,date:tr.album?.release_date||t.dateRaw,meta:newMeta},link:""});
        fixed++;
      }
      const skipped = apiTracks.filter(x=>!fixes.get(x.t.n)||fixes.get(x.t.n).status!=="ok").length;
      if(fixed===0){autoStatus="err";autoMsg="Nenhuma faixa correspondeu — artista não bateu. Verifique se a playlist colada é a correta.";}
      else if(skipped>0){autoStatus="done";autoMsg=`${nf(fixed)} corrigida${fixed!==1?"s":""}. ${nf(skipped)} falta${skipped!==1?"m":""}.`;}
      else{autoStatus="done";autoMsg=`Todas as ${nf(fixed)} faixas corrigidas. Clique em Salvar para aplicar.`;}
      render();
    } catch(e){ autoStatus="err"; autoMsg=e.message||String(e); render(); }
  }

  async function mbLookup(id, resourceUrl){
    try {
      const r = await fetch(
        `https://musicbrainz.org/ws/2/url?resource=${encodeURIComponent(resourceUrl)}&inc=recording-rels&fmt=json`,
        {headers:{"User-Agent":"PainelMusical/1.0 (personal-music-dashboard)"}}
      );
      if (!r.ok) return null;
      const j = await r.json();
      const rec = (j.relations||[]).find(x=>x["target-type"]==="recording")?.recording;
      return rec?.title ? {title:rec.title, sec:rec.length?Math.round(rec.length/1000):null, id} : null;
    } catch(e){ return null; }
  }

  async function autoFixNoAuth(posMap){
    // Sem token: MusicBrainz (CORS ok) + iTunes Search; pré-preenche link manual p/ faixas não encontradas
    const total = posMap.size;
    // Estimativa: ~2.5s/faixa na fase MB + ~3.5s/faixa pior caso na fase verify
    const estSecs = Math.ceil(total * 6);
    const startTime = Date.now();
    let currentStep = `Buscando metadados (0/${total})`;
    const timer = setInterval(() => {
      const elapsed = Math.floor((Date.now() - startTime) / 1000);
      const remaining = Math.max(1, estSecs - elapsed);
      autoMsg = `${currentStep} — ⏱ ~${remaining}s restantes`; render();
    }, 1000);
    autoStatus = "loading"; autoMsg = `${currentStep} — ⏱ ~${estSecs}s restantes`; render();
    try {
      const meta = new Map();
      const entries = [...posMap.entries()];
      let reqIdx = 0;
      for (let i = 0; i < entries.length; i++){
        const [n, id] = entries[i];
        currentStep = `Buscando metadados (${i+1}/${total})`;
        // Tentativa 1: https:// format
        if (reqIdx > 0) await new Promise(r => setTimeout(r, 1100));
        reqIdx++;
        let found = await mbLookup(id, `https://open.spotify.com/track/${id}`);
        // Tentativa 2: spotify:track: URI format
        if (!found){
          await new Promise(r => setTimeout(r, 1100)); reqIdx++;
          found = await mbLookup(id, `spotify:track:${id}`);
        }
        if (found) meta.set(n, found);
      }

      // iTunes Search em paralelo: título + artista → álbum + data
      if (meta.size > 0) currentStep = "Buscando álbuns no iTunes";
      let fixed = 0;
      await Promise.all([...meta.entries()].map(async ([n, {title, sec, id}]) => {
        try {
          const item = apiTracks.find(x => x.t.n === n);
          if (!item) return;
          const {t} = item;
          const artist = (splitArtistsRaw(t.artist)[0]||t.artist).trim();
          let album = t.album, finalSec = sec||t.sec, date = t.dateRaw;
          try {
            const q = encodeURIComponent(artist+" "+title);
            const ri = await fetch(`https://itunes.apple.com/search?term=${q}&media=music&entity=song&limit=10`);
            if (ri.ok){
              const ji = await ri.json();
              const hit = (ji.results||[]).find(x =>
                normC(x.trackName)===normC(title) &&
                (normC(x.artistName)===normC(artist)||normC(x.artistName).includes(normC(artist))||normC(artist).includes(normC(x.artistName)))
              );
              if (hit){ if (hit.collectionName) album=hit.collectionName; if (hit.trackTimeMillis) finalSec=Math.round(hit.trackTimeMillis/1000); if (hit.releaseDate) date=hit.releaseDate.slice(0,10); }
            }
          } catch(e2){}
          fixes.set(n,{status:"ok",data:{title,album,sec:finalSec,date,meta:{...(t.m||{}),id}},link:""});
          fixed++;
        } catch(e){}
      }));

      // Faixas não encontradas: pré-preenche e enfileira para auto-verificação
      const prefilledNs = [];
      for (const [n, id] of posMap){
        const f = fixes.get(n);
        if (!f || f.status !== "ok"){
          fixes.set(n, {_manual:true, link:`https://open.spotify.com/track/${id}`});
          prefilledNs.push(n);
        }
      }

      // Auto-verifica as pré-preenchidas sequencialmente (cada verifyLink usa MB+iTunes)
      if (prefilledNs.length > 0){
        autoStatus="loading";
        for (let i = 0; i < prefilledNs.length; i++){
          currentStep = `Verificando faixa ${i+1}/${prefilledNs.length}`;
          if (i > 0) await new Promise(r => setTimeout(r, 2000));
          await verifyLink(prefilledNs[i]);
        }
      }

      clearInterval(timer);
      const finalOk = [...fixes.values()].filter(f=>f.status==="ok").length;
      const finalFail = posMap.size - finalOk;
      if(finalOk === total){
        autoStatus="done"; autoMsg=`Todas as ${nf(total)} faixas corrigidas. Clique em Salvar para aplicar.`;
      } else {
        autoStatus="done";
        autoMsg = finalOk > 0
          ? `${nf(finalOk)} corrigida${finalOk!==1?"s":""}. ${nf(finalFail)} não encontradas — use Link manual.`
          : `Nenhuma faixa corrigida. Dados não encontrados nas bases públicas.`;
      }
      render();
    } catch(e){ clearInterval(timer); autoStatus="err"; autoMsg=e.message||String(e); render(); }
  }

  async function autoFixFromTrackIds(trackIds){
    try {
      const token = await getToken();
      if (!token){ autoStatus = "no-token"; autoMsg = hasOAuthStored() ? "reconnect" : ""; render(); return; }
      const unique = [...new Set(trackIds)].slice(0, 50);
      const r = await fetch(`https://api.spotify.com/v1/tracks?ids=${unique.join(",")}`, {headers: {Authorization: `Bearer ${token}`}});
      if (!r.ok){
        let detail = ""; try { const ej = await r.json(); detail = ej?.error?.message || ""; } catch(e2) {}
        if (r.status === 401){ autoStatus = "no-token"; autoMsg = hasOAuthStored() ? "reconnect" : ""; render(); return; }
        if (r.status === 403){ autoStatus="err"; autoMsg=`Spotify recusou acesso (HTTP 403${detail?": "+detail:""}) — reconecte sua conta OAuth.`; render(); return; }
        throw new Error(`Spotify HTTP ${r.status}${detail ? ": " + detail : ""}`);
      }
      const tracks = (await r.json()).tracks || [];
      const pending = apiTracks.filter(x => !fixes.get(x.t.n) || fixes.get(x.t.n).status !== "ok");
      let fixed = 0;
      for (const tr of tracks){
        if (!tr) continue;
        const fetchedArtists = (tr.artists || []).map(a => a.name);
        const match = pending.find(({t}) => {
          if (fixes.get(t.n)?.status === "ok") return false;
          const sp = (splitArtistsRaw(t.artist)[0] || t.artist).trim();
          return fetchedArtists.some(fa => { const nFa = normC(fa), nSt = normC(sp); return nFa === nSt || nFa.includes(nSt) || nSt.includes(nFa); });
        });
        if (!match) continue;
        const {t} = match;
        const newMeta = {...(t.m||{}), id: tr.id};
        if (tr.album?.album_type) newMeta.ty = tr.album.album_type;
        if (tr.explicit !== undefined) newMeta.x = tr.explicit ? 1 : 0;
        if (tr.track_number) newMeta.tn = tr.track_number;
        if (tr.album?.total_tracks) newMeta.tt = tr.album.total_tracks;
        fixes.set(t.n, {status: "ok", data: {title: tr.name, album: tr.album?.name || t.album, sec: tr.duration_ms ? Math.round(tr.duration_ms/1000) : t.sec, date: tr.album?.release_date || t.dateRaw, meta: newMeta}, link: ""});
        fixed++;
      }
      const skipped = apiTracks.filter(x => !fixes.get(x.t.n) || fixes.get(x.t.n).status !== "ok").length;
      if (fixed === 0){ autoStatus = "err"; autoMsg = "Nenhuma faixa correspondeu — verifique os links."; }
      else if (skipped > 0){ autoStatus = "done"; autoMsg = `${nf(fixed)} corrigida${fixed!==1?"s":""}. ${nf(skipped)} falta${skipped!==1?"m":""}.`; }
      else { autoStatus = "done"; autoMsg = `Todas as ${nf(fixed)} faixas corrigidas. Clique em Salvar para aplicar.`; }
      render();
    } catch(e){ autoStatus = "err"; autoMsg = e.message || String(e); render(); }
  }

  body.addEventListener("click", e => {
    const verify = e.target.closest("[data-verify]");
    const edit = e.target.closest("[data-edit]");
    const localExp = e.target.closest("[data-local-exp]");
    const saveBtn = e.target.closest("#cx-save-btn");
    const autoBtn = e.target.closest("#cx-auto-btn");
    const manualBtn = e.target.closest("[data-manual]");
    if (verify) verifyLink(+verify.dataset.verify);
    else if (edit){ const t = BY_PLAYLIST.find(x => x.n === +edit.dataset.edit); if (t) editTrack(t); }
    else if (localExp){ const p = body.querySelector(`#cx-local-${localExp.dataset.localExp}`); if (p){ p.hidden = !p.hidden; localExp.textContent = p.hidden ? "Ver faixas" : "Ocultar"; } }
    else if (saveBtn) applyFixes();
    else if (autoBtn){
      const inp = body.querySelector("#cx-pl-inp");
      const text = inp ? inp.value.trim() : "";
      if (!text){ autoStatus = "err"; autoMsg = "Cole o conteúdo da playlist antes de corrigir."; render(); }
      else autoFixFromPaste(text);
    }
    else if (e.target.closest("#cx-sp-connect")){
      md.close();
      if (typeof openPlaylistAuthModal === "function") openPlaylistAuthModal();
    }
    else if (manualBtn){
      const n = +manualBtn.dataset.manual;
      const existing = fixes.get(n) || {};
      fixes.set(n, {...existing, _manual: !existing._manual});
      render();
    }
  });
  body.addEventListener("keydown", e => {
    if (e.key === "Enter"){ const inp = e.target.closest(".cx-link-inp"); if (inp) verifyLink(+inp.dataset.n); }
  });
}

function openSameYear(groups){
  let list = groups.filter(x => !x.confirmed);
  if (!list.length) return;
  const body = document.createElement("div");
  const found = new Map(); // "gi-ai" → {gi, ai, d, tracks}

  const render = () => {
    body.innerHTML = `<p class="mdesc">O site já tentou corrigir estes conflitos automaticamente em background — o que aparece aqui não foi resolvido. Use <strong>Buscar</strong> para tentar de novo, <strong>Editar</strong> para corrigir manualmente ou <strong>Confirmar mesmo ano</strong> se as datas estiverem certas. Enquanto não responder, pesa ${HEALTH_W.sy} pontos na nota.</p>
      ${list.map((x, gi) => `<div class="alb-row" data-gi="${gi}">
        <div class="alb-main">
          <div><strong>${esc(x.art)}</strong> <span class="muted">· ${x.year}</span></div>
          <div style="margin-top:6px">${x.albums.map((a, ai) => `<div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;margin-top:4px">
            <span class="alb-art">${esc(a.name)} · <span id="sy-date-${gi}-${ai}">${esc(a.date)}</span></span>
            <div id="sy-af-${gi}-${ai}" hidden style="font-size:12px"></div>
            <button class="gbtn" type="button" data-search="${gi}-${ai}" style="font-size:12px;padding:2px 8px">Buscar</button>
            <button class="gbtn" type="button" data-edit="${gi}-${ai}" style="font-size:12px;padding:2px 8px">Editar</button>
          </div>`).join("")}</div>
        </div>
        <div class="alb-btns">
          <button class="gbtn" type="button" data-view="${gi}">Verificar</button>
          <button class="gbtn" type="button" data-cfm="${gi}">Confirmar mesmo ano</button>
        </div>
      </div>`).join("")}`;
  };

  render();
  let changed = false;
  const md = openModal({title: "Álbuns do mesmo artista no mesmo ano", body, size: "lg", onClose: () => openHealth()});

  async function searchOne(gi, ai){
    const x = list[gi], a = x && x.albums[ai]; if (!a) return;
    const lbl = body.querySelector(`#sy-af-${gi}-${ai}`); if (!lbl) return;
    lbl.hidden = false; lbl.innerHTML = `<em>consultando…</em>`;
    try {
      const d = await findOriginalDate(x.art, a.album);
      if (d && isFull(d) && d !== a.date){
        found.set(`${gi}-${ai}`, {gi, ai, d, tracks: a.tracks});
        lbl.innerHTML = `<span style="color:var(--ok,#3c3)">Original: <strong>${esc(d)}</strong> — aplicando…</span>`;
        const dateByTrack = new Map(); for (const t of a.tracks) dateByTrack.set(t.n, d);
        ssSet("health", "1");
        commitRows(currentRows().map(r => dateByTrack.has(r[0]) ? [r[0], r[1], r[2], r[3], r[4], dateByTrack.get(r[0]), ...(r[6] ? [r[6]] : [])] : r),
          `Data de "${a.album}" corrigida: ${a.date.slice(0,4)} → ${d.slice(0,4)}`);
      } else if (d && isFull(d)){
        lbl.innerHTML = `<span style="color:var(--ok,#3c3)">Data já está correta: <strong>${esc(d)}</strong></span>`;
      } else if (d){
        lbl.innerHTML = `Encontrou ${esc(d)}, sem dia/mês — use Editar.`;
      } else {
        lbl.innerHTML = `Não encontrado — use Editar.`;
      }
    } catch(e){ lbl.innerHTML = `Erro na busca — use Editar.`; }
  }

  body.addEventListener("click", async e => {
    const search = e.target.closest("[data-search]"), ed = e.target.closest("[data-edit]"),
          cfm = e.target.closest("[data-cfm]"), view = e.target.closest("[data-view]");
    if (search){
      const [gi, ai] = search.dataset.search.split("-").map(Number);
      search.disabled = true; search.textContent = "…";
      await searchOne(gi, ai);
      search.disabled = false; search.textContent = "Buscar";
    } else if (ed){
      const [gi, ai] = ed.dataset.edit.split("-").map(Number);
      const a = list[gi]?.albums[ai]; if (a) editAlbumDate(a);
    } else if (view){
      const x = list[+view.dataset.view]; if (x) openSameYearDetail(x);
    } else if (cfm){
      const idx = +cfm.dataset.cfm, x = list[idx]; if (!x) return;
      SAME_YEAR_CFM.add(x.k); saveSameYearCfm();
      changed = true;
      list = list.filter((_, i) => i !== idx);
      if (!list.length){ md.close(); return; }
      render();
    }
  });
}

function openHealth(){
  if (_healthRef){ _healthRef.rerender(); return; }

  const body = document.createElement("div"); body.className = "sd";
  let H = healthChecks();

  // lista das faixas afetadas, com "Editar" em cada linha
  const list = (title, tracks, sub) => {
    const lb = document.createElement("div");
    lb.innerHTML = `<div class="ptab"><table><thead><tr><th>#</th><th>Música</th><th>Artista</th><th>Álbum</th><th>Lançamento</th><th class="num">Duração</th><th></th></tr></thead><tbody>${tracks.map(t => `<tr><td>${t.n}</td><td>${esc(t.title)}</td><td>${t.artist === NI ? "—" : esc(t.artist)}</td><td>${t.albumRaw === NI ? "—" : esc(t.albumRaw)}</td><td>${t.dateRaw ? esc(t.dateRaw) : "—"}${t.date && t.date !== t.dateRaw ? ` <span class="muted">→ Apple: ${esc(t.date)}</span>` : ""}</td><td class="num">${t.sec ? durTxt(t.sec) : "—"}</td><td><button class="gbtn" type="button" data-edit="${t.n}">Editar</button></td></tr>`).join("")}</tbody></table></div>`;
    lb.addEventListener("click", e => { const b = e.target.closest("[data-edit]"); if (b) editTrack(BY_PLAYLIST.find(t => t.n === +b.dataset.edit)); });
    openModal({title, sub, size: "lg", body: lb});
  };
  const wasAddressed = it => {
    const k = it.k;
    if (k === "tn") return TRACK_TITLE_CLEAN.length > 0 || TRACK_TITLE_IGN.size > 0;
    if (k === "nm") return ALB_CLEAN.length > 0 || ALBUM_NAME_IGN.size > 0;
    if (k === "h") return Object.keys(ALIAS||{}).length > 0;
    if (k === "f" || k === "cv") return typeof VERS !== "undefined" && Object.keys(VERS).length > 0;
    if (k === "g") return Object.keys(DUR_CHECK||{}).length > 0;
    if (k === "sy") return SAME_YEAR_CFM.size > 0;
    if (k === "ad" || k === "au") return Object.entries(ALBMERGE||{}).length > 0;
    return false;
  };
  const row = it => {
    const m = META[it.k];
    if (!it.count) {
      const resp = wasAddressed(it);
      const okBtn = it.k === "tn" && TRACK_TITLE_CLEAN.length ? `<div class="sd-act"><button class="gbtn" type="button" data-act="tn-undo">Conferir (${TRACK_TITLE_CLEAN.length})</button></div>` : it.k === "nm" && ALB_CLEAN.length ? `<div class="sd-act"><button class="gbtn" type="button" data-act="nm-undo">Conferir (${ALB_CLEAN.length})</button></div>` : it.k === "h" && Object.keys(ALIAS).length ? `<div class="sd-act"><button class="gbtn" type="button" data-act="spell" data-k="h">Nomes juntados (${Object.keys(ALIAS).length})</button></div>` : it.k === "cx" && it.pending ? `<div class="sd-act"><span class="muted" style="font-size:12px">verificando catálogos…</span></div>` : "";
      return `<li class="sd-i ok${resp?" sd-resp":""}"><span class="sd-dot" aria-hidden="true">✓</span><div class="sd-tx"><b>${m.t}</b>${resp?`<span class="sd-resp-lbl">Respondido</span>`:""}<span>${m.ok}</span></div><span class="sd-lv">${LEVEL.ok}</span>${okBtn}</li>`;
    }
    const btn = m.act === "upd" ? `<button class="gbtn" type="button" data-act="upd">Atualizar dados</button>`
      : m.act === "covers" ? `<button class="gbtn" type="button" data-act="dups" data-o="covers">Revisar (${nf(it.count)})</button>`
      : m.act === "adoubt" ? `<button class="gbtn" type="button" data-act="dups" data-o="adoubt">Revisar (${nf(it.count)})</button>`
      : m.act === "nm" ? `<button class="gbtn" type="button" data-act="nm">Revisar (${nf(it.count)})</button>`
      : m.act === "tn" ? `<button class="gbtn" type="button" data-act="tn">Revisar (${nf(it.count)})</button>`
      : m.act === "singles" ? `<button class="gbtn" type="button" data-act="singles">Revisar (${nf(it.count)})</button>`
      : m.act === "aauto" ? `<button class="gbtn" type="button" data-act="dups" data-o="aauto">Revisar (${nf(it.count)})</button>`
      : m.act === "dupcv" ? `<button class="gbtn" type="button" data-act="dups" data-o="dupcv">Revisar (${nf(it.count)})</button>`
      : m.act === "dups" ? `<button class="gbtn" type="button" data-act="dups" data-o="dups">Revisar (${nf(it.count)})</button>`
      : m.act === "spell" ? `<button class="gbtn" type="button" data-act="spell" data-k="${it.k}">Juntar nomes (${nf(it.count)})</button>`
      : m.act === "dur" ? `<button class="gbtn" type="button" data-act="dur" data-k="${it.k}">Revisar (${nf(it.count)})</button>`
      : m.act === "gd" ? `<button class="gbtn" type="button" data-act="gd">Revisar (${nf(it.count)})</button>`
      : m.act === "datefix" ? `<button class="gbtn" type="button" data-act="datefix">Revisar (${nf(it.count)})</button>`
      : m.act === "sameyear" ? `<button class="gbtn" type="button" data-act="sameyear">Confirmar (${nf(it.count)})</button>`
      : m.act === "cx" ? `<button class="gbtn" type="button" data-act="cx">Revisar (${nf(it.count)})</button>`
      : `<button class="gbtn" type="button" data-act="list" data-k="${it.k}">Revisar (${nf(it.count)})</button>`;
    return `<li class="sd-i ${it.level}"><span class="sd-dot" aria-hidden="true">${it.level === "warn" ? "!" : "i"}</span><div class="sd-tx"><b>${m.t}</b><span>${m.d(it.count, it)}</span></div><span class="sd-lv">${LEVEL[it.level]}</span><div class="sd-act">${btn}</div></li>`;
  };

  const rerender = () => {
    H = healthChecks();
    const bad = H.items.filter(i => i.count && i.w);
    const hasAdj = TRACK_TITLE_CLEAN.length > 0 || ALB_CLEAN.length > 0 || Object.keys(ALIAS||{}).length > 0 || (typeof VERS!=="undefined" && Object.keys(VERS).length > 0) || Object.entries(ALBMERGE||{}).length > 0 || Object.keys(DUR_CHECK||{}).length > 0;
    const head = bad.length
      ? `<div class="sd-top">${ring(H.score)}<div><h4>${H.score >= 85 ? "Quase tudo certo" : H.score >= 60 ? "Dá pra melhorar" : "Precisa de atenção"}</h4><p>${plural(bad.length, "verificação encontrou", "verificações encontraram")} algo em ${faixas(H.N)}.</p>${hasAdj ? '<div class="sd-hist-row"><button type="button" class="pbtn sd-hist-btn" data-act="hist">Conferir ajustes feitos</button><button type="button" class="pbtn sd-rst-btn" data-act="reset">Limpar ajustes</button></div>' : ''}</div></div>`
      : `<div class="sd-top good">${ring(100)}<div><h4>Tudo certo!</h4><p>Nenhum problema encontrado nas ${faixas(H.N)}.</p><div class="sd-hist-row"><button type="button" class="pbtn sd-hist-btn" data-act="hist">Conferir ajustes feitos</button><button type="button" class="pbtn sd-rst-btn" data-act="reset">Limpar ajustes</button></div></div></div>`;
    const hero = H.noSpotify ? `<div class="sd-hero"><p><strong>Nenhuma música tem dados do Spotify ainda.</strong> Um único <strong>Atualizar dados</strong> resolve o que falta de dados, links e gêneros de uma vez (você confirma as buscas antes).</p><button class="pbtn" type="button" data-act="upd">Atualizar dados</button></div>` : "";
    const HIDDEN_K = ["gw"];
    const baseItems = H.noSpotify
      ? H.items.filter(i => !HIDDEN_K.includes(i.k) && !["a","b","c"].includes(i.k))
      : H.items.filter(i => !HIDDEN_K.includes(i.k));
    const CAT_MAP = {cx:"Integridade",a:"Música",b:"Música",e:"Música",f:"Música",cv:"Música",g:"Música",tn:"Música",ad:"Álbum",au:"Álbum",nm:"Álbum",sg:"Álbum",dr:"Data",dm:"Data",sy:"Data",c:"Artista",h:"Artista",gd:"Artista"};
    const CATS_ORDER = ["Integridade","Música","Álbum","Data","Artista"];
    const byCat = its => {
      const g = {};
      for (const it of [...its].sort((a,b)=>b.w-a.w)){ const c=CAT_MAP[it.k]||"Outros"; (g[c]=g[c]||[]).push(it); }
      return CATS_ORDER.filter(c=>g[c]).map(c=>`<li class="sd-cat-h">${c}</li>${g[c].map(row).join("")}`).join("");
    };
    const GRPS = [
      {label:"Não respondido", sub:"conta na nota",            cls:"warn", f: i => i.count && i.w},
      {label:"Não respondido", sub:"não obrigatório",          cls:"help", f: i => i.count && !i.w},
      {label:"Respondido",     sub:null,                       cls:"resp", f: i => !i.count && wasAddressed(i)},
      {label:"Manutenção",     sub:"verificações periódicas",  cls:"maint", f: null},
      {label:"Ok",             sub:"nem precisou de resposta", cls:"ok",   f: i => !i.count && !wasAddressed(i)},
    ];
    const order = `<li class="sd-i help"><span class="sd-dot" aria-hidden="true">i</span><div class="sd-tx"><b>Conferir a ordem</b><span>Confirme se #1 é a primeira música adicionada.</span></div><span class="sd-lv">${LEVEL.help}</span><div class="sd-act"><button class="gbtn" type="button" data-act="fix">Verificar ordem</button><button class="gbtn" type="button" data-act="rev">Inverter ordem</button></div></li>`;
    const rescan = `<li class="sd-i help"><span class="sd-dot" aria-hidden="true">↺</span><div class="sd-tx"><b>Revisar todos os dados</b><span>Re-busca as datas de todos os álbuns nas fontes disponíveis.</span></div><span class="sd-lv">${LEVEL.help}</span><div class="sd-act"><button class="gbtn" type="button" data-act="rescan">Revisar dados</button></div></li>`;
    const listHtml = GRPS.map(grp => {
      if (grp.cls === "maint") return `<li class="sd-grp-h sd-grp-maint">Manutenção <span class="sd-grp-sub">verificações periódicas</span></li>${order}${rescan}`;
      const its = baseItems.filter(grp.f);
      if (!its.length) return "";
      return `<li class="sd-grp-h sd-grp-${grp.cls}">${grp.label}${grp.sub?` <span class="sd-grp-sub">${grp.sub}</span>`:""}</li>${byCat(its)}`;
    }).join("");
    body.innerHTML = `${head}${hero}<ul class="sd-list">${listHtml}</ul>`;
  };

  rerender();
  const md = openModal({title: "Saúde da playlist", sub: `${faixas(H.N)}`, body, size: "md", onClose: () => { _healthRef = null; }});
  _healthRef = {md, body, rerender};

  body.addEventListener("click", e => {
    const b = e.target.closest("[data-act]"); if (!b) return;
    const a = b.dataset.act;
    const by = k => H.items.find(i => i.k === k);
    if (a === "upd"){ md.close(); openDataUpdate(); }
    else if (a === "dups"){ md.close(); const o = b.dataset.o, back = openHealth; openDups(o === "covers" ? {tab: "covers", kind: "songs", back} : o === "adoubt" ? {kind: "albums", atab: "doubt", back} : o === "aauto" ? {kind: "albums", atab: "doubt", back} : o === "dupcv" ? {kind: "songs", back} : {tab: "dups", kind: "songs", back}); }
    else if (a === "fix"){ md.close(); openFixOrder(); }
    else if (a === "rev"){ md.close(); askReverse(); }
    else if (a === "list"){ const it = by(b.dataset.k); list(META[it.k].t, it.tracks, `${faixas(it.tracks.length)} · "—" é o que está em branco`); }
    else if (a === "nm"){ md.close(); openAlbumNameUndo(openHealth); }
    else if (a === "tn"){ md.close(); openTrackTitleUndo(openHealth); }
    else if (a === "tn-undo"){ md.close(); openTrackTitleUndo(openHealth); }
    else if (a === "nm-undo"){ md.close(); openAlbumNameUndo(openHealth); }
    else if (a === "gd"){ openGenreDivergence(by("gd").artists); }
    else if (a === "datefix"){ openDateFix(by("dm").albums); }
    else if (a === "sameyear"){ openSameYear(by("sy").groups); }
    else if (a === "cx"){ openCrossedData(by("cx").groups); }
    else if (a === "singles"){ openSingles(by("sg").tracks); }
    else if (a === "dur"){ const it = by(b.dataset.k); openDurReview(it.tracks); }
    else if (a === "hist"){ openHealthHistory(); }
    else if (a === "reset"){ openResetAdjustments(md); }
    else if (a === "rescan"){
      const H2 = healthChecks();
      const byK = k => H2.items.find(i => i.k === k);
      const priorityKeys = new Set([
        ...(byK("dm")?.albums || []).map(x => x.k),
        ...(byK("dr")?.tracks || []).map(t => adateKey(t.artist, t.albumRaw)),
      ]);
      const albumKeys = new Set();
      for (const r of RAW){ const a2 = String(r[2]||"").trim(), al2 = String(r[3]||"").trim(); if (a2 && al2) albumKeys.add(adateKey(a2, al2)); }
      const total = albumKeys.size;
      const est = Math.max(1, Math.round(total * 3.2 / 60));
      const confBody = document.createElement("div"); confBody.className = "confirm";
      confBody.innerHTML = `<p>O site vai re-buscar datas em <strong>${total} álbum${total !== 1 ? "ns" : ""}</strong> usando Apple Music, MusicBrainz, Deezer e TheAudioDB — <strong>sem usar o Spotify</strong>.</p>${priorityKeys.size ? `<p>Os <strong>${priorityKeys.size} álbun${priorityKeys.size !== 1 ? "s" : ""} com alertas abertos</strong> vão primeiro na fila.</p>` : ""}<p class="muted" style="font-size:13px">A fila respeita os limites de cada API (~3s por álbum). Estimativa: ~${est} min. O site continua funcionando normalmente enquanto processa.</p><div style="display:flex;gap:8px;justify-content:flex-end;margin-top:16px"><button class="gbtn" type="button" id="rc-cancel">Cancelar</button><button class="pbtn" type="button" id="rc-go">Iniciar varredura</button></div>`;
      const confMd = openModal({title: "Revisar todos os dados", body: confBody, size: "sm"});
      confBody.querySelector("#rc-cancel").addEventListener("click", () => confMd.close());
      confBody.querySelector("#rc-go").addEventListener("click", () => { confMd.close(); md.close(); openRescanProgress(priorityKeys, total); });
    }
    else if (a === "spell"){
      const groups = by("h").groups || [], keys = Object.keys(ALIAS);
      const sm = openModal({title: META.h.t, size: "md", sub: "Mesma banda escrita de jeitos diferentes",
        body: `<div class="confirm">${groups.map((g, i) => `<div class="alb-row"><div class="alb-main"><strong>${g.map(v => `"${esc(v.name)}"`).join(" × ")}</strong> <span class="muted">${g.map(v => faixas(v.count)).join(" · ")}</span></div><div class="alb-btns"><button class="gbtn" type="button" data-join="${i}">Juntar</button></div></div>`).join("")}
          ${keys.length ? `<div class="eyebrow" style="margin:16px 0 6px">Nomes já juntados</div>${keys.map(k => `<div class="alb-row"><div class="alb-main"><strong>${esc(k)}</strong> <span class="alb-x">→</span> <strong>${esc(ALIAS[k])}</strong></div><div class="alb-btns"><button class="gbtn" type="button" data-undo="${esc(k)}">Desfazer</button></div></div>`).join("")}` : ""}</div>`});
      sm.m.addEventListener("click", async e => {
        const j = e.target.closest("[data-join]"), u = e.target.closest("[data-undo]");
        if (u) undoAlias(u.dataset.undo);
        else if (j){
          const g = groups[+j.dataset.join];
          const canon = await pickBandName(g, "Juntar nomes", `Estes nomes são a <strong>mesma banda</strong>? Escolha o <strong>nome que fica</strong>:`);
          if (canon) applyAlias(canon, g);
        }
      });
    }
  });
}

function autoFixAlbumDates(){
  const groups = new Map();
  for (const t of BY_PLAYLIST){
    if (!t.bands.length || t.bands[0] === NI) continue;
    if (!t.album || t.album === NI) continue;
    const key = t.bands[0].toLowerCase() + "\x00" + t.album.toLowerCase();
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(t);
  }
  const fixes = new Map();
  for (const ts of groups.values()){
    if (ts.length < 2) continue;
    const dated = ts.filter(t => t.dateRaw && /^\d{4}/.test(t.dateRaw));
    if (dated.length < 2) continue;
    const oldest = dated.reduce((m, t) => t.dateRaw < m ? t.dateRaw : m, dated[0].dateRaw);
    for (const t of dated) if (t.dateRaw !== oldest) fixes.set(t.n, oldest);
  }
  if (!fixes.size) return false;
  const fixedRows = currentRows().map(r => fixes.has(r[0]) ? [r[0], r[1], r[2], r[3], r[4], fixes.get(r[0]), ...(r[6] ? [r[6]] : [])] : r);
  const sortedFD = [...fixedRows].sort((a, b) => a[0] - b[0]).map((r, i) => r[6] ? [i+1,r[1],r[2],r[3],r[4],r[5],r[6]] : [i+1,r[1],r[2],r[3],r[4],r[5]]);
  writeStore({rows: sortedFD, updated: Date.now()});
  return false;
}

function autoApplySuffixClean(){
  // purga entradas cujo álbum/faixa já não existe na playlist (playlist trocada ou faixas removidas)
  const albumsNow = new Set(BY_PLAYLIST.map(t => t.albumRaw));
  const nsNow = new Set(BY_PLAYLIST.map(t => t.n));
  const staleAlb = ALB_CLEAN.filter(e => !albumsNow.has(e.raw) && !albumsNow.has(e.clean));
  if (staleAlb.length){ for (const e of staleAlb) ALB_CLEAN.splice(ALB_CLEAN.indexOf(e), 1); saveAlbClean(); }
  const staleT = TRACK_TITLE_CLEAN.filter(e => !nsNow.has(e.n));
  if (staleT.length){ for (const e of staleT) TRACK_TITLE_CLEAN.splice(TRACK_TITLE_CLEAN.indexOf(e), 1); saveTrackTitleClean(); }

  const tnI = trackTitleIssues(BY_PLAYLIST);
  const nmI = albumNameIssues(BY_PLAYLIST);
  if (!tnI.length && !nmI.length) return false;
  const tnMap = new Map(tnI.map(x => [x.t.n, x.cleanTitle]));
  const nmMap = new Map(nmI.map(x => [x.rawName, x.cleanName]));
  for (const x of tnI) if (!TRACK_TITLE_CLEAN.some(e => e.n === x.t.n)) TRACK_TITLE_CLEAN.push({n: x.t.n, artist: x.t.artist, raw: x.rawTitle, clean: x.cleanTitle});
  saveTrackTitleClean();
  for (const x of nmI){
    if (!ALB_CLEAN.some(e => e.raw === x.rawName)){
      const tracks = currentRows().filter(r => { const t = BY_PLAYLIST.find(b => b.n === r[0]); return t && t.albumRaw === x.rawName; }).map(r => ({n: r[0], origTitle: r[1]}));
      ALB_CLEAN.push({raw: x.rawName, clean: x.cleanName, tracks});
    }
  }
  saveAlbClean();
  const fixedRowsSC = currentRows().map(r => {
    const t = BY_PLAYLIST.find(b => b.n === r[0]);
    const newTitle = tnMap.get(r[0]) || r[1];
    const newAlbum = (t && nmMap.get(t.albumRaw)) || r[3];
    if (newTitle === r[1] && newAlbum === r[3]) return r;
    return [r[0], newTitle, r[2], newAlbum, r[4], r[5], ...(r[6] ? [r[6]] : [])];
  });
  const sortedSC = [...fixedRowsSC].sort((a, b) => a[0] - b[0]).map((r, i) => r[6] ? [i+1,r[1],r[2],r[3],r[4],r[5],r[6]] : [i+1,r[1],r[2],r[3],r[4],r[5]]);
  writeStore({rows: sortedSC, updated: Date.now()});
  return false;
}

if (STORE){
  if (!autoFixAlbumDates() && !autoApplySuffixClean() && ssGet("health") === "1"){
    ssDel("health");
    if (ssGet("tt-clean-undo") === "1"){ ssDel("tt-clean-undo"); setTimeout(openTrackTitleUndo, 1300); }
    else if (ssGet("alb-clean-undo") === "1"){ ssDel("alb-clean-undo"); setTimeout(openAlbumNameUndo, 1300); }
    else { setTimeout(openHealth, 1300); }
  }
}
/* busca automática de datas originais: roda em background assim que a página carrega (ou seja, logo após qualquer
   adição à playlist). Para cada álbum em conflito de mesmo ano ainda não verificado, consulta MusicBrainz → iTunes → Deezer.
   Se achar data completa diferente do ano atual, corrige automaticamente sem avisar o usuário. */
if (STORE){
  const need = new Map();
  for (const g of sameYearAlbums(BY_PLAYLIST)){
    if (g.confirmed) continue;
    for (const a of g.albums){
      const k = adateKey(a.tracks[0].artist, a.tracks[0].albumRaw);
      if (!(k in ADATES) && !need.has(k)) need.set(k, {k, art: g.art, album: a.tracks[0].albumRaw, date: a.tracks[0].date, tracks: a.tracks});
    }
  }
  for (const [k, al] of need) coverQueue.push({job: async () => {
    const d = await findOriginalDate(al.art, al.album).catch(() => null);
    ADATES[k] = d || ""; saveADates();
    if (d && isFull(d) && d.slice(0, 4) !== al.date.slice(0, 4)){
      const ns = new Set(al.tracks.map(t => t.n));
      ssSet("health", "1");
      commitRows(currentRows().map(r => ns.has(r[0]) ? [r[0], r[1], r[2], r[3], r[4], d, ...(r[6] ? [r[6]] : [])] : r),
        `Data de "${al.album}" corrigida automaticamente: ${al.date.slice(0,4)} → ${d.slice(0,4)}`);
    }
  }});
  if (need.size) pumpCovers();
}
window.healthChecks = healthChecks;   // usado nos testes
function healthScoreColor(score){
  if (score <= 50){ const t = score / 50; return `hsl(${Math.round(t * 38)},88%,${Math.round(60 - t * 2)}%)`; }
  const t = (score - 50) / 50; return `hsl(${Math.round(38 + t * 114)},${Math.round(88 - t * 21)}%,${Math.round(58 - t * 18)}%)`;
}
const btn = $("#dt-health");
if (btn){
  btn.innerHTML = `<svg width="15" height="15" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 1.8 2.6 3.6v4.1c0 3.1 2.2 5.5 5.4 6.5 3.2-1 5.4-3.4 5.4-6.5V3.6z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" fill="none"/><path d="M4.8 8.2h1.9l1-2.1 1.5 3.8 1-1.7h1.2" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg><span>Saúde</span>`;
  btn.hidden = !STORE;   // na playlist de exemplo não há o que consertar
  btn.addEventListener("click", openHealth);
  if (STORE){ const {score} = healthChecks(); if (score < 100) btn.style.color = healthScoreColor(score); }
}
})();
