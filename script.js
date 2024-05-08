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
