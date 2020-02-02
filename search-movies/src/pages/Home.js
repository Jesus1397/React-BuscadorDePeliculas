import React, { Component } from "react";
import Title from "../Components/Title";
import SearchForm from "../Components/SearchForm";
import MoviesList from "../Components/MoviesList";


class Home extends Component {
  state = { results: [], usedSearch: false };
  _handleResaults = results => {
    this.setState({
      results: results,
      usedSearch: true
    });
  };
  _renderReaults = () => {
    return this.state.results.length === 0 ? (
      <p>Sorry! u.u Results not Found!</p>
    ) : (
      <MoviesList movies={this.state.results} />
    );
  };

  render() {
    return (
      <div>
        <Title>Search Movies</Title>
        <div className="SearchForm-wrapper">
          <SearchForm onResults={this._handleResaults} />
        </div>
        {this.state.usedSearch ? (
          this._renderReaults()
        ) : (
          <small>Use the form to search a movie</small>
        )}
      </div>
    );
  }
}

export default Home;
