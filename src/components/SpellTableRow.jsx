import React from 'react'
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import { Link } from 'react-router-dom';

import makeStyles from '@material-ui/core/styles/makeStyles';
import withStyles from '@material-ui/core/styles/withStyles';

const FavCheckbox = withStyles(theme => ({
  root: {
    color: theme.palette.secondary.light,
    '&$checked': {
      color: theme.palette.secondary.main,
    },
  },
  checked: {},
}))(props => <Checkbox color="default" {...props} />);

const useStyles = makeStyles(theme => ({
  spellName: {
    textDecoration: 'none',
    color: theme.palette.primary.dark,
    fontWeight: 500,
  },
}))

export default ({ onFavChange, isFavorite, id, level, name, onSpellClick }) => {
  const classes = useStyles();

  return (
    <TableRow key={id}>
      <TableCell component="th" scope="row" padding='default'>
        {level}
      </TableCell>
      <TableCell padding='none'>
        <Link to={`/spells/history`} onClick={onSpellClick} className={classes.spellName}>
          {name}
        </Link>
      </TableCell>
      <TableCell padding="none">
        <FavCheckbox
          checked={isFavorite}
          icon={<BookmarkBorderIcon fontSize="small" />} checkedIcon={<BookmarkIcon fontSize="small" />}
          onChange={onFavChange}
        />
      </TableCell>
    </TableRow>
  )
}