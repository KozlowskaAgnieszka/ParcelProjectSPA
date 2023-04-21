import { Home } from '../../../views/Home/Home';

export function MobileNavLinksBtn() {
  const li = document.createElement('li');
  li.setAttribute('id', 'header_mobilenav_menu_home');
  li.innerText = 'Home';

  li.addEventListener('click', () => {
    const navigationEvent = new CustomEvent('navigate', { detail: Home });
    document.body.dispatchEvent(navigationEvent);
    const navMobile = document.querySelector('#header_mobilenav_menu');
    navMobile.classList.remove('visible');
  });

  return li;
}
