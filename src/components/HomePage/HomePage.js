import React, { Component, Suspense } from 'react';
import Axios from 'axios';
import MovieList from '../MovieList/MovieList';

Axios.defaults.baseURL = 'https://api.themoviedb.org/3';

class HomePage extends Component {
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
      <div className="TrendList">
        <h2>TranSuspenseding today</h2>
        <Suspense fallback={<h2>Load...</h2>}>
          <MovieList movies={this.state.movies} />
        </Suspense>
      </div>
    );
  }
}

export default HomePage;
