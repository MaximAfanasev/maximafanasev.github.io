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

import Grid2Background from 'https://cdn.jsdelivr.net/npm/threejs-components@0.0.17/build/backgrounds/grid2.cdn.min.js'

const bg = Grid2Background(document.getElementById('webgl-canvas'))


let canChangeColor = true;
document.body.addEventListener('click', () => {
	if (canChangeColor) {
		bg.grid.setColors([0xffffff * Math.random(), 0xffffff * Math.random(), 0xffffff * Math.random()]);
		bg.grid.light1.color.set(0xffffff * Math.random());
		bg.grid.light1.intensity = 500 + Math.random() * 1000;
		bg.grid.light2.color.set(0xffffff * Math.random());
		bg.grid.light2.intensity = 250 + Math.random() * 250;
		canChangeColor = false;

		setTimeout(() => {
			canChangeColor = true;
		}, 1000); // Изменение цвета не чаще раза в секунду
	}
});

function updateDate() {
	const today = new Date();
	const day = String(today.getDate()).padStart(2, '0');
	const month = String(today.getMonth() + 1).padStart(2, '0'); // Месяцы начинаются с 0
	const year = today.getFullYear();

	const formattedDate = `${day}.${month}.${year}`;

	// Получаем все элементы с классом "dynamic-date" и устанавливаем в них дату
	const dateElements = document.querySelectorAll('.dynamic-date');
	dateElements.forEach(element => {
		element.textContent = formattedDate;
	});
}

// Вызываем функцию обновления даты
updateDate();
