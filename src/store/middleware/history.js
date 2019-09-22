import {pushHistory as pushHistoryAction} from '../reducers/history'
import {pushHistory} from '../../models/history'

export default store => next => action => {
  switch (action.type) {

    case pushHistoryAction.toString(): {
      pushHistory(action.payload);
      next(action);
      break;
    }

    default: next(action);
  }
};