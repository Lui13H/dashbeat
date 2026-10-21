/* Saúde da playlist: uma tela que mostra o que está faltando ou sujo na playlist, com botão de correção em cada item.
   Reaproveita o que o painel já tem (script.js carrega antes): BY_PLAYLIST, NI, needsUpdate, needsLink, genreTargets, similarTitles, normC,
   splitArtistsAll, openDataUpdate, openDups, openFixOrder, askReverse, openModal, songTable, faixas, nf, pct, esc.
   Nenhuma ação gasta busca sozinha: os botões só abrem as telas que já pedem confirmação. */
(() => {
"use strict";
const HEALTH_W = {a: 25, b: 5, c: 10, e: 15, f: 10, g: 10, h: 5, cv: 5, ad: 5, au: 5};   // peso de cada verificação na nota (soma 95: nunca zera só por isso; peso 0 = só informa)
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
      : m.act === "aauto" ? `<button class="gbtn" type="button" data-act="dups" data-o="aauto">Revisar álbuns</button>`
      : m.act === "dups" ? `<button class="gbtn" type="button" data-act="dups" data-o="dups">Revisar duplicadas</button>`
      : m.act === "spell" ? `<button class="gbtn" type="button" data-act="spell" data-k="${it.k}">Juntar nomes (${nf(it.count)})</button>`
      : `<button class="gbtn" type="button" data-act="list" data-k="${it.k}">Ver as ${nf(it.count)}</button>`;
    return `<li class="sd-i ${it.level}"><span class="sd-dot" aria-hidden="true">${it.level === "warn" ? "!" : "i"}</span><div class="sd-tx"><b>${m.t}</b><span>${m.d(it.count)}</span></div><span class="sd-lv">${LEVEL[it.level]}</span><div class="sd-act">${btn}</div></li>`;
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
window.healthChecks = healthChecks;   // usado nos testes
const btn = $("#dt-health");
if (btn){
  btn.innerHTML = `<svg width="15" height="15" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 1.8 2.6 3.6v4.1c0 3.1 2.2 5.5 5.4 6.5 3.2-1 5.4-3.4 5.4-6.5V3.6z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" fill="none"/><path d="M4.8 8.2h1.9l1-2.1 1.5 3.8 1-1.7h1.2" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg><span>Saúde</span>`;
  btn.hidden = !STORE;   // na playlist de exemplo não há o que consertar
  btn.addEventListener("click", openHealth);
}
})();
