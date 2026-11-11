/* Scroll fantasma: containers com overflow mas sem conteúdo suficiente bloqueiam
   o scroll da página. Intercepta wheel events e passa para window quando o container
   não tem conteúdo para rolar ou chegou ao seu limite. */
(function(){
  const SELS = '.opts,.list,.mb,.prof,.tbscroll,.cd-side,.cd-wrap,.warns ul,.ptab';
  document.addEventListener('wheel', function(e){
    const el = e.target.closest(SELS);
    if (!el) return;
    const canScroll = el.scrollHeight > el.clientHeight;
    if (canScroll) {
      const atTop    = el.scrollTop <= 0 && e.deltaY < 0;
      const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1 && e.deltaY > 0;
      if (!atTop && !atBottom) return;
    }
    e.preventDefault();
    window.scrollBy(0, e.deltaY);
  }, { passive: false });
})();

/* Efeitos de scroll, só onde fazem sentido:
   - revelar ao rolar: cards abaixo da dobra entram quando aparecem na tela (as duas páginas)
   - barra fixa: a toolbar do painel gruda no topo e ganha vidro (dashboard)
   - parallax suave só no fundo (orbes) (dashboard)
   Nada disso roda com "reduzir movimento" ligado. */
(() => {
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const page = document.body.dataset.fx || "";
  const wide = () => matchMedia("(min-width: 900px)").matches;
  const root = document.documentElement;
  const dash = page === "dashboard";
  const canIO = "IntersectionObserver" in window;
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  if (reduce) return;   // sem movimento: a página fica exatamente como era

  /* ---------- revelar ao rolar ---------- */
  const TARGETS = dash
    ? ["#painel .grid > .card", "#evo-card", "#filtered-list-card", "#insights .mix .ic", "#insights .journey", "#insights .jbox"]
    : page === "guide" ? ["main section .bg-black\\/40", "main section .bg-base-200 .grid > div", "#manual-steps > div"] : [];
  let io = null;
  if (canIO && TARGETS.length){
    root.classList.add("fx-js");
    io = new IntersectionObserver(entries => {
      const shown = entries.filter(e => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      shown.forEach((e, i) => {
        const el = e.target;
        el.style.setProperty("--rd", Math.min(i * 80, 320) + "ms");
        el.classList.add("rv-in");
        io.unobserve(el);
        // depois da entrada, devolve o elemento ao normal (hover, animações próprias etc.)
        const done = () => { el.classList.remove("rv", "rv-in"); el.style.removeProperty("--rd"); };
        el.addEventListener("transitionend", done, {once: true});
        setTimeout(done, 1600);
      });
    }, {rootMargin: "0px 0px -8% 0px", threshold: 0.08});
  }
  const prep = el => {
    if (!io || el.classList.contains("rv") || el._fx) return;
    el._fx = true;
    const vh = innerHeight;
    // escondida (aba/visão fechada): entra quando for aberta; visível: só prepara o que está abaixo da dobra
    if (el.offsetParent !== null){ const r = el.getBoundingClientRect(); if (r.top < vh * 0.92 && r.bottom > 0) return; }
    el.classList.remove("rise");
    el.classList.add("rv");
    io.observe(el);
  };
  const scan = () => TARGETS.forEach(sel => document.querySelectorAll(sel).forEach(prep));
  scan();
  // cards que o site refaz sozinho (insights ao trocar de visão, etc.)
  const mixEl = document.getElementById("mix");
  if (mixEl) new MutationObserver(scan).observe(mixEl, {childList: true});

  /* ---------- só no dashboard: barra fixa e fundo ---------- */
  if (!dash) return;
  const toolbar = document.querySelector(".toolbar");

  // orbes do fundo (parallax suave: cada um anda numa velocidade diferente)
  const orbs = document.createElement("div");
  orbs.className = "fx-orbs"; orbs.setAttribute("aria-hidden", "true");
  orbs.innerHTML = "<i></i><i></i><i></i>";
  document.body.prepend(orbs);
  const orbEls = [...orbs.children], orbSpeed = [-0.12, -0.22, -0.34];

  // equalizador espectral no rodapé
  const cv = document.createElement("canvas");
  cv.style.cssText = "position:fixed;inset:0;pointer-events:none;z-index:0;";
  cv.setAttribute("aria-hidden","true");
  document.body.prepend(cv);
  const cx = cv.getContext("2d");
  const getH = () => +getComputedStyle(root).getPropertyValue("--h") || 153;
  let cvH = getH();
  setInterval(() => { cvH = getH(); }, 3000);
  const BARS = 120;
  const bh = Array.from({length:BARS}, () => Math.random());
  const bt = Array.from({length:BARS}, () => Math.random());
  const bs = Array.from({length:BARS}, () => 0.012 + Math.random() * 0.028);
  const resizeCv = () => { cv.width = innerWidth; cv.height = innerHeight; };
  resizeCv();
  addEventListener("resize", resizeCv);
  (function tick(){
    requestAnimationFrame(tick);
    cx.clearRect(0, 0, cv.width, cv.height);
    const W = cv.width, H = cv.height;
    const bw = W / BARS;
    const footerEl = document.querySelector(".wrap>footer");
    const maxH = (footerEl ? footerEl.offsetHeight : H * 0.1) * 4;
    cx.save();
    const maxScroll = Math.max(1, document.body.scrollHeight - innerHeight);
    const barMaxH = maxH;
    const parallaxOffset = Math.max(0, (barMaxH - 4) * (1 - scrollY / maxScroll));
    cx.translate(0, parallaxOffset);
    // luz estática no rodapé — não muda com as barras
    const staticGlow = cx.createLinearGradient(0, H * 0.72, 0, H);
    staticGlow.addColorStop(0,   `hsla(${cvH},100%,62%,0)`);
    staticGlow.addColorStop(0.7, `hsla(${cvH},100%,62%,.06)`);
    staticGlow.addColorStop(1,   `hsla(${cvH},100%,62%,.16)`);
    cx.fillStyle = staticGlow;
    cx.fillRect(0, H * 0.72, W, H * 0.28);
    // atualizar alturas
    for (let i = 0; i < BARS; i++){
      if (Math.abs(bh[i] - bt[i]) < 0.015) bt[i] = 0.02 + Math.random() * 0.98 * (0.3 + 0.7 * Math.sin(i / BARS * Math.PI));
      bh[i] += (bt[i] - bh[i]) * bs[i];
    }
    // corpos de vidro
    cx.fillStyle = `hsl(${cvH},80%,65%)`;
    for (let i = 0; i < BARS; i++){
      cx.globalAlpha = 0.06;
      cx.fillRect(i * bw, H - bh[i] * maxH, bw, bh[i] * maxH);
    }
    cx.globalAlpha = 1;
    // contorno neon — só arestas expostas
    const neon = `hsl(${cvH},100%,62%)`;
    cx.fillStyle = neon;
    cx.shadowBlur = 1; cx.shadowColor = neon; cx.globalAlpha = 0.55;
    for (let i = 0; i < BARS; i++){
      const top = H - bh[i] * maxH, x = i * bw;
      cx.fillRect(x, top, bw, 0.5);                                              // topo sempre
      const lTop = i > 0        ? H - bh[i-1] * maxH : H;
      if (top < lTop) cx.fillRect(x,            top, 0.5, lTop - top);           // esquerda exposta
      const rTop = i < BARS - 1 ? H - bh[i+1] * maxH : H;
      if (top < rTop) cx.fillRect(x + bw - 0.5, top, 0.5, rTop - top);          // direita exposta
    }
    cx.shadowBlur = 0; cx.globalAlpha = 1;
    cx.restore();
  })();

  // altura da toolbar
  const setTb = () => { if (toolbar) root.style.setProperty("--fx-tb", Math.round(toolbar.offsetHeight) + "px"); };
  if (toolbar && "ResizeObserver" in window) new ResizeObserver(setTb).observe(toolbar);
  setTb();

  let ticking = false;
  function frame(){
    ticking = false;
    const y = scrollY;
    // vidro na toolbar quando gruda no topo
    if (toolbar) toolbar.classList.toggle("stuck", wide() && toolbar.getBoundingClientRect().top <= 0.5 && y > 4);
    // fundo
    orbEls.forEach((o, i) => { o.style.transform = `translate3d(0,${(y * orbSpeed[i]).toFixed(1)}px,0)`; });
  }
  const onScroll = () => { if (!ticking){ ticking = true; requestAnimationFrame(frame); } };
  const refresh = () => { setTb(); frame(); };
  addEventListener("scroll", onScroll, {passive: true});
  addEventListener("resize", () => { clearTimeout(refresh.t); refresh.t = setTimeout(refresh, 120); });
  addEventListener("fx:refresh", () => setTimeout(refresh, 60));   // o site avisa ao trocar de aba ou de visão dos insights
  (document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve()).then(() => setTimeout(refresh, 300));
  refresh();
})();
