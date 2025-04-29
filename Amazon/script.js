// Mobile menu toggle functionality
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
  const panel = document.querySelector(".panel");

  // Initially hide the panel on mobile
  if (window.innerWidth <= 768) {
    panel.classList.add("panel-hidden");
  }

  // Toggle panel visibility when menu button is clicked
  mobileMenuToggle.addEventListener("click", function () {
    panel.classList.toggle("panel-hidden");
  });

  // Hide panel when window is resized above mobile breakpoint
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      panel.classList.remove("panel-hidden");
    } else {
      if (!panel.classList.contains("panel-hidden")) {
        panel.classList.add("panel-hidden");
      }
    }
  });
});
