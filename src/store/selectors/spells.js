export const spellsListSelector = state => state.spells.list.filter(
  spell => spell.name.toLowerCase().includes(state.spells.filter.toLowerCase())
);

export const spellsByIdListSelector = state => {
  console.log('selector', state.history.list);
  
  return state.history.list.map(id => state.spells.map[id]);
}