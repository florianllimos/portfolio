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

    var animatedElements = document.querySelectorAll('.animated-element');
            
    animatedElements.forEach(function(animatedElement) {

      if (isElementInViewport(animatedElement)) {

        animatedElement.style.opacity = '1';
        animatedElement.style.transform = 'translateY(0)';
            
      }
  });
}
          
window.addEventListener('scroll', showElementsOnScroll);
window.addEventListener('resize', showElementsOnScroll);
          
showElementsOnScroll();

const containerLoading = document.querySelector("#container-loading");

setTimeout(() => {
  containerLoading.style="display: none";
}, "4000");