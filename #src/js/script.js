
const menuIcon = document.querySelector('.menu-icon');
const headerMenu = document.querySelector('.header__menu');
if (menuIcon) {
  menuIcon.addEventListener('click', function (e) {
    document.body.classList.toggle('_lock')
    menuIcon.classList.toggle('_active');
    headerMenu.classList.toggle('_active');
  });

};

const menuItems = document.querySelectorAll('.menu__item');
if (menuItems.length > 0) {
  menuItems.forEach(item => {
    item.addEventListener('click', onMenuLinkClick);
  });
  function onMenuLinkClick(e) {
    if (menuIcon.classList.contains('_active')) {
      document.body.classList.remove('_lock')
      menuIcon.classList.remove('_active');
      headerMenu.classList.remove('_active');
    }

  }
}