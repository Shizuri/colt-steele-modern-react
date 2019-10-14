import React, { Component } from "react";
import Cell from "./Cell";
import './Board.css';


/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

class Board extends Component {
  static defaultProps = {
    nrows: 5,
    ncols: 5,
    chanceLightStartsOn: 0.1
  }

  constructor(props) {
    super(props);

    // TODO: set initial state
    this.state = {
      hasWon: false,
      board: this.createBoard()
    }
    this.flipCellsAround = this.flipCellsAround.bind(this);
  }

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */

  createBoard() {
    let board = [];
    // TODO: create array-of-arrays of true/false values
    let { nrows, ncols, chanceLightStartsOn } = this.props;
    for (let i = 0; i < nrows; i++) {
      let arr = [];
      for (let j = 0; j < ncols; j++) {
        let rand = Math.random() < chanceLightStartsOn ? true : false;
        arr.push(rand);
      }
      board.push(arr);
    }
    return board
  }

  /** handle changing a cell: update board & determine if winner */

  flipCellsAround(coord) {
    let { ncols, nrows } = this.props;
    let board = this.state.board;
    let [y, x] = coord.split("-").map(Number);


    function flipCell(y, x) {
      // if this coord is actually on board, flip it

      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x];
      }
    }

    // TODO: flip this cell and the cells around it

    function flipNeighbourCells(y, x) {
      if (x - 1 >= 0 && x - 1 < ncols && y >= 0 && y < nrows) {
        board[y][x - 1] = !board[y][x - 1];
      }
      if (x + 1 >= 0 && x + 1 < ncols && y >= 0 && y < nrows) {
        board[y][x + 1] = !board[y][x + 1];
      }
      if (x >= 0 && x < ncols && y - 1 >= 0 && y - 1 < nrows) {
        board[y - 1][x] = !board[y - 1][x];
      }
      if (x >= 0 && x < ncols && y + 1 >= 0 && y + 1 < nrows) {
        board[y + 1][x] = !board[y + 1][x];
      }
    }

    flipCell(y, x);
    flipNeighbourCells(y, x);
    // win when every cell is turned off
    // TODO: determine is the game has been won
    // let hasWon = false;
    const hasWon = this.state.board
      .map(arr => arr
        .every(innerArrItem => innerArrItem === false))
      .every(outerItem => outerItem === true);

    this.setState({ board, hasWon });//I need this
  }

  /** Render game board or winning message. */

  render() {

    // if the game is won, just show a winning msg & render nothing else

    // TODO

    // make table board

    // TODO
    let boardElements = this.state.board.map((item, index1) => {
      return (
        <tr>
          {item.map((value, index2) =>
            <Cell
              isLit={value}
              flipCellsAroundMe={() => this.flipCellsAround(index1 + '-' + index2)}
            />)}
        </tr>
      );
    });

    const boardElementsTable =
      <table>
        <tbody>
          {boardElements}
        </tbody>
      </table>

    return (
      <div>
        {this.state.hasWon ? 'You WIN!' : boardElementsTable}
      </div>
    );
  }
}


export default Board;
