import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { spellsByIdListSelector } from '../store/selectors/spells';
import SpellCard from '../components/SpellCard';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(9),
  }
}));

function History(props) {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      {props.spells.map(spell => (
        <SpellCard key={spell.id} spell={spell} />
      ))}
    </div>
  );
}

const mapStateToProps = state => ({
  spells: spellsByIdListSelector(state),
});

export default connect(mapStateToProps)(History)