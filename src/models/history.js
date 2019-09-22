
let historyList = JSON.parse(localStorage.getItem('historyList') || '[]');

const saveHistory = () => localStorage.setItem('historyList', JSON.stringify(historyList));

export const pushHistory = (id) => {
  historyList = historyList.filter(sp => sp !== id);
  historyList.unshift(id);
  if (historyList.length > 10) historyList.pop();
  console.log(historyList);
  
  saveHistory();
}

export const getHistory = () => [...historyList];
