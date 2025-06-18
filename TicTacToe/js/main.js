let currentPlayer = 'X';
let board = Array(9).fill(null);
let gameActive = true;

const cells = document.querySelectorAll('.cell');
const statusText = document.getElementById('gameStatus');

// Load audio
const placeSound = new Audio('media/Place Icon.mp3');
const winSound = new Audio('media/Win Game.mp3');
const tieSound = new Audio('media/Tie Game.mp3');

cells.forEach(cell => {
    cell.addEventListener('click', () => handleMove(cell));
});

function handleMove(cell) {
    const index = cell.getAttribute('data-index');

    if (!gameActive || board[index]) return;

    board[index] = currentPlayer;

    // Show X or O image
    const img = document.createElement('img');
    img.src = currentPlayer === 'X' ? 'images/X.png' : 'images/O.png';
    cell.appendChild(img);

    placeSound.play();

    if (checkWinner()) {
        gameActive = false;
        statusText.textContent = `Player ${currentPlayer} wins!`;
        winSound.play();
    } else if (board.every(cell => cell)) {
        gameActive = false;
        statusText.textContent = `It's a tie!`;
        tieSound.play();
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        statusText.textContent = `Player ${currentPlayer}'s turn`;
    }
}

function checkWinner() {
    const winCombos = [
        [0,1,2], [3,4,5], [6,7,8], // rows
        [0,3,6], [1,4,7], [2,5,8], // cols
        [0,4,8], [2,4,6]           // diags
    ];

    return winCombos.some(combo => {
        const [a, b, c] = combo;
        return board[a] && board[a] === board[b] && board[b] === board[c];
    });
}

function resetGame() {
    board = Array(9).fill(null);
    currentPlayer = 'X';
    gameActive = true;
    statusText.textContent = "Player X's turn";

    cells.forEach(cell => {
        cell.innerHTML = '';
    });
}
