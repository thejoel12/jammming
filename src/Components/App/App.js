import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TrackList from '../TrackList/TrackList';
import SearchBar from '../SearchBar/SearchBar';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults : [{
        name: ''
      }, {
        artist: ''
      }, {
        album: ''
      }, {
        id: ''
      }],
      playlistName : 'some string',
      playlistTracks : [
          {
            name: ''
          }, {
            artist: ''
          }, {
            album: ''
          }, {
            id: ''
          }
      ]
    };
    this.searchResults = this.searchResults.bind(this);
}



  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar searchResults={this.state.searchResults} />
          <div className="App-playlist">
            <SearchBar />
            <PlayList playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;