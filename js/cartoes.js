/* Cartões para compartilhar (estilo "Wrapped"): imagens desenhadas em <canvas> 2D, sem biblioteca. Dois formatos: vertical 1080x1350 e horizontal 1920x1080.
   Reaproveita os dados e funções do painel (script.js carrega antes): T, NN, rows(), state, groupBy, CHI, squarify, coverOf, openModal, zipStore...
   Sem requisição de rede nova: o único arquivo de fora são as capas que o painel já guardou, carregadas com crossOrigin (se o servidor não deixar, o quadrado fica sem capa em vez de travar a exportação). */
(() => {
"use strict";
const MX = 80;
const KEY_THEME = "catalogo-musical:cards-theme", KEY_NAME = "catalogo-musical:cards-name", KEY_FMT = "catalogo-musical:cards-format", KEY_TREE = "catalogo-musical:cards-tree";
const lsGet = k => { try { return localStorage.getItem(k); } catch (e) { return null; } };
const lsSet = (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} };
const FD = "Sora, 'Segoe UI', system-ui, sans-serif", FB = "Manrope, 'Segoe UI', system-ui, sans-serif";
const font = (w, s, f) => `${w} ${s}px ${f}`;

const THEMES = {
  escuro: {label: "Escuro verde", bg0: "#04100C", bg1: "#020504", glow: "rgba(16,185,129,.24)", glow2: "rgba(5,95,70,.38)", ink: "#ECFDF5", ink2: "#A9C9BC", muted: "#6E8F82",
    accent: "#6EE7B7", accent2: "#10B981", deep: "#047857", track: "rgba(110,231,183,.12)", tile: "rgba(18,44,35,.78)", line: "rgba(110,231,183,.22)", onAccent: "#022C22", light: false},
  claro: {label: "Claro", bg0: "#F5FCF8", bg1: "#D9F2E6", glow: "rgba(16,185,129,.20)", glow2: "rgba(110,231,183,.34)", ink: "#06281D", ink2: "#2F5A4A", muted: "#5B7F70",
    accent: "#059669", accent2: "#10B981", deep: "#047857", track: "rgba(5,150,105,.14)", tile: "rgba(255,255,255,.78)", line: "rgba(5,150,105,.28)", onAccent: "#FFFFFF", light: true}
};
const FORMATS = {retrato: {label: "Vertical", sub: "1080×1350", w: 1080, h: 1350}, paisagem: {label: "Horizontal", sub: "1920×1080", w: 1920, h: 1080}};
/* opções de estilo do mapa de bandas: as mesmas do gráfico do painel (caixa marcada = ligado). Começam iguais às do painel e depois ficam salvas à parte */
const TOPTS = [["nomes", "Mostrar nomes", "nolabels"], ["numeros", "Mostrar números", "nonums"], ["sombra", "Mostrar sombra", "noshadow"], ["bordas", "Bordas redondas", "flush"]];
function loadTreeOpts(){
  const o = {};
  for (const [k, , cls] of TOPTS) o[k] = typeof treeEl !== "undefined" && treeEl ? !treeEl.classList.contains(cls) : true;
  try { const saved = JSON.parse(lsGet(KEY_TREE) || "null"); if (saved) for (const [k] of TOPTS) if (typeof saved[k] === "boolean") o[k] = saved[k]; } catch (e) {}
  return o;
}
/* L descreve a área do cartão: no vertical tudo em uma coluna; no horizontal o título fica numa coluna à esquerda e o conteúdo à direita */
function layout(fmt){
  const f = FORMATS[fmt] || FORMATS.retrato, land = fmt === "paisagem";
  return {fmt, land, W: f.w, H: f.h, tw: land ? 560 : f.w - 2 * MX, cx: land ? 720 : MX, cw: land ? f.w - MX - 720 : f.w - 2 * MX};
}

/* ---------- texto que nunca estoura: reduz a fonte até caber, quebra por palavra (ou por letra) e põe reticências ---------- */
const setLS = (ctx, px) => { if ("letterSpacing" in ctx) ctx.letterSpacing = px + "px"; };
function wrap(ctx, text, width){
  const words = String(text).split(/\s+/).filter(Boolean), lines = []; let cur = "";
  for (let w of words){
    while (ctx.measureText(w).width > width && w.length > 1){
      let i = w.length; while (i > 1 && ctx.measureText(w.slice(0, i)).width > width) i--;
      if (cur){ lines.push(cur); cur = ""; }
      lines.push(w.slice(0, i)); w = w.slice(i);
    }
    if (!w) continue;
    const t = cur ? cur + " " + w : w;
    if (ctx.measureText(t).width <= width) cur = t; else { if (cur) lines.push(cur); cur = w; }
  }
  if (cur) lines.push(cur);
  return lines;
}
function fit(ctx, text, o){
  setLS(ctx, o.ls || 0);
  let lines = [], size = o.size;
  for (; size >= o.min; size -= 2){
    ctx.font = font(o.weight, size, o.family);
    lines = wrap(ctx, text, o.width);
    if (lines.length <= o.maxLines) return {size, lines};
  }
  size = o.min; ctx.font = font(o.weight, size, o.family);
  lines = wrap(ctx, text, o.width).slice(0, o.maxLines);
  let last = lines[lines.length - 1] || "";
  while (last.length > 1 && ctx.measureText(last + "…").width > o.width) last = last.slice(0, -1);
  lines[lines.length - 1] = last.replace(/[\s,.;:–-]+$/, "") + "…";
  return {size, lines};
}
function drawFit(ctx, text, x, y, o){
  const {size, lines} = fit(ctx, text, o), lh = size * (o.lh || 1.12);
  ctx.font = font(o.weight, size, o.family); setLS(ctx, o.ls || 0);
  ctx.fillStyle = o.color; ctx.textAlign = o.align || "left"; ctx.textBaseline = "alphabetic";
  lines.forEach((ln, i) => ctx.fillText(ln, x, y + size * .9 + i * lh));
  return y + lines.length * lh;
}
function rr(ctx, x, y, w, h, r){
  r = Math.max(0, Math.min(r, w / 2, h / 2)); ctx.beginPath();
  ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r); ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath();
}
const cap = s => String(s).replace(/(^|[\s\-/])(\p{L})/gu, (m, a, b) => a + b.toUpperCase());
const fmtHours = sec => { const h = sec / 3600; return h >= 10 ? `${fmtInt(Math.round(h))}h` : `${h.toFixed(1).replace(".", ",")}h`; };
const decShort = d => d < 2000 ? `${d % 100}s` : `${d}s`;
const panelBox = (ctx, t, x, y, w, h, r = 28) => { ctx.fillStyle = t.tile; rr(ctx, x, y, w, h, r); ctx.fill(); ctx.strokeStyle = t.line; ctx.lineWidth = 2; rr(ctx, x, y, w, h, r); ctx.stroke(); };

/* ---------- peças comuns ---------- */
function paintBg(ctx, t, L){
  const g = ctx.createLinearGradient(0, 0, 0, L.H); g.addColorStop(0, t.bg0); g.addColorStop(1, t.bg1);
  ctx.fillStyle = g; ctx.fillRect(0, 0, L.W, L.H);
  let r = ctx.createRadialGradient(0, 0, 0, 0, 0, 980); r.addColorStop(0, t.glow); r.addColorStop(1, "transparent"); ctx.fillStyle = r; ctx.fillRect(0, 0, L.W, L.H);
  r = ctx.createRadialGradient(L.W, L.H, 0, L.W, L.H, 1100); r.addColorStop(0, t.glow2); r.addColorStop(1, "transparent"); ctx.fillStyle = r; ctx.fillRect(0, 0, L.W, L.H);
}
function eyebrow(ctx, t, text){
  ctx.font = font(700, 26, FB); setLS(ctx, 5); ctx.fillStyle = t.muted; ctx.textAlign = "left"; ctx.textBaseline = "alphabetic";
  ctx.fillText(text.toUpperCase(), MX, 118); setLS(ctx, 0);
}
function title(ctx, t, L, text, sub){
  let y = drawFit(ctx, text, MX, 160, {weight: 800, family: FD, size: L.land ? 84 : 78, min: 50, width: L.tw, maxLines: L.land ? 5 : 2, color: t.ink, lh: 1.08, ls: -1.5});
  if (sub) y = drawFit(ctx, sub, MX, y + 12, {weight: 600, family: FB, size: 32, min: 24, width: L.tw, maxLines: L.land ? 5 : 2, color: t.ink2, lh: 1.3});
  return y;
}
function mark(ctx, t, x, cy){
  const hs = [10, 22, 38, 54, 38, 22, 10], bw = 6, gap = 5;
  hs.forEach((h, i) => {
    const g = ctx.createLinearGradient(0, cy - h / 2, 0, cy + h / 2); g.addColorStop(0, t.accent); g.addColorStop(1, t.accent2);
    ctx.fillStyle = g; rr(ctx, x + i * (bw + gap), cy - h / 2, bw, h, 3); ctx.fill();
  });
}
function footer(ctx, t, d, L){
  const ly = L.H - 136;
  ctx.strokeStyle = t.line; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(MX, ly); ctx.lineTo(L.W - MX, ly); ctx.stroke();
  mark(ctx, t, MX, L.H - 82);
  ctx.font = font(700, 36, FD); setLS(ctx, -.5); ctx.fillStyle = t.ink; ctx.textAlign = "left"; ctx.textBaseline = "alphabetic";
  ctx.fillText("Dashbeat", MX + 76, L.H - 69); setLS(ctx, 0);
  drawFit(ctx, d.scopeText, L.W - MX, L.H - 97, {weight: 600, family: FB, size: 26, min: 18, width: L.land ? 900 : 520, maxLines: 1, color: t.muted, align: "right"});
}
function bar(ctx, t, x, y, w, h, frac){
  ctx.fillStyle = t.track; rr(ctx, x, y, w, h, h / 2); ctx.fill();
  const fw = Math.max(h, w * Math.max(0, Math.min(1, frac)));
  const g = ctx.createLinearGradient(x, 0, x + w, 0); g.addColorStop(0, t.deep); g.addColorStop(1, t.accent);
  ctx.fillStyle = g; rr(ctx, x, y, fw, h, h / 2); ctx.fill();
}

/* ---------- capas (só as que o painel já guardou; sem CORS liberado a capa simplesmente não entra) ---------- */
const IMG = new Map();
function loadImg(url){
  if (IMG.has(url)) return IMG.get(url);
  const p = new Promise(res => {
    const im = new Image(); im.crossOrigin = "anonymous"; let done = false;
    const end = v => { if (!done){ done = true; res(v); } };
    im.onload = () => end(im.naturalWidth ? im : null); im.onerror = () => end(null); setTimeout(() => end(null), 8000);
    im.src = url;
  });
  IMG.set(url, p); return p;
}
function drawCover(ctx, im, x, y, w, h){
  const s = Math.max(w / im.naturalWidth, h / im.naturalHeight), sw = w / s, sh = h / s;
  ctx.drawImage(im, (im.naturalWidth - sw) / 2, (im.naturalHeight - sh) / 2, sw, sh, x, y, w, h);
}

/* ---------- os cartões ---------- */
const DRAW = {
  cover(ctx, t, d, o, L){
    eyebrow(ctx, t, "Em números");
    const named = o.name.trim(), nx = L.land ? L.cx : MX, ncw = L.land ? L.cw : L.tw;
    let y = drawFit(ctx, named ? `A playlist de ${named}` : "Minha playlist em números", MX, 160, {weight: 800, family: FD, size: L.land ? 88 : 92, min: 50, width: L.tw, maxLines: L.land ? 5 : 3, color: t.ink, lh: 1.06, ls: -2});
    if (named) drawFit(ctx, "em números", MX, y + 6, {weight: 700, family: FD, size: 50, min: 34, width: L.tw, maxLines: 1, color: t.accent, ls: -1});
    const nTxt = fmtInt(d.N), {size} = fit(ctx, nTxt, {weight: 800, family: FD, size: 300, min: 150, width: ncw, maxLines: 1, ls: -8});
    ctx.font = font(800, size, FD); setLS(ctx, -8); ctx.textAlign = "left"; ctx.textBaseline = "alphabetic";
    const by = L.land ? 400 : 790, g = ctx.createLinearGradient(0, by - size, 0, by); g.addColorStop(0, t.accent); g.addColorStop(1, t.accent2);
    ctx.fillStyle = g; ctx.fillText(nTxt, nx - 6, by); setLS(ctx, 0);
    ctx.font = font(700, 46, FB); ctx.fillStyle = t.ink2; ctx.fillText(d.N === 1 ? "faixa" : "faixas", nx, by + 62);
    const tiles = [];
    if (d.sec > 0) tiles.push([fmtHours(d.sec), "horas de música"]);
    tiles.push([fmtInt(d.artists), d.artists === 1 ? "artista" : "artistas"]);
    if (d.albums) tiles.push([fmtInt(d.albums), d.albums === 1 ? "álbum" : "álbuns"]);
    const gap = 28, tw = (ncw - gap * (tiles.length - 1)) / tiles.length, ty = L.land ? 620 : 930, th = 220;
    tiles.forEach(([v, l], i) => {
      const x = nx + i * (tw + gap);
      panelBox(ctx, t, x, ty, tw, th, 32);
      drawFit(ctx, v, x + tw / 2, ty + 36, {weight: 800, family: FD, size: 84, min: 40, width: tw - 40, maxLines: 1, color: t.ink, align: "center", ls: -2});
      drawFit(ctx, l.toUpperCase(), x + tw / 2, ty + 150, {weight: 700, family: FB, size: 24, min: 16, width: tw - 36, maxLines: 1, color: t.muted, align: "center", ls: 3});
    });
  },
  bands(ctx, t, d, o, L){
    eyebrow(ctx, t, "Participação");
    title(ctx, t, L, "Quem manda na sua playlist");
    const top = d.bands.slice(0, 3), max = top[0][1], y0 = L.land ? 110 : 430;
    top.forEach(([name, c], i) => {
      const y = y0 + i * 210;
      ctx.font = font(800, 40, FD); ctx.fillStyle = t.accent; ctx.textAlign = "left"; ctx.textBaseline = "alphabetic"; setLS(ctx, 0);
      ctx.fillText(String(i + 1).padStart(2, "0"), L.cx, y + 50);
      drawFit(ctx, name, L.cx + 96, y + 4, {weight: 700, family: FD, size: 64, min: 32, width: L.cw - 96, maxLines: 1, color: t.ink, ls: -1});
      bar(ctx, t, L.cx, y + 88, L.cw, 26, c / max);
      drawFit(ctx, `${faixas(c)} · ${pct(c, d.N)} da playlist`, L.cx, y + 130, {weight: 600, family: FB, size: 30, min: 20, width: L.cw, maxLines: 1, color: t.ink2});
    });
    if (d.bands.length >= 3){
      const ty = y0 + 632, th = 120;
      panelBox(ctx, t, L.cx, ty, L.cw, th);
      drawFit(ctx, `As 3 maiores reúnem ${pct(d.top3Tracks, d.N, 0)} das faixas`, L.cx + L.cw / 2, ty + 30, {weight: 700, family: FD, size: 38, min: 24, width: L.cw - 60, maxLines: 1, color: t.ink, align: "center", ls: -.5});
    }
  },
  decades(ctx, t, d, o, L){
    eyebrow(ctx, t, "Linha do tempo");
    title(ctx, t, L, "De quando é a sua playlist");
    const n = d.dec.length, max = Math.max(...d.dec.map(x => x[1])), base = L.land ? 520 : 840, maxH = 330, slot = L.cw / n, bw = Math.min(slot * .64, 96);
    const peakDec = d.dec.reduce((b, x) => x[1] > b[1] ? x : b, d.dec[0])[0];
    d.dec.forEach(([dec, c], i) => {
      const h = Math.max(10, c / max * maxH), x = L.cx + slot * i + (slot - bw) / 2, isPk = dec === peakDec;
      const g = ctx.createLinearGradient(0, base - h, 0, base); g.addColorStop(0, isPk ? t.accent : t.accent2); g.addColorStop(1, isPk ? t.accent2 : t.deep);
      ctx.fillStyle = g; rr(ctx, x, base - h, bw, h, Math.min(14, bw / 3)); ctx.fill();
      ctx.textAlign = "center"; ctx.textBaseline = "alphabetic"; setLS(ctx, 0);
      ctx.font = font(700, n > 8 ? 24 : 30, FD); ctx.fillStyle = isPk ? t.accent : t.ink; ctx.fillText(String(c), x + bw / 2, base - h - 14);
      ctx.font = font(700, n > 8 ? 22 : 26, FB); ctx.fillStyle = t.muted; ctx.fillText(decShort(dec), x + bw / 2, base + 42);
    });
    ctx.strokeStyle = t.line; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(L.cx, base + 8); ctx.lineTo(L.cx + L.cw, base + 8); ctx.stroke();
    const ty = L.land ? 610 : 940, th = 240;
    panelBox(ctx, t, L.cx, ty, L.cw, th, 32);
    ctx.font = font(700, 22, FB); setLS(ctx, 4); ctx.fillStyle = t.muted; ctx.textAlign = "left"; ctx.fillText("ANO MÉDIO DE LANÇAMENTO", L.cx + 44, ty + 56); setLS(ctx, 0);
    const yg = ctx.createLinearGradient(0, ty + 70, 0, ty + 200); yg.addColorStop(0, t.accent); yg.addColorStop(1, t.accent2);
    ctx.font = font(800, 140, FD); setLS(ctx, -4); ctx.fillStyle = yg; ctx.fillText(String(d.avg), L.cx + 40, ty + 196); setLS(ctx, 0);
    const tx = L.cx + 520, tw = L.cx + L.cw - 44 - tx;
    const y1 = drawFit(ctx, `Ano de pico: ${d.peak[0]}`, tx, ty + 78, {weight: 700, family: FD, size: 38, min: 24, width: tw, maxLines: 1, color: t.ink, ls: -.5});
    drawFit(ctx, `${faixas(d.peak[1])} lançada${d.peak[1] === 1 ? "" : "s"} nesse ano · ${pct(d.peak[1], d.dated, 0)} das faixas com data`, tx, y1 + 8, {weight: 600, family: FB, size: 28, min: 20, width: tw, maxLines: 2, color: t.ink2, lh: 1.25});
  },
  genres(ctx, t, d, o, L){
    eyebrow(ctx, t, "Estilos");
    title(ctx, t, L, "O som da sua playlist");
    const top = d.genres.slice(0, 5), max = top[0][1], y0 = L.land ? 100 : 400;
    top.forEach(([g, c], i) => {
      const y = y0 + i * 142;
      drawFit(ctx, cap(g), L.cx, y, {weight: 700, family: FD, size: 46, min: 26, width: L.cw - 270, maxLines: 1, color: t.ink, ls: -.5});
      ctx.font = font(800, 46, FD); ctx.fillStyle = t.accent; ctx.textAlign = "right"; ctx.textBaseline = "alphabetic"; setLS(ctx, -.5);
      ctx.fillText(pct(c, d.withGenre, 0), L.cx + L.cw, y + 42); setLS(ctx, 0);
      bar(ctx, t, L.cx, y + 70, L.cw, 20, c / max);
    });
    drawFit(ctx, d.withGenre < d.N ? `Porcentagem entre as ${fmtInt(d.withGenre)} faixas com estilo conhecido (de ${fmtInt(d.N)}).` : `Porcentagem das ${fmtInt(d.N)} faixas.`, L.cx, y0 + 724, {weight: 600, family: FB, size: 26, min: 18, width: L.cw, maxLines: 2, color: t.muted, lh: 1.3});
  },
  journey(ctx, t, d, o, L){
    eyebrow(ctx, t, "A jornada");
    title(ctx, t, L, "Como a sua playlist cresceu", "Do começo ao fim, o artista que mais marcou cada fase");
    const x0 = L.cx + 38, y0 = L.land ? 110 : 470, step = 118;
    ctx.strokeStyle = t.line; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(x0, y0 + 38); ctx.lineTo(x0, y0 + step * 5 + 38); ctx.stroke();
    d.chap.forEach((c, i) => {
      const y = y0 + i * step, cy = y + 38;
      ctx.fillStyle = t.accent2; ctx.beginPath(); ctx.arc(x0, cy, 30, 0, Math.PI * 2); ctx.fill();
      ctx.font = font(800, 30, FD); ctx.fillStyle = t.onAccent; ctx.textAlign = "center"; ctx.textBaseline = "middle"; ctx.fillText(String(i + 1), x0, cy + 1); ctx.textBaseline = "alphabetic";
      drawFit(ctx, c.name, L.cx + 96, y + 2, {weight: 700, family: FD, size: 38, min: 24, width: L.cw - 330, maxLines: 1, color: t.ink, ls: -.5});
      drawFit(ctx, `${c.top} · ${c.c} de ${faixas(c.n)}`, L.cx + 96, y + 52, {weight: 600, family: FB, size: 27, min: 18, width: L.cw - 330, maxLines: 1, color: t.ink2});
      ctx.font = font(800, 46, FD); ctx.fillStyle = t.accent; ctx.textAlign = "right"; setLS(ctx, -.5); ctx.fillText(pct(c.c, c.n, 0), L.cx + L.cw, y + 52); setLS(ctx, 0);
    });
  },
  facts(ctx, t, d, o, L){
    eyebrow(ctx, t, "Curiosidades");
    title(ctx, t, L, "Detalhes que você talvez não sabia");
    const items = d.facts, top = L.land ? 100 : 385, step = Math.min(250, (L.land ? 820 : 800) / items.length), big = items.length >= 4 ? 40 : 52;
    items.forEach((f, i) => {
      const y = top + i * step;
      if (i){ ctx.strokeStyle = t.line; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(L.cx, y - 14); ctx.lineTo(L.cx + L.cw, y - 14); ctx.stroke(); }
      ctx.font = font(700, 23, FB); setLS(ctx, 4); ctx.fillStyle = t.muted; ctx.textAlign = "left"; ctx.textBaseline = "alphabetic"; ctx.fillText(f.label.toUpperCase(), L.cx, y + 26); setLS(ctx, 0);
      const y1 = drawFit(ctx, f.main, L.cx, y + 44, {weight: 800, family: FD, size: big, min: 30, width: L.cw, maxLines: 2, color: t.ink, lh: 1.08, ls: -1});
      drawFit(ctx, f.detail, L.cx, y1 + 10, {weight: 600, family: FB, size: 28, min: 18, width: L.cw, maxLines: 1, color: t.accent});
    });
  },
  /* mesma lógica do gráfico de quadrados do painel (squarify), com a capa do álbum mais presente de cada banda */
  async treemap(ctx, t, d, o, L){
    eyebrow(ctx, t, "Mapa da playlist");
    title(ctx, t, L, "O tamanho de cada banda");
    const ax = L.cx, ay = L.land ? 100 : 360, aw = L.cw, ah = (L.land ? L.H - 136 - 24 : 1190) - ay;
    const items = d.tiles.map(x => ({k: x.k, value: x.value}));
    const laid = squarify(items, aw, ah), by = new Map(d.tiles.map(x => [x.k, x]));
    const imgs = new Map(await Promise.all(d.tiles.map(async x => [x.k, x.url ? await loadImg(x.url) : null])));
    const max = d.tiles[0].value, to = o.tree || {nomes: true, numeros: true, sombra: true, bordas: true}, G = to.bordas ? 3 : 0;
    for (const tl of laid){
      const x = ax + tl.x + G / 2, y = ay + tl.y + G / 2, w = tl.w - G, h = tl.h - G, info = by.get(tl.k), im = imgs.get(tl.k);
      if (w < 2 || h < 2) continue;
      const rad = to.bordas ? Math.max(3, Math.min(14, w / 5, h / 5)) : 0;
      ctx.save(); rr(ctx, x, y, w, h, rad); ctx.clip();
      const k = Math.sqrt(tl.value / max), bg = ctx.createLinearGradient(x, y, x + w, y + h);
      if (info.other){ bg.addColorStop(0, t.light ? "#D3F0E1" : "hsl(160,36%,9%)"); bg.addColorStop(1, t.light ? "#B6E4CD" : "hsl(160,42%,6%)"); }   // "+N bandas": mais escuro no tema escuro, mais claro no claro
      else { bg.addColorStop(0, `hsl(156,62%,${16 + 26 * k}%)`); bg.addColorStop(1, `hsl(162,70%,${10 + 18 * k}%)`); }
      ctx.fillStyle = bg; ctx.fillRect(x, y, w, h);
      if (im){
        drawCover(ctx, im, x, y, w, h);
        if (to.sombra){ const ov = ctx.createLinearGradient(x, y, x + w * .4, y + h); ov.addColorStop(0, "rgba(2,44,34,.45)"); ov.addColorStop(1, "rgba(2,20,15,.88)"); ctx.fillStyle = ov; ctx.fillRect(x, y, w, h); }
      }
      ctx.restore();
      if (info.other){ ctx.strokeStyle = t.line; ctx.lineWidth = 2; rr(ctx, x + 1, y + 1, w - 2, h - 2, rad); ctx.stroke(); }
      const lightTxt = info.other && t.light, pad = Math.max(5, Math.min(16, Math.min(w, h) / 9)), cs = Math.max(11, Math.min(30, Math.sqrt(w * h) / 9)), inW = w - 2 * pad;
      ctx.save(); ctx.textBaseline = "alphabetic";
      if (to.sombra){ ctx.shadowColor = lightTxt ? "rgba(255,255,255,.7)" : "rgba(0,0,0,.65)"; ctx.shadowBlur = 5; } else { ctx.strokeStyle = lightTxt ? "rgba(255,255,255,.9)" : "rgba(0,0,0,.85)"; ctx.lineJoin = "round"; }   // sem sombra: o texto ganha um contorno fino
      const put = (txt, tx, ty) => { if (!to.sombra){ ctx.lineWidth = Math.max(2, ctx.measureText(" ").width / 3); ctx.strokeText(txt, tx, ty); } ctx.fillText(txt, tx, ty); };
      if (info.other){   // "+N bandas": só números = "+N" no cantinho, como a contagem dos outros; com nome (só ele ou os dois) = "+N bandas" centralizado
        const lbl = to.nomes ? `+${info.n} bandas` : "";
        if (!to.nomes && to.numeros){
          ctx.font = font(700, cs, FD); setLS(ctx, 0); ctx.textAlign = "left"; ctx.textBaseline = "alphabetic";
          if (inW >= ctx.measureText(`+${info.n}`).width && h >= cs + pad * 1.6){ ctx.fillStyle = lightTxt ? t.ink : "#ECFDF5"; ctx.globalAlpha = .85; put(`+${info.n}`, x + pad, y + h - pad); }
        } else if (lbl){
          let s = Math.min(44, Math.max(12, Math.sqrt(w * h) / 4));
          ctx.textAlign = "center"; ctx.textBaseline = "middle";
          for (; s >= 11; s -= 1){ ctx.font = font(700, s, FD); setLS(ctx, -.2); if (ctx.measureText(lbl).width <= inW && s * 1.2 <= h - 2 * pad) break; }
          if (s >= 11){ ctx.fillStyle = lightTxt ? t.ink : "#ECFDF5"; put(lbl, x + w / 2, y + h / 2); }
        }
        ctx.restore(); continue;
      }
      let nameSize = 0;
      if (to.nomes) for (let s = Math.min(34, Math.max(12, Math.sqrt(w * h) / 6.5)); s >= 12; s -= 1){
        ctx.font = font(600, s, FD); setLS(ctx, -.2);
        if (ctx.measureText(info.k).width <= inW && h - 2 * pad >= s * 1.1 + cs * 1.2){ nameSize = s; break; }
      }
      ctx.fillStyle = lightTxt ? t.ink : "#ECFDF5"; ctx.textAlign = "left";
      if (nameSize){ ctx.font = font(600, nameSize, FD); setLS(ctx, -.2); put(info.k, x + pad, y + pad + nameSize * .9); }
      ctx.font = font(700, cs, FD); setLS(ctx, 0);
      if (to.numeros && inW >= ctx.measureText(String(tl.value)).width && h >= cs + pad * 1.6){ ctx.globalAlpha = .85; put(String(tl.value), x + pad, y + h - pad); }
      ctx.restore();
    }
  }
};
const LABEL = {cover: "Capa", bands: "Bandas", treemap: "Mapa de bandas", decades: "Décadas", genres: "Gêneros", journey: "Jornada", facts: "Curiosidades"};
const SLUG = {cover: "capa", bands: "bandas", treemap: "mapa", decades: "decadas", genres: "generos", journey: "jornada", facts: "curiosidades"};

/* ---------- dados de cada cartão (só entra o que tiver dado) ---------- */
function filterText(){
  const part = set => { const a = [...set]; return a.length ? (a.length <= 2 ? listPt(a) : `${a.slice(0, 2).join(", ")} +${a.length - 2}`) : ""; };
  const parts = [part(state.bands), part(state.albums), part(state.genres), part(state.years)].filter(Boolean);
  return parts.length ? parts.join(" · ") : "filtros atuais";
}
function dataset(scope){
  const R = (scope === "recorte" ? rows(true, true, true, false) : T).slice().sort((a, b) => a.n - b.n), N = R.length;
  const d = {N, scope, scopeText: scope === "recorte" ? `Recorte: ${filterText()} · ${faixas(N)}` : `Playlist inteira · ${faixas(N)}`};
  d.sec = sum(R, r => r.sec || 0);
  const gb = [...groupBy(R, "artist")].filter(([b]) => b !== NI);
  d.bands = gb.map(([b, rs]) => [b, rs.length]).sort((a, b) => b[1] - a[1] || coll.compare(a[0], b[0]));
  d.artists = d.bands.length;
  d.albums = new Set(R.map(r => r.album).filter(a => a !== NI)).size;
  const top3 = new Set(d.bands.slice(0, 3).map(x => x[0].toLowerCase()));
  d.top3Tracks = R.filter(r => bandsOfRow(r).some(b => top3.has(b.toLowerCase()))).length;
  const rowsOf = new Map(gb), MAXT = 28;
  d.tiles = d.bands.slice(0, MAXT).map(([b, c]) => {
    const alb = topAlbumOf(rowsOf.get(b)), key = alb ? `${b}|${alb}` : "";
    return {k: b, value: c, url: key ? coverOf(key) : null};
  });
  const rest = d.bands.slice(MAXT);
  if (rest.length) d.tiles.push({k: `+${rest.length} bandas`, value: sum(rest, x => x[1]), url: null, other: true, n: rest.length});
  d.coverCount = d.tiles.filter(x => x.url).length;
  const dated = R.filter(r => r.year !== NI); d.dated = dated.length;
  const dm = new Map(); for (const r of dated){ const k = Math.floor(r.year / 10) * 10; dm.set(k, (dm.get(k) || 0) + 1); }
  d.dec = [...dm].sort((a, b) => a[0] - b[0]);
  d.avg = dated.length ? Math.round(sum(dated, r => r.year) / dated.length) : null;
  const ym = new Map(); for (const r of dated) ym.set(r.year, (ym.get(r.year) || 0) + 1);
  d.peak = [...ym].sort((a, b) => b[1] - a[1] || a[0] - b[0])[0] || null;
  const gm = new Map(); let wg = 0;
  for (const r of R){ if (r.ge && r.ge.length){ wg++; for (const g of new Set(r.ge)) gm.set(g, (gm.get(g) || 0) + 1); } }
  d.withGenre = wg; d.genres = [...gm].sort((a, b) => b[1] - a[1] || coll.compare(a[0], b[0]));
  const k = 6; d.chap = [];
  if (N >= 30){
    const useCHI = scope === "all" && typeof CHI !== "undefined" && CHI.length === k;
    for (let i = 0; i < k; i++){
      const seg = R.slice(Math.floor(i * N / k), Math.floor((i + 1) * N / k));
      const g = [...groupBy(seg, "artist")].filter(([b]) => b !== NI).map(([b, rs]) => [b, rs.length]).sort((a, b) => b[1] - a[1] || coll.compare(a[0], b[0]));
      d.chap.push({name: useCHI ? CHI[i].name : `Parte ${i + 1}`, top: g[0] ? g[0][0] : "—", c: g[0] ? g[0][1] : 0, n: seg.length});
    }
  }
  d.facts = [];
  const longest = R.filter(r => r.sec > 0).sort((a, b) => b.sec - a.sec)[0];
  if (longest) d.facts.push({label: "Faixa mais longa", main: longest.title, detail: `${longest.artist === NI ? "Artista não identificado" : longest.artist} · ${durTxt(longest.sec)}`});
  const am = [...groupBy(R.filter(r => r.album !== NI), "album")].map(([a, rs]) => [a, rs]).sort((a, b) => b[1].length - a[1].length || coll.compare(a[0], b[0]))[0];
  if (am && am[1].length >= 2) d.facts.push({label: "Álbum com mais faixas", main: am[0], detail: `${modeOf(am[1], "artist").best || am[1][0].artist} · ${faixas(am[1].length)}`});
  const ex = R.filter(r => r.ex !== null && r.ex !== undefined);
  if (ex.length >= Math.max(1, N * .3)){ const c = ex.filter(r => r.ex).length; d.facts.push({label: "Letras explícitas", main: `${pct(c, ex.length, 0)} das faixas`, detail: `${fmtInt(c)} de ${fmtInt(ex.length)} faixas com esse dado`}); }
  const pp = R.filter(r => typeof r.pop === "number");
  if (pp.length >= Math.max(1, N * .3)) d.facts.push({label: "Popularidade média", main: `${Math.round(sum(pp, r => r.pop) / pp.length)} de 100`, detail: `Média de ${fmtInt(pp.length)} faixas com esse dado · quanto maior, mais tocada`});
  d.cards = ["cover"];
  if (d.bands.length) d.cards.push("bands");
  if (d.bands.length >= 4) d.cards.push("treemap");
  if (dated.length >= 5 && d.dec.length >= 2 && d.peak) d.cards.push("decades");
  if (N && wg / N >= .3 && d.genres.length) d.cards.push("genres");
  if (d.chap.length) d.cards.push("journey");
  if (d.facts.length) d.cards.push("facts");
  return d;
}

/* ---------- desenho e exportação ---------- */
const fontsReady = () => document.fonts && document.fonts.load
  ? Promise.all(["800 80px Sora", "700 40px Sora", "700 30px Manrope", "600 30px Manrope"].map(f => document.fonts.load(f).catch(() => {}))) : Promise.resolve();
async function paint(canvas, id, themeKey, fmt, d, name, tree){
  await fontsReady();
  const L = layout(fmt), t = THEMES[themeKey] || THEMES.escuro;
  canvas.width = L.W; canvas.height = L.H;
  const ctx = canvas.getContext("2d");
  paintBg(ctx, t, L);
  await DRAW[id](ctx, t, d, {name, tree}, L);
  footer(ctx, t, d, L);
}
const toBlob = canvas => new Promise((res, rej) => canvas.toBlob(b => b ? res(b) : rej(new Error("toBlob")), "image/png"));
const dateTag = () => { const x = new Date(); return `${pad2(x.getDate())}-${pad2(x.getMonth() + 1)}-${pad2(x.getFullYear() % 100)}`; };

/* ---------- modal ---------- */
function openCards(){
  const filtered = rows(true, true, true, false).length < NN;
  const st = {scope: "all", theme: lsGet(KEY_THEME) === "claro" ? "claro" : "escuro", fmt: lsGet(KEY_FMT) === "paisagem" ? "paisagem" : "retrato", tree: loadTreeOpts(), name: (lsGet(KEY_NAME) || "").slice(0, 40), id: "cover"};
  let d = dataset(st.scope), token = 0;
  const body = document.createElement("div"); body.className = "cd-wrap";
  body.innerHTML = `
    <aside class="cd-side">
      ${filtered ? `<div class="cd-field"><span class="cd-lbl">Dados</span><div class="seg cd-seg" data-k="scope"><button type="button" data-v="all">Playlist inteira</button><button type="button" data-v="recorte">Recorte dos filtros</button></div></div>` : ""}
      <div class="cd-field"><span class="cd-lbl">Formato</span><div class="seg cd-seg" data-k="fmt">${Object.entries(FORMATS).map(([k, v]) => `<button type="button" data-v="${k}" title="${v.sub}">${v.label}</button>`).join("")}</div></div>
      <div class="cd-field"><span class="cd-lbl">Tema</span><div class="seg cd-seg" data-k="theme">${Object.entries(THEMES).map(([k, v]) => `<button type="button" data-v="${k}">${v.label}</button>`).join("")}</div></div>
      <div class="cd-field"><label class="cd-lbl" for="cd-name">Seu nome (opcional)</label><input id="cd-name" class="cd-in" type="text" maxlength="40" placeholder="Ex.: Luis" autocomplete="off" value="${esc(st.name)}"></div>
      <div class="cd-field"><span class="cd-lbl">Cartões</span><div class="cd-list" role="tablist" aria-label="Cartões"></div></div>
      <p class="cd-note"></p>
    </aside>
    <div class="cd-stage">
      <span class="sty cd-sty" hidden><button class="gbtn sty-btn" type="button" aria-haspopup="true" aria-expanded="false" title="Opções de estilo do mapa">Estilo <svg width="10" height="10" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 6l5 5 5-5" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg></button><div class="sty-pop">${TOPTS.map(([k, txt]) => `<label class="chk"><input type="checkbox" class="cd-opt" data-opt="${k}"><span>${txt}</span></label>`).join("")}</div></span>
      <button class="cd-nav cd-prev" type="button" aria-label="Cartão anterior">‹</button>
      <canvas class="cd-canvas" width="1080" height="1350" role="img" aria-label="Pré-visualização do cartão"></canvas>
      <button class="cd-nav cd-next" type="button" aria-label="Próximo cartão">›</button>
    </div>`;
  const foot = document.createElement("div"); foot.className = "mfrow";
  const canCopy = !!(window.ClipboardItem && navigator.clipboard && navigator.clipboard.write);
  foot.innerHTML = `${canCopy ? `<button class="gbtn" type="button" data-a="copy">Copiar imagem</button>` : ""}<span class="sp"></span><button class="gbtn" type="button" data-a="zip">Baixar todos (.zip)</button><button class="pbtn" type="button" data-a="png" autofocus>Baixar PNG</button>`;
  const onKey = e => {
    if (e.target && /^(INPUT|TEXTAREA)$/.test(e.target.tagName)) return;
    if (e.key === "ArrowLeft"){ step(-1); e.preventDefault(); } else if (e.key === "ArrowRight"){ step(1); e.preventDefault(); }
  };
  const md = openModal({title: "Cartões para compartilhar", sub: "Imagens prontas com os destaques da playlist", body, foot, size: "lg", onClose: () => document.removeEventListener("keydown", onKey)});
  document.addEventListener("keydown", onKey);
  const canvas = body.querySelector(".cd-canvas"), list = body.querySelector(".cd-list"), note = body.querySelector(".cd-note");

  function ui(){
    body.querySelectorAll(".cd-seg").forEach(s => s.querySelectorAll("button").forEach(b => b.setAttribute("aria-pressed", String(st[s.dataset.k] === b.dataset.v))));
    if (!d.cards.includes(st.id)) st.id = d.cards[0];
    list.innerHTML = d.cards.map((id, i) => `<button type="button" role="tab" data-id="${id}" aria-selected="${id === st.id}"><b>${i + 1}</b>${LABEL[id]}</button>`).join("");
    const msgs = [];
    if (d.N < 20) msgs.push(`Com poucas faixas (${d.N}) os números ficam pouco representativos, mas dá para gerar os cartões.`);
    const missing = Object.keys(LABEL).filter(k => !d.cards.includes(k)).map(k => LABEL[k].toLowerCase());
    if (missing.length) msgs.push(`Sem dados suficientes para: ${missing.join(", ")}.`);
    if (st.id === "treemap") msgs.push(d.coverCount ? `Capas em ${d.coverCount} de ${d.tiles.length} quadrados (as que o painel já carregou; as outras ficam só com o nome).` : "Nenhuma capa carregada ainda: os quadrados ficam só com o nome. Deixe o painel aberto por um tempo para as capas carregarem.");
    note.textContent = msgs.join(" ");
    body.querySelector(".cd-sty").hidden = st.id !== "treemap";
    body.querySelectorAll(".cd-opt").forEach(cb => { cb.checked = !!st.tree[cb.dataset.opt]; });
  }
  async function render(){
    const my = ++token;
    try { await paint(canvas, st.id, st.theme, st.fmt, d, st.name, st.tree); } catch (e) { if (my === token) toast("Não foi possível desenhar o cartão."); }
  }
  function step(dir){ const i = d.cards.indexOf(st.id); st.id = d.cards[(i + dir + d.cards.length) % d.cards.length]; ui(); render(); }
  body.addEventListener("click", e => {
    const sb = e.target.closest(".cd-seg button");
    if (sb){
      const k = sb.parentElement.dataset.k; st[k] = sb.dataset.v;
      if (k === "scope") d = dataset(st.scope); else if (k === "theme") lsSet(KEY_THEME, st.theme); else if (k === "fmt") lsSet(KEY_FMT, st.fmt);
      ui(); render(); return;
    }
    const lb = e.target.closest(".cd-list button"); if (lb){ st.id = lb.dataset.id; ui(); render(); return; }
    if (e.target.closest(".cd-prev")) step(-1); else if (e.target.closest(".cd-next")) step(1);
  });
  let shadowAuto = false;   // a sombra desligou sozinha (nomes e números desmarcados): volta sozinha quando um deles é marcado
  body.addEventListener("change", e => {
    const cb = e.target.closest(".cd-opt"); if (!cb) return;
    const k = cb.dataset.opt; st.tree[k] = cb.checked;
    if (k === "sombra") shadowAuto = false;
    else if (k === "nomes" || k === "numeros"){
      const both = !st.tree.nomes && !st.tree.numeros;
      if (both && st.tree.sombra){ st.tree.sombra = false; shadowAuto = true; } else if (!both && shadowAuto){ st.tree.sombra = true; shadowAuto = false; }
    }
    lsSet(KEY_TREE, JSON.stringify(st.tree)); ui(); render();
  });
  body.querySelector("#cd-name").addEventListener("input", e => { st.name = e.target.value.slice(0, 40); lsSet(KEY_NAME, st.name); clearTimeout(render.t); render.t = setTimeout(render, 120); });

  const shot = async id => { const c = document.createElement("canvas"); await paint(c, id, st.theme, st.fmt, d, st.name, st.tree); return toBlob(c); };
  const suffix = () => st.fmt === "paisagem" ? "-horizontal" : "";
  foot.addEventListener("click", async e => {
    const b = e.target.closest("button[data-a]"); if (!b || b.disabled) return;
    const a = b.dataset.a; b.disabled = true;
    try {
      if (a === "png"){ download(`dashbeat_${SLUG[st.id]}${suffix()}_${dateTag()}.png`, await shot(st.id)); toast("Cartão baixado."); }
      else if (a === "zip"){
        const files = []; let i = 1;
        for (const id of d.cards){ files.push({name: `dashbeat_${pad2(i++)}-${SLUG[id]}${suffix()}.png`, data: new Uint8Array(await (await shot(id)).arrayBuffer())}); }
        download(`dashbeat_cartoes${suffix()}_${dateTag()}.zip`, zipStore(files, "application/zip")); toast(`${files.length} cartões baixados em um .zip.`);
      } else if (a === "copy"){
        await navigator.clipboard.write([new ClipboardItem({"image/png": shot(st.id)})]); toast("Imagem copiada.");
      }
    } catch (err) { toast(a === "copy" ? "O navegador não deixou copiar a imagem. Use Baixar PNG." : "Não foi possível gerar a imagem."); }
    b.disabled = false;
  });
  ui(); render();
  return md;
}

const btn = $("#dt-cards");
if (btn){
  btn.innerHTML = `<svg width="15" height="15" viewBox="0 0 16 16" aria-hidden="true"><rect x="3" y="1.5" width="10" height="13" rx="2.2" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M5.6 10.5V8.2M8 10.5V5.6M10.4 10.5V7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg><span>Cartões</span>`;
  btn.addEventListener("click", openCards);
}
})();
