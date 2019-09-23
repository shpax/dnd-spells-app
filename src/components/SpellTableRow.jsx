import React from 'react'
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import LazyLoad from 'react-lazyload';

const FavCheckbox = withStyles(theme => ({
  root: {
    color: theme.palette.secondary.light,
    '&$checked': {
      color: theme.palette.secondary.main,
    },
  },
  checked: {},
}))(props => <Checkbox color="default" {...props} />);

export default ({ onFavChange, isFavorite, id, level, name, onSpellClick }) => (
  <LazyLoad height={32} offset={300} once>
    <TableRow key={id}>
      <TableCell padding="checkbox">
        <FavCheckbox
          checked={isFavorite}
          icon={<StarBorderIcon fontSize="small" />} checkedIcon={<StarIcon fontSize="small" />}
          onChange={onFavChange}
        />
      </TableCell>
      <TableCell component="th" scope="row" padding='none'>
        {level}
      </TableCell>
      <TableCell>
        <Link to={`/spells/history`} onClick={onSpellClick}>
          {name}
        </Link>
      </TableCell>
    </TableRow>
  </LazyLoad>
)