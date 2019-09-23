import LocalStorageArrayModel from './LocalStorageArrayModel'

const model = new LocalStorageArrayModel('favoriteList');

export const addFavorite = (id) => model.push(id);
export const removeFavorite = (id) => model.remove(id);
export const getFavorites = () => model.get();
