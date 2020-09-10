import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

Axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export class HomePage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await Axios.get(
      `/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`,
    );
    this.setState({ movies: response.data.results });
  }

  render() {
    return (
      <>
        <h2>Tranding today</h2>
        <ul>
          {this.state.movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                {movie.original_title || movie.original_name}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
