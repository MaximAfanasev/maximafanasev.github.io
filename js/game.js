// Переменные для работы с тестом
const finalMessage = document.getElementById('finalMessage');
const correctProgressContainer = document.getElementById('correctProgressContainer');

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
			correctProgressContainer.style.display = 'none';
        block.style.display = 'none';
    }
    finalMessage.style.display = 'block';
    startRedirectCountdown(); // Запускаем обратный отсчет
}

function startRedirectCountdown() {
    let countdown = 5; // Начинаем с 1 секунд

    const intervalId = setInterval(() => {
        countdown--;

        if (countdown <= 0) {
            clearInterval(intervalId);
            window.location.href = '../first/index.html'; // Переход на главную страницу
        }
    }, 1000); // Каждую секунду
}

// Инициализируем показ первой карточки
showCurrentBlock();