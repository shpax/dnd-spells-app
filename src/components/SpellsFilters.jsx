import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import get from 'lodash/get';

const classList = [
  'Чародей', 'Волшебник', 'Друид', 'Воин', 'Плут', 'Варвар',
  'Жрец', 'Монах', 'Паладин', 'Следопыт', 'Колдун', 'Бард',
]

const useStyles = makeStyles(theme => ({
  card: {
    marginTop: theme.spacing(1),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SpellCard(props) {
  const classes = useStyles();
  const classFilter = get(props, 'filters.class', '');
  const handleChange = event => props.onFilterChange('class', event.target.value);
  
  return (
    <Card className={classes.card}>
      <CardContent>
        <FormControl className={classes.formControl}>
          <InputLabel shrink htmlFor="age-label-placeholder">Класс</InputLabel>
          <Select
            value={classFilter}
            inputProps={{
              id: 'age-label-placeholder',
            }}
            displayEmpty
            className={classes.selectEmpty}
            onChange={handleChange}
          >
            <MenuItem value="">Любой</MenuItem>
            {classList.map((cl, i) => (
              <MenuItem key={i} value={cl}>{cl}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </CardContent>
    </Card>
  );
}