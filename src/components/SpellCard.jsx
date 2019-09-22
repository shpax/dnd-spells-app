import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 275,
    marginTop: theme.spacing(1),
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  meta: {
    fontSize: 14,
    marginBottom: 2,
  },
  pos: {
    marginBottom: 12,
  },
}));

export default function SpellCard(props) {
  const classes = useStyles();
  const { name, level, classes: spellClasses, components, distance, duration, descriptionHTML, castTime, school } = props.spell;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {level}й уровень
        </Typography>
        <Typography variant="h5" component="h2">
          {name}
        </Typography>
        <Typography className={classes.meta} color="textSecondary">
          {spellClasses.join(', ')}
        </Typography>
        <Typography className={classes.meta} color="textSecondary">
          {components.join(', ')}
        </Typography>
        <Typography className={classes.meta} color="textSecondary">
          {distance}/{castTime}/{duration}
        </Typography>
        <Typography className={classes.meta} color="textSecondary">
          {school}
        </Typography>
        <Typography variant="body2" dangerouslySetInnerHTML={{ __html: descriptionHTML }}>
        </Typography>
      </CardContent>
    </Card>
  );
}