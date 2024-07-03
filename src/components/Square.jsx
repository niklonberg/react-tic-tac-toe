import React from "react";

function Square() {
  const [marker, setMarker] = useState(null);

  function handleClick() {
    console.log("click");
  }

  return (
    <button className="square" onClick={handleClick}>
      {marker}
    </button>
  );
}

export default Square;
