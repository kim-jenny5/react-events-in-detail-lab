import React, { Component } from "react";

export default class CoordinatesButton extends Component {
  handleClick = (e) => {
    // console.log(this.props);
    this.props.onReceiveCoordinates([e.clientX, e.clientY]);
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Coordinates Button</button>
      </div>
    );
  }
}
