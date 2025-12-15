function isElementInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function showElementsOnScroll() {
  var sections = document.querySelectorAll('.section');
  
  sections.forEach(function(section) {
      if (isElementInViewport(section)) {
          section.style.opacity = '1';
          section.style.transform = 'translateY(0)';
      }
  });
}

window.addEventListener('scroll', showElementsOnScroll);
window.addEventListener('resize', showElementsOnScroll);

showElementsOnScroll();