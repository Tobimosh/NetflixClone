const navItems = document.querySelector('.nav-items');
const icons = document.querySelector('.icons');

icons.addEventListener('click', () => {
  navItems.classList.toggle('show');
});
