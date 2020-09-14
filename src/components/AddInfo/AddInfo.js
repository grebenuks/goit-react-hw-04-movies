import React from 'react';
import { Link } from 'react-router-dom';

const AddInfo = ({ movieId, location }) => (
  <div className="AddInfo">
    <h2>Additional Information</h2>
    <ul className="AddInfoList">
      <li>
        <Link
          to={{
            pathname: `/movies/${movieId}/cast`,
            state: { from: { ...location } },
          }}
          replace
        >
          Cast
        </Link>
      </li>
      <li>
        <Link
          to={{
            pathname: `/movies/${movieId}/reviews`,
            state: { from: { ...location } },
          }}
          replace
        >
          Reviews
        </Link>
      </li>
    </ul>
  </div>
);

export default AddInfo;
