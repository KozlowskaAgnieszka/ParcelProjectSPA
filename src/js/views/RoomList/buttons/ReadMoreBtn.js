export function ReadMoreBtn(componentFn) {
  const button = document.createElement('button');
  button.className = 'read-more-btn';
  const buttonAttributes = {
    type: 'button',
    id: 'read-more-btn',
  };
  for (const property in buttonAttributes) {
    button.setAttribute(property, buttonAttributes[property]);
  }
  const text = 'Read more...';
  button.innerText = text;

  button.addEventListener('click', () => {
    const navigationEvent = new CustomEvent('navigate', {
      detail: componentFn,
    });
    document.body.dispatchEvent(navigationEvent);
  });

  return button;
}
