import React, { Component } from 'react';
import './track.css';

class Track extends Component  {
  render() {
    return (
      <div className="Track">
      <div className="Track-information">
        <h3><{this.props.track.name}</h3>
        <p><{this.props.track.artist} | {this.props.track.album}</p>
      </div>
      <a className="Track-action"><${renderAction()}</a>
    </div>
    );
  }
  renderAction() {
      <div className="Track-action">
        if (isRemoval === true) {
          return '+';
        } else {
          return '-';
        }
      </div>
  }
}

export default Track;
