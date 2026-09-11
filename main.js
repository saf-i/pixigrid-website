const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const navItems = document.querySelectorAll(".pill-nav-item[href^='#']");

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const id = anchor.getAttribute("href");
    if (!id || id === "#") return;
    const target = document.querySelector(id);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  });
});

// Highlight the nav pill for the section currently in view
if ("IntersectionObserver" in window && navItems.length) {
  const sections = [...navItems].map((item) => document.querySelector(item.getAttribute("href"))).filter(Boolean);
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navItems.forEach((item) => {
          item.classList.toggle("is-active", item.getAttribute("href") === `#${entry.target.id}`);
        });
      });
    },
    { rootMargin: "-40% 0px -50% 0px" }
  );
  sections.forEach((section) => observer.observe(section));
}
