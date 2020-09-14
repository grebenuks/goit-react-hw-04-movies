import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const imageURLBaseWidth200 = 'https://image.tmdb.org/t/p/w200';
export const imageURLBaseWidth300 = 'https://image.tmdb.org/t/p/w300';

export const fetchMostPopularMovies = () => {
  return axios.get(
    `/trending/movie/day?api_key=${process.env.REACT_APP_API_KEY}`,
  );
};

export const fetchMovieByQuery = query => {
  return axios.get(
    `/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}`,
  );
};

export const fetchDetailsAboutMovie = id => {
  return axios.get(`/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`);
};

export const fetchMovieCast = id => {
  return axios.get(
    `/movie/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}`,
  );
};

export const fetchMovieReviews = id => {
  return axios.get(
    `/movie/${id}/reviews?api_key=${process.env.REACT_APP_API_KEY}`,
  );
};
