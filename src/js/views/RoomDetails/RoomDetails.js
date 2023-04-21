import './styles/room-details.scss';
import { BackBtn } from './buttons/BackBtn';
import { StayDate } from '../../commons/stayDate/stayDate';
import { AddToCartBtn } from '../../commons/addToCartBtn/addToCartBtn';
import { ImageHandler } from '../../commons/imageHandler';

export function RoomDetails(roomId) {
  const header = document.querySelector('.header_nav');
  header.setAttribute('class', 'header_nav');

  const main = document.querySelector('main');
  main.setAttribute('class', 'room');

  const section = document.createElement('section');
  section.setAttribute('class', 'room_section');

  fetch(`http://localhost:3000/rooms/${roomId}`)
    .then((response) => response.json())
    .then((room) => {
      const roomPhoto = document.createElement('div');
      roomPhoto.setAttribute('class', 'room_photo');
      const src = ImageHandler(room.photo);
      roomPhoto.innerHTML = `<img src="${src} alt="${room.name}"/>`;

      const roomDescription = document.createElement('div');
      roomDescription.setAttribute('class', 'room_description');
      roomDescription.innerHTML = `
        <h1>${room.name}</h1>
        <ul class="room_description_details">
          <li>Price: <span>${room.price.toFixed(2)} $</span></li>
          <li>Guests: <span>${room.guests}</span></li>
          <li>Beds: <span>${room.beds}</span></li>
        </ul>
        <p class="room_description_text">${room.description}</p>
        <div class="room_description_buttons"></div>
      `;

      roomDescription.lastElementChild.append(
        BackBtn(),
        StayDate(),
        AddToCartBtn(room)
      );
      section.append(roomPhoto, roomDescription);
    });

  return section;
}
