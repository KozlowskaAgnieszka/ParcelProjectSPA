import { RoomsListing } from '../RoomsListing';
import { TreatmentListing } from '../TreatmentsListing';
import { ListingCheck } from '../ListingCheck';
import { cartManager } from '../../../../data-managers/cart-manager';
import { numberWithSpaces } from '../../../commons/numberWithSpaces';

export const DeleteBtn = {
  deleteBtn(itemContent) {
    const removeItem = document.createElement('div');
    removeItem.setAttribute('class', 'cart_list_container_delete');

    const deleteIcon = document.createElement('img');
    deleteIcon.src = new URL(
      '../../../../assets/icons/delete.svg',
      import.meta.url
    );
    const iconAttributes = {
      alt: 'Delete icon',
      id: 'delete-btn',
    };
    for (const property in iconAttributes) {
      deleteIcon.setAttribute(property, iconAttributes[property]);
    }

    deleteIcon.addEventListener('click', () => {
      const cart = JSON.parse(localStorage.getItem('cart'));
      const [itemName, itemDetails] = itemContent;
      cartManager.removeItem(itemContent);
      const cartCounter = document.querySelector('#cart_counter');
      cartCounter.innerHTML = `<p> ${cartManager.getTotalItems()}</p>`;

      if (itemDetails.quantity === 1) {
        const cartItem = removeItem.parentNode.parentNode;
        cartItem.remove();
        const roomsList = document.querySelector('.cart_rooms_list');
        const RoomsListingHolder = RoomsListing();
        ListingCheck(RoomsListingHolder, roomsList);
        const treatmentList = document.querySelector('.cart_treatments_list');
        const TreatmentListingHolder = TreatmentListing();
        ListingCheck(TreatmentListingHolder, treatmentList);
      } else {
        itemDetails.quantity--;
        itemDetails.price = cart[itemName].price * itemDetails.quantity;
        const itemContainer = removeItem.parentNode;
        removeItem.parentNode.innerHTML = `
        <div class="cart_list_item_container_details">
        <div><strong>${itemName}</strong></div>
        <div>Treatments no. <span>${itemDetails.quantity}</span></div>
        <div>Price: <span>${numberWithSpaces(itemDetails.price.toFixed(2))} $</span></div>
        </div>`;

        removeItem.append(deleteIcon);
        itemContainer.append(removeItem);
      }
    });

    removeItem.append(deleteIcon);

    return removeItem;
  },
};
