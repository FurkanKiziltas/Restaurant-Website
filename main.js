const navbar = document.querySelector('.navbar-collapse');
const links = document.querySelectorAll('.nav-link');

links.forEach(link => {
  link.addEventListener('click', function() {
    navbar.classList.remove('show');
  });
});

window.addEventListener('load', function() {
  window.scrollTo(0,0);
});