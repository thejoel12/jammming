import React, { Component } from 'react';
import './track.css';

class Track extends Component  {
  constructor(props) {
    super(props);
    // Bind this.addTrack() to the current value of this in the constructor method.
    this.addTrack = this.addTrack.bind(this);
}
  render() {
    return (
      <div className="Track">
      <div className="Track-information">
        <h3>{this.props.track.name}</h3>
        <p>{this.props.track.artist} | {this.props.track.album}</p>
      </div>
      <a className="Track-action"
          onClick={this.addTrack} >{this.renderAction()}</a>
    </div>
    );
  }
  renderAction() {
    if (this.props.isRemoval) {
      return <a className="Track-action" onClick={this.removeTrack}>-</a>
    }
    return <a className="Track-action" onClick={this.addTrack}>+</a>;
  }

  addTrack(event) {
     this.props.onAdd(this.props.onAdd);
  }

}

export default Track;
