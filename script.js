const toggleButton = document.getElementById('toggleButton');
const menu = document.getElementById('menu');
const overlay = document.getElementById('menu-overlay');
const homeButtonNav = document.getElementById('home-button-nav');
const body = document.body;

toggleButton.addEventListener('click', () => {
  menu.classList.toggle('active');
  overlay.classList.toggle('active');
  body.classList.toggle('menu-active');

  if (menu.classList.contains('active')) {
    toggleButton.innerHTML = '<span class="material-symbols-outlined">close</span>';
    homeButtonNav.classList.add('active');
  } else {
    toggleButton.innerHTML = '<span class="material-symbols-outlined">menu</span>';
    homeButtonNav.classList.remove('active');
  }
});

overlay.addEventListener('click', () => {
  menu.classList.remove('active');
  overlay.classList.remove('active');
  toggleButton.innerHTML = '<span class="material-symbols-outlined">menu</span>';
  homeButtonNav.classList.remove('active');
  body.classList.remove('menu-active');
});