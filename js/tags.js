/* tags.js — tag popover, import/export, toolbar button (Task 5) */

/* ---- tag pill color ---- */
function tagColor(tag){
  let h = 0; for (let i = 0; i < tag.length; i++) h = (h * 31 + tag.charCodeAt(i)) & 0x7FFFFFFF;
  return `hsl(${h % 360},55%,62%)`;
}

/* ---- tag popover ---- */
let _pop = null;
function closeTagPop(){ if (_pop){ _pop.remove(); _pop = null; } }
document.addEventListener("click", e => { if (_pop && !_pop.contains(e.target) && !e.target.closest(".tag-btn") && !e.target.closest(".hrt-btn")) closeTagPop(); }, true);
document.addEventListener("keydown", e => { if (e.key === "Escape") closeTagPop(); });

/* generic pop builder */
function _buildTagPopover({ title, getTags, addTag, removeTag, triggerEvent, onDone }){
  closeTagPop();
  const pop = document.createElement("div");
  pop.className = "tag-pop"; pop.setAttribute("role", "dialog"); pop.setAttribute("aria-label", "Categorias");
  _pop = pop;

  function render(){
    const tags = getTags();
    const suggestions = allTagNames().filter(n => !tags.includes(n)).slice(0, 8);
    pop.innerHTML = `<div class="tp-head"><span class="tp-title">${title}</span><button class="tp-x" type="button" aria-label="Fechar">×</button></div>
      <div class="tp-pills">${tags.map(tag => `<span class="tag-pill" style="--tc:${tagColor(tag)}">${tag}<button class="tp-del" data-tag="${tag}" type="button" aria-label="Remover ${tag}">×</button></span>`).join("") || '<span class="tp-empty">Sem categorias</span>'}</div>
      <div class="tp-add"><input class="tp-inp" type="text" placeholder="Nova categoria…" maxlength="24" aria-label="Nova categoria"><button class="tp-ok" type="button" aria-label="Adicionar">+</button></div>
      ${suggestions.length ? `<div class="tp-sugg">${suggestions.map(s => `<button class="tp-sg" data-tag="${s}" type="button" style="--tc:${tagColor(s)}">${s}</button>`).join("")}</div>` : ""}`;
    const inp = pop.querySelector(".tp-inp");
    inp.addEventListener("keydown", e => { if (e.key === "Enter"){ e.preventDefault(); doAdd(); } });
    pop.querySelector(".tp-ok").addEventListener("click", doAdd);
    pop.querySelectorAll(".tp-del").forEach(b => b.addEventListener("click", () => { removeTag(b.dataset.tag); if (onDone) onDone(); render(); }));
    pop.querySelectorAll(".tp-sg").forEach(b => b.addEventListener("click", () => { addTag(b.dataset.tag); if (onDone) onDone(); inp.focus(); render(); }));
    pop.querySelector(".tp-x").addEventListener("click", closeTagPop);
    function doAdd(){
      const v = inp.value.trim(); if (!v || v.length > 24) return;
      addTag(v); if (onDone) onDone(); inp.value = ""; render();
    }
  }

  render();
  document.body.appendChild(pop);

  const rect = triggerEvent.target.getBoundingClientRect();
  const pw = 280, margin = 8;
  let left = rect.left, top = rect.bottom + margin;
  if (left + pw > window.innerWidth - margin) left = window.innerWidth - pw - margin;
  if (left < margin) left = margin;
  if (top + 260 > window.innerHeight - margin) top = rect.top - 260 - margin;
  pop.style.left = left + "px"; pop.style.top = top + "px";
  pop.querySelector(".tp-inp").focus();
}

window.openTagPopover = function(t, triggerEvent, onDone){
  _buildTagPopover({
    title: "Categorias",
    getTags: () => trackTagsOf(t),
    addTag: tag => addTagToTrack(t, tag),
    removeTag: tag => removeTagFromTrack(t, tag),
    triggerEvent, onDone
  });
};

window.openBandTagPopover = function(band, triggerEvent, onDone){
  _buildTagPopover({
    title: `Categorias · ${band}`,
    getTags: () => bandTagsOf(band),
    addTag: tag => addTagToBand(band, tag),
    removeTag: tag => removeTagFromBand(band, tag),
    triggerEvent, onDone
  });
};

window.openAlbumTagPopover = function(album, triggerEvent, onDone){
  _buildTagPopover({
    title: `Categorias · ${album}`,
    getTags: () => albumTagsOf(album),
    addTag: tag => addTagToAlbum(album, tag),
    removeTag: tag => removeTagFromAlbum(album, tag),
    triggerEvent, onDone
  });
};

window.openGenreTagPopover = function(genre, triggerEvent, onDone){
  const label = genre.charAt(0).toUpperCase() + genre.slice(1);
  _buildTagPopover({
    title: `Categorias · ${label}`,
    getTags: () => genreTagsOf(genre),
    addTag: tag => addTagToGenre(genre, tag),
    removeTag: tag => removeTagFromGenre(genre, tag),
    triggerEvent, onDone
  });
};

/* ---- suggest removing categories when un-liking ---- */
window.maybySuggestRemoveCategories = function({ getTags, removeAllTags, label, onDone }){
  const tags = getTags();
  if (!tags.length) return;
  const body = document.createElement("div");
  body.innerHTML = `<p style="margin:0 0 12px;font-size:14px">Remover <strong>${esc(label)}</strong> das categorias?</p>
    <div class="tms-pills" style="margin-bottom:18px">${tags.map(tag => `<span class="tag-pill" style="--tc:${tagColor(tag)}">${tag}</span>`).join("")}</div>
    <div style="display:flex;gap:8px;justify-content:flex-end">
      <button class="gbtn" type="button" id="rc-keep">Manter</button>
      <button class="pbtn" type="button" id="rc-remove">Remover</button>
    </div>`;
  const md = openModal({ title: "Remover das categorias?", body, size: "sm" });
  body.querySelector("#rc-keep").addEventListener("click", () => md.close());
  body.querySelector("#rc-remove").addEventListener("click", () => {
    removeAllTags(); if (onDone) onDone(); md.close();
  });
};

/* ---- export / import tags ---- */
function exportTags(){
  const data = JSON.parse(localStorage.getItem("catalogo-musical:tags") || "null") || {musicas: {}, bandas: {}, albuns: {}, generos: {}};
  const json = JSON.stringify(data, null, 2);
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([json], {type: "application/json"}));
  a.download = "categorias.json"; document.body.appendChild(a); a.click();
  setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1500);
  if (typeof toast === "function") toast("Categorias exportadas");
}

function importTagsFromFile(file){
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const obj = JSON.parse(e.target.result);
      if (!obj || typeof obj !== "object" || !obj.musicas) throw new Error("formato inválido");
      for (const [k, v] of Object.entries(obj.musicas || {})){
        if (!TAGS.musicas[k]) TAGS.musicas[k] = v;
        else { if (v.f) TAGS.musicas[k].f = 1; if (v.t) { TAGS.musicas[k].t = [...new Set([...(TAGS.musicas[k].t || []), ...v.t])]; } }
      }
      for (const [k, v] of Object.entries(obj.bandas || {})){
        if (!TAGS.bandas[k]) TAGS.bandas[k] = v;
        else { if (v.f) TAGS.bandas[k].f = 1; if (v.t) { TAGS.bandas[k].t = [...new Set([...(TAGS.bandas[k].t || []), ...v.t])]; } }
      }
      if (!TAGS.albuns) TAGS.albuns = {};
      if (!TAGS.generos) TAGS.generos = {};
      for (const [k, v] of Object.entries(obj.albuns || {})){
        if (!TAGS.albuns[k]) TAGS.albuns[k] = v;
        else { if (v.f) TAGS.albuns[k].f = 1; if (v.t) { TAGS.albuns[k].t = [...new Set([...(TAGS.albuns[k].t || []), ...v.t])]; } }
      }
      for (const [k, v] of Object.entries(obj.generos || {})){
        if (!TAGS.generos[k]) TAGS.generos[k] = v;
        else { if (v.f) TAGS.generos[k].f = 1; if (v.t) { TAGS.generos[k].t = [...new Set([...(TAGS.generos[k].t || []), ...v.t])]; } }
      }
      saveTags();
      if (typeof toast === "function") toast("Categorias importadas com sucesso");
      if (typeof renderRank === "function") renderRank();
    } catch(err) {
      if (typeof toast === "function") toast("Erro ao importar: " + err.message);
    }
  };
  reader.readAsText(file);
}

/* ---- toolbar #dt-tags button ---- */
(function(){
  const btn = document.getElementById("dt-tags");
  if (!btn) return;

  btn.addEventListener("click", function(){
    let groupBy = "categoria";
    let sortBy  = "quantidade";
    let filterText = "";
    let compact = true;
    const showTypes = { faixa: true, banda: true, album: true, genero: true };

    const body = document.createElement("div");
    body.className = "fav-list-modal";
    const md = openModal({ title: "Favoritas e Categorias", body, size: "md" });

    function getFavItems(){
      const items = [];
      if (typeof T !== "undefined"){
        T.forEach(t => {
          if (typeof isFavTrack === "function" && isFavTrack(t)){
            items.push({
              type: "faixa",
              label: t.title || "—",
              artist: (t.bands || []).join(", "),
              album: t.album || "",
              genres: t.ge || [],
              cats: typeof trackTagsOf === "function" ? trackTagsOf(t) : [],
              n: t.n || 0,
              bandKey: (t.bands || [])[0] || "__outros__",
              albumKey: t.album || "__outros__",
              genreKeys: t.ge && t.ge.length ? t.ge : ["__outros__"]
            });
          }
        });
      }
      Object.entries(TAGS.bandas || {}).forEach(([k, v]) => {
        if (v.f) items.push({ type:"banda", label:k, artist:k, album:"", genres:[], cats:v.t||[], n:0, bandKey:k, albumKey:"__outros__", genreKeys:["__outros__"] });
      });
      Object.entries(TAGS.albuns || {}).forEach(([k, v]) => {
        if (v.f) items.push({ type:"album", label:k, artist:"", album:k, genres:[], cats:v.t||[], n:0, bandKey:"__outros__", albumKey:k, genreKeys:["__outros__"] });
      });
      Object.entries(TAGS.generos || {}).forEach(([k, v]) => {
        if (v.f) items.push({ type:"genero", label:k, artist:"", album:"", genres:[k], cats:v.t||[], n:0, bandKey:"__outros__", albumKey:"__outros__", genreKeys:[k] });
      });
      return items;
    }

    function buildGroups(items){
      const map = {};
      const add = (k, item) => { if (!map[k]) map[k] = []; map[k].push(item); };
      if (groupBy === "categoria"){
        items.forEach(item => item.cats.length ? item.cats.forEach(c => add(c, item)) : add("__sem__", item));
      } else if (groupBy === "banda"){
        items.forEach(item => add(item.bandKey, item));
      } else if (groupBy === "album"){
        items.forEach(item => add(item.albumKey, item));
      } else {
        items.forEach(item => item.genreKeys.forEach(g => add(g, item)));
      }
      const special = ["__sem__", "__outros__"];
      const reg  = Object.entries(map).filter(([k]) => !special.includes(k));
      const spec = Object.entries(map).filter(([k]) => special.includes(k));
      if (sortBy === "quantidade") reg.sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0], "pt-BR"));
      else if (sortBy === "nome")  reg.sort((a, b) => a[0].localeCompare(b[0], "pt-BR"));
      else reg.sort((a, b) => { const mn = arr => Math.min(...arr.map(x => x.n || Infinity)); return mn(a[1]) - mn(b[1]); });
      spec.sort(([a]) => a === "__outros__" ? -1 : 1);
      return [...reg, ...spec];
    }

    const cap = s => s ? s.charAt(0).toUpperCase() + s.slice(1) : s;
    const TLBL = { faixa: "faixa", banda: "banda", album: "álbum", genero: "gênero" };

    function renderList(){
      let items = getFavItems().filter(item => showTypes[item.type]);
      if (filterText){
        const q = filterText.toLowerCase();
        items = items.filter(item =>
          item.label.toLowerCase().includes(q) ||
          item.artist.toLowerCase().includes(q) ||
          item.album.toLowerCase().includes(q) ||
          item.cats.some(c => c.toLowerCase().includes(q)));
      }
      const listEl = body.querySelector(".flm-list");
      listEl.className = `flm-list${compact ? " compact" : ""}`;
      if (!items.length){
        const tot = getFavItems().length;
        listEl.innerHTML = tot
          ? `<p class="flm-empty">Nenhum resultado para os filtros aplicados.</p>`
          : `<p class="flm-empty">Nenhum favorito ainda.<br>Use os corações ♥ para marcar faixas, bandas, álbuns ou gêneros.</p>`;
        return;
      }
      listEl.innerHTML = buildGroups(items).map(([gk, gitems]) => {
        const gl = gk === "__sem__" ? "Sem categoria" : gk === "__outros__" ? "Outros" : cap(gk);
        return `<div class="flm-group">
          <div class="flm-group-hd">
            <span class="flm-group-name">${esc(gl)}</span>
            <span class="flm-group-count">${gitems.length}</span>
          </div>
          <div class="flm-group-items">${gitems.map(item => {
            const sub = item.type === "faixa"
              ? [item.artist, item.album].filter(Boolean).join(" · ")
              : "";
            const catHtml = item.cats.map(c =>
              `<span class="tag-pill" style="--tc:${tagColor(c)};font-size:10px;padding:1px 6px">${esc(c)}</span>`
            ).join("");
            return `<div class="flm-item">
              <span class="flm-tp flm-tp-${item.type}">${TLBL[item.type]}</span>
              <span class="flm-name">${esc(item.label)}${sub ? `<span class="flm-sub"> · ${esc(sub)}</span>` : ""}</span>
              <span class="flm-extra">${catHtml}</span>
            </div>`;
          }).join("")}</div>
        </div>`;
      }).join("");
    }

    body.innerHTML = `
      <div class="flm-top">
        <div class="flm-ctrl-row">
          <div class="flm-ctrl-seg">
            <span class="flm-lbl">Agrupar</span>
            <div class="seg-btns" data-ctrl="group">
              <button data-val="categoria" class="seg-btn on">Categoria</button>
              <button data-val="banda"     class="seg-btn">Banda</button>
              <button data-val="album"     class="seg-btn">Álbum</button>
              <button data-val="genero"    class="seg-btn">Gênero</button>
            </div>
          </div>
          <div class="flm-ctrl-seg">
            <span class="flm-lbl">Ordenar</span>
            <div class="seg-btns" data-ctrl="sort">
              <button data-val="quantidade" class="seg-btn on">Quantidade</button>
              <button data-val="nome"       class="seg-btn">Nome</button>
              <button data-val="playlist"   class="seg-btn">Playlist</button>
            </div>
          </div>
          <button class="gbtn" type="button" id="flm-expand" style="margin-left:auto">Mostrar todos os dados</button>
        </div>
        <div class="flm-ctrl-row">
          <input class="flm-search" type="search" placeholder="Buscar…" autocomplete="off">
          <div class="flm-type-row">
            <button class="flm-type-btn on" data-type="faixa">Faixas</button>
            <button class="flm-type-btn on" data-type="banda">Bandas</button>
            <button class="flm-type-btn on" data-type="album">Álbuns</button>
            <button class="flm-type-btn on" data-type="genero">Gêneros</button>
          </div>
        </div>
      </div>
      <div class="flm-list compact"></div>
      <div class="flm-foot">
        <button class="gbtn" type="button" id="flm-exp">${ICON.down} Exportar</button>
        <button class="gbtn" type="button" id="flm-imp">${ICON.up} Importar</button>
        <input type="file" id="flm-file" accept=".json" style="display:none">
        <span class="sp"></span>
        <button class="gbtn" type="button" id="flm-import-list">♥ Importar favoritas</button>
      </div>`;

    renderList();

    body.querySelectorAll("[data-ctrl] .seg-btn").forEach(b => b.addEventListener("click", () => {
      const ctrl = b.closest("[data-ctrl]").dataset.ctrl;
      b.closest("[data-ctrl]").querySelectorAll(".seg-btn").forEach(x => x.classList.remove("on"));
      b.classList.add("on");
      if (ctrl === "group") groupBy = b.dataset.val; else sortBy = b.dataset.val;
      renderList();
    }));
    body.querySelectorAll(".flm-type-btn").forEach(b => b.addEventListener("click", () => {
      b.classList.toggle("on"); showTypes[b.dataset.type] = b.classList.contains("on"); renderList();
    }));
    body.querySelector(".flm-search").addEventListener("input", e => {
      filterText = e.target.value.trim(); renderList();
    });
    body.querySelector("#flm-expand").addEventListener("click", () => {
      compact = !compact;
      body.querySelector(".flm-list").classList.toggle("compact", compact);
      body.querySelector("#flm-expand").textContent = compact ? "Mostrar todos os dados" : "Ocultar extras";
    });
    body.querySelector("#flm-exp").addEventListener("click", exportTags);
    body.querySelector("#flm-imp").addEventListener("click", () => body.querySelector("#flm-file").click());
    body.querySelector("#flm-file").addEventListener("change", e => {
      const f = e.target.files[0]; if (f){ importTagsFromFile(f); md.close(); }
    });
    body.querySelector("#flm-import-list").addEventListener("click", () => openImportFavoritesModal(() => renderList()));
  });
})();

/* ---- importar favoritas por lista de links/nomes ---- */
function openImportFavoritesModal(onDone) {
  const bodyEl = document.createElement("div");
  bodyEl.style.cssText = "display:flex;flex-direction:column;gap:14px";

  const desc = document.createElement("p");
  desc.style.cssText = "color:#8fa59a;font-size:14px;margin:0";
  desc.textContent = "Cole links de faixas, de uma playlist inteira do Spotify, ou nomes de músicas (um por linha). Todas as encontradas no seu catálogo serão favoritadas.";

  const ta = document.createElement("textarea");
  ta.rows = 10;
  ta.placeholder = "https://open.spotify.com/track/...\nhttps://open.spotify.com/playlist/...\nou Música - Artista";
  ta.setAttribute("autofocus", "");
  ta.style.cssText = "width:100%;box-sizing:border-box;background:#06140f;border:1px solid #1a3a2e;border-radius:8px;padding:10px;color:#e8f2ed;font-size:13px;font-family:monospace;resize:vertical;outline:none;line-height:1.5";

  const resDiv = document.createElement("div");
  resDiv.style.cssText = "display:none;background:#0a1c16;border:1px solid #1a3a2e;border-radius:8px;padding:12px;font-size:13px;line-height:1.6;max-height:200px;overflow-y:auto";

  bodyEl.appendChild(desc);
  bodyEl.appendChild(ta);
  bodyEl.appendChild(resDiv);

  const foot = document.createElement("div");
  foot.className = "mfrow";
  foot.innerHTML = `<span class="sp"></span><button class="gbtn" type="button" id="ifav-cancel">Cancelar</button><button class="pbtn" type="button" id="ifav-confirm">Favoritar</button>`;

  const md = openModal({ title: "Importar Favoritas", body: bodyEl, foot, size: "sm" });
  foot.querySelector("#ifav-cancel").addEventListener("click", () => md.close());
  foot.querySelector("#ifav-confirm").addEventListener("click", async () => {
    const raw = ta.value.trim();
    if (!raw) return;
    const btn = foot.querySelector("#ifav-confirm");
    btn.disabled = true;

    // Separar links de playlist dos demais
    const lines = raw.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
    const plIds = [], otherLines = [];
    for (const ln of lines) {
      const pm = ln.match(/playlist[/:]([A-Za-z0-9]{22})/);
      if (pm) plIds.push(pm[1]); else otherLines.push(ln);
    }

    let extraIds = [], fetchError = null;
    if (plIds.length) {
      let creds = typeof loadSpotifyCreds === "function" ? loadSpotifyCreds() : {};

      // Se credenciais não salvas, checar se foram preenchidas inline; senão mostrar campos
      if (!creds.id || !creds.secret) {
        const cidEl = bodyEl.querySelector("#ifav-cid");
        const secEl = bodyEl.querySelector("#ifav-sec");
        if (cidEl && secEl) {
          // Já existem campos — ler e salvar
          const id = cidEl.value.trim(), secret = secEl.value.trim();
          if (!id || !secret) { cidEl.focus(); btn.disabled = false; btn.textContent = "Favoritar"; return; }
          if (typeof saveSpotifyCreds === "function") saveSpotifyCreds(id, secret);
          creds = {id, secret};
          bodyEl.querySelector("#ifav-credbox").remove();
        } else {
          // Primeira vez sem creds: injetar campos e aguardar novo clique
          btn.disabled = false; btn.textContent = "Favoritar";
          const credBox = document.createElement("div");
          credBox.id = "ifav-credbox";
          credBox.style.cssText = "background:#0a1c16;border:1px solid #1a3a2e;border-radius:8px;padding:12px;display:flex;flex-direction:column;gap:8px;font-size:13px";
          credBox.innerHTML = `<p style="color:#fbbf24;margin:0 0 6px">Para importar uma playlist, informe suas credenciais do Spotify:</p>
            <a href="https://developer.spotify.com/dashboard" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:6px;background:#1DB954;color:#06140f;font-weight:700;font-size:12px;padding:5px 12px;border-radius:999px;text-decoration:none;width:fit-content">Abrir Spotify Developer Dashboard ↗</a>
            <label style="color:#8fa59a;font-size:12px">Client ID<input id="ifav-cid" type="text" autocomplete="off" spellcheck="false" placeholder="1a2b3c…" style="display:block;width:100%;box-sizing:border-box;margin-top:3px;background:#06140f;border:1px solid #1a3a2e;border-radius:6px;padding:6px 8px;color:#e8f2ed;font-size:13px;outline:none"></label>
            <label style="color:#8fa59a;font-size:12px">Client Secret<input id="ifav-sec" type="password" autocomplete="off" spellcheck="false" placeholder="••••••••••••" style="display:block;width:100%;box-sizing:border-box;margin-top:3px;background:#06140f;border:1px solid #1a3a2e;border-radius:6px;padding:6px 8px;color:#e8f2ed;font-size:13px;outline:none"></label>`;
          bodyEl.appendChild(credBox);
          setTimeout(() => credBox.querySelector("#ifav-cid").focus(), 50);
          return;
        }
      }

      btn.textContent = "Buscando playlist…";
      resDiv.style.display = "block";
      resDiv.innerHTML = `<p style="color:#8fa59a;margin:0">Buscando faixas da playlist no Spotify…</p>`;
      try {
        const token = await spotifyToken(creds.id, creds.secret);
        const {rows} = await spotifyFetchPlaylistTracks(plIds, token, null, null, null);
        extraIds = rows.map(r => r.id).filter(Boolean);
      } catch (e) {
        fetchError = `Erro ao buscar a playlist: ${e.message}`;
      }
    }

    const r = applyImportFavorites([...extraIds, ...otherLines].join("\n"));
    let html = "";
    if (fetchError)    html += `<p style="color:#f87171;margin:0 0 4px">⚠ ${esc(fetchError)}</p>`;
    if (r.added)       html += `<p style="color:#1DB954;margin:0 0 4px">✓ ${r.added} música${r.added!==1?"s":""} favoritada${r.added!==1?"s":""}</p>`;
    if (r.alreadyFav)  html += `<p style="color:#8fa59a;margin:0 0 4px">↩ ${r.alreadyFav} já eram favoritas</p>`;
    if (r.notFound.length) html += `<p style="color:#f87171;margin:0 0 4px">⚠ ${r.notFound.length} não encontrada${r.notFound.length!==1?"s":""} na sua playlist (não estão no seu catálogo):</p><ul style="margin:0 0 4px;padding-left:16px;font-size:12px;color:#f87171">${r.notFound.slice(0,20).map(x=>`<li>${esc(x)}</li>`).join("")}${r.notFound.length>20?`<li>…e mais ${r.notFound.length-20}</li>`:""}</ul>`;
    if (r.stale.length) html += `<p style="color:#fbbf24;margin:0">⚠ ${r.stale.length} favorita${r.stale.length!==1?"s":""} existente${r.stale.length!==1?"s":""} sem correspondência no catálogo atual</p>`;
    if (!html) html = `<p style="color:#8fa59a;margin:0">Nenhuma alteração realizada.</p>`;
    resDiv.style.display = "block";
    resDiv.innerHTML = html;
    if (r.added > 0 || r.alreadyFav > 0) {
      btn.textContent = "Feito ✓";
      if (onDone) onDone();
    } else {
      btn.disabled = false;
      btn.textContent = "Favoritar";
    }
  });
}

function applyImportFavorites(rawText) {
  const lines = rawText.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
  const tracks = typeof BY_PLAYLIST !== "undefined" ? BY_PLAYLIST : [];

  const byId  = new Map();
  const byKey = new Map(); // "title|firstartist" → track
  for (const t of tracks) {
    if (t.m && t.m.id) byId.set(t.m.id, t);
    const a0 = (typeof splitArtists === "function" ? splitArtists(t.artist||"") : [t.artist||""])[0] || "";
    const k = (t.title||"").trim().toLowerCase() + "|" + a0.toLowerCase().trim();
    if (!byKey.has(k)) byKey.set(k, t);
    // title-only fallback key
    const kt = (t.title||"").trim().toLowerCase() + "|~";
    if (!byKey.has(kt)) byKey.set(kt, t);
  }

  const toFav = new Set();
  const notFound = [];

  for (const line of lines) {
    const idM = line.match(/(?:track[/:]|track=)([A-Za-z0-9]{22})/);
    if (idM) { const t = byId.get(idM[1]); if (t) toFav.add(t); else notFound.push(line); continue; }
    if (/^[A-Za-z0-9]{22}$/.test(line)) { const t = byId.get(line); if (t) { toFav.add(t); continue; } }

    let title, artist;
    const tabI = line.indexOf("\t");
    if (tabI >= 0) { title = line.slice(0, tabI).trim(); artist = line.slice(tabI+1).trim(); }
    else { const sm = line.match(/\s[-–—]\s/); if (sm) { title = line.slice(0, sm.index).trim(); artist = line.slice(sm.index+sm[0].length).trim(); } else { title = line; artist = ""; } }

    const a0 = artist ? (typeof splitArtists === "function" ? splitArtists(artist)[0] : artist).toLowerCase().trim() : "";
    const k  = title.toLowerCase() + "|" + a0;
    const kt = title.toLowerCase() + "|~";
    if (byKey.has(k))  { toFav.add(byKey.get(k)); continue; }
    if (byKey.has(kt)) { toFav.add(byKey.get(kt)); continue; }
    notFound.push(line);
  }

  let added = 0, alreadyFav = 0;
  for (const t of toFav) {
    const e = tagsEntry(t, true);
    if (e.f) alreadyFav++; else { e.f = 1; added++; }
  }
  if (added > 0) saveTags();

  // stale: favoritas cujas chaves não batem com nenhuma faixa do catálogo atual
  const stale = [];
  for (const [k, v] of Object.entries(TAGS.musicas || {})) {
    if (!v.f) continue;
    if (/^[A-Za-z0-9]{22}$/.test(k)) { if (!byId.has(k)) stale.push(k); }
    else { if (!byKey.has(k) && !byKey.has(k.split("|")[0]+"|~")) stale.push(k); }
  }

  return { added, alreadyFav, notFound, stale };
}
