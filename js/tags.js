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

  function openTagsModal(){
    const tags = allTagNames();
    const body = document.createElement("div");
    body.className = "tag-mgr";
    const hasTags = tags.length > 0;
    const favCount = typeof T !== "undefined" ? T.filter(t => typeof isFavT === "function" && isFavT(t)).length : 0;
    const albFavCount = Object.values(TAGS.albuns || {}).filter(v => v.f).length;
    const genFavCount = Object.values(TAGS.generos || {}).filter(v => v.f).length;

    body.innerHTML = `<div class="tms-stats">
      <div class="tms-stat"><b>${favCount}</b><span>música${favCount !== 1 ? "s" : ""} favoritada${favCount !== 1 ? "s" : ""}</span></div>
      ${albFavCount ? `<div class="tms-stat"><b>${albFavCount}</b><span>álbu${albFavCount !== 1 ? "ns" : "m"} favorito${albFavCount !== 1 ? "s" : ""}</span></div>` : ""}
      ${genFavCount ? `<div class="tms-stat"><b>${genFavCount}</b><span>gênero${genFavCount !== 1 ? "s" : ""} favorito${genFavCount !== 1 ? "s" : ""}</span></div>` : ""}
      <div class="tms-stat"><b>${tags.length}</b><span>categoria${tags.length !== 1 ? "s" : ""} criada${tags.length !== 1 ? "s" : ""}</span></div>
    </div>
    ${hasTags ? `<div class="tms-pills">${tags.map(tag => `<span class="tag-pill" style="--tc:${tagColor(tag)}">${tag}</span>`).join("")}</div>` : '<p class="muted" style="margin-top:12px">Nenhuma categoria ainda. Favorite um item para adicionar.</p>'}
    <div class="tms-actions">
      <button class="gbtn" type="button" id="tms-exp">${ICON.down} Exportar categorias</button>
      <button class="gbtn" type="button" id="tms-imp">${ICON.up} Importar categorias</button>
      <input type="file" id="tms-file" accept=".json" style="display:none">
    </div>
    <p class="muted" style="margin-top:12px;font-size:12px">As marcações ficam salvas neste navegador. Use exportar/importar para fazer backup ou transferir entre dispositivos.</p>`;

    const md = openModal({title: "Favoritas e Categorias", body, size: "sm"});
    body.querySelector("#tms-exp").addEventListener("click", exportTags);
    body.querySelector("#tms-imp").addEventListener("click", () => body.querySelector("#tms-file").click());
    body.querySelector("#tms-file").addEventListener("change", e => {
      const f = e.target.files[0]; if (f){ importTagsFromFile(f); md.close(); }
    });
  }

  btn.addEventListener("click", openTagsModal);
})();
