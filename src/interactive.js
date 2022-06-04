/* eslint-disable import/prefer-default-export */
/* eslint-disable class-methods-use-this */

export class Interactive {
  constructor() {
    return null;
  }

  static storeItems(items) {
    localStorage.setItem('items', JSON.stringify(items));
  }

  static fetchItems() {
    const items = JSON.parse(localStorage.getItem('items'));
    if (items) return items;
    return [];
  }

  checkBoxListener() {
    const comps = document.querySelectorAll('.completed');
    const items = this.constructor.fetchItems();
    comps.forEach((comp) => {
      comp.addEventListener('click', () => {
        const index = comp.getAttribute('id').slice(5);
        items.forEach((item) => {
          if (item.index === Number(index)) {
            if (item.completed === false) {
              item.completed = true;
            } else if (item.completed === true) {
              item.completed = false;
            }
          }
        });
        this.constructor.storeItems(items);
        window.location.reload();
      });
    });
  }

  clearButtonListener() {
    const toClear = [];
    const items = this.constructor.fetchItems();
    let newItems = items;
    let newItem = null;
    items.forEach((item) => {
      if (item.completed === true) {
        toClear.push(item.index);
      }
    });
    toClear.forEach((id) => {
      newItem = newItems.filter((item) => {
        if (item.index !== Number(id)) return true;
        return null;
      });
      newItems = newItem;
    });
    newItems.forEach((newItem) => {
      newItem.index = newItems.indexOf(newItem) + 1;
    });
    this.constructor.storeItems(newItems);
    window.location.reload();
  }
}
