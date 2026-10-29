/* Saúde da playlist: uma tela que mostra o que está faltando ou sujo na playlist, com botão de correção em cada item.
   Reaproveita o que o painel já tem (script.js carrega antes): BY_PLAYLIST, NI, needsUpdate, needsLink, genreTargets, similarTitles, normC,
   splitArtistsAll, openDataUpdate, openDups, openFixOrder, askReverse, openModal, songTable, faixas, nf, pct, esc.
   Nenhuma ação gasta busca sozinha: os botões só abrem as telas que já pedem confirmação. */
(() => {
"use strict";
const HEALTH_W = {a: 25, b: 5, c: 10, e: 15, f: 10, g: 10, gw: 0, h: 5, cv: 5, ad: 5, au: 5, sg: 0, dc: 5, dr: 5, dm: 5, dcr: 0, nm: 0, tn: 0, gd: 0};   // peso de cada verificação na nota (soma 110: nunca zera só por isso; peso 0 = só informa)
const FULL_AT = 0.25;                                                       // com 25% das faixas afetadas o item já custa o peso inteiro
const MAX_SEC = 20 * 60;

const DUR_CHECK_KEY = "catalogo-musical:dur-check";
const ALBUM_NAME_IGN_KEY = "catalogo-musical:album-name-ign";
const ALBUM_NAME_IGN = (() => { try { return new Set(JSON.parse(localStorage.getItem(ALBUM_NAME_IGN_KEY) || "[]")); } catch(e) { return new Set(); } })();
const saveAlbumNameIgn = () => { try { localStorage.setItem(ALBUM_NAME_IGN_KEY, JSON.stringify([...ALBUM_NAME_IGN])); } catch(e) {} };

const TRACK_TITLE_IGN_KEY = "catalogo-musical:track-title-ign";
const TRACK_TITLE_IGN = (() => { try { return new Set(JSON.parse(localStorage.getItem(TRACK_TITLE_IGN_KEY) || "[]")); } catch(e) { return new Set(); } })();
const saveTrackTitleIgn = () => { try { localStorage.setItem(TRACK_TITLE_IGN_KEY, JSON.stringify([...TRACK_TITLE_IGN])); } catch(e) {} };

const ALB_CLEAN_KEY = "catalogo-musical:alb-clean";
const ALB_CLEAN = (() => { try { return JSON.parse(localStorage.getItem(ALB_CLEAN_KEY) || "[]"); } catch(e) { return []; } })();
const saveAlbClean = () => { try { localStorage.setItem(ALB_CLEAN_KEY, JSON.stringify(ALB_CLEAN)); } catch(e) {} };

// detecta sufixos de edição/versão no final do nome do álbum e sugere o nome limpo
const EDITION_RE1 = /\s+[-–—]\s*[(\[]?(?:(?:super\s+)?(?:deluxe|remaster(?:ed)?|expanded|anniversary|special|limited|collector'?s|platinum)(?:\s+(?:edition|version|remaster))?(?:\s+\d{4})?|\d{4}\s+remaster(?:ed)?|bonus\s+tracks?(?:\s+version)?)[)\]]?\s*$/i;
const EDITION_RE2 = /\s+[(\[](?:(?:super\s+)?(?:deluxe|remaster(?:ed)?|expanded|anniversary|special|limited|collector'?s|platinum)(?:\s+(?:edition|version|remaster))?(?:\s+\d{4})?|\d{4}\s+remaster(?:ed)?|bonus\s+tracks?(?:\s+version)?)[)\]]\s*$/i;

// detecta sufixos de versão no final do TÍTULO da faixa (remix, remaster, live, acústico, etc.)
const TRACK_SUFFIX_RE = /\s*[(\[](?:(?:super\s+)?(?:deluxe|expanded|anniversary|special|limited|platinum|collector'?s|bonus\s+tracks?)(?:\s+(?:edition|version))?(?:\s+\d{4})?|(?:\d{4}\s+)?remaster(?:ed)?(?:\s+\d{4})?|(?:[\w-]+\s+){0,3}remix|(?:club|radio|extended|dub|progressive|original|acoustic|chill)\s+mix|live(?:\s+(?:at|from|version|recording|session)[\w\s,.'()\[\]-]{0,50})?|acoustic(?:\s+(?:version|mix|session))?|instrumental(?:\s+version)?|(?:early\s+)?demo(?:\s+version)?|(?:radio|single|mono|extended|alternate(?:ive)?|original)\s+(?:edit|version|mix))[)\]]\s*$|\s+[-–—]\s*(?:(?:\d{4}\s+)?remaster(?:ed)?(?:\s+\d{4})?|(?:[\w-]+\s+){0,3}remix|live(?:\s+(?:version|recording))?|acoustic(?:\s+version)?|instrumental(?:\s+version)?)\s*$/i;
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
  const sameDay = sameDayAlbums(list), review = list.filter(t => t.dfix);   // dfix: data corrigida pelo site, à espera de conferência manual
  const missingDate = missingDateAlbums(list);
  const spell = artistSpellings(list), ai = ALBUM_INFO, autoG = ai.groups.filter(g => !g.confirmed);
  const nmIssues = albumNameIssues(list);
  const tnIssues = trackTitleIssues(list);
  const gdIssues = genreDivergence(list);
  const mk = (k, count, frac, level, extra) => ({k, count, frac, level: count ? level : "ok", w: HEALTH_W[k], ...extra});
  const items = [
    // w:25 — crítico
    mk("a", noData.length, noData.length / N, "warn", {tracks: noData}),
    // w:15
    mk("e", ni.length, ni.length / N, "warn", {tracks: ni}),
    // w:10 — warn antes de help
    mk("f", sim.dups.length, dupTracks.length / N, "warn", {tracks: dupTracks, groups: sim.dups}),
    mk("g", oddDur.length, oddDur.length / N, "warn", {tracks: oddDur}),
    mk("c", genres.length, Math.min(1, genres.length / Math.max(1, uniq(list.flatMap(t => t.bands)).length)), "help", {artists: genres}),
    // w:5 — warn
    mk("cv", sim.covers.length, uniq(sim.covers.flatMap(x => x.rs)).length / N, "warn", {tracks: uniq(sim.covers.flatMap(x => x.rs))}),
    mk("ad", ai.doubts.length, Math.min(1, ai.doubts.reduce((n, e) => n + e.ca + e.cb, 0) / N), "warn", {}),
    mk("au", autoG.length, Math.min(1, autoG.reduce((n, g) => n + g.variants.reduce((m, v) => m + v.count, 0), 0) / N), "warn", {}),
    mk("dc", sameDay.filter(x => !x.reviewed).length, sameDay.filter(x => !x.reviewed && (x.apple || ADATES[x.k] !== undefined)).reduce((n, x) => n + x.tracks.length, 0) / N, "warn", {albums: sameDay.filter(x => !x.reviewed)}),
    mk("dcr", sameDay.filter(x => x.reviewed).length, 0, "help", {albums: sameDay.filter(x => x.reviewed)}),
    mk("dr", review.length, review.length / N, "warn", {tracks: review}),
    mk("dm", missingDate.length, missingDate.reduce((n, x) => n + x.tracks.length, 0) / N, "warn", {albums: missingDate}),
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
  a: {t: "Músicas sem dados do Spotify", ok: "Todas as músicas têm os dados do Spotify.", d: n => `${plural(n, "música está", "músicas estão")} sem explícita e tipo do lançamento.`, act: "upd"},
  b: {t: "Músicas sem o link guardado", ok: "Todas as músicas com dados têm o link guardado.", d: n => `${plural(n, "música tem", "músicas têm")} dados mas não guardou o link (ID) do Spotify. É de graça quando o cache já sabe o link; senão é 1 busca por música.`, act: "upd"},
  c: {t: "Artistas sem gênero", ok: "Todos os artistas têm gênero do Spotify.", d: n => `${plural(n, "artista está", "artistas estão")} sem gênero do Spotify. A Apple já cobre um gênero provisório nos gráficos, mas continua pendente: “Atualizar dados” busca o do Spotify (1 busca por artista).`, act: "upd"},
  e: {t: "Campos “Não identificado”", ok: "Nenhum artista, álbum ou data em branco.", d: n => `${plural(n, "faixa tem", "faixas têm")} artista, álbum ou data em branco.`, act: "list"},
  cv: {t: "Covers", ok: "Nenhum título gravado por artistas diferentes.", d: n => `${plural(n, "título aparece", "títulos aparecem")} com artistas principais diferentes: covers, ou só músicas com o mesmo nome. Escolha Cover, Outra música ou Mesma banda.`, act: "covers"},
  ad: {t: "Álbuns em dúvida", ok: "Nenhum álbum em dúvida.", d: n => `${plural(n, "par de álbuns pode", "pares de álbuns podem")} ser o mesmo álbum. Escolha “É o mesmo” ou “São diferentes”.`, act: "adoubt"},
  au: {t: "Álbuns que o site acha iguais", ok: "Nenhum álbum aguardando confirmação.", d: n => `${plural(n, "grupo de álbuns", "grupos de álbuns")} que o site acha serem o mesmo (edições como remaster ou deluxe). Já contam como um só nos gráficos, mas esperam a sua confirmação.`, act: "aauto"},
  f: {t: "Prováveis duplicadas", ok: "Nenhuma música repetida.", d: n => `${plural(n, "caso de música provavelmente repetida", "casos de músicas provavelmente repetidas")} (mesmo título e artista principal).`, act: "dups"},
  g: {t: "Duração suspeita", ok: "Nenhuma duração estranha.", d: n => `${plural(n, "faixa tem", "faixas têm")} duração de 0 s ou de mais de 20 minutos.`, act: "dur"},
  gw: {t: "Duração longa confirmada", ok: "Nenhuma faixa com duração longa confirmada pendente.", d: n => `${plural(n, "faixa tem", "faixas têm")} duração acima de 20 min confirmada. Você pode editar ou confirmar novamente.`, act: "dur"},
  sg: {t: "Faixas fora de álbum que são de álbum", ok: "Nenhuma faixa fora de álbum com sugestão de álbum.", d: n => `${plural(n, "faixa marcada como single, EP ou coletânea existe", "faixas marcadas como single, EP ou coletânea existem")} num álbum, segundo a Apple. É só uma sugestão: não pesa na nota.`, act: "singles"},
  dc: {t: "Álbuns próximos do mesmo artista", ok: "Nenhum álbum do mesmo artista lançado tão perto de outro.", d: n => `${plural(n, "álbum saiu", "álbuns saíram")} no mesmo ano ou a menos de 2 meses de outro álbum do mesmo artista. A Apple confere sozinha, mas se a suspeita continuar isso pesa na nota até você responder (está certo, editar a data ou reavaliar).`, act: "near"},
  dcr: {t: "Álbuns próximos confirmados", ok: "Nenhum álbum próximo confirmado.", d: n => `${plural(n, "álbum próximo foi", "álbuns próximos foram")} confirmados como certos por você. Não pesa na nota, mas ficam aqui para referência.`, act: "nearcfm"},
  dr: {t: "Datas para conferir à mão", ok: "Nenhuma data pendente de conferência.", d: n => `${plural(n, "faixa tem", "faixas têm")} uma data que o site montou (ano do Spotify com dia e mês da Apple) porque a Apple não confirmou. Confira em Editar: pesa na nota até você ajustar.`, act: "list"},
  dm: {t: "Datas sem dia e mês (sem solução automática)", ok: "Nenhuma data indefinida.", d: n => `${plural(n, "álbum está", "álbuns estão")} só com o ano — o site tentou Apple Music, MusicBrainz, Deezer e TheAudioDB e não achou a data completa. Corrija manualmente para tirar da nota.`, act: "datefix"},
  nm: {t: "Nomes com sufixo de edição", ok: "Nenhum nome de álbum com sufixo de edição.", d: n => `${plural(n, "álbum tem", "álbuns têm")} sufixo de edição no nome (Remastered, Deluxe…). Limpar o nome é opcional e não pesa na nota.`, act: "nm"},
  tn: {t: "Títulos com sufixo de versão", ok: "Nenhum título de faixa com sufixo de versão.", d: n => `${plural(n, "faixa tem", "faixas têm")} sufixo de versão no título (Remix, Remastered, Live…). Você decide se limpa o nome, ignora ou verifica se tem outra versão na playlist. Não pesa na nota.`, act: "tn"},
  gd: {t: "Gênero divergente entre fontes", ok: "Nenhum gênero divergente detectado.", d: n => `${plural(n, "artista tem", "artistas têm")} gênero no Spotify que não bate com o que a Apple ou o MusicBrainz dizem. É só uma dica — não pesa na nota.`, act: "gd"},
  h: {t: "Grafias parecidas do mesmo artista", ok: "Nenhum artista escrito de duas formas.", d: n => `${plural(n, "artista aparece", "artistas aparecem")} escrito de mais de um jeito. Se for a mesma banda, junte os nomes.`, act: "spell"}
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
  const md = openModal({title: "Faixas que são de álbum", sub: "Sugestão da Apple", body, foot, size: "md"});

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
// álbuns do mesmo artista que saíram no mesmo ano ou a menos de 2 meses um do outro (com a data vinda da Apple ou do próprio Spotify)
const DAY = 864e5, near = (a, b) => a.slice(0, 4) === b.slice(0, 4) || Math.abs(Date.parse(a) - Date.parse(b)) < 61 * DAY;
function sameDayAlbums(list){
  const by = new Map();   // artista principal → álbum → {date, apple, tracks}
  for (const t of list){
    if (t.artist === NI || t.albumRaw === NI || !isFull(t.date)) continue;
    const art = (splitArtistsRaw(t.artist)[0] || "").toLowerCase(), k = adateKey(t.artist, t.albumRaw);
    if (!by.has(art)) by.set(art, new Map());
    const al = by.get(art); if (!al.has(k)) al.set(k, {k, art, album: t.albumRaw, canon: t.album, date: t.date, apple: false, tracks: []});
    const x = al.get(k); x.tracks.push(t);
    if (/^\d{4}-01-01$/.test(t.dateRaw || "") && t.date !== t.dateRaw && !(DFIX[k] && DFIX[k].d === t.date)) x.apple = true;
  }
  const out = [];
  for (const al of by.values()){
    const arr = [...al.values()];
    for (const x of arr) if (!(!x.apple && ADATES[x.k] === x.date)){   // Apple confirmou a mesma data: some sozinho
      // edições do mesmo álbum (o site juntou ou você confirmou) e pares ainda em dúvida na revisão de álbuns não contam: lá é que se decide
      const sameAlbum = y => y.canon === x.canon || ALBUM_INFO.doubts.some(e => (e.a === x.album && e.b === y.album) || (e.a === y.album && e.b === x.album));
      const others = arr.filter(y => y !== x && !sameAlbum(y) && near(x.date, y.date));
      if (others.length) out.push({...x, reviewed: DREV.has(x.k), other: others.map(y => y.album)});
    }
  }
  return out;
}

/* reavalia cada álbum suspeito: 1) Spotify de novo (1 busca por álbum); 2) data real → corrige; 3) mesmo ano da Apple → deixa;
   4) ano diferente (sem dia/mês) → pede a Apple de novo: se vier certa (ano bate e muda), corrige; se voltar a mesma de antes,
   não aceita: ano do Spotify + dia e mês da Apple, e fica para conferir à mão (pesa na nota até a pessoa editar) */
function openReeval(albums){
  const body = document.createElement("div"), foot = document.createElement("div"); foot.className = "mfrow";
  body.innerHTML = `<div class="confirm"><p><strong>${plural(albums.length, "álbum saiu", "álbuns saíram")} no mesmo ano ou a menos de 2 meses de outro do mesmo artista</strong>. Isso é suspeito: pode ser data de relançamento ou data completada errada.</p>
    <div class="du-rows"><div><b>${nf(albums.length)}</b><span>${albums.length === 1 ? "busca" : "buscas"} no <strong>Spotify</strong> (1 por álbum) para pedir a data de novo</span></div><div><b>até ${nf(albums.length)}</b><span>${albums.length === 1 ? "busca" : "buscas"} na <strong>Apple</strong>, só se o ano mudar (não gasta o Spotify)</span></div></div>
    <p>Se o Spotify trouxer a data completa (outra, no caso de data que já era completa), ela corrige. Se vier o mesmo ano da Apple, fica como está. Se o ano mudar e a Apple não confirmar, o ano do Spotify fica com o dia e o mês da Apple e a data vai para <strong>conferir à mão</strong> (pesa na nota até você editar).</p>
    <p class="muted">Nada é gravado nos seus dados: as correções valem só na visualização.</p></div>`;
  foot.innerHTML = `<span class="sp"></span><button class="gbtn" type="button" data-c>Cancelar</button><button class="pbtn" type="button" data-go autofocus>Reavaliar</button>`;
  const md = openModal({title: "Reavaliar datas", body, foot, size: "sm"});
  foot.querySelector("[data-c]").onclick = md.close;
  foot.querySelector("[data-go]").onclick = () => {
    const c = loadSpotifyCreds();
    if (SPOTIFY_ID_RE.test(c.id || "") && SPOTIFY_ID_RE.test(c.secret || "")) run(c.id, c.secret);
    else openSpotifyAppHelp({returning: hasSpotifyApp(), onDone: (id, secret) => run(id, secret)});
  };
  async function run(id, secret){
    let stop = false, done = 0; const res = {real: [], apple: [], keep: [], manual: [], fail: 0};
    body.innerHTML = `<div class="confirm"><p id="rv-st">Conectando ao Spotify…</p><div class="ht" style="margin-top:12px"><i id="rv-bar" style="width:0%"></i></div><p class="muted" style="margin-top:12px">Pode parar quando quiser: o que já foi avaliado fica.</p></div>`;
    foot.innerHTML = `<span class="sp"></span><button class="gbtn" type="button" data-stop>Parar e ver o resultado</button>`;
    foot.querySelector("[data-stop]").onclick = () => { stop = true; };
    try {
      const token = await spotifyToken(id, secret);
      for (const al of albums){
        if (stop) break;
        const st = body.querySelector("#rv-st"); if (!st) return;
        st.textContent = `Avaliando ${done + 1} de ${albums.length}: ${al.album}`;
        const tid = (al.tracks.find(t => t.m && t.m.id) || {m: {}}).m.id, old = al.tracks[0].date;
        let sp = null;
        if (tid){
          const it = await spotifyGetJSON(`https://api.spotify.com/v1/tracks/${tid}`, token);
          if (it && it.album && it.album.release_date) sp = {d: String(it.album.release_date), prec: it.album.release_date_precision || (isFull(it.album.release_date) ? "day" : "year")};
        }
        if (!al.apple){   // data completa do próprio Spotify (sem a Apple): só muda se o Spotify trouxer outra data real
          if (sp && sp.prec === "day" && isFull(sp.d) && sp.d !== old){ DFIX[al.k] = {d: sp.d, review: false, force: true}; res.real.push(al.album); }
          else res.keep.push(al.album);
        }
        else if (sp && sp.prec === "day" && isFull(sp.d)){ DFIX[al.k] = {d: sp.d, review: false}; res.real.push(al.album); }          // data real do Spotify: corrige
        else {
          const sy = sp ? sp.d.slice(0, 4) : al.tracks[0].dateRaw.slice(0, 4), ay = old.slice(0, 4);
          if (sy === ay) res.keep.push(al.album);                                                                                  // mesmo ano: deixa como está
          else {
            await new Promise(r => setTimeout(r, 3200));
            let a1 = ""; try { const r = pickAlbum(await itunes(`search?entity=album&limit=10&term=${encodeURIComponent(al.art + " " + al.album)}`), al.art, al.album, 3); a1 = r && r.releaseDate ? String(r.releaseDate).slice(0, 10) : ""; } catch (e) { res.fail++; }
            if (a1 && a1.slice(0, 4) === sy && a1 !== old){ DFIX[al.k] = {d: a1, review: false}; res.apple.push(al.album); }    // a Apple confirmou outra data no ano certo
            else { DFIX[al.k] = {d: sy + old.slice(4), review: true}; res.manual.push(al.album); }                                // voltou o mesmo: ano do Spotify + dia/mês da Apple e conferir à mão
          }
        }
        DREV.add(al.k); saveDFix(); done++;
        body.querySelector("#rv-bar").style.width = (100 * done / albums.length) + "%";
      }
    } catch (e){ res.fail++; }
    const li = (n, l) => n.length ? `<li><strong>${n.length}</strong> ${l}: ${esc(n.slice(0, 4).join(", "))}${n.length > 4 ? ` e mais ${n.length - 4}` : ""}</li>` : "";
    body.innerHTML = `<div class="confirm"><p>Avaliados <strong>${nf(done)} de ${nf(albums.length)}</strong>.</p><ul>${li(res.real, "com a data real do Spotify")}${li(res.apple, "corrigidos pela Apple")}${li(res.keep, "mantidos como estão (mesmo ano)")}${li(res.manual, "para conferir à mão (a Apple não confirmou)")}</ul>${res.fail ? `<p class="muted">Houve falhas de conexão (${res.fail}). Dá para reavaliar de novo mais tarde.</p>` : ""}</div>`;
    foot.innerHTML = `<span class="sp"></span><button class="pbtn" type="button" data-ok>Fechar</button>`;
    foot.querySelector("[data-ok]").onclick = () => { md.close(); if (res.real.length || res.apple.length || res.manual.length){ setFlash("Datas reavaliadas."); ssSet("health", "1"); location.reload(); } };
  }
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
// responder à suspeita: "Está certo" / "Buscar originais para todos" / "Editar data"
// busca todos os álbuns de uma vez e aplica em lote; modal só fecha depois de resolver tudo
function openNear(albums){
  const body = document.createElement("div");
  const row = (al, i) => `<div class="alb-row" data-i="${i}"><div class="alb-main"><div><strong>${esc(al.album)}</strong> <span class="alb-art">${esc(splitArtistsRaw(al.tracks[0].artist)[0])} · <span id="alb-date-${i}">${esc(al.date)}</span>${al.apple ? " (data da Apple)" : ""}</span></div><div class="alb-why">perto de: ${esc(al.other.join(", "))}</div><div class="alb-why" id="af-${i}" hidden></div></div><div class="alb-btns"><button class="gbtn" type="button" data-ok="${i}">Está certo</button><button class="gbtn" type="button" data-edit="${i}">Editar data</button></div></div>`;
  body.innerHTML = `<p class="mdesc">Álbuns do mesmo artista no mesmo ano ou a menos de 2 meses um do outro. <strong>Está certo</strong> mantém as datas; <strong>Buscar originais para todos</strong> consulta todas as fontes e aplica em bloco (recomendado quando a data atual é de um remaster); <strong>Editar data</strong> troca manualmente. Enquanto não responder, pesa na nota.</p><div style="margin-bottom:12px;display:flex;gap:8px;flex-wrap:wrap"><button class="gbtn" type="button" id="btn-search-all">Buscar originais para todos</button><button class="pbtn" type="button" id="btn-apply-all" hidden></button></div>${albums.map(row).join("")}`;
  let changed = false;
  const md = openModal({title: "Álbuns próximos do mesmo artista", body, size: "lg", onClose: () => { if (changed) openHealth(); }});
  const btnSearch = body.querySelector("#btn-search-all");
  const btnApply = body.querySelector("#btn-apply-all");
  const found = new Map(); // i → data encontrada
  btnSearch.addEventListener("click", async () => {
    btnSearch.disabled = true; btnSearch.textContent = "Buscando…";
    for (let i = 0; i < albums.length; i++){
      const al = albums[i];
      const row = body.querySelector(`#af-${i}`); row.hidden = false; row.innerHTML = `<em>consultando MusicBrainz, iTunes, Deezer e TheAudioDB…</em>`;
      try {
        const d = await findOriginalDate(al.tracks[0].artist, al.album);
        if (d && d !== al.date){ found.set(i, d); row.innerHTML = `<span style="color:var(--ok,#3c3)">Original encontrado: <strong>${esc(d)}</strong></span>`; }
        else if (d){ row.innerHTML = `Data já está correta: <strong>${esc(d)}</strong>`; }
        else { row.innerHTML = `Não encontrado — use "Editar data" para corrigir manualmente.`; }
      } catch(e2){ row.innerHTML = `Erro na busca — tente "Editar data".`; }
    }
    btnSearch.hidden = true;
    if (found.size){
      btnApply.hidden = false;
      btnApply.textContent = `Aplicar ${found.size} data${found.size > 1 ? "s" : ""} encontrada${found.size > 1 ? "s" : ""}`;
    }
  });
  btnApply.addEventListener("click", () => {
    const dateByTrack = new Map();
    for (const [i, d] of found) for (const t of albums[i].tracks) dateByTrack.set(t.n, d);
    for (const [i] of found) DREV.add(albums[i].k);
    saveDFix(); ssSet("health", "1");
    commitRows(currentRows().map(r => dateByTrack.has(r[0]) ? [r[0], r[1], r[2], r[3], r[4], dateByTrack.get(r[0]), ...(r[6] ? [r[6]] : [])] : r), `Datas originais corrigidas em ${found.size} álbum${found.size > 1 ? "ns" : ""}`);
    changed = true; md.close();
  });
  body.addEventListener("click", e => {
    const ok = e.target.closest("[data-ok]"), ed = e.target.closest("[data-edit]");
    if (ok){ const al = albums[+ok.dataset.ok]; DREV.add(al.k); saveDFix(); changed = true; ok.closest(".alb-row").remove(); if (!body.querySelector(".alb-row")) md.close(); }
    else if (ed) editAlbumDate(albums[+ed.dataset.edit]);
  });
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
  const md = openModal({title: "Datas sem dia e mês", body, size: "lg"});
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
  let list = [...issues];
  const pending = new Map();   // trackTitleKey(t) → newTitle (acumula; só commita ao aplicar)
  const body = document.createElement("div");
  const foot = document.createElement("div"); foot.className = "mfrow";

  const updateFoot = () => {
    const n = pending.size;
    foot.innerHTML = `<span class="sp"></span><button class="gbtn" type="button" data-c>Fechar${n ? " sem aplicar" : ""}</button>${n ? `<button class="pbtn" type="button" data-apply>Aplicar ${plural(n, "alteração", "alterações")}</button>` : ""}`;
    foot.querySelector("[data-c]").onclick = () => md.close();
    const ap = foot.querySelector("[data-apply]");
    if (ap) ap.onclick = applyAll;
  };

  const applyAll = () => {
    if (!pending.size) return;
    ssSet("health", "1");
    commitRows(currentRows().map(r => {
      const key = BY_PLAYLIST.find(b => b.n === r[0]);
      const newTitle = key && pending.get(trackTitleKey(key));
      return newTitle ? [r[0], newTitle, r[2], r[3], r[4], r[5], ...(r[6] ? [r[6]] : [])] : r;
    }), `${plural(pending.size, "título de faixa limpo", "títulos de faixas limpos")} (sufixo removido)`);
  };

  const renderRows = () => {
    body.innerHTML = `<div class="confirm"><p>Estas faixas têm sufixo de versão no título. Você decide o que fazer com cada uma — <strong>não pesa na nota</strong>.</p>
      <div class="du-rows">${list.map(x => {
        const twinNote = x.twins.length ? `<span class="muted" style="font-size:11px;display:block;margin-top:2px">⚠ versão limpa já na playlist: <em>${esc(x.twins.map(tw => `#${tw.n} ${tw.title}`).join(", "))}</em></span>` : "";
        return `<div class="alb-row" data-raw="${esc(x.rawTitle)}" data-n="${x.t.n}">
          <div class="alb-main">
            <span class="alb-old">${esc(x.rawTitle)}</span><br>
            <strong class="alb-new">${esc(x.cleanTitle)}</strong> <span class="muted" style="font-size:12px">· ${esc(x.t.artist)} · #${x.t.n}</span>
            ${twinNote}
          </div>
          <div class="alb-btns">
            <button class="gbtn nm-red" type="button" data-ign="${x.t.n}" title="Ignorar sugestão">${ICON.x} Ignorar</button>
            <button class="pbtn nm-ok"  type="button" data-ok="${x.t.n}"  title="Aceitar nome limpo">${IC_CHECK} Limpar</button>
          </div>
        </div>`;
      }).join("")}</div></div>`;
  };

  renderRows();
  updateFoot();
  const md = openModal({title: "Títulos com sufixo de versão", sub: "Opcional · não pesa na nota", body, foot, size: "lg"});

  body.addEventListener("click", e => {
    const ignBtn = e.target.closest("[data-ign]"), okBtn = e.target.closest("[data-ok]");
    if (ignBtn){
      const x = list.find(i => i.t.n === +ignBtn.dataset.ign); if (!x) return;
      TRACK_TITLE_IGN.add(trackTitleKey(x.t));
      saveTrackTitleIgn();
      pending.delete(trackTitleKey(x.t));
      list = list.filter(i => i.t.n !== x.t.n);
      if (!list.length){ md.close(); return; }
      renderRows(); updateFoot();
    } else if (okBtn){
      const x = list.find(i => i.t.n === +okBtn.dataset.ok); if (!x) return;
      pending.set(trackTitleKey(x.t), x.cleanTitle);
      list = list.filter(i => i.t.n !== x.t.n);
      if (!list.length){ applyAll(); return; }
      renderRows(); updateFoot();
    }
  });
}

function openAlbumNameClean(issues){
  let list = [...issues];
  const pending = new Map();   // rawName → newName (acumula; só commita ao fechar)
  const body = document.createElement("div");
  const foot = document.createElement("div"); foot.className = "mfrow";

  const updateFoot = () => {
    const n = pending.size;
    foot.innerHTML = `<span class="sp"></span><button class="gbtn" type="button" data-c>Fechar${n ? " sem aplicar" : ""}</button>${n ? `<button class="pbtn" type="button" data-apply>Aplicar ${plural(n, "alteração", "alterações")}</button>` : ""}`;
    foot.querySelector("[data-c]").onclick = () => md.close();
    const ap = foot.querySelector("[data-apply]");
    if (ap) ap.onclick = applyAll;
  };

  const applyAll = () => {
    if (!pending.size) return;
    ssSet("health", "1");
    pending.forEach((cleanName, rawName) => {
      if (!ALB_CLEAN.some(e => e.raw === rawName)) ALB_CLEAN.push({raw: rawName, clean: cleanName});
    });
    saveAlbClean();
    commitRows(currentRows().map(r => {
      const t = BY_PLAYLIST.find(b => b.n === r[0]);
      const newName = t && pending.get(t.albumRaw);
      if (!newName) return r;
      const newTitle = suggestCleanTrackTitle(r[1]) || r[1];
      return [r[0], newTitle, r[2], newName, r[4], r[5], ...(r[6] ? [r[6]] : [])];
    }), `${plural(pending.size, "álbum renomeado", "álbuns renomeados")} (sufixo removido)`);
  };

  const renderRows = () => {
    body.innerHTML = `<div class="confirm"><p>Estes álbuns têm sufixo de edição no nome. Você escolhe o que fazer com cada um — <strong>não pesa na nota</strong>.</p>
      <div class="du-rows">${list.map(x => `<div class="alb-row" data-raw="${esc(x.rawName)}">
        <div class="alb-main">
          <span class="alb-old">${esc(x.rawName)}</span> <span class="alb-arrow">→</span> <strong class="alb-new">${esc(x.cleanName)}</strong> <span class="muted" style="font-size:12px">· ${faixas(x.tracks.length)}</span>
        </div>
        <div class="alb-btns">
          <button class="gbtn nm-red" type="button" data-ign="${esc(x.rawName)}"    title="Manter o nome como está">${ICON.x} Ignorar</button>
          <button class="gbtn nm-amb" type="button" data-manual="${esc(x.rawName)}" title="Editar o nome manualmente">${IC_PEN} Editar</button>
          <button class="pbtn nm-ok"  type="button" data-ok="${esc(x.rawName)}"     title="Confirmar a alteração sugerida">${IC_CHECK} Confirmar</button>
        </div>
      </div>`).join("")}</div></div>`;
  };

  renderRows();
  updateFoot();
  const md = openModal({title: "Nomes com sufixo de edição", sub: "Opcional · não pesa na nota", body, foot, size: "lg"});

  body.addEventListener("click", e => {
    const ign = e.target.closest("[data-ign]"), manual = e.target.closest("[data-manual]"), ok = e.target.closest("[data-ok]");
    if (ign){
      ALBUM_NAME_IGN.add(ign.dataset.ign);
      saveAlbumNameIgn();
      pending.delete(ign.dataset.ign);
      list = list.filter(x => x.rawName !== ign.dataset.ign);
      if (!list.length){ md.close(); return; }
      renderRows(); updateFoot();
    } else if (ok){
      const x = list.find(i => i.rawName === ok.dataset.ok); if (!x) return;
      pending.set(x.rawName, x.cleanName);
      list = list.filter(i => i.rawName !== x.rawName);
      if (!list.length){ applyAll(); return; }
      renderRows(); updateFoot();
    } else if (manual){
      const x = list.find(i => i.rawName === manual.dataset.manual); if (!x) return;
      const inp = document.createElement("div");
      inp.innerHTML = `<div class="confirm"><p class="muted">Nome atual: <strong>${esc(x.rawName)}</strong></p><label class="sd-f"><span>Novo nome</span><input type="text" id="nm-inp" value="${esc(x.cleanName)}" autocomplete="off" style="width:100%"></label><p class="err" id="nm-err" hidden></p></div>`;
      const foot2 = document.createElement("div"); foot2.className = "mfrow";
      foot2.innerHTML = `<span class="sp"></span><button class="gbtn" type="button" data-c>Cancelar</button><button class="pbtn" type="button" data-save>Confirmar</button>`;
      const sm = openModal({title: "Renomear álbum", body: inp, foot: foot2, size: "sm"});
      foot2.querySelector("[data-c]").onclick = sm.close;
      foot2.querySelector("[data-save]").onclick = () => {
        const newName = inp.querySelector("#nm-inp").value.trim();
        const errEl = inp.querySelector("#nm-err");
        if (!newName || newName === x.rawName){ errEl.hidden = false; errEl.textContent = !newName ? "Digite um nome." : "O nome é igual ao atual."; return; }
        sm.close();
        pending.set(x.rawName, newName);
        list = list.filter(i => i.rawName !== x.rawName);
        if (!list.length){ applyAll(); return; }
        renderRows(); updateFoot();
      };
      setTimeout(() => inp.querySelector("#nm-inp")?.focus(), 60);
    }
  });
}

function openHealthHistory(){
  const body = document.createElement("div"); body.className = "sd sh";
  const secs = [];
  const capF = s => s ? s.charAt(0).toUpperCase() + s.slice(1) : s;

  // álbuns unificados / separados manualmente
  const albSim = Object.entries(ALBMERGE||{}).filter(([,v])=>v==="sim");
  const albNao = Object.entries(ALBMERGE||{}).filter(([,v])=>v==="nao");
  if (albSim.length||albNao.length){
    let rows = "";
    for (const [id] of albSim){
      const [art,,a,,b] = id.split("|"); // id = "art|a|b" mas nomes com | usam encodeURIComponent — separamos pelo último |
      const pts = id.split("|"); const bName = pts.pop(), aName = pts.pop(), artName = pts.join("|");
      rows += `<li><span class="sh-lbl"><em>${esc(capF(artName))}</em> · ${esc(aName)} + ${esc(bName)}</span><button class="gbtn" data-undo="alb" data-id="${esc(id)}">Desfazer</button></li>`;
    }
    for (const [id] of albNao){
      const pts = id.split("|"); const bName = pts.pop(), aName = pts.pop(), artName = pts.join("|");
      rows += `<li><span class="sh-lbl sh-neg"><em>${esc(capF(artName))}</em> · ${esc(aName)} ≠ ${esc(bName)}</span><button class="gbtn" data-undo="alb" data-id="${esc(id)}">Desfazer</button></li>`;
    }
    secs.push(`<div class="sh-sec"><div class="sh-h"><b>Álbuns unificados / separados</b><small>${albSim.length} iguais · ${albNao.length} diferentes</small></div><ul class="sh-list">${rows}</ul></div>`);
  }

  // artistas mesclados (ALIAS)
  const aliases = Object.entries(ALIAS||{});
  if (aliases.length){
    secs.push(`<div class="sh-sec"><div class="sh-h"><b>Artistas mesclados</b><small>${aliases.length} nome${aliases.length!==1?"s":""}</small></div><ul class="sh-list">${aliases.map(([k,v])=>`<li><span class="sh-lbl">${esc(k)} → <strong>${esc(v)}</strong></span><button class="gbtn" data-undo="alias" data-id="${esc(k)}">Desfazer</button></li>`).join("")}</ul></div>`);
  }

  // versões de faixas confirmadas (VERS)
  const versions = Object.entries(typeof VERS!=="undefined"?VERS:{});
  if (versions.length){
    const VL = typeof VERS_LABEL!=="undefined"?VERS_LABEL:{};
    secs.push(`<div class="sh-sec"><div class="sh-h"><b>Versões confirmadas</b><small>${versions.length}</small></div><ul class="sh-list">${versions.map(([k,v])=>`<li><span class="sh-lbl">${esc(v.title||k)} <em>${esc(VL[v.type]||"outra versão")}</em></span><button class="gbtn" data-undo="vers" data-id="${esc(k)}">Desfazer</button></li>`).join("")}</ul></div>`);
  }

  // títulos ignorados na Saúde
  if (TRACK_TITLE_IGN.size){
    secs.push(`<div class="sh-sec"><div class="sh-h"><b>Títulos ignorados na Saúde</b><small>${TRACK_TITLE_IGN.size}</small></div><ul class="sh-list">${[...TRACK_TITLE_IGN].map(k=>{ const [art,ttl]=k.split("|"); return `<li><span class="sh-lbl">${esc(ttl||k)}${art?` <em>${esc(art)}</em>`:""}</span><button class="gbtn" data-undo="tign" data-id="${esc(k)}">Desfazer</button></li>`; }).join("")}</ul></div>`);
  }

  // nomes de álbuns ignorados na Saúde
  if (ALBUM_NAME_IGN.size){
    secs.push(`<div class="sh-sec"><div class="sh-h"><b>Álbuns ignorados na Saúde</b><small>${ALBUM_NAME_IGN.size}</small></div><ul class="sh-list">${[...ALBUM_NAME_IGN].map(n=>`<li><span class="sh-lbl">${esc(n)}</span><button class="gbtn" data-undo="aign" data-id="${esc(n)}">Desfazer</button></li>`).join("")}</ul></div>`);
  }

  // nomes de álbuns limpos (sufixo removido)
  if (ALB_CLEAN.length){
    secs.push(`<div class="sh-sec"><div class="sh-h"><b>Nomes de álbuns limpos</b><small>${ALB_CLEAN.length} álbum${ALB_CLEAN.length!==1?"s":""}</small></div><ul class="sh-list">${ALB_CLEAN.map(e=>`<li><span class="sh-lbl"><span style="text-decoration:line-through;opacity:.55">${esc(e.raw)}</span> → <strong>${esc(e.clean)}</strong></span></li>`).join("")}</ul></div>`);
  }

  // datas preenchidas pela Apple (informativo)
  const adCount = Object.keys(typeof ADATES!=="undefined"?ADATES:{}).length;
  if (adCount){
    secs.push(`<div class="sh-sec sh-info"><div class="sh-h"><b>Datas completadas automaticamente</b><small>${adCount} pela Apple</small></div><p class="sh-note">Preenchidas em segundo plano. O dado original continua intacto na playlist.</p></div>`);
  }

  body.innerHTML = secs.length ? secs.join("") : `<p class="muted" style="padding:8px 0">Nenhuma alteração registrada ainda.</p>`;
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

  function showBubble(){
    if (bubble || state.isDone) return;
    bubble = document.createElement("button");
    bubble.id = "rescan-bubble";
    bubble.style.cssText = "position:fixed;bottom:24px;right:24px;z-index:9999;background:var(--accent,#5b50e8);color:#fff;border:none;border-radius:24px;padding:10px 18px;font-size:13px;font-weight:600;cursor:pointer;box-shadow:0 4px 20px rgba(0,0,0,.35);display:flex;align-items:center;gap:8px";
    bubble.innerHTML = `<span class="rp-spin" style="display:inline-block;animation:rp-rot .8s linear infinite">↺</span><span id="bubble-lbl">Revisando…</span>`;
    bubble.addEventListener("click", () => { hideBubble(); openModal_(); });
    document.body.appendChild(bubble);
    if (!document.querySelector("#rp-kf")){ const st = document.createElement("style"); st.id = "rp-kf"; st.textContent = ".rp-spin{display:inline-block;animation:rp-rot .8s linear infinite}@keyframes rp-rot{to{transform:rotate(360deg)}}"; document.head.appendChild(st); }
  }
  function hideBubble(){ if (bubble){ bubble.remove(); bubble = null; } }
  function updateBubble(){ const lbl = bubble && bubble.querySelector("#bubble-lbl"); if (lbl) lbl.textContent = `Revisando${state.changes.length ? ` · ${state.changes.length} ✓` : "…"}`; }

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

  openModal_();
}
function openHealth(){
  const H = healthChecks(), bad = H.items.filter(i => i.count && i.w);
  const body = document.createElement("div"); body.className = "sd";
  // lista das faixas afetadas, com "Editar" em cada linha
  const list = (title, tracks, sub) => {
    const body = document.createElement("div");
    body.innerHTML = `<div class="ptab"><table><thead><tr><th>#</th><th>Música</th><th>Artista</th><th>Álbum</th><th>Lançamento</th><th class="num">Duração</th><th></th></tr></thead><tbody>${tracks.map(t => `<tr><td>${t.n}</td><td>${esc(t.title)}</td><td>${t.artist === NI ? "—" : esc(t.artist)}</td><td>${t.albumRaw === NI ? "—" : esc(t.albumRaw)}</td><td>${t.dateRaw ? esc(t.dateRaw) : "—"}${t.date && t.date !== t.dateRaw ? ` <span class="muted">→ Apple: ${esc(t.date)}</span>` : ""}</td><td class="num">${t.sec ? durTxt(t.sec) : "—"}</td><td><button class="gbtn" type="button" data-edit="${t.n}">Editar</button></td></tr>`).join("")}</tbody></table></div>`;
    body.addEventListener("click", e => { const b = e.target.closest("[data-edit]"); if (b) editTrack(BY_PLAYLIST.find(t => t.n === +b.dataset.edit)); });
    openModal({title, sub, size: "lg", body});
  };
  const row = it => {
    const m = META[it.k];
    if (!it.count) return `<li class="sd-i ok"><span class="sd-dot" aria-hidden="true">✓</span><div class="sd-tx"><b>${m.t}</b><span>${m.ok}</span></div><span class="sd-lv">${LEVEL.ok}</span>${it.k === "h" && Object.keys(ALIAS).length ? `<div class="sd-act"><button class="gbtn" type="button" data-act="spell" data-k="h">Nomes juntados (${Object.keys(ALIAS).length})</button></div>` : ""}</li>`;
    const btn = m.act === "upd" ? `<button class="gbtn" type="button" data-act="upd">Atualizar dados</button>`
      : m.act === "covers" ? `<button class="gbtn" type="button" data-act="dups" data-o="covers">Revisar covers</button>`
      : m.act === "adoubt" ? `<button class="gbtn" type="button" data-act="dups" data-o="adoubt">Revisar álbuns</button>`
      : m.act === "nm" ? `<button class="gbtn" type="button" data-act="nm">Revisar nomes (${nf(it.count)})</button>`
      : m.act === "tn" ? `<button class="gbtn" type="button" data-act="tn">Revisar títulos (${nf(it.count)})</button>`
      : m.act === "near" ? `<button class="gbtn" type="button" data-act="near">Responder (${nf(it.count)})</button><button class="gbtn" type="button" data-act="reeval">Reavaliar datas</button>`
      : m.act === "nearcfm" ? `<button class="gbtn" type="button" data-act="nearcfm">Ver confirmados (${nf(it.count)})</button>`
      : m.act === "singles" ? `<button class="gbtn" type="button" data-act="singles">Ver sugestões (${nf(it.count)})</button>`
      : m.act === "aauto" ? `<button class="gbtn" type="button" data-act="dups" data-o="aauto">Revisar álbuns</button>`
      : m.act === "dups" ? `<button class="gbtn" type="button" data-act="dups" data-o="dups">Revisar duplicadas</button>`
      : m.act === "spell" ? `<button class="gbtn" type="button" data-act="spell" data-k="${it.k}">Juntar nomes (${nf(it.count)})</button>`
      : m.act === "dur" ? `<button class="gbtn" type="button" data-act="dur" data-k="${it.k}">Revisar durações (${nf(it.count)})</button>`
      : m.act === "gd" ? `<button class="gbtn" type="button" data-act="gd">Revisar gêneros (${nf(it.count)})</button>`
      : m.act === "datefix" ? `<button class="gbtn" type="button" data-act="datefix">Corrigir manualmente (${nf(it.count)})</button>`
      : `<button class="gbtn" type="button" data-act="list" data-k="${it.k}">Ver as ${nf(it.count)}</button>`;
    return `<li class="sd-i ${it.level}"><span class="sd-dot" aria-hidden="true">${it.level === "warn" ? "!" : "i"}</span><div class="sd-tx"><b>${m.t}</b><span>${m.d(it.count, it)}</span></div><span class="sd-lv">${LEVEL[it.level]}</span><div class="sd-act">${btn}</div></li>`;
  };
  const order = `<li class="sd-i help"><span class="sd-dot" aria-hidden="true">i</span><div class="sd-tx"><b>Conferir a ordem</b><span>O site não consegue saber sozinho se a ordem de entrada está certa (#1 = a primeira adicionada). Confira com os links do Spotify.</span></div><span class="sd-lv">${LEVEL.help}</span><div class="sd-act"><button class="gbtn" type="button" data-act="fix">Conferir/Consertar ordem</button><button class="gbtn" type="button" data-act="rev">Inverter ordem</button></div></li>`;
  const rescan = `<li class="sd-i help"><span class="sd-dot" aria-hidden="true">↺</span><div class="sd-tx"><b>Revisar todos os dados</b><span>Re-busca as datas de todos os álbuns em Apple Music, MusicBrainz, Deezer e TheAudioDB. Útil quando suspeitar que datas vieram de remasters. Não usa o Spotify.</span></div><span class="sd-lv">${LEVEL.help}</span><div class="sd-act"><button class="gbtn" type="button" data-act="rescan">Revisar dados</button></div></li>`;
  const head = bad.length
    ? `<div class="sd-top">${ring(H.score)}<div><h4>${H.score >= 85 ? "Quase tudo certo" : H.score >= 60 ? "Dá pra melhorar" : "Precisa de atenção"}</h4><p>${plural(bad.length, "verificação encontrou", "verificações encontraram")} algo em ${faixas(H.N)}.</p></div></div>`
    : `<div class="sd-top good">${ring(100)}<div><h4>Tudo certo!</h4><p>Nenhum problema encontrado nas ${faixas(H.N)}.</p><button type="button" class="pbtn sd-hist-btn" data-act="hist">Conferir ajustes feitos</button></div></div>`;
  const hero = H.noSpotify ? `<div class="sd-hero"><p><strong>Nenhuma música tem dados do Spotify ainda.</strong> Um único <strong>Atualizar dados</strong> resolve o que falta de dados, links e gêneros de uma vez (você confirma as buscas antes).</p><button class="pbtn" type="button" data-act="upd">Atualizar dados</button></div>` : "";
  const shown = H.noSpotify ? H.items.filter(i => !["a", "b", "c"].includes(i.k)) : (bad.length ? H.items : H.items.filter(i => i.count && !i.w));
  body.innerHTML = `${head}${hero}<ul class="sd-list">${shown.map(row).join("")}${order}${rescan}</ul>`;
  const md = openModal({title: "Saúde da playlist", sub: `${faixas(H.N)}`, body, size: "md"});
  const by = k => H.items.find(i => i.k === k);
  body.addEventListener("click", e => {
    const b = e.target.closest("[data-act]"); if (!b) return;
    const a = b.dataset.act;
    if (a === "upd"){ md.close(); openDataUpdate(); }
    else if (a === "dups"){ md.close(); const o = b.dataset.o, back = openHealth; openDups(o === "covers" ? {tab: "covers", kind: "songs", back} : o === "adoubt" ? {kind: "albums", atab: "doubt", back} : o === "aauto" ? {kind: "albums", atab: "doubt", back} : {tab: "dups", kind: "songs", back}); }
    else if (a === "fix"){ md.close(); openFixOrder(); }
    else if (a === "rev"){ md.close(); askReverse(); }
    else if (a === "list"){ const it = by(b.dataset.k); list(META[it.k].t, it.tracks, `${faixas(it.tracks.length)} · “—” é o que está em branco`); }
    else if (a === "nm"){ md.close(); openAlbumNameClean(by("nm").albums); }
    else if (a === "tn"){ md.close(); openTrackTitleClean(by("tn").tracks); }
    else if (a === "gd"){ md.close(); openGenreDivergence(by("gd").artists); }
    else if (a === "near"){ md.close(); openNear(by("dc").albums); }
    else if (a === "reeval"){ md.close(); openReeval(by("dc").albums); }
    else if (a === "nearcfm"){ md.close(); openNear(by("dcr").albums); }
    else if (a === "datefix"){ md.close(); openDateFix(by("dm").albums); }
    else if (a === "singles"){ md.close(); openSingles(by("sg").tracks); }
    else if (a === "dur"){ md.close(); const it = by(b.dataset.k); openDurReview(it.tracks); }
    else if (a === "hist"){ openHealthHistory(); }
    else if (a === "rescan"){
      const H2 = healthChecks();
      const byK = k => H2.items.find(i => i.k === k);
      const priorityKeys = new Set([
        ...(byK("dc")?.albums || []).map(x => x.k),
        ...(byK("dcr")?.albums || []).map(x => x.k),
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
        body: `<div class="confirm">${groups.map((g, i) => `<div class="alb-row"><div class="alb-main"><strong>${g.map(v => `“${esc(v.name)}”`).join(" × ")}</strong> <span class="muted">${g.map(v => faixas(v.count)).join(" · ")}</span></div><div class="alb-btns"><button class="gbtn" type="button" data-join="${i}">Juntar</button></div></div>`).join("")}
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

if (STORE && ssGet("health") === "1"){ ssDel("health"); setTimeout(openHealth, 1300); }
/* a Apple busca sozinha o que falta: a data dos álbuns próximos do mesmo artista que ainda não foram conferidos com ela (1 busca por álbum, na fila das capas;
   sem gastar o Spotify). Se a Apple trouxer a mesma data, o álbum sai da lista sozinho */
if (STORE){
  const need = new Map();
  for (const al of sameDayAlbums(BY_PLAYLIST)) if (!al.apple && !(al.k in ADATES) && !need.has(al.k)) need.set(al.k, al);
  for (const [k, al] of need) coverQueue.push({job: async () => {
    const r = pickAlbum(await itunes(`search?entity=album&limit=10&term=${encodeURIComponent(al.art + " " + al.album)}`), al.art, al.album, 3);   // só vale o mesmo álbum
    ADATES[k] = r && r.releaseDate ? String(r.releaseDate).slice(0, 10) : ""; saveADates();
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
