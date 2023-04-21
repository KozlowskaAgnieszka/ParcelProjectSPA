import { DeleteBtn } from './buttons/DeleteBtn';

export function Listing(itemContent, itemContainerText) {
  const cartItem = document.createElement('li');
  cartItem.setAttribute('class', 'cart_list_item');

  const itemContainer = document.createElement('div');
  itemContainer.setAttribute('class', 'cart_list_item_container');
  itemContainer.innerHTML = itemContainerText;

  itemContainer.append(DeleteBtn.deleteBtn(itemContent));
  cartItem.append(itemContainer);
  return cartItem;
}
