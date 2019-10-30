import React from 'react';
import { connect } from 'react-redux';
import { filteredSpellsListSelector, filtersSelector } from '../store/selectors/spells';
import { pushHistory } from '../store/reducers/history';
import { setFavorite, setSpellsFilter } from '../store/reducers/spells';
import SpellsTable from '../components/SpellsTable';
import SpellsFilters from '../components/SpellsFilters';

function SpellsList(props) {
  const { spells, onSpellClick, onFavChange, updateFilter, filters } = props;

  return (
    <>
      <SpellsFilters onFilterChange={updateFilter} filters={filters}/>
      <SpellsTable spells={spells} onSpellClick={onSpellClick} onFavChange={onFavChange} />
    </>
  )
}

const mapStateToProps = store => ({
  spells: filteredSpellsListSelector(store),
  filters: filtersSelector(store),
})

const mapDispatchToProps = dispatch => ({
  onSpellClick: id => dispatch(pushHistory(id)),
  updateFilter: (filter, value) => dispatch(setSpellsFilter({ filter, value })),
  onFavChange: (spellId, isFavorite) => dispatch(setFavorite({ spellId, isFavorite })),
})

export default connect(mapStateToProps, mapDispatchToProps)(SpellsList);
