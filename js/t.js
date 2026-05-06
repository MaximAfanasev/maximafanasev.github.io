document.addEventListener('DOMContentLoaded', function () {
	// Создаем палочки для визуализации
	const sticksContainer = document.getElementById('sticksContainer');
	for (let i = 0; i < 10; i++) {
		const stick = document.createElement('div');
		stick.className = 'stick';
		stick.style.height = `${15 + (i % 3)}px`; // Разная высота для визуального интереса
		sticksContainer.appendChild(stick);
	}

	// Начальное значение таймера
	let timeLeft = 10;
	const allSticks = document.querySelectorAll('.stick');
	
	// Переменные для управления таймером
	let timerInterval = null;
	let inactivityTimeout = null;
	let isTimerRunning = false;
	const INACTIVITY_TIME = 2000; // 2 секунды бездействия

	// Функция запуска/перезапуска таймера
	function startTimer() {
		if (timerInterval) {
			clearInterval(timerInterval);
		}
		
		isTimerRunning = true;
		
		timerInterval = setInterval(updateCompactTimer, 1000);
	}

	// Функция остановки таймера
	function pauseTimer() {
		if (timerInterval) {
			clearInterval(timerInterval);
			timerInterval = null;
		}
		
		isTimerRunning = false;
	}

	// Функция сброса таймера бездействия
	function resetInactivityTimer() {
		// Если таймер был приостановлен и пользователь проявил активность
		if (!isTimerRunning) {
			// Останавливаем текущий таймер бездействия
			if (inactivityTimeout) {
				clearTimeout(inactivityTimeout);
			}
			
			// Запускаем новый таймер бездействия
			inactivityTimeout = setTimeout(() => {
				startTimer(); // Через 2 секунды бездействия запускаем таймер
			}, INACTIVITY_TIME);
		} else {
			// Если таймер уже работает, просто перезапускаем таймер бездействия
			if (inactivityTimeout) {
				clearTimeout(inactivityTimeout);
			}
			
			inactivityTimeout = setTimeout(() => {
				// Не останавливаем таймер, если он уже работает
			}, INACTIVITY_TIME);
		}
	}

	// Функция обновления таймера
	function updateCompactTimer() {
		// Обновляем отображение времени

		// Обновляем палочки
		const activeSticks = 10 - timeLeft;
		allSticks.forEach((stick, index) => {
			if (index < activeSticks) {
				stick.classList.add('inactive');
			} else {
				stick.classList.remove('inactive');
			}
		});

		// Уменьшаем время
		timeLeft--;

		// Когда время истекло
		if (timeLeft < 0) {
			clearInterval(timerInterval);

			// Делаем все палочки неактивными
			allSticks.forEach(stick => {
				stick.classList.add('inactive');
			});

			// Перенаправление через 0.5 секунды после завершения таймера
			setTimeout(() => {
				window.location.href = "../index.html"; // Раскомментируйте и измените на нужный URL

				// Для демонстрации - просто скрываем таймер
				document.getElementById('compactTimer').style.opacity = '0';
				setTimeout(() => {
					document.getElementById('compactTimer').style.display = 'none';
				}, 500);
			}, 500);
		}
	}

	// Инициализируем отображение
	updateCompactTimer();

	// Запускаем таймер изначально
	startTimer();
	
	// Слушатели событий для отслеживания активности пользователя
	const userActivityEvents = [
		'mousedown', 'mousemove', 'keydown', 'scroll',
		'touchstart', 'touchmove', 'click'
	];
	
	userActivityEvents.forEach(eventName => {
		document.addEventListener(eventName, () => {
			// При любой активности пользователя останавливаем таймер
			pauseTimer();
			
			// Сбрасываем таймер бездействия
			resetInactivityTimer();
		}, { passive: true });
	});

	// Добавляем возможность закрыть таймер (опционально)
	const timerHeader = document.querySelector('.timer-header');
	let closeTimer = document.createElement('span');
	closeTimer.style.cursor = 'pointer';
	closeTimer.style.fontSize = '0.8rem';
	closeTimer.addEventListener('click', function () {
		clearInterval(timerInterval);
		if (inactivityTimeout) {
			clearTimeout(inactivityTimeout);
		}
		document.getElementById('compactTimer').style.opacity = '0';
		setTimeout(() => {
			document.getElementById('compactTimer').style.display = 'none';
		}, 300);
	});

	document.querySelector('.timer-header').appendChild(closeTimer);
});