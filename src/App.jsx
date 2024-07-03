import React from "react";
import Square from "./components/Square";

export default function GameBoard() {
  const [squares, setSquares] = React.useState(Array(9).fill(null));

  return (
    <>
      <div className="board-row">
        <Square marker={squares[0]} />
        <Square marker={squares[1]} />
        <Square marker={squares[2]} />
      </div>
      <div className="board-row">
        <Square marker={squares[3]} />
        <Square marker={squares[4]} />
        <Square marker={squares[5]} />
      </div>
      <div className="board-row">
        <Square marker={squares[6]} />
        <Square marker={squares[7]} />
        <Square marker={squares[8]} />
      </div>
    </>
  );
}
