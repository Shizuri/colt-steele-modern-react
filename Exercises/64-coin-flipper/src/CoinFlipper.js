import React, { Component } from 'react';
import Coin from './Coin';

class CoinFlipper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            heads: 0,
            tails: 0,
            currentFace: null
        }
        this.flip = this.flip.bind(this);
    }

    flip() {
        const result = Math.floor(Math.random() * 2);
        if(result === 0){
            this.setState(prevState => ({heads: prevState.heads + 1, currentFace: 'heads'}));
        }
        if(result === 1){
            this.setState(prevState => ({tails: prevState.tails + 1, currentFace: 'tails'}));
        }
    }

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <Coin face={this.state.currentFace}/>
                <button onClick={this.flip}>Flip Me!</button>
                <p>Out of {this.state.heads + this.state.tails} flips, there have been {this.state.heads} heads and {this.state.tails} tails.</p>
            </div>
        );
    }
}

export default CoinFlipper;