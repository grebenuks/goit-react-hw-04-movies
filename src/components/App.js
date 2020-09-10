import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import { HomePage } from './HomePage/HomePage';
import { MoviesPage } from './MoviesPage/MoviesPage';
import { MovieDetailsPage } from './MovieDetailsPage/MovieDetailsPage';
import { NotFound } from './NotFound/NotFound';

import './styles/base.css';

class App extends Component {
  render() {
    return (
      <>
        <ul>
          <li>
            <NavLink
              exact
              to="/"
              className="NavLink"
              activeClassName="NavLink--active"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/movies"
              className="NavLink"
              activeClassName="NavLink--active"
            >
              Movies
            </NavLink>
          </li>
        </ul>

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/movies/:movieId" component={MovieDetailsPage} />
          <Route path="/movies" component={MoviesPage} />
          <Route component={NotFound} />
        </Switch>
      </>
    );
  }
}

export default App;
