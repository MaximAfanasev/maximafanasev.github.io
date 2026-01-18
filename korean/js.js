document.addEventListener('DOMContentLoaded', function () {
	// Целевые символы для слова "안녕"

	// Получаем элементы
	const inputBoxes = document.querySelectorAll('.input-box');
	const html = document.documentElement;

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

	// Функция для проверки ввода
	function checkInput() {
		let allCorrect = true;

		inputBoxes.forEach((input, index) => {
			const value = input.value.trim();

			// Очищаем предыдущие классы
			input.classList.remove('correct', 'incorrect');

			if (value === '') {
				allCorrect = false;
			} else if (value === targetCharacters[index]) {
				input.classList.add('correct');
			} else {
				input.classList.add('incorrect');
				allCorrect = false;
			}
		});

		// Если все правильно
		if (allCorrect) {
			// Ждем 1 секунду, затем очищаем инпуты
			setTimeout(() => {
				resetInputs();
				resultMessage.textContent = '';
				resultMessage.className = 'result-message';
			}, 100);
		} else {
			resultMessage.textContent = '';
			resultMessage.className = 'result-message';
		}
	}

	// Обработчики событий для инпутов
	inputBoxes.forEach((input, index) => {
		// При вводе символа
		input.addEventListener('input', function (e) {
			// Автоматически переходим к следующему инпуту
			if (e.target.value !== '') {
				if (index < inputBoxes.length - 1) {
					inputBoxes[index + 1].focus();
				}
			}

			checkInput();
		});

		// При нажатии клавиш (для удобства навигации)
		input.addEventListener('keydown', function (e) {
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
});
