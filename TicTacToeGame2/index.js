// class TicTacToe {
//     constructor() {
//       this.board = [
//         ['', '', ''],
//         ['', '', ''],
//         ['', '', '']
//       ];
//       this.currentPlayer = 'X';
//       this.gameOver = false;
//       this.winner = null;
//     }
  
//     makeMove(row, col) {
//       if (this.gameOver || this.board[row][col] !== '') {
//         return;
//       }
  
//       this.board[row][col] = this.currentPlayer;
//       this.switchPlayer();
//       this.checkGameOver();
//     }
  
//     checkGameOver() {
//       if (this.checkWin()) {
//         this.gameOver = true;
//         this.winner = this.currentPlayer;
//       } else if (this.checkDraw()) {
//         this.gameOver = true;
//         this.winner = 'draw';
//       }
//     }
  
//     checkWin() {
//       const winningCombinations = [
//         // Rows
//         [[0, 0], [0, 1], [0, 2]],
//         [[1, 0], [1, 1], [1, 2]],
//         [[2, 0], [2, 1], [2, 2]],
//         // Columns
//         [[0, 0], [1, 0], [2, 0]],
//         [[0, 1], [1, 1], [2, 1]],
//         [[0, 2], [1, 2], [2, 2]],
//         // Diagonals
//         [[0, 0], [1, 1], [2, 2]],
//         [[0, 2], [1, 1], [2, 0]]
//       ];
  
//       for (const combination of winningCombinations) {
//         const [a, b, c] = combination;
//         const [rowA, colA] = a;
//         const [rowB, colB] = b;
//         const [rowC, colC] = c;
  
//         if (
//           this.board[rowA][colA] !== '' &&
//           this.board[rowA][colA] === this.board[rowB][colB] &&
//           this.board[rowA][colA] === this.board[rowC][colC]
//         ) {
//           return true;
//         }
//       }
  
//       return false;
//     }
  
//     checkDraw() {
//       for (const row of this.board) {
//         for (const cell of row) {
//           if (cell === '') {
//             return false;
//           }
//         }
//       }
//       return true;
//     }
  
//     switchPlayer() {
//       this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
//     }
  
//     restart() {
//       this.board = [
//         ['', '', ''],
//         ['', '', ''],
//         ['', '', '']
//       ];
//       this.currentPlayer = 'X';
//       this.gameOver = false;
//       this.winner = null;
//     }
//   }
  
//   const game = new TicTacToe();
  
//   const boardCells = document.querySelectorAll('.tic-tac-toe-cell');
//   const startButton = document.getElementById('start-button');
//   const playerTurn = document.getElementById('player-turn');
//   const winnerMessage = document.getElementById('winner-message');
  
//   function makePlayerMove(event) {
//     const cell = event.target;
//     const index = Array.from(boardCells).indexOf(cell);
//     const row = Math.floor(index / 3);
//     const col = index % 3;
  
//     if (!game.gameOver && game.board[row][col] === '') {
//       game.makeMove(row, col);
//       cell.textContent = game.currentPlayer;
  
//       if (game.checkGameOver()) {
//         if (game.winner) {
//           setTimeout(() => {
//             winnerMessage.textContent = `Congrats Player ${game.winner}! You have won!`;
//             playerTurn.textContent = '';
//             winnerMessage.classList.add('winner-message--visible');
//           }, 100);
//         } else {
//           setTimeout(() => {
//             winnerMessage.textContent = "It's a draw!";
//             playerTurn.textContent = '';
//             winnerMessage.classList.add('winner-message--visible');
//           }, 100);
//         }
//       } else {
//         playerTurn.textContent = `Player ${game.currentPlayer === 'X' ? '1' : '2'} Turn`;
//         winnerMessage.textContent = '';
//         winnerMessage.classList.remove('winner-message--visible');
//       }
//     }
//   }
  
//   function restartGame() {
//     game.restart();
//     boardCells.forEach((cell) => {
//       cell.textContent = '';
//       cell.addEventListener('click', makePlayerMove);
      
//     });
  
//     playerTurn.textContent = 'Player 1 Turn';
//     winnerMessage.textContent = '';
//   }
  
//   boardCells.forEach((cell) => {
//     cell.addEventListener('click', makePlayerMove);
//   });
  
//   startButton.addEventListener('click', restartGame);
// //   JD
 

class TicTacToe {
    constructor() {
      this.board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
      ];
      this.currentPlayer = 'X';
      this.gameOver = false;
      this.winner = null;
    }
  
    makeMove(row, col) {
      if (this.gameOver || this.board[row][col] !== '') {
        return;
      }
  
      this.board[row][col] = this.currentPlayer;
      this.switchPlayer();
      this.checkGameOver();
    }
  
    checkGameOver() {
      if (this.checkWin()) {
        this.gameOver = true;
        this.winner = this.currentPlayer;
      } else if (this.checkDraw()) {
        this.gameOver = true;
        this.winner = 'draw';
      }
    }
  
    checkWin() {
      const winningCombinations = [
        // Rows
        [[0, 0], [0, 1], [0, 2]],
        [[1, 0], [1, 1], [1, 2]],
        [[2, 0], [2, 1], [2, 2]],
        // Columns
        [[0, 0], [1, 0], [2, 0]],
        [[0, 1], [1, 1], [2, 1]],
        [[0, 2], [1, 2], [2, 2]],
        // Diagonals
        [[0, 0], [1, 1], [2, 2]],
        [[0, 2], [1, 1], [2, 0]]
      ];
  
      for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        const [rowA, colA] = a;
        const [rowB, colB] = b;
        const [rowC, colC] = c;
  
        if (
          this.board[rowA][colA] !== '' &&
          this.board[rowA][colA] === this.board[rowB][colB] &&
          this.board[rowA][colA] === this.board[rowC][colC]
        ) {
          return true;
        }
      }
  
      return false;
    }
  
    checkDraw() {
      for (const row of this.board) {
        for (const cell of row) {
          if (cell === '') {
            return false;
          }
        }
      }
      return true;
    }
  
    switchPlayer() {
      this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    }
  
    restart() {
      this.board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
      ];
      this.currentPlayer = 'X';
      this.gameOver = false;
      this.winner = null;
    }
  }
  
  const game = new TicTacToe();
  
  const boardCells = document.querySelectorAll('.tic-tac-toe-cell');
  const startButton = document.getElementById('start-button');
  const playerTurn = document.getElementById('player-turn');
  const winnerMessage = document.getElementById('winner-message');
  
  function makePlayerMove(event) {
    const cell = event.target;
    const index = Array.from(boardCells).indexOf(cell);
    const row = Math.floor(index / 3);
    const col = index % 3;
  
    if (!game.gameOver && game.board[row][col] === '') {
      game.makeMove(row, col);
      cell.textContent = game.currentPlayer;
  
      if (game.checkGameOver()) {
        if (game.winner) {
          setTimeout(() => {
            winnerMessage.textContent = `Player ${game.winner} has won!`;
            playerTurn.textContent = '';
            winnerMessage.classList.add('winner-message--visible');
          }, 100);
        } else {
          setTimeout(() => {
            winnerMessage.textContent = "Game ended in a draw!";
            playerTurn.textContent = '';
            winnerMessage.classList.add('winner-message--visible');
          }, 100);
        }
      } else {
        playerTurn.textContent = `Player ${game.currentPlayer === 'X' ? '1' : '2'} Turn`;
        winnerMessage.textContent = '';
        winnerMessage.classList.remove('winner-message--visible');
      }
    }
  }
  
  function restartGame() {
    game.restart();
    boardCells.forEach((cell) => {
      cell.textContent = '';
      cell.addEventListener('click', makePlayerMove);
    });
  
    playerTurn.textContent = 'Player 1 Turn';
    winnerMessage.textContent = '';
  }
  
  boardCells.forEach((cell) => {
    cell.addEventListener('click', makePlayerMove);
  });
  
  startButton.addEventListener('click', restartGame);
  