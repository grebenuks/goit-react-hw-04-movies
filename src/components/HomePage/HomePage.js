import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as API from '../../Services/API';

class HomePage extends Component {
  state = {
    movies: [],
    error: null,
  };

  componentDidMount() {
    API.fetchMostPopularMovies()
      .then(res => this.setState({ movies: res.data.results }))
      .catch(err =>
        this.setState({
          error: err.message,
        }),
      );
  }

  render() {
    const { movies, error } = this.state;
    const { location } = this.props;

    return (
      <div className="TrendList">
        <h2>Top Movies</h2>
        {error && <p className="ErrorTitle">Something go wrong</p>}
        {movies.length > 0 && (
          <ul>
            {movies.map(movie => (
              <li key={movie.id}>
                <Link
                  to={{
                    pathname: `/movies/${movie.id}`,
                    state: { from: { ...location } },
                  }}
                >
                  {movie.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default HomePage;
