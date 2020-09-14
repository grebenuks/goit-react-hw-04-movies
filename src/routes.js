import { lazy } from 'react';

const HomePage = lazy(() =>
  import('./components/HomePage/HomePage' /* webpackChunkName: "HomePage" */),
);

const MoviesPage = lazy(() =>
  import(
    './components/MoviesPage/MoviesPage' /* webpackChunkName: "MoviesPage" */
  ),
);

const MovieDetailsPage = lazy(() =>
  import(
    './components/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage" */
  ),
);

const Cast = lazy(() =>
  import('./components/Cast/Cast' /* webpackChunkName: "Cast" */),
);

const Reviews = lazy(() =>
  import('./components/Reviews/Reviews' /* webpackChunkName: "Reviews" */),
);

export default {
  HomePage: {
    path: '/',
    component: HomePage,
  },
  MoviesPage: {
    path: '/movies',
    component: MoviesPage,
  },
  MovieDetailsPage: {
    path: '/movies/:movieId',
    component: MovieDetailsPage,
  },
  Cast: {
    path: '/movies/:movieId/cast',
    component: Cast,
  },
  Reviews: {
    path: '/movies/:movieId/reviews',
    component: Reviews,
  },
};
