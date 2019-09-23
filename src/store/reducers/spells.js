import { createAction, handleActions } from 'redux-actions'
import { load } from '../../data/spells'
import { getFavorites } from '../../models/favorites'

export const setSpells = createAction('SET_SPELLS');
export const setSpellsFilter = createAction('SET_SPELLS_FILTER');
export const setFavorite = createAction('SET_SPELLS_FAVORITE');

const spells = load(getFavorites());

const spellsMap = spells.reduce((map, spell) => {
  map[spell.id] = spell;
  return map;
}, {});

const initialState = {
  map: spellsMap,
};

export default handleActions({
  [setSpells]: (state, { payload: list }) => ({ ...state, list }),
  [setSpellsFilter]: (state, { payload: filter }) => ({ ...state, filter }),
  [setFavorite]: (state, { payload: { isFavorite, spellId }}) => {
    const updatedSpell = {...state.map[spellId], isFavorite };
    const spellsMap = {...state.map, [spellId]: updatedSpell};

    return {...state, map: spellsMap};
  },
}, initialState);