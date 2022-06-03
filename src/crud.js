/* eslint-disable import/prefer-default-export */
/* eslint-disable class-methods-use-this */

export class Crud {
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

  addItem(description, completed = false, index = 0) {
    if (description) {
      const newItem = {
        description: '',
        completed: null,
        index: null,
      };

      const storedItems = this.constructor.fetchItems();
      const len = storedItems.length;

      newItem.description = description;
      newItem.completed = completed;
      newItem.index = index;
      newItem.index = len + 1;

      storedItems.push(newItem);
      this.constructor.storeItems(storedItems);
      /* eslint-disable no-implied-eval */
      setTimeout('location.reload(true);', 0);
      /* eslint-enable no-implied-eval */
    }
  }

  removeItem(id) {
    if (id != null) {
      const oldItems = this.constructor.fetchItems();

      const newItems = oldItems.filter((item) => {
        if (item.index !== Number(id)) return true;
        return null;
      });

      newItems.forEach((newItem) => {
        newItem.index = newItems.indexOf(newItem) + 1;
      });

      this.constructor.storeItems(newItems);
      /* eslint-disable no-implied-eval */
      setTimeout('location.reload(true);', 0);
      /* eslint-enable no-implied-eval */
    }
  }

  displayItems() {
    const todos = this.constructor.fetchItems();
    todos.sort((a, b) => a.index - b.index);

    const comps = (comp) => {
      if (comp.completed === true) return 'Checked';
      return null;
    };

    todos.forEach((todo) => {
      document.querySelector('.todos').innerHTML += `
        <li>
          <div>
            <input class="completed" id="check${todo.index}" type="checkbox" value="${todo.index}" ${comps(todo)}>
            <p class="block" id="pDesc${todo.index}">${todo.description}</p>
            <form class="editForm none" id="editForm${todo.index}" method="get" style="flex-grow:1;">
              <input id="edit${todo.index}" type="text" value="${todo.description}" required style="width:100%;">
            </form>
          </div>
          <img src="http://nduatikagiri.co.ke/icons/more.png" class="more" id="more${todo.index}" alt="">
          <img src="http://nduatikagiri.co.ke/icons/delete.png" class="delete none" id="delete${todo.index}" alt="">
        </li>
      `;
    });
  }

  editItem(description, index) {
    const oldItems = this.constructor.fetchItems();
    oldItems.forEach((item) => {
      if (item.index === Number(index)) {
        item.description = description;
      }
    });
    this.constructor.storeItems(oldItems);
    /* eslint-disable no-implied-eval */
    setTimeout('location.reload(true);', 0);
    /* eslint-enable no-implied-eval */
  }
}
