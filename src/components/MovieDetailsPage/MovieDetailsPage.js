import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { CastPage } from '../CastPage/CastPage';
import { ReviewsPage } from '../ReviewsPage/ReviewsPage';
import { Route } from 'react-router-dom';

Axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export class MovieDetailsPage extends Component {
  state = {
    id: null,
    original_title: null,
    original_name: null,
    release_date: null,
    overview: null,
    popularity: null,
    genres: [],
    poster_path: null,
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;

    const response = await Axios.get(
      `/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
    );
    this.setState({ ...response.data });
  }

  render() {
    const {
      original_name,
      original_title,
      poster_path,
      popularity,
      release_date,
      overview,
      genres,
    } = this.state;

    return (
      <>
        <h2>{original_title || original_name}</h2>
        <p>{release_date}</p>
        <p>{popularity}</p>
        <img
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          alt={original_title || original_name}
        />
        <ul>
          {genres.map(genre => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
        <p>{overview}</p>

        <p>Additional Information</p>
        <ul>
          <li>
            <Link to={`${this.props.match.url}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`${this.props.match.url}/reviews`}>Reviews</Link>
          </li>
        </ul>
        <Route path="/movies/:movieId/cast" component={CastPage} />
        <Route path="/movies/:movieId/reviews" component={ReviewsPage} />
      </>
    );
  }
}
