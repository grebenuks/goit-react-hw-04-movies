import React, { Component, Suspense } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import CastBox from '../CastBox/CastBox';
import ReviewsBox from '../ReviewsBox/ReviewsBox';
import { Route, Switch } from 'react-router-dom';
import routes from '../../routes';

Axios.defaults.baseURL = 'https://api.themoviedb.org/3';

class MovieDetailsPage extends Component {
  state = {
    id: null,
    original_title: null,
    original_name: null,
    release_date: null,
    overview: null,
    vote_average: null,
    genres: [],
    poster_path: null,
    prevLocation: '',
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;

    const response = await Axios.get(
      `/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
    );
    this.setState({ ...response.data });
  }

  handleClick = () => {
    const { history } = this.props;
    const { location } = this.props;
    history.push(location?.state?.from || routes.home);
  };

  render() {
    const {
      original_name,
      original_title,
      poster_path,
      vote_average,
      release_date,
      overview,
      genres,
    } = this.state;

    return (
      <>
        <button type="submit" className="GoBackBtn" onClick={this.handleClick}>
          <span className="GoBackBtnText"> Go back</span>
        </button>

        <div className="MovieInfo">
          <img
            src={`https://image.tmdb.org/t/p/w300${poster_path}`}
            alt={original_title || original_name}
          />
          <div className="MovieInfoText">
            <h2>{original_title || original_name}</h2>
            <p>Release date: {release_date}</p>
            <p>User score: {vote_average * 10}%</p>
            <h2>Genres</h2>
            <ul>
              {genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
            <h2>Overview</h2>
            <p>{overview}</p>
          </div>
        </div>
        <div className="AddInfo">
          <h2>Additional Information</h2>
          <ul className="AddInfoList">
            <li>
              <Link to={`${this.props.match.url}/cast`}>Cast</Link>
            </li>
            <li>
              <Link to={`${this.props.match.url}/reviews`}>Reviews</Link>
            </li>
          </ul>
        </div>
        <Suspense fallback={<h2>Load...</h2>}>
          <Switch>
            <Route path="/movies/:movieId/cast" component={CastBox} />
            <Route path="/movies/:movieId/reviews" component={ReviewsBox} />
          </Switch>
        </Suspense>
      </>
    );
  }
}

export default MovieDetailsPage;
