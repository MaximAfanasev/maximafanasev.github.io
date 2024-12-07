const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const startButton = document.getElementById('startButton');
const content = document.querySelector('.content');

const box = 25; // размер клетки
let snake;
let food;
let direction; // текущее направление
let game;

function resetGame() {
	snake = [{
		x: 4 * box,
		y: 4 * box
			}];
	food = {
		x: Math.floor(Math.random() * (canvas.width / box)) * box,
		y: Math.floor(Math.random() * (canvas.height / box)) * box
	};
	direction = 'RIGHT'; // начальное направление
	clearInterval(game); // Останавливаем предыдущую игру
	game = setInterval(draw, 100); // Запускаем игру заново
}

function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	// Рисуем змею
	for (let i = 0; i < snake.length; i++) {
		ctx.beginPath();
		ctx.arc(snake[i].x + box / 2, snake[i].y + box / 2, box / 2, 0, Math.PI * 1.8); // Используем arc для круга
		ctx.fillStyle = (i === 0) ? 'green' : 'lightgreen';
		ctx.fill();
		ctx.strokeStyle = 'darkgreen';
		ctx.stroke();
	}

	// Рисуем еду
	ctx.fillStyle = 'red';
	ctx.fillRect(food.x, food.y, box, box);

	// Логика движения змейки
	let snakeX = snake[0].x;
	let snakeY = snake[0].y;

	if (direction === 'LEFT') snakeX -= box;
	if (direction === 'UP') snakeY -= box;
	if (direction === 'RIGHT') snakeX += box;
	if (direction === 'DOWN') snakeY += box;

	// Проверка на сбитие с едой
	if (snakeX === food.x && snakeY === food.y) {
		// Создаем новую еду в случайном месте
		food = {
			x: Math.floor(Math.random() * (canvas.width / box)) * box,
			y: Math.floor(Math.random() * (canvas.height / box)) * box
		};
	} else {
		snake.pop(); // Удаляем последний сегмент змейки
	}

	// Обработка выхода за границы
	snakeX = (snakeX + canvas.width) % canvas.width;
	snakeY = (snakeY + canvas.height) % canvas.height;

	const newHead = {
		x: snakeX,
		y: snakeY
	};

	// Проверка на столкновение со своим телом
	if (collide(newHead, snake)) {
		resetGame(); // Перезагружаем игру
		return; // Выход из функции, чтобы не добавлять новую голову
	}

	snake.unshift(newHead); // Добавляем новую голову
	autoDirection(newHead); // Вызываем функцию для изменения направления
}

function collide(head, array) {
	for (let i = 1; i < array.length; i++) { // Начинаем с 1, чтобы не проверять голову
		if (array[i].x === head.x && array[i].y === head.y) {
			return true;
		}
	}
	return false;
}

function autoDirection(snakeHead) {
	// Логика самоуправления: поворачиваем к еде
	if (snakeHead.x < food.x) direction = 'RIGHT';
	else if (snakeHead.x > food.x) direction = 'LEFT';
	else if (snakeHead.y < food.y) direction = 'DOWN';
	else if (snakeHead.y > food.y) direction = 'UP';
}

// Обработчик события кнопки "START"
startButton.addEventListener('click', () => {
	canvas.classList.add('h'); // Скрываем canvas
	startButton.classList.add('h'); // Скрываем кнопку
	resetGame(); // Запускаем игру
	content.classList.remove('h')
});

// Инициализация первой игры
resetGame();


let currentBlock = 0; // Начальный блок, который показывается
const blocks = document.querySelectorAll('.a'); // Все блоки с классом 'a'
const checkButtons = document.querySelectorAll('.check'); // Все кнопки с галочкой
const crossButtons = document.querySelectorAll('.cross'); // Все кнопки с крестиком

// Функция для переключения блоков
function switchBlock() {
	if (currentBlock < blocks.length - 1) { // Проверяем, есть ли следующий блок
		blocks[currentBlock].classList.add('h'); // Скрываем текущий блок
		currentBlock++; // Переходим к следующему блоку
		blocks[currentBlock].classList.remove('h'); // Показываем новый блок
	}
}

// Добавление обработчиков событий для кнопок с галочкой
checkButtons.forEach(button => {
	button.addEventListener('click', switchBlock);
});

// Добавление обработчиков событий для кнопок с крестиком
crossButtons.forEach(button => {
	button.addEventListener('click', (event) => {
		const block = event.target.closest('.cross'); // Находим родительский блок
		block.classList.add('shake'); // Добавляем класс тряски
		setTimeout(() => {
			block.classList.remove('shake'); // Удаляем класс тряски после анимации
		}, 500);
	});
});

const correctProgress = document.getElementById('correctProgress');


let correctCount = 0;
let incorrectCount = 0;
const totalQuestions = document.querySelectorAll('.a').length;

function updateProgress() {
	const correctPercentage = (correctCount / totalQuestions) * 100;

	const correctProgress = document.getElementById('correctProgress');
	const coin = document.getElementById('coin');

	correctProgress.style.width = `${correctPercentage}%`;

	// Перемещение монетки
	coin.style.left = `${correctPercentage}%`;

	if (correctCount + incorrectCount === totalQuestions) {
		// Логика завершения теста
		content.style.display = 'none'
		finalMessage.style.display = 'block';
	}

}

startButton.addEventListener('click', () => {
	correctCount = 0;
	incorrectCount = 0;
	finalMessage.style.display = 'none';
	updateProgress();
});

checkButtons.forEach(button => {
	button.addEventListener('click', () => {
		correctCount++;
		updateProgress();
	});
});

const vibrateButton = document.querySelectorAll('.check');
vibrateButton.forEach(button => {
	button.addEventListener('click', () => {
		if (navigator.vibrate) {
			navigator.vibrate(100); // Вибрация на 100 мс
		}
	});
});
