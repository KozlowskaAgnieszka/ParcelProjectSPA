import { userManager } from "../../../../data-managers/user-manager";

export function LogoutBtn() {
  const button = document.createElement('button');

  const buttonAttributes = {
    type: 'button',
    id: 'logout-btn',
  };
  for (const property in buttonAttributes) {
    button.setAttribute(property, buttonAttributes[property]);
  }
  const text = 'Log out';
  button.innerText = text;

  button.addEventListener('click', userManager.logoutUser);

  return button;
}
