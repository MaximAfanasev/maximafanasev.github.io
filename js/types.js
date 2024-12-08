const correctProgress = document.getElementById('correctProgress');
const finalMessage = document.getElementById('finalMessage');
const types = document.querySelector('.types')
const basics = document.querySelector('.basics')

let correctCount = 0;
let incorrectCount = 0;
const totalQuestions = document.querySelectorAll('.a').length;

let currentBlock = 0; // Начальный блок, который показывается
const blocks = document.querySelectorAll('.a'); // Все блоки с классом 'a'
const checkButtons = document.querySelectorAll('.check'); // Все кнопки с галочкой
const crossButtons = document.querySelectorAll('.cross'); // Все кнопки с крестиком
finalMessage.style.display = 'none';

function updateProgress() {
	const correctPercentage = (correctCount / totalQuestions) * 100;

	const correctProgress = document.getElementById('correctProgress');
	const coin = document.getElementById('coin');

	correctProgress.style.width = `${correctPercentage}%`;

	// Перемещение монетки
	coin.style.left = `${correctPercentage}%`;

	if (correctCount + incorrectCount === totalQuestions) {
		// Логика завершения теста
		types.style.display = 'none'
		basics.style.display = 'none'
		finalMessage.style.display = 'block';
	}
}
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

// Функция для переключения блоков
function switchBlock() {
	if (currentBlock < blocks.length - 1) { // Проверяем, есть ли следующий блок
		blocks[currentBlock].classList.add('h'); // Скрываем текущий блок
		currentBlock++; // Переходим к следующему блоку
		blocks[currentBlock].classList.remove('h'); // Показываем новый блок
	}
	updateProgress();
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
