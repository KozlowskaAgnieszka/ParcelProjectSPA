export function HamburgerMenu() {
  const menuIcon = document.createElement('img');
  menuIcon.src = new URL('../../../assets/icons/menu.svg', import.meta.url);
  const iconAttributes = {
    alt: 'Menu icon',
    id: 'menu-btn',
  };
  for (const property in iconAttributes) {
    menuIcon.setAttribute(property, iconAttributes[property]);
  }

  menuIcon.addEventListener('click', () => {
    const navMobile = document.querySelector('#header_mobilenav_menu');
    navMobile.classList.toggle('visible');
  });

  return menuIcon;
}
