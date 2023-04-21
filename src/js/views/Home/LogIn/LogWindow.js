import '../styles/log-user.scss';
import { LogWindowBtn } from '../buttons/LogWindowBtn';
import { logSectionClickHandler } from './closeLogWindow';
import { userManager } from '../../../../data-managers/user-manager';

export function LogWindow() {
  const logSection = document.createElement('section');
  logSection.setAttribute('id', 'log');
  logSection.innerHTML = `
  <div id="log_backdrop"></div>
  <div class="log_window" id="add-window">
    <div class='log_window_content'>
    <label for="login">login:</label>
    <input type="text" id="login" name="login">
    <label for="password">password:</label>
    <input type="password" id="password" name="password">
    </div>
    <div class="log_window_button"></div>
    <div class="log_window_create-account-btn">
      <p>Create account</p>
    </div>
    <div id="log-message"></div>
  </div>
  `;
  const logBackdrop = logSection.firstElementChild;
  const logWindow = logSection.lastElementChild;
  const logInBtn = logSection.lastElementChild.children[1];
  const createAccountBtn = logSection.lastElementChild.children[2].firstElementChild

  createAccountBtn.addEventListener('click', userManager.createUser);
  logBackdrop.addEventListener('click', logSectionClickHandler);

  logInBtn.append(LogWindowBtn());

  const logInput = logWindow.querySelector('#login');
  logInput.addEventListener('keydown', (event) => {
    loginOnEnter(event);
  });

  const passwordInput = logWindow.querySelector('#password');
  passwordInput.addEventListener('keydown', (event) => {
    loginOnEnter(event);
  });

  const loginOnEnter = (event) => {
    if (
      passwordInput.value !== '' &&
      logInput.value !== '' &&
      event.which === 13
    ) {
      userManager.logUser();
    }
  };

  return logSection;
}
