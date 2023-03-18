const navItems = document.querySelector('.mobile-nav__items');
const icons = document.querySelector('.toggle-icon');

icons.addEventListener('click', () => {
  navItems.classList.toggle('show');
});
