import { Total } from '../js/views/Cart/Total';

const key = 'cart';

export const cartManager = {
  addItem(item) {
    const cart = localStorage.getItem(key);
    let content;

    if (cart === null) {
      content = {
        [item.name]: { price: item.price, quantity: 1, type: item.type },
      };
    } else {
      content = JSON.parse(cart);
      if (item.name in content && item.type === 'treatment') {
        content[item.name].quantity += 1;
      } else {
        const newItem = {
          [item.name]: { price: item.price, quantity: 1, type: item.type },
        };

        Object.assign(content, newItem);
      }
    }

    localStorage.setItem(key, JSON.stringify(content));
  },

  getRoomItems() {
    const cart = localStorage.getItem(key);
    const numberOfDays = JSON.parse(localStorage.getItem('dates'));

    if (cart === null) {
      return;
    } else {
      const content = JSON.parse(cart);

      return Object.entries(content).filter((entry) => {
        const [roomName, roomDetails] = entry;
        if (roomDetails.type === 'room') {
          roomDetails.price = roomDetails.price * numberOfDays.totalDays;
          return {};
        }
      });
    }
  },

  getTreatmentItems() {
    const cart = localStorage.getItem(key);

    if (cart === null || cart === {}) {
      return;
    } else {
      const content = JSON.parse(cart);
      return Object.entries(content).filter((entry) => {
        const [treatmentName, treatmentDetails] = entry;

        if (treatmentDetails.type === 'treatment') {
          treatmentDetails.price =
            treatmentDetails.price * treatmentDetails.quantity;
          return {};
        }
      });
    }
  },

  removeItem(item) {
    const cart = localStorage.getItem(key);
    const [itemName, itemDetails] = item;
    const content = JSON.parse(cart);

    if (cart !== null && Object.hasOwn(content, itemName)) {
      if (itemDetails.type === 'room') {
        delete content[itemName];
      } else {
        if (content[itemName].quantity > 1) {
          content[itemName].quantity -= 1;
        } else {
          delete content[itemName];
        }
      }
    }
    localStorage.setItem(key, JSON.stringify(content));
    Total.updateTotalPrice();
  },

  getTotalPrice() {
    const cart = localStorage.getItem(key);
    const numberOfDays = JSON.parse(localStorage.getItem('dates'));

    if (cart === null) {
      return '0.00';
    } else {
      const content = JSON.parse(cart);
      return Object.values(content)
        .reduce((totalPrice, item) => {
          if (item.type === 'room') {
            return totalPrice + item.price * numberOfDays.totalDays;
          } else {
            return totalPrice + item.price * item.quantity;
          }
        }, 0)
        .toFixed(2);
    }
  },

  getTotalItems() {
    const cart = localStorage.getItem(key);

    if (cart === null) {
      return '0';
    } else {
      const content = JSON.parse(cart);

      return Object.values(content).reduce((totalItems, item) => {
        return totalItems + item.quantity;
      }, 0);
    }
  },
};
