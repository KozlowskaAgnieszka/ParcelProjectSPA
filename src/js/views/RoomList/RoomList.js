import './styles/room-list.scss';
import { RoomDetails } from '../RoomDetails/RoomDetails';
import { ReadMoreBtn } from './buttons/ReadMoreBtn';
import { StayDate } from '../../commons/stayDate/stayDate';
import { AddToCartBtn } from '../../commons/addToCartBtn/addToCartBtn';
import { ImageHandler } from '../../commons/imageHandler';

export function RoomList() {
  const header = document.querySelector('.header_nav');
  header.setAttribute('class', 'header_nav');

  const main = document.querySelector('main');
  main.setAttribute('class', 'rooms');

  const section = document.createElement('section');

  // Header
  const h1 = document.createElement('h1');
  h1.innerText = 'Rooms';

  // Rooms listing
  const roomsList = document.createElement('ul');
  roomsList.setAttribute('class', 'rooms_list');

  fetch('http://localhost:3000/rooms')
    .then((response) => response.json())
    .then((rooms) => {
      const list = rooms.map((room) => {
        const roomItem = document.createElement('li');
        roomItem.setAttribute('class', 'rooms_roomItem');

        const src = ImageHandler(room.photo);
        const roomPhoto = document.createElement('div');
        roomPhoto.setAttribute('class', 'rooms_roomItem_photo');
        roomPhoto.innerHTML = `
        <img src="${src} alt="${room.name}"/>
        `;
        const roomName = document.createElement('h2');
        roomName.setAttribute('class', 'rooms_roomItem_name');
        roomName.innerHTML = ` ${room.name}`;

        const roomFooter = document.createElement('div');
        roomFooter.setAttribute('class', 'rooms_roomItem_footer');
        roomFooter.innerHTML = `
          <p class="rooms_list_footer_price">
            Price: <span>${room.price.toFixed(2)}&nbsp;$</span>
          </p>`;

        const buttons = document.createElement('div');
        buttons.setAttribute('class', 'rooms_roomItem_footer_buttons');
        const goToRoomDetails = () => RoomDetails(room.id);

        buttons.append(ReadMoreBtn(goToRoomDetails), AddToCartBtn(room));
        roomFooter.append(buttons);
        roomItem.append(roomPhoto, roomName, roomFooter);

        return roomItem;
      });

      roomsList.append(...list);
    });

  section.append(h1, StayDate(), roomsList);

  return section;
}
