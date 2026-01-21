// index.js - добавьте этот код в ваш существующий index.js
document.addEventListener('DOMContentLoaded', function () {
	// Проверяем, какие слова были пройдены
	const menuItems = document.querySelectorAll('.menu-item a');
	
	menuItems.forEach(item => {
		// Получаем путь к файлу из ссылки (например: words/yes.html)
		const href = item.getAttribute('href');
		if (href) {
			// Извлекаем имя файла без расширения
			const fileName = href.split('/').pop().split('.')[0];
			
			// Проверяем в localStorage, пройдено ли это слово
			if (localStorage.getItem(`completed_${fileName}`) === 'true') {
				// Добавляем класс done к родительскому элементу .menu-item
				item.closest('.menu-item').classList.add('done');
			}
		}
	});
});

function showConfirmation() {
			document.getElementById('confirmationModal').style.display = 'flex';
		}
		
		// Функция для скрытия модального окна подтверждения
		function hideConfirmation() {
			document.getElementById('confirmationModal').style.display = 'none';
		}
		
		// Функция для очистки прогресса
		function clearProgress() {
			// Удаляем все записи, связанные с прогрессом
			const keysToRemove = [];
			for (let i = 0; i < localStorage.length; i++) {
				const key = localStorage.key(i);
				if (key.startsWith('completed_')) {
					keysToRemove.push(key);
				}
			}
			
			keysToRemove.forEach(key => {
				localStorage.removeItem(key);
			});
			
			// Скрываем модальное окно
			hideConfirmation();
			
			// Убираем класс done со всех элементов меню
			document.querySelectorAll('.menu-item.done').forEach(item => {
				item.classList.remove('done');
			});
			
			// Показываем уведомление об успешной очистке
			alert('Прогресс успешно очищен! Все слова сброшены.');
		}
		
		// Закрытие модального окна при клике вне его
		document.getElementById('confirmationModal').addEventListener('click', function(e) {
			if (e.target === this) {
				hideConfirmation();
			}
		});
		
		// Закрытие модального окна при нажатии Escape
		document.addEventListener('keydown', function(e) {
			if (e.key === 'Escape') {
				hideConfirmation();
			}
		});