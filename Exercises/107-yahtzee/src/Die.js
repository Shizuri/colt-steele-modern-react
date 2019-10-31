import React, { Component } from "react";
import "./Die.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faDiceOne } from '@fortawesome/free-solid-svg-icons';
// import { faDiceTwo } from '@fortawesome/free-solid-svg-icons';
// import { faDiceThree } from '@fortawesome/free-solid-svg-icons';
// import { faDiceFour } from '@fortawesome/free-solid-svg-icons';
// import { faDiceFive } from '@fortawesome/free-solid-svg-icons';
// import { faDiceSix } from '@fortawesome/free-solid-svg-icons';

class Die extends Component {
  constructor(props) {
    super(props);

    this.handleClickHandler = this.handleClickHandler.bind(this);
  }

  handleClickHandler() {
    this.props.handleClick(this.props.idx);
  }

  numberToDice(val, locked, shaking) {
    if (val === 1) {
      return "Die fas fa-dice-one fa-5x" + (locked ? " Die-locked" : "") + (shaking && !locked ? " Die-rolling" : "");
      // return <FontAwesomeIcon icon={faDiceOne} />
    }
    if (val === 2) {
      return "Die fas fa-dice-two fa-5x" + (locked ? " Die-locked" : "") + (shaking && !locked ? " Die-rolling" : "");
      // return <FontAwesomeIcon icon={faDiceTwo} />
    }
    if (val === 3) {
      return "Die fas fa-dice-three fa-5x" + (locked ? " Die-locked" : "") + (shaking && !locked ? " Die-rolling" : "");
      // return <FontAwesomeIcon icon={faDiceThree} />
    }
    if (val === 4) {
      return "Die fas fa-dice-four fa-5x" + (locked ? " Die-locked" : "") + (shaking && !locked ? " Die-rolling" : "");
      // return <FontAwesomeIcon icon={faDiceFour} />
    }
    if (val === 5) {
      return "Die fas fa-dice-five fa-5x" + (locked ? " Die-locked" : "") + (shaking && !locked ? " Die-rolling" : "");
      // return <FontAwesomeIcon icon={faDiceFive} />
    }
    if (val === 6) {
      return "Die fas fa-dice-six fa-5x" + (locked ? " Die-locked" : "") + (shaking && !locked ? " Die-rolling" : "");
      // return <FontAwesomeIcon icon={faDiceSix} />
    }
  }

  render() {
    return (
      <i
        className={this.numberToDice(this.props.val, this.props.locked, this.props.shaking)}
        onClick={this.handleClickHandler}
        // disabled={this.props.rollsLeft === 0} this no longer works since it was changed from a button to an icon.
      />
    );
  }
}

export default Die;
