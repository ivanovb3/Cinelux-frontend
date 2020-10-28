import React, { Component } from 'react';
import NavBar from './components/NavBar';

import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom'
import MainPage from './pages';
import LogInPage from './pages/logIn';


class App extends Component {
  render() {
    /* return (
      { <div className="App">
        <NavBar />

      </div> *      
    ); */
    return <Router>
      <Switch>
        <Route exact path="/login" component={LogInPage} />
        <Route exact path="/register" component={LogInPage} />
        <Route path="/" component={MainPage} />
      </Switch>
    </Router>
  }
}

export default App;
