import { Listing } from './Listings';
import { cartManager } from '../../../data-managers/cart-manager';
import { numberWithSpaces } from '../../commons/numberWithSpaces';

export function TreatmentListing() {
  const treatmentList = document.createElement('ul');
  treatmentList.setAttribute('class', 'cart_list cart_treatments_list');
  const tlist = cartManager.getTreatmentItems().map((itemContent) => {
    const [treatmentName, treatmentDetails] = itemContent;
    let itemContainerText = `
      <div class="cart_list_item_container_details">
        <div><strong>${treatmentName}</strong></div>
        <div>Treatments no.&nbsp<span>${treatmentDetails.quantity}</span></div>
        <div>Price: <span>${numberWithSpaces((treatmentDetails.price).toFixed(2))}&nbsp$</span></div>
      </div>`;

    return Listing(itemContent, itemContainerText);
  });

  treatmentList.append(...tlist);
  return treatmentList;
}
