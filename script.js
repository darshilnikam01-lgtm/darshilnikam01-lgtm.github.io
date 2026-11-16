// Typing animation in the hero
const roles = [
  "Software Developer",
  "ML Enthusiast",
  "Competitive Programmer",
  "Bridge-Design Software Contributor",
];

const typedEl = document.getElementById("typed");
let roleIndex = 0, charIndex = 0, deleting = false;

function tick() {
  const word = roles[roleIndex];
  typedEl.textContent = word.slice(0, charIndex);

  if (!deleting && charIndex === word.length) {
    deleting = true;
    setTimeout(tick, 1600);
    return;
  }
  if (deleting && charIndex === 0) {
    deleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(tick, 300);
    return;
  }
  charIndex += deleting ? -1 : 1;
  setTimeout(tick, deleting ? 45 : 80);
}
tick();

// Mobile nav toggle
const toggle = document.querySelector(".nav__toggle");
const links = document.querySelector(".nav__links");
toggle.addEventListener("click", () => links.classList.toggle("open"));
links.querySelectorAll("a").forEach(a =>
  a.addEventListener("click", () => links.classList.remove("open"))
);

// Fade-in sections on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = "1";
      e.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".section, .card, .stat").forEach((el, i) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(24px)";
  el.style.transition = `opacity .6s ease ${i % 4 * 0.06}s, transform .6s ease ${i % 4 * 0.06}s`;
  observer.observe(el);
});
