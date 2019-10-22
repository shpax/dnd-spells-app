import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import SpellTableRow from '../components/SpellTableRow';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  paper: {
    marginTop: theme.spacing(1),
    width: '100%',
    overflowX: 'auto',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 300,
  },
}));

function SpellsList(props) {
  const classes = useStyles();

  const onFavChange = spellId => event => props.onFavChange(spellId, event.target.checked);

  const loadSpells = () => props.spells
    .map(spell => (
      <SpellTableRow
        isFavorite={spell.isFavorite}
        onFavChange={onFavChange(spell.id)}
        id={spell.id}
        level={spell.level}
        name={spell.name}
        key={spell.id}
        onSpellClick={() => props.onSpellClick(spell.id)}
      />
    ));

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell padding='default'>Ур.</TableCell>
              <TableCell padding='none'>Название</TableCell>
              <TableCell padding='none'></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loadSpells()}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}


export default SpellsList;
