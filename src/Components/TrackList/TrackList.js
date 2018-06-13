import React, { Component } from 'react';
import './tracklist.css';
import Track from '../Track/Track';

class TrackList extends Component  {
  render(){
    return (
      <div className="TrackList">
        {
        this.props.SearchResults.map(tracks => {
           return <Track track={track} key={track.id} />
        })
        }
      </div>

    );
  }
}


export default TrackList;
