import React, { Component } from 'react';
import './RuleRow.css'

class RuleRow extends Component {
  render() {
    return (
      // <tr className="RuleRow RuleRow-active" onClick={this.props.doScore}>
      <tr className={this.props.score === undefined ? "RuleRow RuleRow-active" : "RuleRow RuleRow-disabled"}
        onClick={this.props.score === undefined ? this.props.doScore : null}>
        <td className="RuleRow-name">{this.props.name}</td>
        <td className="RuleRow-score">{this.props.score === undefined ? this.description(this.props.name) : this.props.score}</td>
      </tr>
    )
  }

  description(name) {
    switch (name) {
      case 'Ones':
        return 'Score 1 for every 1';
      case 'Twos':
        return 'Score 2 for every 2';
      case 'Threes':
        return 'Score 3 for every 3';
      case 'Fours':
        return 'Score 4 for every 4';
      case 'Fives':
        return 'Score 5 for every 6';
      case 'Sixes':
        return 'Score 6 for every 6';
      case 'Three of Kind':
        return 'If 3+ of one value, score sum of all dice';
      case 'Four of Kind':
        return 'If 4+ of one value, score sum of all dice';
      case 'Full House':
        return 'If 3 of one value and 2 of another, score 25';
      case 'Small Straight':
        return 'If 4+ values in a row, score 30';
      case 'Large Straight':
        return 'If 5 values in a row, score 40';
      case 'Yahtzee':
        return 'SIf all values match, score 50';
      case 'Chance':
        return 'Score sum of all dice';
      default:
        return 'description';
    }
  }
}

export default RuleRow;