var element = document.getElementById('navbar');
window.addEventListener('scroll', function() {
  if (window.scrollY > 120) {
    element.classList.add('nav-scrolled');
  } else {
    element.classList.remove('nav-scrolled');
  }
});