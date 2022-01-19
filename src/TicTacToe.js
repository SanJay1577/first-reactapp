import Button from '@mui/material/Button';
import { useState } from "react";
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';

export function TicTacToe() {
  const { width, height } = useWindowSize();
  const [board, setBoard] = useState([null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null]);
  const [isXTurn, setIsXTurn] = useState(true);
  const handleClick = (index) => {
    console.log("Clicked", index);
    if (!winner && board[index] === null) { //or if(!board[index]){}
      const boardCopy = [...board];
      boardCopy[index] = isXTurn ? "X" : "O";
      setBoard(boardCopy);
      setIsXTurn(!isXTurn);
    }
  };

  const decideWinner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] != null &&
        board[a] === board[b] &&
        board[a] === board[c]) {
        console.log("Winner is", board[a]);
        return board[a];
      }
    }
    return null;
  };
  const winner = decideWinner(board);

  return (
    <div>
      {winner ? <Confetti
        width={width}
        height={height}
        gravity={0.03} /> : ""}
      <div className="board">
        {board.map((val, index) => (
          <GameBox
            val={val}
            onPlayerClick={() => handleClick(index)} />
        ))}
        {/* <GameBox />
            <GameBox />
            <GameBox />
            <GameBox />
            <GameBox />
            <GameBox />
            <GameBox />
            <GameBox />
            <GameBox /> */}
      </div>
      {winner ? <h2>The Winner is {winner}</h2> : ""}
      {winner ? <Button onClick={() => (setBoard([null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null]),
        setIsXTurn(true))}
        variant="outlined">Restart</Button> : ""}
    </div>
  );
}
function GameBox({ val, onPlayerClick }) {
  // const [val, setVal] = useState(null);
  const styles = { color: val === "X" ? "Green" : "Red" };
  return (

    <div style={styles}
      onClick={() => onPlayerClick()}
      className="game-box">{val}
    </div>


  );
}
