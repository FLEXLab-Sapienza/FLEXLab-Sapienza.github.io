// Home hero: tracer particles in potential flow around a cylinder, with an oscillating wake.
(function () {
  const c = document.getElementById("flow");
  if (!c) return;
  const g = c.getContext("2d");
  const BG = "243,245,247", INK = "31,41,51", MAROON = "130,36,51";
  const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let W, H, R, cx, cy, P = [], t = 0, last = null, visible = true, running = false;

  function size() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = c.clientWidth; H = c.clientHeight;
    c.width = W * dpr; c.height = H * dpr;
    g.setTransform(dpr, 0, 0, dpr, 0, 0);
    const wide = W > 720;
    R = Math.min(H * 0.13, W * 0.06);
    cx = W * (wide ? 0.72 : 0.42); cy = H * 0.5;
    g.fillStyle = "rgb(" + BG + ")"; g.fillRect(0, 0, W, H);
    const n = Math.round(W * H / 650);
    P = [];
    for (let i = 0; i < n; i++) P.push(spawn(Math.random() * W));
    for (let i = 0; i < 90; i++) step(1 / 60); // start from a developed flow
  }

  function spawn(x0) {
    let p;
    do {
      p = { x: x0, y: Math.random() * H, red: Math.random() < 0.12 };
      x0 = -10 - Math.random() * 40;
    } while (Math.hypot(p.x - cx, p.y - cy) < R * 1.05);
    return p;
  }

  function vel(px, py) {
    const dx = px - cx, dy = py - cy, r2 = dx * dx + dy * dy, R2 = R * R;
    let u = 1 - R2 * (dx * dx - dy * dy) / (r2 * r2);
    let v = -2 * R2 * dx * dy / (r2 * r2);
    if (dx > 0) {
      const d = dx / R, gauss = Math.exp(-(dy * dy) / (2 * (R * 1.3) ** 2));
      u -= 0.35 * gauss * Math.exp(-d / 6);
      v += 0.4 * Math.min(1, d / 1.5) * Math.exp(-d / 10) * Math.sin(dx / (R * 1.7) - t * 1.9) * gauss;
    }
    return [u, v];
  }

  function step(dt) {
    t += dt;
    const S = W / 9;
    g.fillStyle = "rgba(" + BG + ",0.16)";
    g.fillRect(0, 0, W, H);
    g.lineWidth = 1.4; g.lineCap = "round";
    for (let i = 0; i < P.length; i++) {
      const p = P[i], [u, v] = vel(p.x, p.y);
      const nx = p.x + u * S * dt, ny = p.y + v * S * dt;
      g.strokeStyle = p.red ? "rgba(" + MAROON + ",0.75)" : "rgba(" + INK + ",0.4)";
      g.beginPath(); g.moveTo(p.x, p.y); g.lineTo(nx, ny); g.stroke();
      p.x = nx; p.y = ny;
      if (p.x > W + 10 || p.y < -10 || p.y > H + 10 || Math.hypot(p.x - cx, p.y - cy) < R) P[i] = spawn(-10);
    }
    g.fillStyle = "rgb(" + MAROON + ")";
    g.beginPath(); g.arc(cx, cy, R, 0, Math.PI * 2); g.fill();
  }

  function frame(now) {
    if (!visible || document.hidden) { running = false; last = null; return; }
    if (last === null) last = now;
    const dt = Math.min((now - last) / 1000, 0.05);
    last = now;
    step(dt);
    requestAnimationFrame(frame);
  }

  function start() {
    if (still || running) return;
    running = true;
    requestAnimationFrame(frame);
  }

  size();
  start();
  // Pause when the hero is off screen or the tab is hidden.
  new IntersectionObserver(e => { visible = e[0].isIntersecting; if (visible) start(); }).observe(c);
  document.addEventListener("visibilitychange", () => { if (!document.hidden) start(); });
  let lastW = c.clientWidth, lastH = c.clientHeight;
  new ResizeObserver(() => {
    if (c.clientWidth !== lastW || c.clientHeight !== lastH) {
      lastW = c.clientWidth; lastH = c.clientHeight; size();
    }
  }).observe(c);
})();
