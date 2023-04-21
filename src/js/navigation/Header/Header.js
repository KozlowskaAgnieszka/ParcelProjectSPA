import './styles/header.scss';
import { RoomList } from '../../views/RoomList/RoomList';
import { TreatmentList } from '../../views/TreatmentList/TreatmentList';
import { NavLinksBtn } from './buttons/NavLinksBtn';
import { CartBtn } from './buttons/CartBtn';
import { HomeBtn } from './buttons/HomeBtn';
import { MobileNavLinksBtn } from './buttons/MobileNavLinksBtn';
import { LogoutBtn } from './buttons/LogOutBtn';
import { HamburgerMenu } from './HamburgerMenu';
import { cartManager } from '../../../data-managers/cart-manager';

const navItems = [
  { name: 'Rooms', component: RoomList },
  { name: 'Treatments', component: TreatmentList },
];

export function Header() {
  // main container
  const header = document.createElement('header');
  header.setAttribute('class', 'header');

  const nav = document.createElement('nav');
  nav.setAttribute('class', 'header_nav');

  // left navigation (home & site-links)
  const navLeft = document.createElement('nav');
  navLeft.setAttribute('class', 'header_nav_left');
  navLeft.innerHTML = `
    <div class="header_nav_left_home"></div>
    <ul class="header_nav_left_links"></ul>
  `;

  const home = navLeft.firstElementChild
  const links = navLeft.lastElementChild;

  const navLinks = navItems.map((navItem) =>
    NavLinksBtn(navItem.name, navItem.component)
  );

  // logo
  const logo = document.createElement('div');
  logo.setAttribute('class', 'header_nav_logo');
  const src = new URL('../../../assets/logo/lotus.png', import.meta.url);
  logo.innerHTML =`
  <img src="${src}" alt="Lotus logo" class="header_nav_logo_lotus"/>
  <p class="header_nav_logo_text">Lotus SPA</p>
  `
  // right navigation (cart)
  const navRight = document.createElement('div');
  navRight.setAttribute('class', 'header_nav_right');
  navRight.innerHTML = `
  <div id=cart_counter>
    <p>
      ${cartManager.getTotalItems()}
    </p>
  </div>`;

  // Mobile navigation menu
  const hamburgerMenu = document.createElement('div');
  hamburgerMenu.setAttribute('id', 'header_mobilenav');
  hamburgerMenu.innerHTML = `
  <div id="header_mobilenav_menu">
    <ul id="header_mobilenav_menu_links"></ul>
  </div>
  `;
  const linksMobile = hamburgerMenu.firstElementChild.firstElementChild;
  const navLinksMobile = navItems.map((navItem) =>
    NavLinksBtn(navItem.name, navItem.component)
  );

  navRight.append(LogoutBtn(), CartBtn());
  links.append(...navLinks);
  home.prepend(HomeBtn());
  linksMobile.append(MobileNavLinksBtn(), ...navLinksMobile);
  hamburgerMenu.append(HamburgerMenu());
  navLeft.append(hamburgerMenu);
  nav.append(navLeft, logo, navRight);
  header.append(nav);

  return header;
}
