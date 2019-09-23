import {setFavorite} from '../reducers/spells'
import {addFavorite, removeFavorite} from '../../models/favorites'

export default store => next => action => {
  switch (action.type) {

    case setFavorite.toString(): {
      const { spellId, isFavorite } = action.payload;

      isFavorite ? addFavorite(spellId) : removeFavorite(spellId);
      
      next(action);
      break;
    }

    default: next(action);
  }
};