const navItems = document.querySelector('.mobile-nav__items');
const icons = document.querySelector('.icons');

icons.addEventListener('click', () => {
  navItems.classList.toggle('show');
});
