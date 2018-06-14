import React, { Component } from 'react';
import './track.css';

class Track extends Component  {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
}

// addTrack() {
//    this.props.onAdd(this.props.track);
// }
  render() {
    console.log(this.prop.track);
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



}

export default Track;
