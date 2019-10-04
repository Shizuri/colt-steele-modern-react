import React, { Component } from 'react';

class ScoreKeeper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0
        }
        this.singleKill = this.singleKill.bind(this);
        this.trippleKill = this.trippleKill.bind(this);
    }

    // this is a bad idea
    singleKill() {
        this.setState({
            score: this.state.score + 1
        });
    }

    // trippleKill() {
    //     this.setState({ score: this.state.score + 1 });
    //     this.setState({ score: this.state.score + 1 });
    //     this.setState({ score: this.state.score + 1 });
    // }

    // trippleKill() {
    //     this.setState(curState => {return {score: curState.score + 1}});
    //     this.setState(curState => {return {score: curState.score + 1}});
    //     this.setState(curState => {return {score: curState.score + 1}});
    // }

    incrementScore(oldState) {
        return{score: oldState.score + 1};
    }

    trippleKill() {
        this.setState(this.incrementScore);
        this.setState(this.incrementScore);
        this.setState(this.incrementScore);
    }

    render() {
        return (
            <div>
                <h1>Score is: {this.state.score}</h1>
                <button onClick={this.singleKill}>Single Kill!</button>
                <button onClick={this.trippleKill}>Tripple Kill!</button>
            </div>
        );
    }
}

export default ScoreKeeper;