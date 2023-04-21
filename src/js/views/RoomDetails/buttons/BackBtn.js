import { RoomList } from '../../RoomList/RoomList';

export function BackBtn() {
  const backIcon = document.createElement('img');

  backIcon.src = new URL('../../../../assets/icons/back.svg', import.meta.url);
  const iconAttributes = {
    alt: 'Back icon',
    id: 'back-icon',
  };
  for (const property in iconAttributes) {
    backIcon.setAttribute(property, iconAttributes[property]);
  }

  backIcon.addEventListener('click', () => {
    const navigationEvent = new CustomEvent('navigate', {
      detail: RoomList,
    });

    document.body.dispatchEvent(navigationEvent);
  });

  return backIcon;
}
