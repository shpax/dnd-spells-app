import { createAction, handleActions } from 'redux-actions'
import spells from '../../data/spells.json'

export const setSpells = createAction('SET_SPELLS');
export const setSpellsFilter = createAction('SET_SPELLS_FILTER');

const spellsMap = spells.reduce((map, spell) => {
  map[spell.id] = spell;
  return map;
}, {});

const spellsList = spells.sort((a,b) => a.level - b.level)

const initialState = {
  list: spellsList,
  map: spellsMap,
  filter: '',
}

export default handleActions({
  [setSpells]: (state, { payload }) => ({ ...state, list: payload }),
  [setSpellsFilter]: (state, { payload }) => ({ ...state, filter: payload }),
}, initialState);