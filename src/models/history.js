import LocalStorageArrayModel from './LocalStorageArrayModel'

const model = new LocalStorageArrayModel('historyList');

export const pushHistory = (id) => model.push(id);
export const getHistory = () => model.get();
