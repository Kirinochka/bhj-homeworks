const menuItems = document.querySelectorAll('.menu__item');
const menuSub = document.querySelectorAll('.menu_sub');

menuItems.forEach(menu => {
  const link = menu.querySelector('.menu__link');
  const subMenu = link.nextElementSibling;

  link.onclick = () => {
    if (subMenu.classList.contains('menu_active')) {
      subMenu.classList.remove('menu_active');
      return false;
    }
    menuSub.forEach(menu => menu.classList.remove('menu_active'));
    subMenu.classList.add('menu_active');
    return false;
  }
})