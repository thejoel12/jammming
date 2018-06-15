import React, { Component } from 'react';
import './playlist.css';
import TrackList from '../TrackList/TrackList';


class PlayList extends Component  {

  constructor(props) {
    super(props);
    this.onNameChange = this.onNameChange.bind(this);
}

  handleNameChange(event) {
    this.props.onNameChange(event.target.value)
  }
  render() {
    return (
      <div className="Playlist">
        <input defaultValue={'New Playlist'}
                onChange={this.handleNameChange}/>
        <TrackList tracks={this.props.playlistTracks}
          onAdd={this.props.onAdd}
          onRemove={this.props.onRemove}
          isRemoval={true}
          onChange={this.props.handleNameChange} />
        <a className="Playlist-save">SAVE TO SPOTIFY</a>
      </div>

    );
  }
}

export default PlayList;
