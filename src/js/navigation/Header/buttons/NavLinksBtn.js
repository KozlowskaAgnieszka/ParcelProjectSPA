export function NavLinksBtn(link, component) {
  const li = document.createElement('li');
  li.setAttribute('class', 'header_nav_left_links_li');
  li.innerText = link;
  
  li.addEventListener('click', () => {
    const navigationEvent = new CustomEvent('navigate', { detail: component });
    document.body.dispatchEvent(navigationEvent);
    const navMobile = document.querySelector('#header_mobilenav_menu');
    navMobile.classList.remove('visible');
  });

  return li;
}
