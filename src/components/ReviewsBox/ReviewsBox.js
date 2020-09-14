import React, { Component } from 'react';
import Axios from 'axios';

Axios.defaults.baseURL = 'https://api.themoviedb.org/3';

class ReviewsBox extends Component {
  state = {
    reviewsList: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await Axios.get(
      `/movie/${movieId}/reviews?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`,
    );
    this.setState({ reviewsList: response.data.results });
  }
  render() {
    const { reviewsList } = this.state;
    return (
      <div className="ReviewsInfo">
        <h3>Total reviews: {reviewsList.length}</h3>
        <ul>
          {reviewsList.map(item => (
            <li key={item.id}>
              <b>{item.author}</b> <p>{item.content}</p>
            </li>
          ))}
        </ul>
        {reviewsList.length === 0 && <h2>No reviews yet.</h2>}
      </div>
    );
  }
}
export default ReviewsBox;
