const svgs = document.querySelectorAll('svg');

window.addEventListener('scroll', () => {
  svgs.forEach((svg) => {             
    // svg.style.transform = `translateY(-${window.scrollY/4}px)`;
  });
});