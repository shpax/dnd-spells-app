import { createSelector } from 'reselect'

export const spellsMapSelector = state => state.spells.map;
export const historyListSelector = state => state.history.list;
export const filtersSelector = state => state.spells.filters;

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
  filtersSelector,
  (spellsList, filters) => {
    return spellsList.filter(
      spell => spell.name.toLowerCase().includes(filters.name.toLowerCase()) 
        && (!filters.class.length || spell.classes.includes(filters.class))
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