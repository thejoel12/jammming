import React, { Component } from 'react';
import './tracklist.css';
import Track from '../Track/Track';

class TrackList extends Component  {
  render(){
    return (
      <div className="TrackList">
        {
        this.props.tracks.map(track => {
           return <Track track={track}
                         key={track.id}
                         onAdd={this.props.onAdd}
                         onRemove={this.props.onRemove}
                         isRemoval={true}/>;
        })
        }
      </div>

    );
  }
}


export default TrackList;
