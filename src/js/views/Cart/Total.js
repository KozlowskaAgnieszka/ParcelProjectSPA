import { numberWithSpaces } from '../../commons/numberWithSpaces';
import { cartManager } from '../../../data-managers/cart-manager';

export const Total = {
  total() {
    const total = document.createElement('div');
    total.setAttribute('class', 'cart_total');
    const totalPrice = cartManager.getTotalPrice();
    if (totalPrice === '0.00') {
      return total;
    } else {
      total.innerHTML = `
        <p>
         Total: <strong>${numberWithSpaces(
           cartManager.getTotalPrice()
         )} $</strong>
        </p>
      `;

      return total;
    }
  },

  updateTotalPrice() {
    const total = document.querySelector('.cart_total');
    const totalPrice = cartManager.getTotalPrice();
    if (totalPrice === '0.00') {
      total.parentNode.removeChild(total);
      return;
    } else {
      total.innerHTML = `
    <p>
      Total: <strong>${numberWithSpaces(totalPrice)} $</strong>
    </p>`;
    }
  },
};
