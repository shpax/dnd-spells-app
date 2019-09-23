import React, { useState } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import ListIcon from '@material-ui/icons/List';
import HistoryIcon from '@material-ui/icons/History';
import StarIcon from '@material-ui/icons/Star';
import { connect } from 'react-redux';
import debounce from 'lodash/debounce';
import { Link } from 'react-router-dom';
import { setFilter } from '../store/reducers/header';

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  drawerListRoot: {
    minWidth: 200,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    padding: theme.spacing(1, 2),
    transition: theme.transitions.create('width'),
    width: '100%',
  },
}));

function Header(props) {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const onChange = event => props.onSearchUpdate(event.target.value);
  const toggleDrawer = open => () => setDrawerOpen(open);

  return (
    <div className={classes.grow}>
      <AppBar>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            onClick={toggleDrawer(true)}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Список заклинаний
          </Typography>
          <div className={classes.search}>
            <InputBase
              placeholder="Поиск заклинаний"
              onChange={onChange}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List className={classes.drawerListRoot} onClick={toggleDrawer(false)}>
          <Link to="/spells/favorite">
            <ListItem button>
              <ListItemIcon><StarIcon /></ListItemIcon>
              <ListItemText primary="Избранные" />
            </ListItem>
          </Link>
          <Link to="/spells/all">
            <ListItem button>
              <ListItemIcon><ListIcon /></ListItemIcon>
              <ListItemText primary="Список" />
            </ListItem>
          </Link>
          <Link to="/spells/history">
            <ListItem button>
              <ListItemIcon><HistoryIcon /></ListItemIcon>
              <ListItemText primary="История" />
            </ListItem>
          </Link>
        </List>
      </Drawer>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  onSearchUpdate: debounce(text => dispatch(setFilter(text)), 200),
});

export default connect(null, mapDispatchToProps)(Header);
