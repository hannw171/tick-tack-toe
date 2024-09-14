const calculateWinner = (board) => {
  const winningLines = [
    [0, 1, 2], //Horizontal
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], //Vertical
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], //Diagonal
    [2, 4, 6],
  ];

  for (let i = 0; i < winningLines.length; i++) {
    const [a, b, c] = winningLines[i]; //bakal berisi value dari masing masing winningLines

    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
};

export default calculateWinner;
