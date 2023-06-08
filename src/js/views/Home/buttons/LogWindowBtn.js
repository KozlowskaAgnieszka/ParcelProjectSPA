import { userManager } from '../../../../data-managers/user-manager';

export function LogWindowBtn() {
  const button = document.createElement('button');

  const buttonAttributes = {
    type: 'button',
    id: 'log-window-btn',
  };

  for (const property in buttonAttributes) {
    button.setAttribute(property, buttonAttributes[property]);
  }
  const text = 'Log in';
  button.innerText = text;

  button.addEventListener('click', userManager.logUser);

  return button;
}
