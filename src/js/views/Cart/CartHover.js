import './styles/cart-hover.scss';
import { RoomsListing } from './RoomsListing';
import { TreatmentListing } from './TreatmentsListing';
import { numberWithSpaces } from '../../commons/numberWithSpaces';
import { cartManager } from '../../../data-managers/cart-manager';

export function CartHover() {
  // Cart section
  const section = document.createElement('section');
  section.setAttribute('id', 'cart_hover_section');
  section.innerHTML = `<h2>Cart</h2>`;

  // Dates
  const stayDate = document.createElement('div');
  const dates = JSON.parse(localStorage.getItem('dates'));
  if (dates.startDate === undefined) {
    stayDate.innerHTML = `<div id="dates_hover" >No dates selected...</div>`;
  } else {
    stayDate.innerHTML = `
    <div id="dates_hover" >
      Your stay: 
      <span >${dates.startDate} - ${dates.endDate}<span>
    </div>
  `;
  }

  // List of rooms in cart
  const roomsHeader = document.createElement('h3');
  roomsHeader.innerHTML = 'Rooms';
  const RoomsListingHolder = RoomsListing();

  // List of treatments in cart
  const treatmentsHeader = document.createElement('h3');
  treatmentsHeader.innerHTML = 'Treatments';
  const TreatmentListingHolder = TreatmentListing();

  const total = document.createElement('div');
  total.setAttribute('id', 'cart_hover_section_total');
  const totalPrice = cartManager.getTotalPrice();
  if (totalPrice === '0.00') {
    total.innerHTML = `
        <p id="empty-cart">
         Cart is empty
        </p>
      `;
  } else {
    total.innerHTML = `
        <p>
         Total: <strong>${numberWithSpaces(
           cartManager.getTotalPrice()
         )} $</strong>
        </p>
      `;
  }

  section.append(
    stayDate,
    roomsHeader,
    RoomsListingHolder,
    treatmentsHeader,
    TreatmentListingHolder,
    total
  );

  if (totalPrice === '0.00') {
    section.removeChild(roomsHeader);
    section.removeChild(treatmentsHeader);
  }

  return section;
}
