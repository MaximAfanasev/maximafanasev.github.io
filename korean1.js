
	document.addEventListener('DOMContentLoaded', function() {
		// Целевая последовательность
		const targetSequence = ['d', 'k', 's', 's', 'u', 'd', 'ㅇ', 'ㅏ', 'ㄴ', 'ㄴ', 'ㅕ', 'ㅇ'];
		
		// Получаем все инпуты и счетчики
		const inputs = document.querySelectorAll('.input-field');
		const counters = document.querySelectorAll('.success-counter');
		
		// Массив для хранения счетчиков успешных попыток для каждой строки
		const successfulAttempts = [0, 0];
		
		// Функция для сброса инпутов определенной строки
		function resetInputs(startIndex, endIndex) {
			for (let i = startIndex; i <= endIndex; i++) {
				inputs[i].value = '';
				inputs[i].classList.remove('correct', 'wrong');
			}
			// Фокус на первый инпут строки
			inputs[startIndex].focus();
		}
		
		// Функция для проверки последовательности строки
		function checkSequence(startIndex, endIndex) {
			let allCorrect = true;
			
			for (let i = startIndex; i <= endIndex; i++) {
				if (inputs[i].value.toLowerCase() !== targetSequence[i]) {
					allCorrect = false;
					break;
				}
			}
			
			return allCorrect;
		}
		
		// Функция для обработки ввода
		function handleInput(event) {
			const input = event.target;
			const index = parseInt(input.dataset.index);
			
			// Определяем к какой строке принадлежит инпут
			const rowIndex = index < 6 ? 0 : 1;
			const startIndex = rowIndex * 6;
			const endIndex = startIndex + 5;
			
			// Проверяем введенную букву
			if (input.value.toLowerCase() === targetSequence[index]) {
				// Переход к следующему инпуту, если это не последний в строке
				if (index < endIndex) {
					inputs[index + 1].focus();
				}
			}
			
			// Проверяем всю строку, если все инпуты строки заполнены
			let allFilled = true;
			for (let i = startIndex; i <= endIndex; i++) {
				if (inputs[i].value === '') {
					allFilled = false;
					break;
				}
			}
			
			if (allFilled) {
				if (checkSequence(startIndex, endIndex)) {
					// Увеличиваем счетчик для соответствующей строки
					successfulAttempts[rowIndex]++;
					counters[rowIndex].textContent = successfulAttempts[rowIndex];
					
					// Сбрасываем инпуты этой строки
					setTimeout(() => {
						resetInputs(startIndex, endIndex);
					}, 100);
				}
			}
		}
		
		// Функция для обработки нажатий клавиш
		function handleKeyDown(event) {
			const input = event.target;
			const index = parseInt(input.dataset.index);
			
			// Определяем границы строки
			const rowIndex = index < 6 ? 0 : 1;
			const startIndex = rowIndex * 6;
			const endIndex = startIndex + 5;
			
			// Обработка Backspace
			if (event.key === 'Backspace' && input.value === '' && index > startIndex) {
				inputs[index - 1].focus();
			}
			
			// Обработка стрелок
			if (event.key === 'ArrowLeft' && index > startIndex) {
				inputs[index - 1].focus();
				event.preventDefault();
			}
			
			if (event.key === 'ArrowRight' && index < endIndex) {
				inputs[index + 1].focus();
				event.preventDefault();
			}
			
			// Переход между строками с помощью стрелок вверх/вниз
			if (event.key === 'ArrowDown' && rowIndex === 0) {
				inputs[index + 6].focus();
				event.preventDefault();
			}
			
			if (event.key === 'ArrowUp' && rowIndex === 1) {
				inputs[index - 6].focus();
				event.preventDefault();
			}
		}
		
		// Назначаем обработчики событий для инпутов
		inputs.forEach(input => {
			input.addEventListener('input', handleInput);
			input.addEventListener('keydown', handleKeyDown);
		});
		
		// Фокус на первый инпут при загрузке
		inputs[0].focus();
	});