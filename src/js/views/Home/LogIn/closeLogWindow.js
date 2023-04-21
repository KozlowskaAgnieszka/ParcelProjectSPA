export function logSectionClickHandler() {
  const logWindow = document.querySelector('#add-window');
  logWindow.setAttribute('class', 'log_window');

  const userName = document.getElementById('login');
  const userPassword = document.getElementById('password');
  const msg = document.querySelector('#log-message');

  userName.value = '';
  userPassword.value = '';
  msg.classList.remove('visible');

  const logBackdrop = document.querySelector('#log_backdrop');
  logBackdrop.classList.remove('visible');
}
