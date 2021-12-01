function useLocalStorage() {
  const getLocalStorage = (key) => {
    const data = localStorage.getItem(key);
    if (data) {
      return JSON.parse(data);
    } else {
      return null;
    }
  };

  const setLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  const removeLocalStorage = (key) => {
    localStorage.removeItem(key);
  };

  return { getLocalStorage, setLocalStorage, removeLocalStorage };
}

export default useLocalStorage;
