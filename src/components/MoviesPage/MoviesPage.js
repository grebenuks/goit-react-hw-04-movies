import React, { Component, Suspense } from 'react';
import Axios from 'axios';
import MovieList from '../MovieList/MovieList';

Axios.defaults.baseURL = 'https://api.themoviedb.org/3';

class MoviesPage extends Component {
  state = {
    query: '',
    movies: [],
  };

  handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.forEach((value, name) => {
      this.setState({ query: value });
    });
  };

  async componentDidUpdate() {
    const { query } = this.state;
    const response = await Axios.get(
      `/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`,
    );
    this.setState({ movies: response.data.results });
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            name="query"
            placeholder="Search movies"
            className="SearchInput"
          ></input>
          <button type="submit" className="SearchInputBtn">
            Search
          </button>
        </form>
        <Suspense fallback={<h2>Load...</h2>}>
          <MovieList movies={this.state.movies} />
        </Suspense>
      </>
    );
  }
}

export default MoviesPage;
