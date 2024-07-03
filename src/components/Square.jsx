function Square({ marker }) {
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
