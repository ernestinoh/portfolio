const toggle = document.getElementById('darkModeToggle');
const body = document.body;

toggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    toggle.textContent = '☀️ Mode clair';
  } else {
    toggle.textContent = '🌙 Mode sombre';
  }
});
