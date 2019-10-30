import React, { useState, useCallback } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import ClearIcon from '@material-ui/icons/Clear';

import { connect } from 'react-redux';
import debounce from 'lodash/debounce';
import { setSpellsFilter } from '../store/reducers/spells';
import browserHistory from '../models/browserHistory';

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  appBar: {
    paddingRight: 0,
  },
  drawerListRoot: {
    minWidth: 200,
  },
  menuButton: {
    // marginRight: theme.spacing(2),
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
  drawerLink: {
    textDecoration: 'none',
    color: theme.palette.primary.dark,
    fontWeight: 500,
  },
  tabsContainer: {
    marginTop: theme.spacing(6),
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

const TABS = [
  '/spells/all',
  '/spells/favorite',
  '/spells/history'
];

function Header({ updateFilter }) {
  const classes = useStyles();
  const [tabIndex, setTabIndex] = useState(TABS.indexOf(browserHistory.location.pathname));
  const [searchInputText, setSearchInputText] = useState('');

  browserHistory.listen((location) => setTabIndex(TABS.indexOf(location.pathname)));

  const openTab = (event, newValue) => {
    setTabIndex(newValue);
    browserHistory.push(TABS[newValue])
  }

  const updateFilterDebounced = useCallback(debounce(updateFilter, 200), [updateFilter]);

  const setSearchText = useCallback(text => {
    setSearchInputText(text);
    updateFilterDebounced(text);
  }, [updateFilterDebounced]);

  return (
    <div className={classes.grow}>
      <AppBar>
        <Toolbar variant='dense' className={classes.appBar}>
          <div className={classes.search}>
            <InputBase
              placeholder="Поиск заклинаний"
              onChange={event => setSearchText(event.target.value)}
              value={searchInputText}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>

          { searchInputText.length ? <IconButton
            edge="start"
            className={classes.menuButton}
            onClick={() => setSearchText('')}
            color="inherit"
            aria-label="open drawer"
          >
            <ClearIcon />
          </IconButton> : null}
        </Toolbar>
      </AppBar>
      <Paper square className={classes.tabsContainer}>
        <Tabs
          value={tabIndex}
          indicatorColor="primary"
          textColor="primary"
          centered
          onChange={openTab}
          aria-label="disabled tabs example"
        >
          <Tab label="Все" />
          <Tab label="Избранные" />
          <Tab label="Открытые" />
        </Tabs>
      </Paper>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  updateFilter: text => dispatch(setSpellsFilter({ filter: 'name', value: text })),
});

export default connect(null, mapDispatchToProps)(Header);
