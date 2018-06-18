import React, { Component } from 'react';
import './searchbar.css';

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }

  search() {
    this.props.onSearch(this.props.search);
  }

  handleTermChange(event) {
    this.props.onSearch(event.target.value);
  }

  render (){
    return (
      <div className="SearchBar">

        <input onChange={this.handleTermChange}
          placeholder="Enter A Song, Album, or Artist" />
        <a>SEARCH</a>

      </div>
    );
  }
}

export default SearchBar;
