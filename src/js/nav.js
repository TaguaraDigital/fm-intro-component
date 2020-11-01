/*
   logica for tab animation in the features section
*/

const featuresNav = document.getElementById('features-nav');
featuresNav.addEventListener('click', (e) => {
   const a = e.target.id;
   console.log(a, e.target);
   document.querySelector('.features-tabs--show').classList.replace('features-tabs--show','features-tabs--hidden');
   document.querySelector('.features__link--active').classList.remove('features__link--active');
   console.log(document.getElementById(a).id)
   document.getElementById(a).classList.add('features__link--active')
   document.getElementById(a.substring(5)).classList.replace('features-tabs--hidden','features-tabs--show');
})