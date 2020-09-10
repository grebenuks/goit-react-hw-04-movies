import React, { Component } from 'react';
import Axios from 'axios';
// import { ReviewsPage } from './ReviewsPage/ReviewsPage';
// import { CastPage } from './CastPage/CastPage';
// import { Link, useLocation, useHistory } from 'react-router-dom';

Axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export class MoviesPage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await Axios.get(
      `/search/movie?api_key=${
        process.env.REACT_APP_API_KEY
      }&language=en-US&page=1&include_adult=false&query=${''}`,
    );
    console.log(response.data.results);

    this.setState({ movies: response.data.results });
  }

  render() {
    return (
      <>
        <h2>MoviesPage</h2>
        <ul>
          {this.state.movies.map(movie => (
            <li key={movie.id}>
              {movie.original_title || movie.original_name}
            </li>
          ))}
        </ul>
      </>
    );
  }
}
