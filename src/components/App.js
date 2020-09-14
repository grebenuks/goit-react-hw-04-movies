import React, { Component, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from './NotFound/NotFound';
import routes from '../routes';
import AppBar from './AppBar/AppBar';

import './styles/base.css';

const HomePage = lazy(() =>
  import('./HomePage/HomePage.js' /*webpackChunkName: "HomePage" */),
);
const MoviesPage = lazy(() =>
  import('./MovieList/MovieList.js' /*webpackChunkName: "MoviesPage" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    './MovieDetailsPage/MovieDetailsPage.js' /*webpackChunkName: "MovieDetailsPage" */
  ),
);

class App extends Component {
  render() {
    return (
      <>
        <AppBar />

        <Suspense fallback={<h2>Load...</h2>}>
          <Switch>
            <Route exact path={routes.home} component={HomePage} />
            <Route path={routes.movieDetails} component={MovieDetailsPage} />
            <Route path={routes.movies} component={MoviesPage} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </>
    );
  }
}

export default App;
