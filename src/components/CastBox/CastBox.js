import React, { Component } from 'react';
import Axios from 'axios';

Axios.defaults.baseURL = 'https://api.themoviedb.org/3';

class CastBox extends Component {
  state = {
    castList: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await Axios.get(
      `/movie/${movieId}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`,
    );
    this.setState({
      castList: response.data.cast,
      reviewsList: response.data.reviews,
    });
  }
  render() {
    const { castList } = this.state;
    return (
      <div className="CastInfo">
        <h3>Cast</h3>
        <ul>
          {castList.map(item => (
            <li key={item.cast_id}>
              <p>
                <img
                  src={`https://image.tmdb.org/t/p/w200${item.profile_path}`}
                  alt={item.name}
                ></img>
              </p>
              <p>
                <b>{item.name}</b>
              </p>
              <p>Character: {item.character}</p>
            </li>
          ))}
        </ul>
        {castList.length === 0 && (
          <h2>there is currently no information on the cast</h2>
        )}
      </div>
    );
  }
}
export default CastBox;
