import React, { Component } from 'react';
import TrackList from '../TrackList/TrackList';
import './searchresults.css';

class SearchResults extends Component  {
  render() {
    return (
      <div className = "SearchResults" >
      < h2 > Results < /h2>
        <TrackList tracks={this.state.searchResults}
            onAdd={this.props.onAdd}
            isRemoval={false} />
      < /div>

    );
  }
}

export default SearchResults;
