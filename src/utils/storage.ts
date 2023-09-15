const LocalStorage = {
  setItem: (key: string, value: string) => {
    localStorage.setItem(key, value);
  },

  getItem: (key: string) => {
    const value = localStorage.getItem(key);

    return value;
  },

  removeItem: (key: string) => {
    localStorage.removeItem(key);
  }
};

export default LocalStorage;
