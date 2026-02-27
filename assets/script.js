// Mobile menu
const toggle = document.querySelector(".navToggle");
const menu = document.querySelector(".nav ul");
if (toggle && menu) {
  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

// Active nav link
const path = location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".nav a[data-page]").forEach(a => {
  if (a.getAttribute("data-page") === path) a.classList.add("active");
});

// Footer year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

// FAQ accordion
document.querySelectorAll(".faqItem .faqQ").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.closest(".faqItem").classList.toggle("open");
  });
});

// Demo contact submit (no backend)
window.handleSubmit = function(e){
  e.preventDefault();
  const note = document.getElementById("formNote");
  if (note) note.textContent = "✅ Message received (demo). Connect email/CRM for live submissions.";
  e.target.reset();
  return false;
}
