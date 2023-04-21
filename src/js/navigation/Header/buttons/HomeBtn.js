import { Home } from "../../../views/Home/Home";

export function HomeBtn() {
  const homeIcon = document.createElement('img');
  homeIcon.src = new URL('../../../../assets/icons/home.svg', import.meta.url);
  const iconAttributes = {
    alt: 'Home icon',
    id: 'home-btn',
  };
  for (const property in iconAttributes) {
    homeIcon.setAttribute(property, iconAttributes[property]);
  }

  homeIcon.addEventListener('click', () => {
    const homeEvent = new CustomEvent('navigate', {
      detail: Home,
    });

    document.body.dispatchEvent(homeEvent);
  });
  return homeIcon;
}
