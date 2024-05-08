# simple_tic_tac_toe

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tic Tac Toe</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Tic Tac Toe</h1>
        <div id="board" class="board">
            <div class="cell" onclick="handleClick(0)"></div>
            <div class="cell" onclick="handleClick(1)"></div>
            <div class="cell" onclick="handleClick(2)"></div>
            <div class="cell" onclick="handleClick(3)"></div>
            <div class="cell" onclick="handleClick(4)"></div>
            <div class="cell" onclick="handleClick(5)"></div>
            <div class="cell" onclick="handleClick(6)"></div>
            <div class="cell" onclick="handleClick(7)"></div>
            <div class="cell" onclick="handleClick(8)"></div>
        </div>
        <button onclick="resetGame()">Reset Game</button>
        <p id="message"></p>
    </div>
    <script src="script.js"></script>
</body>
</html>


#css
.container {
    text-align: center;
}

.board {
    display: grid;
    grid-template-columns: repeat(3, 100px);
    grid-gap: 5px;
    margin-bottom: 10px;
}

.cell {
    width: 100px;
    height: 100px;
    background-color: lightgray;
    border: 1px solid black;
    font-size: 2em;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

button {
    margin-top: 10px;
    padding: 5px 10px;
    font-size: 1em;
    cursor: pointer;
}


#js
let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameOver = false;

function handleClick(index) {
    if (!gameOver && board[index] === '') {
        board[index] = currentPlayer;
        render();
        checkWinner();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function checkWinner() {
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let condition of winningConditions) {
        const [a, b, c] = condition;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            gameOver = true;
            document.getElementById('message').innerText = `${currentPlayer} wins!`;
            break;
        }
    }

    if (!board.includes('') && !gameOver) {
        gameOver = true;
        document.getElementById('message').innerText = 'It\'s a draw!';
    }
}

function resetGame() {
    currentPlayer = 'X';
    board = ['', '', '', '', '', '', '', '', ''];
    gameOver = false;
    document.getElementById('message').innerText = '';
    render();
}

function render() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell, index) => {
        cell.innerText = board[index];
    });
}

