document.addEventListener('DOMContentLoaded', function () {
	const buttonsContainer = document.getElementById('buttonsContainer');
	const inputContainer = document.getElementById('inputContainer');

	let currentSymbols = [...uniqueSymbols]; // Для кнопок используем только уникальные
	let inputElements = [];
	let currentInputIndex = 0;

	// Инициализация кнопок
	function initButtons() {
		buttonsContainer.innerHTML = '';
		currentSymbols.forEach((symbol, index) => {
			const button = document.createElement('button');
			button.className = 'symbol-btn';
			button.textContent = symbol;
			button.dataset.symbol = symbol;
			button.dataset.index = index;

			button.addEventListener('click', () => handleButtonClick(symbol));

			buttonsContainer.appendChild(button);
		});
	}

	// Инициализация полей ввода
	function initInputs() {
		inputContainer.innerHTML = '';
		inputElements = [];
		currentInputIndex = 0;

		// 6 полей для полного слова
		for (let i = 0; i < targetSymbols.length; i++) {
			const input = document.createElement('input');
			input.type = 'text';
			input.maxLength = 1;
			input.className = 'char-input';
			input.dataset.index = i;
			input.readOnly = true;

			input.addEventListener('click', () => {
				// При клике на поле ввода, фокусируем его
				input.focus();
			});

			input.addEventListener('keydown', handleKeyDown);

			inputContainer.appendChild(input);
			inputElements.push(input);
		}

		// Выделяем первое поле
		inputElements[0].classList.add('selected');
	}

	// Обработчик клика по кнопке с символом
	function handleButtonClick(symbol) {
		if (currentInputIndex < inputElements.length) {
			const currentInput = inputElements[currentInputIndex];

			// Убираем выделение с текущего поля
			currentInput.classList.remove('selected');

			// Вводим символ
			currentInput.value = symbol;

			// Проверяем правильность (сравниваем с targetSymbols)
			if (symbol === targetSymbols[currentInputIndex]) {
				currentInput.classList.add('correct');
				currentInput.classList.remove('incorrect');
			} else {
				currentInput.classList.add('incorrect');
				currentInput.classList.remove('correct');
			}

			// Переходим к следующему полю
			currentInputIndex++;

			// Выделяем следующее поле
			if (currentInputIndex < inputElements.length) {
				inputElements[currentInputIndex].classList.add('selected');
			}

			// Проверяем, все ли поля заполнены
			if (currentInputIndex === inputElements.length) {
				setTimeout(checkAllInputs, 100);
			}
		}
	}

	// Обработчик нажатия клавиш
	function handleKeyDown(e) {
		const input = e.target;
		const index = parseInt(input.dataset.index);

		if (e.key === 'Backspace' || e.key === 'Delete') {
			e.preventDefault();

			// Очищаем текущее поле
			input.value = '';
			input.classList.remove('correct', 'incorrect', 'selected');

			// Если поле не пустое и не первое, возвращаемся к предыдущему
			if (index > 0 && currentInputIndex === index + 1) {
				currentInputIndex = index;
			}

			// Выделяем текущее поле
			inputElements[currentInputIndex].classList.add('selected');
		}

		// Блокируем ввод с клавиатуры (только кнопки)
		if (e.key.length === 1) {
			e.preventDefault();
		}
	}

	// Проверка всех полей ввода
	function checkAllInputs() {
		let allCorrect = true;

		// Проверяем все 6 полей
		for (let i = 0; i < inputElements.length; i++) {
			if (inputElements[i].value !== targetSymbols[i]) {
				allCorrect = false;
				break;
			}
		}

		if (allCorrect) {
			// Анимация кнопок
			const buttons = document.querySelectorAll('.symbol-btn');
			buttons.forEach(btn => {
				btn.classList.add('correct');
			});

			// Автосброс и перемешивание через 2 секунды
			setTimeout(() => {
				resetGame();
				shuffleButtons(); // Добавлено перемешивание после правильного ввода
			}, 100);
		}
	}

	// Перемешивание кнопок
	function shuffleButtons() {
		// Перемешиваем массив уникальных символов
		for (let i = currentSymbols.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
					[currentSymbols[i], currentSymbols[j]] = [currentSymbols[j], currentSymbols[i]];
		}

		initButtons();
	}

	// Сброс игры
	function resetGame() {
		initInputs();

		// Сбрасываем стили кнопок
		const buttons = document.querySelectorAll('.symbol-btn');
		buttons.forEach(btn => {
			btn.classList.remove('correct', 'incorrect');
		});
	}

	// Инициализация игры с автоматическим перемешиванием
	shuffleButtons(); // Добавлено перемешивание при загрузке
	initInputs();
});