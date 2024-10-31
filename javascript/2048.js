let board = Array.from({ length: 16 }).map(() => 0);
let tileElements = Array.from(document.querySelectorAll('.tile'));
let score = 0;
let autoPlayInterval;

function startGame() {
    board = Array.from({ length: 16 }).map(() => 0);
    score = 0;
    document.getElementById('game-status').innerText = '';
    generateTile();
    generateTile();
    updateBoard();
    autoPlay();  // Запускаем автоматическую игру
}

function generateTile() {
    let emptyTiles = board.map((v, i) => (v === 0 ? i : null)).filter(v => v !== null);
    let randomIndex = emptyTiles[Math.floor(Math.random() * emptyTiles.length)];
    board[randomIndex] = 2;  // Генерируем только 2
}

function updateBoard() {
    tileElements.forEach((tile, index) => {
        tile.innerText = board[index] !== 0 ? board[index] : '';
        tile.className = 'tile tile-' + board[index];
    });

    if (board.includes(2048)) {
        document.getElementById('game-status').innerText = 'Вы выиграли!';
        clearInterval(autoPlayInterval); // Остановка игры при выигрыше
    }
}

function autoPlay() {
    autoPlayInterval = setInterval(() => {
        if (canMove() === false) {
            clearInterval(autoPlayInterval);
            document.getElementById('game-status').innerText = 'Игра окончена!';
            return;
        }
        
        // Оптимизация движения, выбирая между доступными направлениями
        if (tryMoveLeft() || tryMoveUp() || tryMoveRight() || tryMoveDown()) {
            generateTile();
            updateBoard();
        }
    }, 500);  // Ускоренное автоматическое движение каждую 0.5 секунды
}

function tryMoveLeft() {
    let previousBoard = [...board];
    moveLeft();
    if (!areBoardsEqual(previousBoard, board)) {
        return true; // Движение успешно
    }
    return false; // Движение не сработало
}

function tryMoveRight() {
    let previousBoard = [...board];
    moveRight();
    if (!areBoardsEqual(previousBoard, board)) {
        return true; // Движение успешно
    }
    return false; // Движение не сработало
}

function tryMoveUp() {
    let previousBoard = [...board];
    moveUp();
    if (!areBoardsEqual(previousBoard, board)) {
        return true; // Движение успешно
    }
    return false; // Движение не сработало
}

function tryMoveDown() {
    let previousBoard = [...board];
    moveDown();
    if (!areBoardsEqual(previousBoard, board)) {
        return true; // Движение успешно
    }
    return false; // Движение не сработало
}

function areBoardsEqual(board1, board2) {
    return board1.join() === board2.join();
}

function moveLeft() {
    let moved = false;

    for (let row = 0; row < 4; row++) {
        let rowTiles = board.slice(row * 4, row * 4 + 4).filter(v => v !== 0);
        let mergedRow = mergeTiles(rowTiles);

        for (let i = 0; i < 4; i++) {
            if (mergedRow[i] !== board[row * 4 + i]) {
                moved = true;
            }
            board[row * 4 + i] = mergedRow[i];
        }
    }

    return moved;
}

function moveRight() {
    let moved = false;

    for (let row = 0; row < 4; row++) {
        let rowTiles = board.slice(row * 4, row * 4 + 4).filter(v => v !== 0).reverse();
        let mergedRow = mergeTiles(rowTiles).reverse();

        for (let i = 0; i < 4; i++) {
            if (mergedRow[i] !== board[row * 4 + i]) {
                moved = true;
            }
            board[row * 4 + i] = mergedRow[i];
        }
    }

    return moved;
}

function moveUp() {
    let moved = false;

    for (let col = 0; col < 4; col++) {
        let colTiles = [];
        for (let row = 0; row < 4; row++) {
            if (board[row * 4 + col] !== 0) {
                colTiles.push(board[row * 4 + col]);
            }
        }
        let mergedCol = mergeTiles(colTiles);

        for (let row = 0; row < 4; row++) {
            if (mergedCol[row] !== board[row * 4 + col]) {
                moved = true;
            }
            board[row * 4 + col] = mergedCol[row];
        }
    }

    return moved;
}

function moveDown() {
    let moved = false;

    for (let col = 0; col < 4; col++) {
        let colTiles = [];
        for (let row = 0; row < 4; row++) {
            if (board[row * 4 + col] !== 0) {
                colTiles.push(board[row * 4 + col]);
            }
        }
        let mergedCol = mergeTiles(colTiles.reverse()).reverse();

        for (let row = 0; row < 4; row++) {
            if (mergedCol[row] !== board[row * 4 + col]) {
                moved = true;
            }
            board[row * 4 + col] = mergedCol[row];
        }
    }

    return moved;
}

function mergeTiles(tiles) {
    let result = [];
    let skip = false;

    for (let i = 0; i < tiles.length; i++) {
        if (skip) {
            skip = false;
            continue;
        }
        if (i < tiles.length - 1 && tiles[i] === tiles[i + 1] && tiles[i] < 2048) {  // Не позволяйте слиянию превышать 2048
            result.push(tiles[i] * 2);
            skip = true;
        } else {
            result.push(tiles[i]);
        }
    }

    while (result.length < 4) {
        result.push(0);
    }

    return result;
}

function canMove() {
    for (let i = 0; i < board.length; i++) {
        if (board[i] === 0) return true; // Пустое место
        if (i % 4 !== 3 && board[i] === board[i + 1]) return true; // Соседние плитки в одной строке
        if (i < 12 && board[i] === board[i + 4]) return true; // Соседние плитки в одном столбце
    }
    return false;
}

startGame();