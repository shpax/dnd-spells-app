export default class LocalStorageArrayModel {
  constructor(key, maxLength = 10) {
    this.key = key;
    this.maxLength = maxLength;

    this.data = JSON.parse(localStorage.getItem(key) || '[]');
  }

  get() {
    return [...this.data];
  }

  push(item, unique = true) {
    if (unique) this.remove(item);
    this.data.unshift(item);
    if (this.data.length > this.maxLength) this.data.pop();

    this.saveData();
  }

  saveData() {
    localStorage.setItem(this.key, JSON.stringify(this.data));
  }

  remove(item) {
    this.data = this.data.filter(sp => sp !== item);
    
    this.saveData();
  }
}
