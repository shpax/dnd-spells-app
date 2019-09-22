import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import pick from 'lodash/pick';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { spellsListSelector } from '../store/selectors/spells';
import { pushHistory } from '../store/reducers/history';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  paper: {
    marginTop: theme.spacing(9),
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

  const rows = props.spells.map(spell => pick(spell, ['name', 'level', 'id']));

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Table className={classes.table} size="small">
          <TableHead>
            <TableRow>
              <TableCell padding='checkbox'>Уровень</TableCell>
              <TableCell>Название</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row" padding='checkbox'>
                  {row.level}
                </TableCell>
                <TableCell>
                  <Link to={`/spells/history`} onClick={() => props.pushHistory(row.id)}>
                    {row.name}
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}

const mapStateToProps = store => ({
  spells: spellsListSelector(store),
})

const mapDispatchToProps = dispatch => ({
  pushHistory: id => dispatch(pushHistory(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SpellsList);
