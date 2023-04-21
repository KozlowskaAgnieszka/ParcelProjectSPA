import { RoomList } from '../../RoomList/RoomList';

export function BookOnlineBtn() {
  const button = document.createElement('button');

  const buttonAttributes = {
    type: 'button',
    id: 'book-btn',
  };
  for (const property in buttonAttributes) {
    button.setAttribute(property, buttonAttributes[property]);
  }
  const text = 'Book online';
  button.innerText = text;

  button.addEventListener('click', () => {
    const navigationEvent = new CustomEvent('navigate', {
      detail: RoomList,
    });

    document.body.dispatchEvent(navigationEvent);
  });

  return button;
}
