import React, { Component } from 'react';
import './searchbar.css';

class SearchBar extends Component {
  render () {
    return (
      <div className="SearchBar">
        <TrackList tracks={this.props.searchResults} />
        <input placeholder="Enter A Song, Album, or Artist" />
        <a>SEARCH</a>
      </div>




    );
  }
}

export default SearchBar;
