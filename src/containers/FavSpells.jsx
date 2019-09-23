import React from 'react';
import { connect } from 'react-redux';
import { favSpellsSelector } from '../store/selectors/spells';
import { pushHistory } from '../store/reducers/history';
import { setFavorite } from '../store/reducers/spells';
import SpellsTable from '../components/SpellsTable';

function SpellsList(props) {
  const { spells, onSpellClick, onFavChange } = props;

  return (
    <SpellsTable spells={spells} onSpellClick={onSpellClick} onFavChange={onFavChange} />
  )
}

const mapStateToProps = store => ({
  spells: favSpellsSelector(store),
})

const mapDispatchToProps = dispatch => ({
  onSpellClick: id => dispatch(pushHistory(id)),
  onFavChange: (spellId, isFavorite) => dispatch(setFavorite({ spellId, isFavorite })),
})

export default connect(mapStateToProps, mapDispatchToProps)(SpellsList);
