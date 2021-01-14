import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import MainPage from './pages';
import LogInPage from './pages/logIn';
import MoviePage from './pages/movie';
import SchedulePage from './pages/schedule';
import TicketPurchasePage from './pages/ticketPurchase';
import ProfilePage from './pages/profilePage';


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/tickets" component={ProfilePage} />
          <Route path="/film/:name/purchase-ticket" component={TicketPurchasePage} />
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
