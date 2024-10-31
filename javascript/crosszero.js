const board2 = document.getElementById('board2');
const resetButton = document.getElementById('reset');
let currentPlayer = 'X';
const cells = Array(9).fill(null);
let gameInterval;

function render() {
  board2.innerHTML = '';
  cells.forEach((cell) => {
    const div = document.createElement('div');
    div.className = 'cell';
    div.innerText = cell;
    board2.appendChild(div);
  });
}

function handleAutoPlay() {
  const availableCells = cells.map((cell, index) => cell === null ? index : null).filter(index => index !== null);
  if (availableCells.length === 0 || checkWinner()) {
    clearInterval(gameInterval);
    setTimeout(resetGame, 1000); // Перезапуск игры через 1 секунду
    return;
  }

  const randomIndex = availableCells[Math.floor(Math.random() * availableCells.length)];
  cells[randomIndex] = currentPlayer;

  if (checkWinner()) {
    setTimeout(resetGame, 1000); // Перезапуск игры при выигрыше
  } else if (cells.every(cell => cell)) {
    setTimeout(resetGame, 1000); // Перезапуск игры при ничьей
  } else {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }

  render();
}

function checkWinner() {
  const winPatterns = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6],
            ];
  return winPatterns.some(pattern => {
    const [a, b, c] = pattern;
    return cells[a] && cells[a] === cells[b] && cells[a] === cells[c];
  });
}

function resetGame() {
  cells.fill(null);
  currentPlayer = 'X';
  render();
  startAutoPlay(); // Начать игру заново
}

function startAutoPlay() {
  clearInterval(gameInterval); // Остановить предыдущие игры
  gameInterval = setInterval(handleAutoPlay, 1000); // Запуск игры с интервалом 1 секунда
}

resetButton.addEventListener('click', resetGame);
resetGame(); // Начинаем игру автоматически

