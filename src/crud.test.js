const Crud = require('./crud.js');
const crud = new Crud();

class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = String(value);
  }

  removeItem(key) {
    delete this.store[key];
  }
}
global.localStorage = new LocalStorageMock;

describe('adding', () => {
  test('Added Item', () => {
    const desc = "Doing Microverse Project";
    crud.addItem(desc);
    const storedItems = JSON.parse(localStorage.getItem('items'));
    const lastItem = storedItems[storedItems.length - 1];
    expect(lastItem.description).toBe(desc);
  });
});
