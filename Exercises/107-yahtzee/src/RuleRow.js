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
        break;
      case 'Twos':
        return 'Score 2 for every 2';
        break;
      case 'Threes':
        return 'Score 3 for every 3';
        break;
      case 'Fours':
        return 'Score 4 for every 4';
        break;
      case 'Fives':
        return 'Score 5 for every 6';
        break;
      case 'Sixes':
        return 'Score 6 for every 6';
        break;
      case 'Three of Kind':
        return 'If 3+ of one value, score sum of all dice';
        break;
      case 'Four of Kind':
        return 'If 4+ of one value, score sum of all dice';
        break;
      case 'Full House':
        return 'If 3 of one value and 2 of another, score 25';
        break;
      case 'Small Straight':
        return 'If 4+ values in a row, score 30';
        break;
      case 'Large Straight':
        return 'If 5 values in a row, score 40';
        break;
      case 'Yahtzee':
        return 'SIf all values match, score 50';
        break;
      case 'Chance':
        return 'Score sum of all dice';
        break;
      default:
        return 'description';
    }
  }
}

export default RuleRow;