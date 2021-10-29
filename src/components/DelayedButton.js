import React, { Component } from "react";

export default class DelayedButton extends Component {
  handleClick = (e) => {
    // console.log(this.props);
    // setTimeout(this.props.onDelayedClick(e), this.props.delay);
    e.persist();
    setTimeout(() => {
      this.props.onDelayedClick(e);
    }, this.props.delay);
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Delay Button</button>
      </div>
    );
  }
}
