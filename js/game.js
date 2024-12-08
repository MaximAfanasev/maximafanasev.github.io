
        const finalMessage = document.getElementById('finalMessage');
        const countdownDiv = document.getElementById('countdown');

        let correctCount = 0;
        let incorrectCount = 0;
        const totalQuestions = document.querySelectorAll('.a').length;
        let currentBlock = 0;
        const blocks = document.querySelectorAll('.a');
        const checkButtons = document.querySelectorAll('.check');
        const crossButtons = document.querySelectorAll('.cross');

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
            let countdown = 3; // Начинаем с 3 секунд
            countdownDiv.style.display = 'block'; // Отображаем блок обратного отсчета
            countdownDiv.innerHTML = `Переход на главную через <span>${countdown}</span> сек.`;

            const intervalId = setInterval(() => {
                countdown--;
                countdownDiv.querySelector('span').textContent = countdown;

                if (countdown <= 0) {
                    clearInterval(intervalId);
                    window.location.href = '../index.html'; // Переход на главную страницу на 1 уровень выше
                }
            }, 1000); // Каждую секунду
        }

        checkButtons.forEach(button => {
            button.addEventListener('click', () => {
                correctCount++;
                updateProgress();
            });
        });

        crossButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                const block = event.target.closest('.a');
                block.classList.add('shake'); // Добавляем тряску

                setTimeout(() => {
                    block.classList.remove('shake');
                }, 500);
            });
        });