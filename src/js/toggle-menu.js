const toggleMenu = document.getElementById('toggle-menu');
const mainNav = document.getElementById('main-nav');
const navLogo = document.getElementById('nav__logo');
const navItems = document.querySelectorAll('.nav__item');

let menuOpen = false;

toggleMenu.addEventListener('click', () =>{
   mainNav.classList.toggle('main-nav--show');
   toggleMenu.classList.toggle('toggle-menu--open');
   navLogo.classList.toggle('nav__logo--show');
   menuOpen ? menuOpen = false : menuOpen = true;
})