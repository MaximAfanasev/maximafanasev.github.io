const correctProgress = document.getElementById('correctProgress');
const finalMessage = document.getElementById('finalMessage');
const blockElements = {
	types: document.querySelector('.types'),
	basics: document.querySelector('.basics'),
	numbers: document.querySelector('.numbers'),
	arrays: document.querySelector('.arrays'),
	str: document.querySelector('.str'),
	cicle: document.querySelector('.cicle'),
	tuple: document.querySelector('.tuple')
};

let correctCount = 0;
let incorrectCount = 0;
const totalQuestions = document.querySelectorAll('.a').length; // Определение общего количества вопросов
let currentBlock = 0; // Индекс текущего блока
const blocks = document.querySelectorAll('.a'); // Все блоки с классом 'a'

if (finalMessage) {
	finalMessage.style.display = 'none'; // Скрываем финальное сообщение изначально
}

function updateProgress() {
	const correctPercentage = (correctCount / totalQuestions) * 100;
	correctProgress.style.width = `${correctPercentage}%`;

	// Показываем финальное сообщение, если все вопросы пройдены
	if (correctCount + incorrectCount === totalQuestions) {
		finalizeTest();
	}
}

function finalizeTest() {
	Object.values(blockElements).forEach(element => {
		if (element) element.style.display = 'none'; // Скрываем все блоки
	});
	finalMessage.style.display = 'block'; // Показываем сообщение о завершении
	startRedirectCountdown(); // Запускаем обратный отсчет до перехода
}


function startRedirectCountdown() {
    let countdown = 3; // Начинаем с 3 секунд
    finalMessage.insertAdjacentHTML('beforeend', `<div id="countdown">Переход на главную через <span>${countdown}</span> сек.</div>`);

    const intervalId = setInterval(() => {
        countdown--;
        document.querySelector('#countdown span').textContent = countdown;

        if (countdown <= 0) {
            clearInterval(intervalId);
            localStorage.setItem('startPressed', 'true'); // Устанавливаем флаг для нажатия кнопки
            window.location.href = '../index.html'; // Переход на главную страницу
        }
    }, 1000); // Каждую секунду
}

// После редиректа в главной странице
window.onload = function() {
    const startPressed = localStorage.getItem('startPressed');
    if (startPressed === 'true') {
        document.getElementById('startButton').click(); // Имитация нажатия кнопки "START"
        localStorage.removeItem('startPressed'); // Очистка флага
    }
}

// Обработчик для кнопок с галочкой
document.querySelectorAll('.check').forEach(button => {
	button.addEventListener('click', () => {
		correctCount++;
		updateProgress();
		switchBlock();
	});
});

// Функция для переключения блоков
function switchBlock() {
	if (currentBlock < blocks.length - 1) {
		blocks[currentBlock].classList.add('h'); // Скрываем текущий блок
		currentBlock++; // Переходим к следующему блоку
		blocks[currentBlock].classList.remove('h'); // Показываем новый блок
	}
}

// Обработчик для кнопок с крестиком
document.querySelectorAll('.cross').forEach(button => {
	button.addEventListener('click', (event) => {
		const block = event.target.closest('.a'); // Находим родительский блок
		if (block) {
			block.classList.add('shake'); // Добавляем класс тряски
			setTimeout(() => {
				block.classList.remove('shake'); // Удаляем класс тряски после анимации
			}, 500);
		}
	});
});
