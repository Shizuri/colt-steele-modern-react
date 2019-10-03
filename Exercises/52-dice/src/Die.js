import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
    numberToSide(number) {
        let sideString;
        switch (number) {
            case 1:
                sideString = 'one';
                break;
            case 2:
                sideString = 'two';
                break;
            case 3:
                sideString = 'three';
                break;
            case 4:
                sideString = 'four';
                break;
            case 5:
                sideString = 'five';
                break;
            case 6:
                sideString = 'six';
                break;
            default:
                sideString = null;
        }
        return sideString;
    }

    render() {
        const side = `fas fa-dice-${this.numberToSide(this.props.side)}`;
        let classNameDie = `Die ${this.props.rolling ? 'shaking' : null}`;
        
        return (
            <div className={classNameDie}>
                <i className={side}></i>
            </div>
        );
    }
}

export default Die;