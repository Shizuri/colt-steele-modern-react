import React, { Component } from 'react';
import './Joke.css';

class Joke extends Component {
    constructor(props) {
        super(props);
        this.upVoteHandler = this.upVoteHandler.bind(this);
        this.downVoteHandler = this.downVoteHandler.bind(this);
        this.borderColor = this.borderColor.bind(this);
    }

    upVoteHandler() {
        this.props.upVote(this.props.id);
    }

    downVoteHandler() {
        this.props.downVote(this.props.id);
    }

    borderColor() {
        if (this.props.points < 0) {
            return 'purple';
        } else if (this.props.points >= 0 && this.props.points <= 1) {
            return 'red';
        } else if (this.props.points >= 2 && this.props.points <= 3) {
            return 'ORANGERED';
        } else if (this.props.points >= 4 && this.props.points <= 5) {
            return 'DARKORANGE';
        } else if (this.props.points >= 6 && this.props.points <= 7) {
            return 'ORANGE';
        } else if (this.props.points >= 8 && this.props.points <= 9) {
            return 'GOLD';
        } else if (this.props.points >= 10 && this.props.points <= 11) {
            return 'CHARTREUSE';
        } else if (this.props.points >= 12 && this.props.points <= 13) {
            return 'LIMEGREEN';
        } else if (this.props.points >= 14) {
            return 'TEAL';
        }

    }

    render() {
        return (
            <div className='Joke-container'>
                <i onClick={this.upVoteHandler} className="fas fa-arrow-up Joke-vote-arrow-up"></i>
                <span className='Joke-points' style={{ borderColor: this.borderColor() }}>{this.props.points}</span>
                <i onClick={this.downVoteHandler} className="fas fa-arrow-down Joke-vote-arrow-down"></i>
                <span className='Joke-text'>{this.props.joke}</span>
                <span className='Joke-smily'>&#128522;</span>
            </div>
        );
    }
}

export default Joke;