import './styles/cart.scss';
import { RoomList } from '../RoomList/RoomList';
import { RoomsListing } from './RoomsListing';
import { TreatmentListing } from './TreatmentsListing';
import { ListingCheck } from './ListingCheck';
import { Total } from './Total';

export function Cart() {
  const header = document.querySelector('.header_nav');
  header.setAttribute('class', 'header_nav cart_header');

  const main = document.querySelector('main');
  main.setAttribute('class', 'cart');

  // Cart section
  const section = document.createElement('section');
  section.setAttribute('class', 'cart_section');
  section.innerHTML = `<h1>Cart</h1>`;

  // Dates
  const stayDate = document.createElement('div');
  stayDate.setAttribute('class', 'cart_stay');
  const dates = JSON.parse(localStorage.getItem('dates'));
  if (dates.startDate === undefined) {
    stayDate.innerHTML = `
    <div id="dates" ><span>Chose your stay dates</span></div>
  `;
  } else {
    stayDate.innerHTML = `
    <div id="dates" >Your stay: <span >${dates.startDate} - ${dates.endDate}<span></div>
  `;
  }

  stayDate.addEventListener('click', () => {
    const navigationEvent = new CustomEvent('navigate', { detail: RoomList });
    document.body.dispatchEvent(navigationEvent);
  });

  // List of rooms in cart
  const roomsHeader = document.createElement('h2');
  roomsHeader.innerHTML = 'Rooms';
  const roomsList = document.querySelector('.cart_rooms_list');
  const RoomsListingHolder = RoomsListing();

  // List of treatments in cart
  const treatmentsHeader = document.createElement('h2');
  treatmentsHeader.innerHTML = 'Treatments';
  const treatmentList = document.querySelector('.cart_treatments_list');
  const TreatmentListingHolder = TreatmentListing();

  section.append(
    stayDate,
    roomsHeader,
    RoomsListingHolder,
    treatmentsHeader,
    TreatmentListingHolder,
    Total.total()
  );

  ListingCheck(RoomsListingHolder, roomsList);
  ListingCheck(TreatmentListingHolder, treatmentList);

  return section;
}
