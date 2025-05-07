const Start = document.querySelector('.start');

const listItems = document.querySelectorAll('#imageList li');
let delay = 0;

Start.addEventListener('click', () => {
	document.querySelector('.pin').style.display = 'none';
	document.querySelector('.content').style.display = 'block';

	// Сначала показываем контейнер, затем каждые 500 мс показываем календарь
	setTimeout(() => {

		// Добавляем таймаут для появления элемента list
		setTimeout(() => {

			listItems.forEach((item) => {
				setTimeout(() => {
					item.style.opacity = 1; // Устанавливаем легкость видимости элемента

					// Прокручиваем к текущему элементу
					item.scrollIntoView({
						behavior: 'smooth',
						block: 'center'
					});
				}, delay);

				delay += 500; // Увеличиваем задержку на 500 мс для следующего элемента
			});

			// После показа всех элементов прокручиваем в верхнюю часть страницы
			setTimeout(() => {
				window.scrollTo({
					top: 0,
					behavior: 'smooth'
				});
			}, delay); // Устанавливаем время задержки после всех элементов
		}, delay + 1100); // Время появления list будет после всех календари + 500 мс

	}, 100);

	const days = document.querySelectorAll('.day.n');
	let delay = 0;

	days.forEach((day) => {
		setTimeout(() => {
			day.style.opacity = 1; // Устанавливаем opacity в 1 для появления
		}, delay);

		delay += 70; // Увеличиваем задержку на 300 мс для следующего дня
	});
	document.getElementById('result').classList.remove('hidden');
})

// Функция для исчезновения цифр в заголовке
function fadeOutNumbers() {
	const header = document.getElementById('pinHeader');
	const group = document.querySelector('.input-group');
	const numbers = '1234';
	let delay = 0;

	// Обратный порядок для исчезновения
	numbers.split('').reverse().forEach((number) => {
		setTimeout(() => {
			header.style.display = 'none';
			group.style.display = 'none';

		}, delay);
		delay += 300; // Задержка между исчезновением цифр
	});

	// После последнего числа можно очистить заголовок
	setTimeout(() => {
		header.textContent = ''; // Полностью очищаем заголовок
	}, delay);
}
