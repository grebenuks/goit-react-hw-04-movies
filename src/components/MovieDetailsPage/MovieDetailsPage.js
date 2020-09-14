import React, { Component, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import * as API from '../../Services/API';
import routes from '../../routes';
import AddInfo from '../AddInfo/AddInfo';

class MovieDetailsPage extends Component {
  state = {
    movieDetails: null,
    error: null,
  };

  componentDidMount() {
    const { match } = this.props;
    API.fetchDetailsAboutMovie(match.params.movieId)
      .then(res => this.setState({ movieDetails: res.data }))
      .catch(err =>
        this.setState({
          error: err.message,
        }),
      );
  }

  handleClick = () => {
    const { history, location } = this.props;

    if (location.state) {
      history.goBack();
      return;
    }

    history.push(routes.MoviesPage.path);
  };

  render() {
    const { match, location } = this.props;
    const { movieDetails, error } = this.state;

    return (
      <>
        {error && <h2>Today is not a good day</h2>}
        {movieDetails && (
          <>
            <button
              type="submit"
              className="GoBackBtn"
              onClick={this.handleClick}
            >
              <span className="GoBackBtnText"> Go back</span>
            </button>

            <div className="MovieInfo">
              <img
                src={`${API.imageURLBaseWidth300}${movieDetails.poster_path}`}
                alt={
                  movieDetails.title ||
                  movieDetails.original_title ||
                  movieDetails.original_name
                }
              />
              <div className="MovieInfoText">
                <h2>
                  {movieDetails.title ||
                    movieDetails.original_title ||
                    movieDetails.original_name}
                </h2>
                <p>Release date: {movieDetails.release_date}</p>
                <p>User score: {movieDetails.vote_average * 10}%</p>
                <h2>Genres</h2>
                {movieDetails.genres.length > 0 && (
                  <ul>
                    {movieDetails.genres.map(genre => (
                      <li key={genre.id}>{genre.name}</li>
                    ))}
                  </ul>
                )}
                <h2>Overview</h2>
                <p>{movieDetails.overview}</p>
              </div>
            </div>

            <AddInfo movieId={match.params.movieId} location={location} />
            <Suspense fallback={<h2>Load...</h2>}>
              <Switch>
                <Route
                  path={routes.Cast.path}
                  component={routes.Cast.component}
                />
                <Route
                  path={routes.Reviews.path}
                  component={routes.Reviews.component}
                />
              </Switch>
            </Suspense>
          </>
        )}
      </>
    );
  }
}

export default MovieDetailsPage;
