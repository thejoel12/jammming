import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import TrackList from '../TrackList/TrackList';
import SearchBar from '../SearchBar/SearchBar';
import PlayList from '../Playlist/PlayList';
import SearchResults from '../SearchResults/SearchResults';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults : [
        {name: 'Track Name' , artist: 'Artist Name', album: 'Album Name', id: 2}
      ],
      playlistName : 'some string',
      playlistTracks : [
          {name: 'Track Name' , artist: 'Artist Name', album: 'Album Name', id: 2}
      ]
    };
    this.addTrack = this.addTrack.bind(this);
    // this.removeTrack = this.removeTrack.bind(this);
}

  addTrack(track) {
    // if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
    //   return;
    // }
    console.log('Add Track ran');
  };

  // removeTrack(track) {
  //   if (this.state.playlistTracks.find(savedTrack => savedTrack.id !== track.id)) {
  //     return;
  //   }
  // }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar  />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults}
                          onAdd={this.addTrack} />
            <PlayList playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
