import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    value: '',
  };

  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    const { value } = this.state;
    onSubmit(value);
    this.setState({
      value: '',
    });
  };

  render() {
    const { value } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={value}
          onChange={this.handleChange}
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
