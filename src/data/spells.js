import spells from './spells.json'

export const load = (favoriteIds = []) => {
  return (spells.map(sp => {
    sp.isFavorite = favoriteIds.includes(sp.id);

    return sp;
  }));
}