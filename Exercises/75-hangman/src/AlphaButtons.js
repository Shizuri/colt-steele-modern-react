import React, { Component } from 'react';

class AlphaButtons extends Component {
    constructor(props) {
        super(props);

        this.handleGuess = this.handleGuess.bind(this);
        this.handleGuessedLetter = this.handleGuessedLetter.bind(this);
    }

    handleGuess(ltr) {
        return this.props.guess(ltr);
    }

    handleGuessedLetter(ltr) {
        return this.props.guessedLetter(ltr);
    }

    render() {
        return this.props.letters.split("").map(ltr => (
            <button
                value={ltr}
                onClick={() => this.handleGuess(ltr)}
                disabled={this.handleGuessedLetter(ltr)}
                key={ltr}
            >
                {ltr}
            </button>
        ));
    }
}

export default AlphaButtons;