import React, { Component } from 'react';
import './playlist.css';
import TrackList from '../TrackList/TrackList';


class PlayList extends Component  {
  render() {
    return (
      <div className="Playlist">
        <input defaultValue={'New Playlist'}/>
        <TrackList tracks={this.props.playlistTracks}/>
        <a className="Playlist-save">SAVE TO SPOTIFY</a>
      </div>

    );
  }
}

export default PlayList;