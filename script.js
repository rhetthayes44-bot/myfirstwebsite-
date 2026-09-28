document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".navbar, .hero-copy, .hero-card");

  elements.forEach((element, index) => {
    element.classList.add("animate-in");
    element.style.animationDelay = `${index * 0.15}s`;
  });

  const particlesContainer = document.querySelector(".particles");

  if (particlesContainer) {
    const particleCount = 18;

    for (let i = 0; i < particleCount; i += 1) {
      const dot = document.createElement("span");
      dot.className = "particle";

      const size = Math.random() * 5 + 2;
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const duration = Math.random() * 8 + 8;
      const delay = Math.random() * 5;

      dot.style.width = `${size}px`;
      dot.style.height = `${size}px`;
      dot.style.left = `${left}%`;
      dot.style.top = `${top}%`;
      dot.style.animationDuration = `${duration}s`;
      dot.style.animationDelay = `${delay}s`;

      particlesContainer.appendChild(dot);
    }
  }

  const main = document.querySelector(".main");

  if (main) {
    main.addEventListener("pointermove", (event) => {
      const { innerWidth, innerHeight } = window;
      const x = (event.clientX / innerWidth - 0.5) * 14;
      const y = (event.clientY / innerHeight - 0.5) * 14;

      document.documentElement.style.setProperty("--mouse-x", `${x}px`);
      document.documentElement.style.setProperty("--mouse-y", `${y}px`);
    });

    main.addEventListener("pointerleave", () => {
      document.documentElement.style.setProperty("--mouse-x", "0px");
      document.documentElement.style.setProperty("--mouse-y", "0px");
    });
  }
});
