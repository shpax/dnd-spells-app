import { createAction, handleActions } from 'redux-actions'

export const setFilter = createAction('SET_FILTER');

const initialState = {
  filter: '',
}

export default handleActions({
  [setFilter]: (state, { payload }) => ({ ...state, filter: payload }),
}, initialState);