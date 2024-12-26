
		const calendarElement = document.getElementById('calendar');

		// Создаем массив для хранения состояния выбранных дней.
		let selectedDays = JSON.parse(localStorage.getItem('selectedDays')) || [];

		// Функция для обновления ячеек на основании состояния из localStorage
		function loadCalendarState() {
			selectedDays.forEach(day => {
				const dayElement = Array.from(calendarElement.children).find(d => d.textContent === day);
				if (dayElement) {
					dayElement.classList.add('selected');
				}
			});
		}

		// Добавляем обработчик кликов на каждую ячейку календаря
		Array.from(calendarElement.children).forEach(dayElement => {
			if (!dayElement.classList.contains('empty')) {
				dayElement.addEventListener('click', () => {
					dayElement.classList.toggle('selected');
					updateLocalStorage();
				});
			}
		});

		// Обновляем localStorage на основании выбранных ячеек
		function updateLocalStorage() {
			selectedDays = Array.from(calendarElement.querySelectorAll('.day.selected')).map(day => day.textContent);
			localStorage.setItem('selectedDays', JSON.stringify(selectedDays));
		}

		// Загружаем состояние при загрузке страницы
		loadCalendarState();