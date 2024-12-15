// Переменные для работы с тестом
const finalMessage = document.getElementById('finalMessage');
const countdownDiv = document.getElementById('countdown');

let correctCount = 0;
let incorrectCount = 0;
const totalQuestions = document.querySelectorAll('.a').length;
const blocks = document.querySelectorAll('.a');
let currentIndex = 0; // Индекс текущей карточки
const checkButtons = document.querySelectorAll('.check');

// Функция для отображения текущей карточки
function showCurrentBlock() {
    blocks.forEach((block, index) => {
        block.style.display = index === currentIndex ? 'block' : 'none';
    });
}

// Показать первую карточку при загрузке
showCurrentBlock();

// Обработчики для кнопок проверки
checkButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        correctCount++;
        updateProgress();

        // Переходим к следующей карточке
        currentIndex++;
        if (currentIndex < totalQuestions) {
            showCurrentBlock();
        } else {
            finalizeTest();
        }
    });
});

// Обработчики для кнопок перекрестка
crossButtons.forEach(button => {
    button.addEventListener('click', function (event) { // Используем обычную функцию
        const block = event.target.closest('.a');

        // Удаляем класс "h"
        block.classList.remove('h');

        // Добавляем класс 'shake'
        block.classList.add('shake');
        setTimeout(() => {
            block.classList.remove('shake');
        }, 500);

        // Увеличиваем счетчик неверных ответов
        incorrectCount++;
        updateProgress();
    });
});

function updateProgress() {
    const correctPercentage = (correctCount / totalQuestions) * 100;
    const correctProgress = document.getElementById('correctProgress');
    const coin = document.getElementById('coin');

    correctProgress.style.width = `${correctPercentage}%`;
    coin.style.left = `${correctPercentage}%`;

    if (correctCount + incorrectCount === totalQuestions) {
        finalizeTest();
    }
}

function finalizeTest() {
    for (const block of blocks) {
        block.style.display = 'none';
    }
    finalMessage.style.display = 'block';
    startRedirectCountdown(); // Запускаем обратный отсчет
}

function startRedirectCountdown() {
    let countdown = 1; // Начинаем с 1 секунд
    countdownDiv.style.display = 'block'; // Отображаем блок обратного отсчета
    countdownDiv.innerHTML = `Переход на главную через <span>${countdown}</span> сек.`;

    const intervalId = setInterval(() => {
        countdown--;
        countdownDiv.querySelector('span').textContent = countdown;

        if (countdown <= 0) {
            clearInterval(intervalId);
            window.location.href = '../index.html'; // Переход на главную страницу
        }
    }, 1000); // Каждую секунду
}

// Инициализируем показ первой карточки
showCurrentBlock();