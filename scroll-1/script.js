let mousemove = document.querySelector('.variable-font--mousemove');

let scroll = document.querySelector('.variable-font--scroll');

let video = document.querySelector('.variable-font--scale-video');

mousemove.addEventListener('mousemove', function(e) {
  let windowWidth =  window.innerHeight;
  let clientY = e.clientY;
  let fontWeight = clientY;
  if (fontWeight > 1000) {
    fontWeight = 1000;
  } else if (fontWeight < 100) {
    fontWeight = 100;
  }
  
  e.target.style.setProperty('--font-weight', `${ clientY }`);
  e.target.style.setProperty('--translate', `${ clientY }px`);
});

window.addEventListener('scroll', function(e) {
  let windowY = window.scrollY  * 2;
  if (windowY > 1000) windowY = 1000;
  if (windowY <= 100) windowY = 100;
  
  scroll.style.setProperty('--font-weight', `${ windowY }`);
  scroll.style.setProperty('--translate', `${ window.scrollY / window.innerHeight * 100 }deg`);
  scroll.style.setProperty('--scale', `${ window.scrollY / window.innerHeight * 10 }`);
  
});