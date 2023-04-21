// bypass of dynamic photo input
export function ImageHandler(photoId) {
  let src;

  switch (photoId) {
    case 'photo1':
      src = new URL('../../assets/photos/room-1.jpg', import.meta.url);
      break;
    case 'photo2':
      src = new URL('../../assets/photos/room-2.jpg', import.meta.url);
      break;
    case 'photo3':
      src = new URL('../../assets/photos/room-3.jpg', import.meta.url);
      break;
    case 'photo4':
      src = new URL('../../assets/photos/room-4.jpg', import.meta.url);
      break;
    case 'photo5':
      src = new URL('../../assets/photos/room-5.jpg', import.meta.url);
      break;
    case 'photo6':
      src = new URL('../../assets/photos/room-6.jpg', import.meta.url);
      break;
  }
  return src;
}
