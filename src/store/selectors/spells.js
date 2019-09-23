import { createSelector } from 'reselect'

export const spellsMapSelector = state => state.spells.map;
export const filterSelector = state => state.header.filter;
export const historyListSelector = state => state.history.list;

export const spellsListSelector = createSelector(
  spellsMapSelector,
  spellsMap => {
    return Object.values(spellsMap)
      .sort(
        (a, b) => a.level - b.level
      );
  });

export const filteredSpellsListSelector = createSelector(
  spellsListSelector,
  filterSelector,
  (spellsList, filter) => {
    return spellsList.filter(
      spell => spell.name.toLowerCase().includes(filter.toLowerCase())
    );
  });

export const spellsByIdListSelector = createSelector(
  spellsMapSelector,
  historyListSelector,
  (spellsMap, historyList) => {
    return historyList.map(id => spellsMap[id]);
  });

export const favSpellsSelector = createSelector(
  spellsListSelector,
  (spellsList) => spellsList.filter(sp => sp.isFavorite)
);