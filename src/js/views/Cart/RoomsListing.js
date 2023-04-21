import { Listing } from './Listings';
import { numberWithSpaces } from '../../commons/numberWithSpaces';
import { cartManager } from '../../../data-managers/cart-manager';

export function RoomsListing() {
  const roomsList = document.createElement('ul');
  roomsList.setAttribute(
    'class',
    'cart_list cart_rooms_list cart_hover_rooms_list'
  );
  const rlist = cartManager.getRoomItems().map((itemContent) => {
    const numberOfDays = JSON.parse(localStorage.getItem('dates'));
    const [roomName, roomDetails] = itemContent;
    const itemContainerText = `
      <div class="cart_list_item_container_details">
        <div class="room-name"><strong>${roomName}</strong></div>
        <div class="number-of-days">No. of days:&nbsp<span>${numberOfDays.totalDays}</span></div>
        <div class="room-price">Price: <span>${numberWithSpaces((roomDetails.price).toFixed(2))}&nbsp$</span></div>
      </div>`;

    return Listing(itemContent, itemContainerText);
  });

  roomsList.append(...rlist);
  return roomsList;
}
