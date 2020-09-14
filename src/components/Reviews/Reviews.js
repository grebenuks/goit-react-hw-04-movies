import React, { Component } from 'react';
import * as API from '../../Services/API';

class ReviewsBox extends Component {
  state = {
    reviews: [],
    error: null,
  };

  componentDidMount() {
    const { match } = this.props;

    API.fetchMovieReviews(match.params.movieId)
      .then(res => this.setState({ reviews: res.data.results }))
      .catch(err =>
        this.setState({
          error: err.message,
        }),
      );
  }

  render() {
    const { reviews, error } = this.state;
    return (
      <div className="ReviewsInfo">
        {error && <h2>Today isn't a good day</h2>}
        {reviews.length > 0 ? (
          <ul className="AddInfoList">
            {reviews.map(review => (
              <li key={review.id}>
                <p>{`Author: ${review.author}`}</p>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>We don't have any reviews for this movie</p>
        )}
      </div>
    );
  }
}
export default ReviewsBox;
