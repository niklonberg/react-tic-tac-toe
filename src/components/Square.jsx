import React from "react";

function Square({ marker }) {
  function handleClick() {
    // setMarker("X");
  }

  return (
    <button className="square" onClick={handleClick}>
      {marker}
    </button>
  );
}

export default Square;
