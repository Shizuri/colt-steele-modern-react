import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  constructor(props) {
    super(props);

    this.handleClickHandler = this.handleClickHandler.bind(this);
  }

  handleClickHandler() {
    this.props.handleClick(this.props.idx);
  }

  render() {
    return (
      <button
        className={"Die"}
        style={{ backgroundColor: this.props.locked ? "grey" : "black" }}
        onClick={this.handleClickHandler}
      >
        {this.props.val}
      </button>
    );
  }
}

export default Die;
