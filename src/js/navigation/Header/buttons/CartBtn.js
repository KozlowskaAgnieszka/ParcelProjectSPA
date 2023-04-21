import { Cart } from '../../../views/Cart/Cart';
import { CartHover } from '../../../views/Cart/CartHover';

export function CartBtn() {
  const cartIcon = document.createElement('img');
  cartIcon.src = new URL(
    '../../../../assets/icons/shopping-cart.svg',
    import.meta.url
  );
  const iconAttributes = {
    alt: 'Shopping-cart icon',
    id: 'cart-btn',
  };
  for (const property in iconAttributes) {
    cartIcon.setAttribute(property, iconAttributes[property]);
  }

  cartIcon.addEventListener('click', () => {
    const cartEvent = new CustomEvent('navigate', {
      detail: Cart,
    });
    document.body.dispatchEvent(cartEvent);
  });

  cartIcon.addEventListener('mouseover', () => {
    const nav = document.querySelector('.header_nav');
    nav.appendChild(CartHover());
  });

  cartIcon.addEventListener('mouseleave', () => {
    const nav = document.querySelector('.header_nav');
    const cartHover = document.querySelector('#cart_hover_section');
    nav.removeChild(cartHover);
  });

  return cartIcon;
}
