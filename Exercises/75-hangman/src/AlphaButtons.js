import React, { Component } from 'react';

class AlphaButtons extends Component {
    constructor(props){
        super(props);

        this.handleGuess = this.handleGuess.bind(this);
        this.handleGuessedLetter = this.handleGuessedLetter.bind(this);
    }

    handleGuess() {
        this.props.guess();
    }

    handleGuessedLetter(ltr) {
        this.props.guessedLetter(ltr);
    }

    render() {
        return this.props.letters.split("").map(ltr => (
            <button
                value={ltr}
                onClick={this.handleGuess()}
                disabled={this.handleGuessedLetter(ltr)}
                key={ltr}
            >
                {ltr}
            </button>
        ));
    }
}

export default AlphaButtons;