import React from "react";
import Square from "./components/Square";

export default function GameBoard() {
  const [squares, setSquares] = React.useState(Array(9).fill(null));

  function handleSquareClick(i) {
    const nextSquares = [...squares];
    nextSquares[i] = "X";
    setSquares(nextSquares);
  }

  return (
    <>
      <div className="board-row">
        <Square
          marker={squares[0]}
          onSquareClick={() => handleSquareClick(0)}
        />
        <Square
          marker={squares[1]}
          onSquareClick={() => handleSquareClick(1)}
        />
        <Square
          marker={squares[2]}
          onSquareClick={() => handleSquareClick(2)}
        />
      </div>
      <div className="board-row">
        <Square
          marker={squares[3]}
          onSquareClick={() => handleSquareClick(3)}
        />
        <Square
          marker={squares[4]}
          onSquareClick={() => handleSquareClick(4)}
        />
        <Square
          marker={squares[5]}
          onSquareClick={() => handleSquareClick(5)}
        />
      </div>
      <div className="board-row">
        <Square
          marker={squares[6]}
          onSquareClick={() => handleSquareClick(6)}
        />
        <Square
          marker={squares[7]}
          onSquareClick={() => handleSquareClick(7)}
        />
        <Square
          marker={squares[8]}
          onSquareClick={() => handleSquareClick(8)}
        />
      </div>
    </>
  );
}
