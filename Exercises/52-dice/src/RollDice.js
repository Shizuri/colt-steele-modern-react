import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            die1: Math.floor(Math.random() * 6) + 1,
            die2: Math.floor(Math.random() * 6) + 1,
            rolling: false
        }
        this.roll = this.roll.bind(this);
    }

    roll() {
        this.setState({
            die1: Math.floor(Math.random() * 6) + 1,
            die2: Math.floor(Math.random() * 6) + 1,
            rolling: true
        });
        setTimeout(() => {
            this.setState({
                rolling: false
            })
        }, 1500);
    }

    render() {
        return (
            <div>
                <Die side={this.state.die1} rolling={this.state.rolling} />
                <Die side={this.state.die2} rolling={this.state.rolling} />
                <button className='RollDice-button' onClick={this.roll} disabled={this.state.rolling}>{this.state.rolling ? 'Rolling...' : 'Roll Dice!'}</button>
            </div>
        );
    }
}

export default RollDice;