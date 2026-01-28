document.addEventListener('DOMContentLoaded', function () {
	// Получаем элементы
	const inputBoxes = document.querySelectorAll('.input-box');
	const html = document.documentElement;

	// Получаем URL из глобальной конфигурации (если она существует)
	const successUrl = window.gameConfig ? window.gameConfig.successUrl : null;

	// Функция для очистки и сброса инпутов
	function resetInputs() {
		inputBoxes.forEach(input => {
			input.value = '';
			input.classList.remove('correct', 'incorrect');
			input.disabled = false;
		});

		// Фокус на первый инпут
		inputBoxes[0].focus();
	}

	// Функция для проверки ввода (без учета регистра)
	function checkInput() {
		let allCorrect = true;

		inputBoxes.forEach((input, index) => {
			const value = input.value.trim();

			// Очищаем предыдущие классы
			input.classList.remove('correct', 'incorrect');

			if (value === '') {
				allCorrect = false;
			} else if (value.toLowerCase() === targetCharacters[index].toLowerCase()) {
				// Сравниваем в нижнем регистре для регистронезависимой проверки
				input.classList.add('correct');
			} else {
				input.classList.add('incorrect');
				allCorrect = false;
			}
		});

		// Если все правильно
		if (allCorrect) {
			// Добавляем визуальную обратную связь (пульсацию)
			inputBoxes.forEach(input => {
				input.classList.add('success-pulse');
			});

			// Ждем 1 секунду для анимации
			setTimeout(() => {
				if (successUrl) {
					// Если указан URL в конфиге - переходим на новую страницу
					console.log('Переход на страницу:', successUrl);
					window.location.href = successUrl;
				} else {
					// Если конфига нет - стандартное поведение
					resetInputs();
					inputBoxes.forEach(input => {
						input.classList.remove('success-pulse');
					});
					
					if (resultMessage) {
						resultMessage.textContent = '';
						resultMessage.className = 'result-message';
					}
					
					console.log('Конфигурация не найдена. Стандартное поведение.');
				}
			}, 300);
		} else {
			if (resultMessage) {
				resultMessage.textContent = '';
				resultMessage.className = 'result-message';
			}
		}
	}

	// Обработчики событий для инпутов
	inputBoxes.forEach((input, index) => {
		// При вводе символа - автоматически преобразуем в нижний регистр
		input.addEventListener('input', function (e) {
			// Преобразуем введенное значение в нижний регистр
			if (e.target.value !== e.target.value.toLowerCase()) {
				e.target.value = e.target.value.toLowerCase();
			}

			// Автоматически переходим к следующему инпуту
			if (e.target.value !== '') {
				if (index < inputBoxes.length - 1) {
					inputBoxes[index + 1].focus();
				}
			}

			checkInput();
		});

		// При вставке текста (paste) - также преобразуем в нижний регистр
		input.addEventListener('paste', function (e) {
			e.preventDefault();
			const pastedText = (e.clipboardData || window.clipboardData).getData('text');
			const lowerText = pastedText.toLowerCase();
			
			// Вставляем только первый символ, если это однобуквенное поле
			if (input.maxLength === 1) {
				input.value = lowerText.charAt(0);
			} else {
				input.value = lowerText;
			}
			
			checkInput();
		});

		// При нажатии клавиш (для удобства навигации)
		input.addEventListener('keydown', function (e) {
			// Преобразуем вводимые буквы в нижний регистр
			if (e.key.length === 1 && e.key.match(/[a-zA-Z]/) && e.key !== e.key.toLowerCase()) {
				e.preventDefault();
				input.value = e.key.toLowerCase();
				checkInput();
				
				// Автоматически переходим к следующему инпуту
				if (index < inputBoxes.length - 1) {
					setTimeout(() => inputBoxes[index + 1].focus(), 10);
				}
				return;
			}

			if (e.key === 'Backspace' && e.target.value === '' && index > 0) {
				inputBoxes[index - 1].focus();
			}

			if (e.key === 'ArrowLeft' && index > 0) {
				inputBoxes[index - 1].focus();
			}

			if (e.key === 'ArrowRight' && index < inputBoxes.length - 1) {
				inputBoxes[index + 1].focus();
			}
		});
	});

	// Автофокус на первый инпут при загрузке
	inputBoxes[0].focus();
	
	// Логирование для отладки
	if (successUrl) {
		console.log('Конфигурация загружена. При успехе переход на:', successUrl);
	} else {
		console.log('Конфигурация не найдена. Будет использовано стандартное поведение.');
	}
});