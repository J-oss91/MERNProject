document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.getElementById("start-button");
    const playerSelect = document.getElementById("player-select");
    const tableSelect = document.getElementById("table-select");
    const placementSelect = document.getElementById("placement-select");
    const gameBoardContainer = document.getElementById("game-board-container");
  
    let playerTurn = 1; // Track the player turn
    let gameGrid; // Game grid object
  
    startButton.addEventListener("click", () => {
      const numberOfPlayers = parseInt(playerSelect.value);
      const tableSize = parseInt(tableSelect.value);
      const placementOption = placementSelect.value;
  
      gameGrid = new GameGrid(tableSize);
  
      if (placementOption === "random") {
        placeShipsRandomly(gameGrid);
      } else if (placementOption === "manual") {
        // TODO: Implement manual ship placement logic
      }
  
      displayGameBoard(gameGrid.board);
      showPlayerTurn(playerTurn);
    });
  
    function placeShipsRandomly(gameGrid) {
      const ships = [
        { name: "Battleship", size: 6 },
        { name: "Aircraft Carrier", size: 5 },
        { name: "Destroyer", size: 4 },
        { name: "Submarine", size: 3 },
        { name: "PT Boat", size: 2 },
      ];
  
      for (const ship of ships) {
        let row, col, orientation;
        do {
          row = Math.floor(Math.random() * gameGrid.size);
          col = Math.floor(Math.random() * gameGrid.size);
          orientation = Math.random() < 0.5 ? "horizontal" : "vertical";
        } while (!canPlaceShip(gameGrid, row, col, ship.size, orientation));
  
        gameGrid.placeShip(row, col, ship.size, orientation);
      }
    }
  
    function canPlaceShip(gameGrid, row, col, shipSize, orientation) {
      const isHorizontal = orientation === "horizontal";
      const isVertical = orientation === "vertical";
  
      if (isHorizontal && col + shipSize > gameGrid.size) {
        return false;
      } else if (isVertical && row + shipSize > gameGrid.size) {
        return false;
      }
  
      for (let i = 0; i < shipSize; i++) {
        const rowIndex = isVertical ? row + i : row;
        const colIndex = isHorizontal ? col + i : col;
  
        if (gameGrid.board[rowIndex][colIndex] !== null) {
          return false;
        }
      }
  
      return true;
    }
  
    function displayGameBoard(board) {
      gameBoardContainer.innerHTML = ""; // Clear previous content
  
      const table = document.createElement("table");
      for (let row = 0; row < board.length; row++) {
        const tr = document.createElement("tr");
        for (let col = 0; col < board[row].length; col++) {
          const td = document.createElement("td");
          td.textContent = board[row][col] || ""; // Show the ship, hit, or miss status
          tr.appendChild(td);
        }
        table.appendChild(tr);
      }
  
      gameBoardContainer.appendChild(table);
      table.addEventListener("click", handleCellClick);
    }
  
    function handleCellClick(event) {
      const target = event.target;
      const rowIndex = target.parentNode.rowIndex;
      const cellIndex = target.cellIndex;
  
      if (playerTurn === 1 && gameGrid.board[rowIndex][cellIndex] === "ship") {
        const result = gameGrid.receiveAttack(rowIndex, cellIndex);
        target.textContent = result;
        if (gameGrid.isGameOver()) {
          alert("Player 1 Wins!");
        } else {
          playerTurn = 2; // Switch to Player 2's turn
          showPlayerTurn(playerTurn);
        }
      } else if (playerTurn === 2) {
        // Player 2's turn, allow attack
        // TODO: Implement attack logic for Player 2
      }
    }
  
    function showPlayerTurn(player) {
      const playerTurnLabel = document.getElementById("player-turn-label");
      playerTurnLabel.textContent = `Player ${player}'s Turn`;
    }
  
    class GameGrid {
      constructor(size) {
        this.size = size;
        this.board = this.createBoard();
        this.ships = [];
      }
  
      createBoard() {
        const board = [];
        for (let i = 0; i < this.size; i++) {
          board[i] = new Array(this.size).fill(null);
        }
        return board;
      }
  
      placeShip(row, col, shipSize, orientation) {
        const isHorizontal = orientation === "horizontal";
        const isVertical = orientation === "vertical";
  
        for (let i = 0; i < shipSize; i++) {
          const rowIndex = isVertical ? row + i : row;
          const colIndex = isHorizontal ? col + i : col;
  
          this.board[rowIndex][colIndex] = "ship";
        }
      }
  
      receiveAttack(row, col) {
        if (this.board[row][col] === "ship") {
          this.board[row][col] = "hit";
          return "hit";
        } else {
          this.board[row][col] = "miss";
          return "miss";
        }
      }
  
      isGameOver() {
        for (let row = 0; row < this.size; row++) {
          for (let col = 0; col < this.size; col++) {
            if (this.board[row][col] === "ship") {
              return false; // Not all ships are sunk
            }
          }
        }
        return true; // All ships are sunk, game over
      }
    }
  });
  