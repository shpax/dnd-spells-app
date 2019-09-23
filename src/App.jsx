import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import primaryColor from '@material-ui/core/colors/brown';
import secondaryColor from '@material-ui/core/colors/deepOrange';

import { Provider } from 'react-redux';
import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom';
import SpellsList from './containers/AllSpells';
import store from './store';
import AppBar from './containers/Header';
import History from './containers/History';
import FavSpells from './containers/FavSpells';


const theme = createMuiTheme({
  palette: {
    primary: primaryColor,
    secondary: {
      ...secondaryColor,
      light: secondaryColor[50]
    }
  }
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <CssBaseline />
          <Router>
            <AppBar />
            <Container maxWidth="md">
              <Switch>
                <Route exact path="/spells/all" component={SpellsList} />
                <Route exact path="/spells/favorite" component={FavSpells} />
                <Route exact path="/spells/history" component={History} />
                <Redirect to="/spells/all" />
              </Switch>
            </Container>
          </Router>
        </React.Fragment>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
