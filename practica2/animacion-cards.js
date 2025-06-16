document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".area-card");

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("shadow-pop-tr");
        obs.unobserve(entry.target); // animar solo una vez
      }
    });
  }, {
    threshold: 0.4, // 40% del elemento visible
  });

  cards.forEach(card => observer.observe(card));
});