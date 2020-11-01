/* -----------------------------------------------------------------------------------------
  Revisa en que link se hizo click, busca el link que tenia la clase active para removerla 
  y luego agregarle al link donde se hizo click la clase active
-----------------------------------------------------------------------------------------
navItems.forEach(link => {
   link.addEventListener('click', function(){
      navList.querySelector('.nav__item--active').classList.remove('nav__item--active');
      link.classList.add('nav__item--active');
      
      if (menuOpen) {
         navLinks.classList.toggle('navbar--open');
         mainNav.classList.toggle('nav-items--open');
         toggleMenu.classList.toggle('toggle-menu--open');
         menuOpen = false;
      }
   })
});
-*/