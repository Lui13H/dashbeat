/* Saúde da playlist: uma tela que mostra o que está faltando ou sujo na playlist, com botão de correção em cada item.
   Reaproveita o que o painel já tem (script.js carrega antes): BY_PLAYLIST, NI, needsUpdate, needsLink, genreTargets, similarTitles, normC,
   splitArtistsAll, openDataUpdate, openDups, openFixOrder, askReverse, openModal, songTable, faixas, nf, pct, esc.
   Nenhuma ação gasta busca sozinha: os botões só abrem as telas que já pedem confirmação. */
(() => {
"use strict";
const HEALTH_W = {a: 25, b: 5, c: 10, e: 15, f: 10, g: 10, h: 5, cv: 5, ad: 5, au: 5, sg: 0, dc: 5, dr: 5, an: 0};   // peso de cada verificação na nota (soma 105: nunca zera só por isso; peso 0 = só informa)
const FULL_AT = 0.25;                                                       // com 25% das faixas afetadas o item já custa o peso inteiro
const MAX_SEC = 20 * 60;

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

function healthChecks(list = BY_PLAYLIST){
  const N = list.length;
  const noData = list.filter(t => !t.m && t.artist !== NI && !!t.title);
  const noLink = list.filter(needsLink);
  // a Apple cobre o gênero só temporariamente (pra gráficos e insights): continua pendente até o Spotify classificar
  const genres = genreTargets(list.map(t => ({artist: t.artist, meta: t.m})));
  const ni = list.filter(t => t.artist === NI || t.albumRaw === NI || !t.dateRaw);
  const sim = similarTitles(), dupTracks = uniq(sim.dups.flatMap(x => x.rs));
  const oddDur = list.filter(t => t.sec === 0 || t.sec > MAX_SEC);
  const sugs = list.filter(t => t.m && t.m.ty && t.m.ty !== "album" && ASING[singleKey(t)] && ASING[singleKey(t)].album && !ASING_IGN.has(singleKey(t)));   // sugestão da Apple: não pesa na nota
  const altList = altAlbums(list), sameDay = sameDayAlbums(list), review = list.filter(t => t.dfix);   // dfix: data corrigida pelo site, à espera de conferência manual
  const spell = artistSpellings(list), ai = ALBUM_INFO, autoG = ai.groups.filter(g => !g.confirmed);
  const mk = (k, count, frac, level, extra) => ({k, count, frac, level: count ? level : "ok", w: HEALTH_W[k], ...extra});
  const items = [
    mk("a", noData.length, noData.length / N, "warn", {tracks: noData}),
    mk("b", noLink.length, noLink.length / N, "help", {tracks: noLink}),
    mk("c", genres.length, Math.min(1, genres.length / Math.max(1, uniq(list.flatMap(t => t.bands)).length)), "help", {artists: genres}),
    mk("e", ni.length, ni.length / N, "warn", {tracks: ni}),
    mk("f", sim.dups.length, dupTracks.length / N, "warn", {tracks: dupTracks, groups: sim.dups}),
    mk("g", oddDur.length, oddDur.length / N, "warn", {tracks: oddDur}),
    mk("cv", sim.covers.length, uniq(sim.covers.flatMap(x => x.rs)).length / N, "warn", {tracks: uniq(sim.covers.flatMap(x => x.rs))}),   // dúvida do site: pesa na nota até a pessoa classificar
    mk("ad", ai.doubts.length, Math.min(1, ai.doubts.reduce((n, e) => n + e.ca + e.cb, 0) / N), "warn", {}),
    mk("au", autoG.length, Math.min(1, autoG.reduce((n, g) => n + g.variants.reduce((m, v) => m + v.count, 0), 0) / N), "warn", {}),
    mk("sg", sugs.length, 0, "help", {tracks: sugs}),
    mk("dc", sameDay.length, sameDay.filter(x => x.apple || ADATES[x.k] !== undefined).reduce((n, x) => n + x.tracks.length, 0) / N, "warn", {albums: sameDay}),   // pesa depois da checagem automática da Apple, até a pessoa responder
    mk("dr", review.length, review.length / N, "warn", {tracks: review}),
    mk("an", altList.length, 0, "help", {albums: altList}),   // sugestão opcional: não pesa na nota
    mk("h", spell.length, Math.min(1, spell.length / Math.max(1, uniq(list.flatMap(t => t.bands)).length)), "help", {groups: spell})
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
  g: {t: "Duração suspeita", ok: "Nenhuma duração estranha.", d: n => `${plural(n, "faixa tem", "faixas têm")} duração de 0 s ou de mais de 20 minutos.`, act: "list"},
  sg: {t: "Faixas fora de álbum que são de álbum", ok: "Nenhuma faixa fora de álbum com sugestão de álbum.", d: n => `${plural(n, "faixa marcada como single, EP ou coletânea existe", "faixas marcadas como single, EP ou coletânea existem")} num álbum, segundo a Apple. É só uma sugestão: não pesa na nota.`, act: "singles"},
  dc: {t: "Álbuns próximos do mesmo artista", ok: "Nenhum álbum do mesmo artista lançado tão perto de outro.", d: n => `${plural(n, "álbum saiu", "álbuns saíram")} no mesmo ano ou a menos de 2 meses de outro álbum do mesmo artista. A Apple confere sozinha, mas se a suspeita continuar isso pesa na nota até você responder (está certo, editar a data ou reavaliar).`, act: "near"},
  dr: {t: "Datas para conferir à mão", ok: "Nenhuma data pendente de conferência.", d: n => `${plural(n, "faixa tem", "faixas têm")} uma data que o site montou (ano do Spotify com dia e mês da Apple) porque a Apple não confirmou. Confira em Editar: pesa na nota até você ajustar.`, act: "list"},
  an: {t: "Álbuns em versão alternativa", ok: "Nenhum álbum em edição alternativa.", d: (n, it) => { const sg = it.albums.filter(x => NORM[x.k] && NORM[x.k].name).length; return `${plural(n, "álbum é uma edição alternativa", "álbuns são edições alternativas")} (deluxe, remaster, expanded…). O site procura a versão normal sozinho (Apple e MusicBrainz, sem gastar o Spotify)${sg ? `, e ${plural(sg, "tem", "têm")} a versão normal disponível` : ""}. Trocar é opcional: não pesa na nota.`; }, act: "alt"},
  h: {t: "Grafias parecidas do mesmo artista", ok: "Nenhum artista escrito de duas formas.", d: n => `${plural(n, "artista aparece", "artistas aparecem")} escrito de mais de um jeito. Se for a mesma banda, junte os nomes.`, act: "spell"}
};
const LEVEL = {ok: "ok", warn: "atenção", help: "ajuda"};

function ring(score){
  const r = 44, c = 2 * Math.PI * r, col = score >= 85 ? "var(--emerald)" : score >= 60 ? "#FBBF24" : "#F87171";
  return `<svg class="sd-ring" viewBox="0 0 100 100" role="img" aria-label="Nota ${score} de 100"><circle cx="50" cy="50" r="${r}" fill="none" stroke="rgba(110,231,183,.12)" stroke-width="8"/>
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
  const body = document.createElement("div"), foot = document.createElement("div"); foot.className = "mfrow";
  body.innerHTML = `<div class="confirm"><p>A Apple achou estas faixas dentro de um álbum. Marque as que quer <strong>transformar em faixa de álbum</strong>: o álbum passa a ser o da Apple e o tipo passa a ser álbum. Nada muda até você aplicar, e isso <strong>não pesa na nota</strong>.</p>
    <div class="du-rows">${tracks.map(t => { const a = ASING[singleKey(t)]; return `<label class="chk"><input type="checkbox" data-n="${t.n}" checked><span><b>${esc(t.title)}</b> · ${esc(t.artist)}<br><span class="muted">${esc(t.albumRaw === NI ? "—" : t.albumRaw)} (${TYPE_PT[t.m.ty] || t.m.ty}) → <strong>${esc(a.album)}</strong>${a.tn && a.tt ? ` · faixa ${a.tn} de ${a.tt}` : ""}</span></span></label>`; }).join("")}</div></div>`;
  foot.innerHTML = `<button class="gbtn" type="button" data-keep>Manter como está</button><span class="sp"></span><button class="gbtn" type="button" data-c>Fechar</button><button class="pbtn" type="button" data-ok>Aplicar</button>`;
  const md = openModal({title: "Faixas que são de álbum", sub: "Sugestão da Apple", body, foot, size: "md"});
  const boxes = [...body.querySelectorAll("input")], picked = () => boxes.filter(b => b.checked).map(b => +b.dataset.n);
  const sync = () => { const k = picked().length; foot.querySelector("[data-ok]").disabled = !k; foot.querySelector("[data-keep]").disabled = !k; foot.querySelector("[data-ok]").textContent = k ? `Aplicar ${plural(k, "faixa", "faixas")}` : "Aplicar"; };
  body.addEventListener("change", sync); sync();
  foot.querySelector("[data-c]").onclick = md.close;
  // "Manter como está": a pessoa viu e quer assim, então não sugere de novo
  foot.querySelector("[data-keep]").onclick = () => { const n = new Set(picked()); tracks.filter(t => n.has(t.n)).forEach(t => ASING_IGN.add(singleKey(t))); saveASingIgn(); toast("Mantidas como estão. Não vou sugerir de novo."); md.close(); };
  foot.querySelector("[data-ok]").onclick = () => {
    const sel = picked(), by = new Map(tracks.filter(t => sel.includes(t.n)).map(t => [t.n, ASING[singleKey(t)]]));
    ssSet("health", "1");
    commitRows(currentRows().map(r => { const a = by.get(r[0]); if (!a) return r; const m = {...(r[6] || {}), ty: "album"}; if (a.tn) m.tn = a.tn; if (a.tt) m.tt = a.tt; return [r[0], r[1], r[2], a.album, r[4], r[5], m]; }), `${plural(by.size, "faixa virou", "faixas viraram")} faixa${by.size > 1 ? "s" : ""} de álbum`);
  };
}

/* ---------- álbuns do mesmo artista lançados no mesmo ano ou com menos de 2 meses de distância ---------- */
const isFull = d => /^\d{4}-\d{2}-\d{2}$/.test(d || "");
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
    for (const x of arr) if (!DREV.has(x.k) && !(!x.apple && ADATES[x.k] === x.date)){   // Apple confirmou a mesma data: some sozinho
      // edições do mesmo álbum (o site juntou ou você confirmou) e pares ainda em dúvida na revisão de álbuns não contam: lá é que se decide
      const sameAlbum = y => y.canon === x.canon || ALBUM_INFO.doubts.some(e => (e.a === x.album && e.b === y.album) || (e.a === y.album && e.b === x.album));
      const others = arr.filter(y => y !== x && !sameAlbum(y) && near(x.date, y.date));
      if (others.length) out.push({...x, other: others.map(y => y.album)});
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

// responder à suspeita: "Está certo" (as datas são essas mesmo) ou "Editar data" (vale para o álbum inteiro); some da nota quando respondido
function openNear(albums){
  const body = document.createElement("div");
  const row = (al, i) => `<div class="alb-row" data-i="${i}"><div class="alb-main"><div><strong>${esc(al.album)}</strong> <span class="alb-art">${esc(splitArtistsRaw(al.tracks[0].artist)[0])} · ${esc(al.date)}${al.apple ? " (data da Apple)" : ""}</span></div><div class="alb-why">perto de: ${esc(al.other.join(", "))}</div></div><div class="alb-btns"><button class="gbtn" type="button" data-ok="${i}">Está certo</button><button class="gbtn" type="button" data-edit="${i}">Editar data</button></div></div>`;
  body.innerHTML = `<p class="mdesc">Álbuns do mesmo artista no mesmo ano ou a menos de 2 meses um do outro. <strong>Está certo</strong> mantém as datas e tira o aviso; <strong>Editar data</strong> troca a data do álbum inteiro. Enquanto não responder, pesa na nota.</p>${albums.map(row).join("")}`;
  let changed = false;
  const md = openModal({title: "Álbuns próximos do mesmo artista", body, size: "lg", onClose: () => { if (changed) openHealth(); }});
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

/* ---------- álbum em versão alternativa → sugerir a versão normal (opcional, não pesa na nota) ---------- */
const NORM_KEY = "catalogo-musical:normal-albums", NORM_IGN_KEY = "catalogo-musical:normal-albums-ignored";   // k → {name, date, src} ou {tried: ["apple","spotify"]}
const NORM = (() => { try { return JSON.parse(localStorage.getItem(NORM_KEY) || "null") || {}; } catch (e) { return {}; } })();
const NORM_IGN = (() => { try { return new Set(JSON.parse(localStorage.getItem(NORM_IGN_KEY) || "[]")); } catch (e) { return new Set(); } })();
const saveNorm = () => { try { localStorage.setItem(NORM_KEY, JSON.stringify(NORM)); } catch (e) {} };
const saveNormIgn = () => { try { localStorage.setItem(NORM_IGN_KEY, JSON.stringify([...NORM_IGN])); } catch (e) {} };
const isAlt = name => { const c = albCore(name).join(" "); return !!c && c !== albTokens(name).join(" "); };   // tem marca de edição (deluxe, remaster…)
function altAlbums(list){
  const m = new Map();
  for (const t of list){
    if (t.artist === NI || t.albumRaw === NI || !isAlt(t.albumRaw)) continue;
    const k = adateKey(t.artist, t.albumRaw);
    if (NORM_IGN.has(k)) continue;
    // se o site já juntou com a versão normal que você tem na playlist, não há o que trocar
    const g = ALBUM_INFO.groups.find(g => g.art === albArtKey(t.artist) && g.variants.some(v => v.name === t.albumRaw));
    if (g && g.variants.some(v => !isAlt(v.name))) continue;
    if (!m.has(k)) m.set(k, {k, art: splitArtistsRaw(t.artist)[0], album: t.albumRaw, core: albCore(t.albumRaw).join(" "), tracks: []});
    m.get(k).tracks.push(t);
  }
  return [...m.values()];
}
// a versão normal: mesmo artista, nome sem marca de edição igual ao núcleo, "álbum" de verdade; o mais antigo
function pickNormalApple(results, art, core){
  const a = normC(art);
  const ok = results.filter(r => r.collectionName && albTokens(r.collectionName).join(" ") === core && !/\s-\s(single|ep)$/i.test(r.collectionName) && (() => { const ra = normC(r.artistName || ""); return ra && (ra.includes(a) || a.includes(ra)); })());
  ok.sort((x, y) => String(x.releaseDate || "9").localeCompare(String(y.releaseDate || "9")));
  return ok[0] ? {name: ok[0].collectionName, date: String(ok[0].releaseDate || "").slice(0, 10), src: "Apple"} : null;
}
/* procura sozinha, só com fontes grátis (sem login, sem gastar o Spotify), na fila das capas e nesta ordem:
   1) busca de álbum na Apple · 2) discografia do artista na Apple · 3) MusicBrainz (data original precisa).
   "auto2" em tried = as fontes grátis já foram todas tentadas; só então o Spotify (pago em requisições) é oferecido */
function pickNormalMB(j, art, core){
  const a = normC(art);
  const ok = ((j && j["release-groups"]) || []).filter(g => g.title && albTokens(g.title).join(" ") === core && !(g["secondary-types"] || []).length
    && (g["artist-credit"] || []).some(c => { const n = normC(c.name || ""); return n && (n === a || n.includes(a) || a.includes(n)); }));
  ok.sort((x, y) => String(x["first-release-date"] || "9").localeCompare(String(y["first-release-date"] || "9")));
  return ok[0] ? {name: ok[0].title, date: ok[0]["first-release-date"] || "", src: "MusicBrainz"} : null;
}
const nap = ms => new Promise(r => setTimeout(r, ms));
if (STORE){
  const need = altAlbums(BY_PLAYLIST).filter(x => { const n = NORM[x.k]; return !n || (!n.name && !(n.tried || []).includes("auto2")); });
  for (const x of need) coverQueue.push({job: async () => {
    const prev = NORM[x.k] || {}, tried = new Set(prev.tried || []);
    let r = null, ok2 = true;
    if (!tried.has("apple")) r = pickNormalApple(await itunes(`search?entity=album&limit=15&term=${encodeURIComponent(x.art + " " + x.core)}`), x.art, x.core);
    if (!r){   // 2) discografia do artista na Apple
      try {
        await nap(3200);
        const who = (await itunes(`search?entity=musicArtist&limit=5&term=${encodeURIComponent(x.art)}`)).find(a => normC(a.artistName || "") === normC(x.art));
        if (who){ await nap(3200); r = pickNormalApple((await itunes(`lookup?id=${who.artistId}&entity=album&limit=200`)).filter(a => a.wrapperType === "collection"), x.art, x.core); }
      } catch (e) { ok2 = false; }
    }
    if (!r){   // 3) MusicBrainz
      try {
        await nap(1200);
        const resp = await fetch("https://musicbrainz.org/ws/2/release-group/?query=" + encodeURIComponent(`releasegroup:"${x.core}" AND artist:"${x.art}" AND primarytype:album`) + "&fmt=json&limit=15");
        if (!resp.ok) throw new Error("mb " + resp.status);
        r = pickNormalMB(await resp.json(), x.art, x.core);
      } catch (e) { ok2 = false; }
    }
    NORM[x.k] = r || {tried: [...new Set([...tried, "apple", ...(ok2 ? ["auto2"] : [])])]}; saveNorm();
  }});
  if (need.length) pumpCovers();
}
const normDate = d => !d ? "" : d.length === 4 ? d + "-01-01" : d.length === 7 ? d + "-01" : d;
function openAltSuggestions(albums){
  const body = document.createElement("div"), foot = document.createElement("div"); foot.className = "mfrow";
  body.innerHTML = `<div class="confirm"><p>Estes álbuns são edições alternativas e a versão normal existe. Marque os que quer <strong>trocar pela versão normal</strong>: o nome do álbum (e a data de lançamento) das faixas passa a ser o da versão normal. É opcional e <strong>não pesa na nota</strong>.</p>
    <div class="du-rows">${albums.map((x, i) => { const n = NORM[x.k]; return `<label class="chk"><input type="checkbox" data-i="${i}" checked><span><b>${esc(x.album)}</b> <span class="muted">${esc(x.art)} · ${faixas(x.tracks.length)}</span><br><span class="muted">→</span> <strong>${esc(n.name)}</strong> <span class="muted">${n.date ? esc(n.date) + " · " : ""}achado em ${esc(n.src)}</span></span></label>`; }).join("")}</div></div>`;
  foot.innerHTML = `<button class="gbtn" type="button" data-keep>Manter como está</button><span class="sp"></span><button class="gbtn" type="button" data-c>Fechar</button><button class="pbtn" type="button" data-ok>Trocar</button>`;
  const md = openModal({title: "Trocar pela versão normal", sub: "Sugestão opcional", body, foot, size: "md", onClose: () => {}});
  const boxes = [...body.querySelectorAll("input")], picked = () => boxes.filter(b => b.checked).map(b => albums[+b.dataset.i]);
  const sync = () => { const k = picked().length; foot.querySelector("[data-ok]").disabled = !k; foot.querySelector("[data-keep]").disabled = !k; foot.querySelector("[data-ok]").textContent = k ? `Trocar ${plural(k, "álbum", "álbuns")}` : "Trocar"; };
  body.addEventListener("change", sync); sync();
  foot.querySelector("[data-c]").onclick = md.close;
  foot.querySelector("[data-keep]").onclick = () => { picked().forEach(x => NORM_IGN.add(x.k)); saveNormIgn(); toast("Mantidos como estão. Não vou sugerir de novo."); md.close(); };
  foot.querySelector("[data-ok]").onclick = () => {
    const by = new Map(); picked().forEach(x => x.tracks.forEach(t => by.set(t.n, NORM[x.k])));
    ssSet("health", "1");
    commitRows(currentRows().map(r => { const n = by.get(r[0]); if (!n) return r; return [r[0], r[1], r[2], n.name, r[4], normDate(n.date) || r[5], ...(r[6] ? [r[6]] : [])]; }), `${plural(picked().length, "álbum trocado", "álbuns trocados")} pela versão normal`);
  };
}
// o que a Apple não achou: pergunta ao Spotify (gasta o limite dele, então confirma antes)
function openAltSpotify(albums){
  const body = document.createElement("div"), foot = document.createElement("div"); foot.className = "mfrow";
  body.innerHTML = `<div class="confirm"><p>As fontes grátis (Apple e MusicBrainz) não acharam a versão normal destes <strong>${plural(albums.length, "álbum", "álbuns")}</strong>. Posso procurar no <strong>Spotify</strong>.</p><div class="du-rows"><div><b>${nf(albums.length)}</b><span>${albums.length === 1 ? "busca" : "buscas"} no Spotify, 1 por álbum · conta no limite dele</span></div></div><p class="muted">Nada muda nos seus dados: o resultado vira uma sugestão opcional na Saúde, que não pesa na nota.</p></div>`;
  foot.innerHTML = `<span class="sp"></span><button class="gbtn" type="button" data-c>Cancelar</button><button class="pbtn" type="button" data-go autofocus>Procurar</button>`;
  const md = openModal({title: "Procurar no Spotify", body, foot, size: "sm"});
  foot.querySelector("[data-c]").onclick = md.close;
  foot.querySelector("[data-go]").onclick = () => {
    const c = loadSpotifyCreds();
    if (SPOTIFY_ID_RE.test(c.id || "") && SPOTIFY_ID_RE.test(c.secret || "")) run(c.id, c.secret);
    else openSpotifyAppHelp({returning: hasSpotifyApp(), onDone: (id, secret) => run(id, secret)});
  };
  async function run(id, secret){
    let stop = false, done = 0, found = 0, failed = false;
    body.innerHTML = `<div class="confirm"><p id="as-st">Conectando ao Spotify…</p><div class="ht" style="margin-top:12px"><i id="as-bar" style="width:0%"></i></div><p class="muted" style="margin-top:12px">Pode parar quando quiser: o que já veio fica.</p></div>`;
    foot.innerHTML = `<span class="sp"></span><button class="gbtn" type="button" data-stop>Parar e ver o resultado</button>`;
    foot.querySelector("[data-stop]").onclick = () => { stop = true; };
    try {
      const token = await spotifyToken(id, secret);
      for (const x of albums){
        if (stop) break;
        const st = body.querySelector("#as-st"); if (!st) return;
        st.textContent = `Procurando ${done + 1} de ${albums.length}: ${x.album}`;
        const j = await spotifyGetJSON(`https://api.spotify.com/v1/search?type=album&limit=10&q=${encodeURIComponent(`album:${x.core} artist:${x.art}`)}`, token);
        const items = ((j && j.albums && j.albums.items) || []).filter(it => it.album_type === "album" && albTokens(it.name).join(" ") === x.core && (it.artists || []).some(a => normC(a.name || "") === normC(x.art)));
        items.sort((p, q) => String(p.release_date || "9").localeCompare(String(q.release_date || "9")));
        const prev = NORM[x.k] || {};
        if (items[0]){ NORM[x.k] = {name: items[0].name, date: String(items[0].release_date || ""), src: "Spotify"}; found++; }
        else NORM[x.k] = {tried: [...new Set([...(prev.tried || []), "spotify"])]};
        saveNorm(); done++;
        body.querySelector("#as-bar").style.width = (100 * done / albums.length) + "%";
      }
    } catch (e){ failed = true; }
    body.innerHTML = `<div class="confirm"><p>Procurei <strong>${nf(done)} de ${nf(albums.length)}</strong>: <strong>${nf(found)}</strong> ${found === 1 ? "tem" : "têm"} a versão normal no Spotify.${found ? " Veja em “Ver sugestões” na Saúde." : ""}</p>${failed ? `<p class="muted">Houve uma falha de conexão ou de autorização. Dá para tentar de novo mais tarde.</p>` : ""}</div>`;
    foot.innerHTML = `<span class="sp"></span><button class="pbtn" type="button" data-ok>Fechar</button>`;
    foot.querySelector("[data-ok]").onclick = () => { md.close(); openHealth(); };
  }
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
      : m.act === "alt" ? (() => { const sg = it.albums.filter(x => NORM[x.k] && NORM[x.k].name).length, sp = it.albums.filter(x => NORM[x.k] && !NORM[x.k].name && (NORM[x.k].tried || []).includes("auto2") && !(NORM[x.k].tried || []).includes("spotify")).length; return `${sg ? `<button class="gbtn" type="button" data-act="alt-sug">Ver sugestões (${nf(sg)})</button>` : ""}${sp ? `<button class="gbtn" type="button" data-act="alt-spot">Procurar também no Spotify (${nf(sp)})</button>` : ""}`; })()
      : m.act === "near" ? `<button class="gbtn" type="button" data-act="near">Responder (${nf(it.count)})</button><button class="gbtn" type="button" data-act="reeval">Reavaliar datas</button>`
      : m.act === "singles" ? `<button class="gbtn" type="button" data-act="singles">Ver sugestões (${nf(it.count)})</button>`
      : m.act === "aauto" ? `<button class="gbtn" type="button" data-act="dups" data-o="aauto">Revisar álbuns</button>`
      : m.act === "dups" ? `<button class="gbtn" type="button" data-act="dups" data-o="dups">Revisar duplicadas</button>`
      : m.act === "spell" ? `<button class="gbtn" type="button" data-act="spell" data-k="${it.k}">Juntar nomes (${nf(it.count)})</button>`
      : `<button class="gbtn" type="button" data-act="list" data-k="${it.k}">Ver as ${nf(it.count)}</button>`;
    return `<li class="sd-i ${it.level}"><span class="sd-dot" aria-hidden="true">${it.level === "warn" ? "!" : "i"}</span><div class="sd-tx"><b>${m.t}</b><span>${m.d(it.count, it)}</span></div><span class="sd-lv">${LEVEL[it.level]}</span><div class="sd-act">${btn}</div></li>`;
  };
  const order = `<li class="sd-i help"><span class="sd-dot" aria-hidden="true">i</span><div class="sd-tx"><b>Conferir a ordem</b><span>O site não consegue saber sozinho se a ordem de entrada está certa (#1 = a primeira adicionada). Confira com os links do Spotify.</span></div><span class="sd-lv">${LEVEL.help}</span><div class="sd-act"><button class="gbtn" type="button" data-act="fix">Conferir/Consertar ordem</button><button class="gbtn" type="button" data-act="rev">Inverter ordem</button></div></li>`;
  const head = bad.length
    ? `<div class="sd-top">${ring(H.score)}<div><h4>${H.score >= 85 ? "Quase tudo certo" : H.score >= 60 ? "Dá pra melhorar" : "Precisa de atenção"}</h4><p>${plural(bad.length, "verificação encontrou", "verificações encontraram")} algo em ${faixas(H.N)}.</p></div></div>`
    : `<div class="sd-top good">${ring(100)}<div><h4>Tudo certo!</h4><p>Nenhum problema encontrado nas ${faixas(H.N)}.</p></div></div>`;
  const hero = H.noSpotify ? `<div class="sd-hero"><p><strong>Nenhuma música tem dados do Spotify ainda.</strong> Um único <strong>Atualizar dados</strong> resolve o que falta de dados, links e gêneros de uma vez (você confirma as buscas antes).</p><button class="pbtn" type="button" data-act="upd">Atualizar dados</button></div>` : "";
  const shown = H.noSpotify ? H.items.filter(i => !["a", "b", "c"].includes(i.k)) : (bad.length ? H.items : H.items.filter(i => i.count && !i.w));
  body.innerHTML = `${head}${hero}<ul class="sd-list">${shown.map(row).join("")}${order}</ul>`;
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
    else if (a === "alt-sug"){ md.close(); openAltSuggestions(by("an").albums.filter(x => NORM[x.k] && NORM[x.k].name)); }
    else if (a === "alt-spot"){ md.close(); openAltSpotify(by("an").albums.filter(x => NORM[x.k] && !NORM[x.k].name && (NORM[x.k].tried || []).includes("auto2") && !(NORM[x.k].tried || []).includes("spotify"))); }
    else if (a === "near"){ md.close(); openNear(by("dc").albums); }
    else if (a === "reeval"){ md.close(); openReeval(by("dc").albums); }
    else if (a === "singles"){ md.close(); openSingles(by("sg").tracks); }
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
const btn = $("#dt-health");
if (btn){
  btn.innerHTML = `<svg width="15" height="15" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 1.8 2.6 3.6v4.1c0 3.1 2.2 5.5 5.4 6.5 3.2-1 5.4-3.4 5.4-6.5V3.6z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" fill="none"/><path d="M4.8 8.2h1.9l1-2.1 1.5 3.8 1-1.7h1.2" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg><span>Saúde</span>`;
  btn.hidden = !STORE;   // na playlist de exemplo não há o que consertar
  btn.addEventListener("click", openHealth);
}
})();
