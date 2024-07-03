import Square from "./components/Square";

export default function GameBoard() {
  return (
    <>
      <div className="board-row">
        <Square marker="1" />
        <Square marker="2" />
        <Square marker="3" />
      </div>
      <div className="board-row">
        <Square marker="4" />
        <Square marker="5" />
        <Square marker="6" />
      </div>
      <div className="board-row">
        <Square marker="7" />
        <Square marker="8" />
        <Square marker="9" />
      </div>
    </>
  );
}
