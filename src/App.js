import React, { Component } from 'react';
import NavBar from './components/NavBar';

import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom'
import MainPage from './pages';
import LogInPage from './pages/logIn';
import MoviePage from './pages/movie';
import SchedulePage from './pages/schedule';


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/movies-schedule" component={SchedulePage} />
          <Route path="/film/:name" component={MoviePage} />
          <Route exact path="/login" component={LogInPage} />
          <Route exact path="/register" component={LogInPage} />
          <Route exact path="/" component={MainPage} />
        </Switch>
      </Router>
    )
  }
}

export default App;
