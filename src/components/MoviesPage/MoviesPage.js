import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as API from '../../Services/API';
import SearchBar from '../SearchBar/SearchBar';

class MoviesPage extends Component {
  state = {
    movies: [],
    error: null,
  };

  componentDidMount() {
    const { location } = this.props;

    if (location.search) {
      const searchParams = new URLSearchParams(location.search).get('query');
      this.onSearch(searchParams);
    }
  }

  onSearch = query => {
    API.fetchMovieByQuery(query)
      .then(res => {
        this.setState({
          movies: res.data.results,
        });
        const { location, history } = this.props;
        history.push({
          ...location,
          search: `query=${query}`,
        });
      })
      .catch(err =>
        this.setState({
          error: err.message,
        }),
      );
  };

  render() {
    const { movies, error } = this.state;
    const { match, location } = this.props;

    return (
      <>
        <SearchBar onSubmit={this.onSearch} />
        {error && (
          <h2 className="ErrorTitle">
            Please, put the correct name of the movie
          </h2>
        )}
        {movies.length > 0 && (
          <ul>
            {movies.map(movie => (
              <li key={movie.id}>
                <Link
                  to={{
                    pathname: `${match.url}/${movie.id}`,
                    state: { from: { ...location } },
                  }}
                >
                  {movie.title || movie.original_title || movie.original_name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default MoviesPage;
