const toggle = document.getElementById('darkModeToggle');
const body = document.body;

toggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    toggle.textContent = '☀️ ';
  } else {
    toggle.textContent = '🌙 ';
  }
});

// Afficher le bouton retour en haut
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  scrollTopBtn.style.display = window.scrollY > 200 ? "block" : "none";
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Soumission du formulaire
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Merci pour votre message !");
  this.reset();
});
