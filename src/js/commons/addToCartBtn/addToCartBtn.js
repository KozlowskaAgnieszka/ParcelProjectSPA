import './styles/addToCartBtn.scss';
import { cartManager } from '../../../data-managers/cart-manager';

export function AddToCartBtn(item) {
  const addToCartButton = document.createElement('button');
  addToCartButton.innerText = 'Add to cart';
  addToCartButton.classList.add('add-to-cart-btn');

  addToCartButton.addEventListener('click', () => {
    cartManager.addItem(item);
    const cartCounter = document.querySelector('#cart_counter');
    cartCounter.innerHTML = `<p> ${cartManager.getTotalItems()}</p>`;
  });
  return addToCartButton;
}
