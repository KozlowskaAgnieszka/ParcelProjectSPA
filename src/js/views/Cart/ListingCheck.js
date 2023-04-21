export function ListingCheck(ListingHolder, itemList) {
  if (!itemList.hasChildNodes()) {
    itemList.innerHTML = `<li class="list-checker">Nothing selected yet...</li>`;
    ListingHolder.replaceWith(itemList);
  }
}
