document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.querySelector(".navbar-toggler"); // Correct selector
  const navbar = document.querySelector(".navbar-collapse");

  if (toggleBtn && navbar) {
      toggleBtn.addEventListener("click", function () {
          navbar.classList.toggle("active"); // Use a proper class
      });
  }
});
