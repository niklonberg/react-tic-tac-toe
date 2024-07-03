import React from "react";

function Square({ marker, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {marker}
    </button>
  );
}

export default Square;
