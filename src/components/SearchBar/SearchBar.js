import React, { Component } from 'react';
import PropTypes from 'prop-types';

Axios.defaults.baseURL = 'https://api.themoviedb.org/3';

class SearchBar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    query: '',
  };

  handleChange = e => {
    this.setState({
      query: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    const { query } = this.state;
    onSubmit(query);
    this.setState({
      query: '',
    });
  };

  render() {
    const { query } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          name="query"
          value={query}
          placeholder="Search movies"
          className="SearchInput"
        ></input>
        <button type="submit" className="SearchInputBtn">
          Search
        </button>
      </form>
    );
  }
}

export default SearchBar;
