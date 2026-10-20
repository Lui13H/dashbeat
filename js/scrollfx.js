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
