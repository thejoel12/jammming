import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import TrackList from '../TrackList/TrackList';
import SearchBar from '../SearchBar/SearchBar';
import PlayList from '../Playlist/PlayList';
import SearchResults from '../SearchResults/SearchResults';
import Spotify from '../../util/Spotify';


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
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
}



  addTrack(track) {
    if (!this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      this.state.playlistTracks.push(track);
      this.setState({
        playlistTracks: this.state.playlistTracks
      })
    }
  }

  removeTrack(track) {
    var updatedPlaylistTracks = this.state.playlistTracks.filter(savedTrack => savedTrack.id === track.id)
      this.setState({ playlistTracks: updatedPlaylistTracks });
  }

  updatePlaylistName(name) {
    this.setState({ playlistName: name});
  }

  savePlaylist() {
    var trackURIs = Array.from(this.state.playlistTracks, x => x.uri);
    Spotify.savePlaylist(this.state.playlistName, trackURIs).then(() => {
      this.setState({ playlistName: 'New Playlist', playlistTracks: [] });
    })
    return trackURIs;
  }

  search(term) {
    Spotify.search(term).then(track => {
      this.setState({searchResults: track });
    });
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar  onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults}
                          onAdd={this.addTrack}
                          onRemove={this.removeTrack} />
                        <PlayList playlistName={this.state.playlistName}
                          playlistTracks={this.state.playlistTracks}
                          onNameChange={this.updatePlaylistName}
                          onAdd={this.addTrack}
                          onRemove={this.removeTrack}
                          onSave={this.savePlaylist}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
