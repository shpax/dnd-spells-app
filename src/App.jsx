import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { Provider } from 'react-redux';
import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom';
import SpellsList from './containers/SpellsList';
import store from './store';
import AppBar from './containers/AppBar';
import History from './containers/History';

function App() {
  return (
    <Provider store={store}>
      <React.Fragment>
        <CssBaseline />
        <AppBar />
        <Container maxWidth="md">
          <Router>
            <Switch>
              <Route exact path="/spells" component={SpellsList} />
              <Route exact path="/spells/history" component={History} />
              <Redirect to="/spells" />
            </Switch>
          </Router>
        </Container>
      </React.Fragment>
    </Provider>
  );
}

export default App;
