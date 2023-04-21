export function ShowLogWindowBtn() {
  const button = document.createElement('button');
  const buttonAttributes = {
    type: 'button',
    id: 'show-log-window-btn',
  };
  for (const property in buttonAttributes) {
    button.setAttribute(property, buttonAttributes[property]);
  }
  const text = 'Log in';
  button.innerText = text;

  const toggleLogSection = () => {
    const logSection = document.querySelector('#log_backdrop');
    logSection.classList.toggle('visible');
  };

  const showLogWindow = () => {
    const logWindow = document.getElementById('add-window');
    logWindow.classList.toggle('visible');
    toggleLogSection();
  };

  button.addEventListener('click', showLogWindow);

  return button;
}
