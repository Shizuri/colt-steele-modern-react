import React, { Component } from "react";
import "./Hangman.css";
import img0 from "./0.jpg";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";
import img6 from "./6.jpg";
import { randomWord } from './words';
import AlphaButtons from './AlphaButtons';

class Hangman extends Component {
  /** by default, allow 6 guesses and use provided gallows images. */
  static defaultProps = {
    maxWrong: 6,
    images: [img0, img1, img2, img3, img4, img5, img6]
  };

  constructor(props) {
    super(props);
    this.state = { nWrong: 0, guessed: new Set(), answer: randomWord() };
    this.guess = this.guess.bind(this);
    this.restartHandler = this.restartHandler.bind(this);
    this.won = this.won.bind(this);
    this.guessedLetter = this.guessedLetter.bind(this);
  }

  /** guessedWord: show current-state of word:
    if guessed letters are {a,p,e}, show "app_e" for "apple"
  */
  guessedWord() {
    return this.state.answer
      .split("")
      .map(ltr => (this.state.guessed.has(ltr) ? ltr : "_"));
  }

  /** handleGuest: handle a guessed letter:
    - add to guessed letters
    - if not in answer, increase number-wrong guesses
  */
  guess(evt) {
    let ltr = evt.target.value;
    this.setState(st => ({
      guessed: st.guessed.add(ltr),
      nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1)
    }));
  }

  /** generateButtons: return array of letter buttons to render */
  // generateButtons() {
  //   return "abcdefghijklmnopqrstuvwxyz".split("").map(ltr => (
  //     <button
  //       value={ltr}
  //       onClick={this.handleGuess}
  //       disabled={this.state.guessed.has(ltr)}
  //       key={ltr}
  //     >
  //       {ltr}
  //     </button>
  //   ));
  // }

  restart() {
    this.setState({ nWrong: 0, guessed: new Set(), answer: randomWord() });
  }
  restartHandler() {
    this.restart();
  }

  won() {
    let lettersNotGuessed = this.state.answer.split("").filter(letter => !this.state.guessed.has(letter));
    if (lettersNotGuessed.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  guessedLetter(ltr) {
    return this.state.guessed.has(ltr);
  }

  /** render: render game */
  render() {
    let buttonsLostWon = <p className='Hangman-btns'><AlphaButtons letters='abcdefghijklmnopqrstuvwxyz' guess={this.guess} guessedLetter={this.guessedLetter}/></p>;
    if (this.state.nWrong >= this.props.maxWrong) {
      buttonsLostWon = <p>You lose, the correct word was: {this.state.answer.toUpperCase()}</p>
    }
    if (this.won()) {
      buttonsLostWon = <h2>You WIN!!!</h2>
    }

    return (
      <div className='Hangman'>
        <h1>Hangman</h1>
        <img src={this.props.images[this.state.nWrong]} alt={`${this.state.nWrong} wrong guesses`} />
        <p>Number wrong: {this.state.nWrong}</p>
        <p className='Hangman-word'>{this.guessedWord()}</p>
        {buttonsLostWon}
        <button onClick={this.restartHandler}>Restart</button>
      </div>
    );
  }
}

export default Hangman;
