import React, { Component } from "react";
import Dice from "./Dice";
import ScoreTable from "./ScoreTable";
import "./Game.css";

const NUM_DICE = 5;
const NUM_ROLLS = 3;

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dice: Array.from({ length: NUM_DICE }),
      locked: Array(NUM_DICE).fill(false),
      rollsLeft: NUM_ROLLS,
      shaking: false,
      scores: {
        ones: undefined,
        twos: undefined,
        threes: undefined,
        fours: undefined,
        fives: undefined,
        sixes: undefined,
        threeOfKind: undefined,
        fourOfKind: undefined,
        fullHouse: undefined,
        smallStraight: undefined,
        largeStraight: undefined,
        yahtzee: undefined,
        chance: undefined
      }
    };
    this.roll = this.roll.bind(this);
    this.doScore = this.doScore.bind(this);
    this.toggleLocked = this.toggleLocked.bind(this);
    this.shakeDice = this.shakeDice.bind(this);
    this.isTheGameOver = this.isTheGameOver.bind(this);
    this.newGame = this.newGame.bind(this);
  }

  componentDidMount() {
    this.shakeDice();
  }

  shakeDice() {
    this.setState(st => ({
      shaking: true
    }));
    setTimeout(this.roll, 1000);
  }

  roll(evt) {
    // roll dice whose indexes are in reroll
    this.setState(st => ({
      dice: st.dice.map((d, i) =>
        st.locked[i] ? d : Math.ceil(Math.random() * 6)
      ),
      locked: st.rollsLeft > 1 ? st.locked : Array(NUM_DICE).fill(true),
      rollsLeft: st.rollsLeft - 1,
      shaking: false
    }));
  }

  toggleLocked(idx) {
    // toggle whether idx is in locked or not
    if (this.state.rollsLeft > 0 && !this.state.shaking) {
      this.setState(st => ({
        locked: [
          ...st.locked.slice(0, idx),
          !st.locked[idx],
          ...st.locked.slice(idx + 1)
        ]
      }));
    }
  }

  doScore(rulename, ruleFn) {
    // evaluate this ruleFn with the dice and score this rulename
    this.setState(st => ({
      scores: { ...st.scores, [rulename]: ruleFn(this.state.dice) },
      rollsLeft: NUM_ROLLS,
      locked: Array(NUM_DICE).fill(false)
    }));
    this.roll();
  }

  isTheGameOver() {
    const isOver = !Object.values(this.state.scores).includes(undefined);
    if (isOver) {
      const highScore = localStorage.getItem('YahtzeeHighScore');
      if (this.getCurrentScore() > highScore) {
        localStorage.setItem('YahtzeeHighScore', this.getCurrentScore());
      }
    }
    return isOver;
  }

  getCurrentScore() {
    const scores = this.state.scores;
    const vals = Object.values(scores).filter(val => val !== undefined);
    let currentScore = 0;
    if (vals.length > 0) {
      currentScore = vals.reduce((accumulator, currentValue) => accumulator + currentValue);
    }

    return currentScore;
  }

  newGame() {
    this.setState({
      dice: Array.from({ length: NUM_DICE }),
      locked: Array(NUM_DICE).fill(false),
      rollsLeft: NUM_ROLLS,
      shaking: false,
      scores: {
        ones: undefined,
        twos: undefined,
        threes: undefined,
        fours: undefined,
        fives: undefined,
        sixes: undefined,
        threeOfKind: undefined,
        fourOfKind: undefined,
        fullHouse: undefined,
        smallStraight: undefined,
        largeStraight: undefined,
        yahtzee: undefined,
        chance: undefined
      }
    })
    this.shakeDice();
  }

  render() {
    return (
      <div className='Game'>
        <header className='Game-header'>
          <h1 className='App-title'>Yahtzee!</h1>

          <section className='Game-dice-section'>
            <Dice
              dice={this.state.dice}
              locked={this.state.locked}
              handleClick={this.toggleLocked}
              rollsLeft={this.state.rollsLeft}
              shaking={this.state.shaking}
            />
            <div className='Game-button-wrapper'>
              {
                this.isTheGameOver() ?
                  <button
                    className='Game-reroll'
                    onClick={this.newGame}
                  >
                    Play again?
                  </button>
                  :
                  <button
                    className='Game-reroll'
                    disabled={this.state.locked.every(x => x)}
                    onClick={this.shakeDice}
                  >
                    {this.state.rollsLeft} Rerolls Left
              </button>
              }
            </div>
          </section>
        </header>
        <ScoreTable doScore={this.doScore} scores={this.state.scores} />
      </div>
    );
  }
}

export default Game;
