import { createAction, handleActions } from 'redux-actions'
import { getHistory } from '../../models/history'

export const pushHistory = createAction('PUSH_HISTORY');
export const setHistory = createAction('SET_HISTORY');

const initialState = {
  list: getHistory(),
}

export default handleActions({
  [pushHistory]: (state, { payload }) => ({ ...state, list: [payload, ...state.list.filter(sp => payload !== sp)] }),
}, initialState);