import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const MovieList = ({ movies, location }) => {
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link
            className="Link"
            to={{ pathname: `/movies/${movie.id}`, state: { from: location } }}
          >
            {movie.original_title || movie.original_name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default withRouter(MovieList);
