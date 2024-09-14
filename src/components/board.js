import { useState } from "react";
import Square from "./square";
import calculateWinner from "../utils/calculateWinner";

const Board = ({ board,buttonSquareAction }) => {

  const handleSquareClicked = (index) => {
    buttonSquareAction(index);
  };

  return (
    <div className="board">
      <div className="row">
        <Square
          index={0}
          value={board[0]}
          onClick={() => {
            handleSquareClicked(0);
          }}
        />
        <Square
          index={1}
          value={board[1]}
          onClick={() => {
            handleSquareClicked(1);
          }}
        />
        <Square
          index={2}
          value={board[2]}
          onClick={() => {
            handleSquareClicked(2);
          }}
        />
      </div>
      <div className="row">
        <Square
          index={3}
          value={board[3]}
          onClick={() => {
            handleSquareClicked(3);
          }}
        />
        <Square
          index={4}
          value={board[4]}
          onClick={() => {
            handleSquareClicked(4);
          }}
        />
        <Square
          index={5}
          value={board[5]}
          onClick={() => {
            handleSquareClicked(5);
          }}
        />
      </div>
      <div className="row">
        <Square
          index={6}
          value={board[6]}
          onClick={() => {
            handleSquareClicked(6);
          }}
        />
        <Square
          index={7}
          value={board[7]}
          onClick={() => {
            handleSquareClicked(7);
          }}
        />
        <Square
          index={8}
          value={board[8]}
          onClick={() => {
            handleSquareClicked(8);
          }}
        />
      </div>
    </div>
  );
};
export default Board;
