export function ShowTreatmentDetailsBtn() {
  const expandIcon = document.createElement('img');
  expandIcon.src = new URL('../../../assets/icons/expand.svg', import.meta.url);
  const iconAttributes = {
    alt: 'Expand icon',
    class: 'expand-icon',
  };
  for (const property in iconAttributes) {
    expandIcon.setAttribute(property, iconAttributes[property]);
  }
  return expandIcon;
}
