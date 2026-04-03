const toggle = document.getElementById("toggle-tema");
const canvas = document.getElementById("space-bg");
const ctx = canvas.getContext("2d");

const STAR_COUNT = 120;
const stars = [];
const comets = [];
let animationId = null;
let cometTimeouts = [];

// ---------- STARS ----------
function initStars() {
  stars.length = 0;
  for (let i = 0; i < STAR_COUNT; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 1.2,
      opacity: Math.random() * 0.5 + 0.2,
      drift: Math.random() * 0.05,
      vx: (Math.random() - 0.5) * 0.02,
      vy: (Math.random() - 0.5) * 0.02
    });
  }
}

// ---------- COMETS ----------
function createComet(type, durationSeconds = 3) {
  let startX, startY, endX, endY;
  const duration = durationSeconds * 1000;

  if (type === 1) {
    startX = 0; startY = -20;
    endX = canvas.width + 20; endY = canvas.height + 20;
  } else {
    startX = canvas.width * 0.5; startY = -10;
    endX = canvas.width + 20;
    endY = canvas.height * 0.4 + Math.random() * canvas.height * 0.2;
  }

  comets.push({ startX, startY, endX, endY, duration, startTime: performance.now(), trail: [] });
}

function scheduleCometsCycle() {
  cometTimeouts.push(setTimeout(() => createComet(1, 3), 15000));
  cometTimeouts.push(setTimeout(() => createComet(2, 5), 23000));
  cometTimeouts.push(setTimeout(scheduleCometsCycle, 30000));
}

function clearCometSchedule() {
  cometTimeouts.forEach(clearTimeout);
  cometTimeouts = [];
  comets.length = 0;
}

// ---------- ANIMATION ----------
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let star of stars) {
    star.x += star.vx;
    star.y += star.vy + star.drift;
    if (star.y > canvas.height) { star.y = 0; star.x = Math.random() * canvas.width; }
    if (star.x > canvas.width) star.x = 0;
    if (star.x < 0) star.x = canvas.width;
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255,255,255,${star.opacity})`;
    ctx.fill();
  }

  const now = performance.now();
  for (let i = comets.length - 1; i >= 0; i--) {
    const comet = comets[i];
    const elapsed = now - comet.startTime;
    const t = elapsed / comet.duration;
    if (t >= 1) { comets.splice(i, 1); continue; }
    const ease = 1 - Math.pow(1 - t, 3);
    const x = comet.startX + (comet.endX - comet.startX) * ease;
    const y = comet.startY + (comet.endY - comet.startY) * ease;
    const fade = Math.pow(1 - t, 2);
    comet.trail.push({ x, y });
    if (comet.trail.length > 12) comet.trail.shift();
    for (let j = 0; j < comet.trail.length - 1; j++) {
      const p1 = comet.trail[j], p2 = comet.trail[j + 1];
      const trailFade = (j / comet.trail.length) * fade;
      ctx.beginPath(); ctx.moveTo(p1.x, p1.y); ctx.lineTo(p2.x, p2.y);
      ctx.strokeStyle = `rgba(255,255,255,${trailFade})`; ctx.lineWidth = 1; ctx.stroke();
    }
    ctx.shadowBlur = 12 * fade; ctx.shadowColor = `rgba(255,255,255,${fade})`;
    ctx.beginPath(); ctx.arc(x, y, 1.8 * fade, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255,255,255,${fade})`; ctx.fill();
    ctx.shadowBlur = 0;
  }

  animationId = requestAnimationFrame(animate);
}

// ---------- ATIVAR / DESATIVAR ----------
function startSpace() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initStars();
  canvas.style.opacity = "1";
  if (!animationId) animate();
  scheduleCometsCycle();
}

function stopSpace() {
  canvas.style.opacity = "0";
  clearCometSchedule();
  if (animationId) { cancelAnimationFrame(animationId); animationId = null; }
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// ---------- INICIALIZAÇÃO ----------
if (localStorage.getItem("tema") === "dark") {
  document.body.classList.add("dark");
  toggle.checked = true;
  startSpace();
}

toggle.addEventListener("change", () => {
  if (toggle.checked) {
    document.body.classList.add("dark");
    localStorage.setItem("tema", "dark");
    startSpace();
  } else {
    document.body.classList.remove("dark");
    localStorage.setItem("tema", "light");
    stopSpace();
  }
});

window.addEventListener("resize", () => {
  if (document.body.classList.contains("dark")) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
});