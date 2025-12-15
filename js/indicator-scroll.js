window.addEventListener('scroll', updateScrollIndicator);
window.addEventListener('resize', updateScrollIndicator);  // Met à jour la barre si la taille de la fenêtre change

function updateScrollIndicator() {
    const scrollIndicator = document.getElementById('scrollIndicator');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / docHeight) * 100;

    scrollIndicator.style.width = scrollPercentage + '%';
}

// Initialisation pour éviter que la barre soit déjà à fond au chargement
document.addEventListener('DOMContentLoaded', updateScrollIndicator);
