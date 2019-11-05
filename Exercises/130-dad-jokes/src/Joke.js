import React, { Component } from 'react';

class Joke extends Component {
    constructor(props){
        super(props);
        this.upVoteHandler = this.upVoteHandler.bind(this);
        this.downVoteHandler = this.downVoteHandler.bind(this);
    }

    upVoteHandler() {
        this.props.upVote(this.props.id);
    }

    downVoteHandler() {
        this.props.downVote(this.props.id);
    }

    render() {
        return(
            <div>
                <button onClick={this.upVoteHandler}>Up</button>
                <span>{this.props.points}</span>
                <button onClick={this.downVoteHandler}>Down</button>
                <span>{this.props.joke}</span>
            </div>
        );
    }
}

export default Joke;