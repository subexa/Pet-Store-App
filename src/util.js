export const setItemsToLocalStorage = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));

export const getItemsFromLocalStorage = key =>
  JSON.parse(localStorage.getItem(key));
