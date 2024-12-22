document.addEventListener('DOMContentLoaded', () => {
    const totalCards = document.querySelectorAll('.a').length; // Общее количество карточек
    const cardCountDisplay = document.getElementById('cardCount'); // Элемент для отображения текущего количества
    const totalCardsDisplay = document.getElementById('totalCards'); // Элемент для отображения общего количества
    const repeatList = document.getElementById('repeatList'); // Элемент для отображения номеров карточек
    const blurToggle = document.getElementById('blurToggle'); // Чекбокс для размытия
    
    let cardCount = 1; // Начальное количество пройденных карточек

    // Обновляем отображение счётчика
    function updateCardCount() {
        cardCountDisplay.textContent = cardCount;
        totalCardsDisplay.textContent = totalCards;
    }

    // Находим все кнопки и добавляем обработчик событий
    const buttons = document.querySelectorAll('.btn.check');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (cardCount < totalCards) {
                cardCount++; // Увеличиваем количество пройденных карточек
                updateCardCount(); // Обновляем отображение
            }
        });
    });

    // Находим все чекбоксы и добавляем обработчик событий
    const checkboxes = document.querySelectorAll('.card-checkbox');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            const checkedCards = Array.from(checkboxes)
                .filter(cb => cb.checked)
                .map(cb => cb.getAttribute('data-card-number'));
            repeatList.textContent = 'Повторить: ' + checkedCards.join(', ');
        });
    });

    // Обработчик события для чекбокса размытия
    blurToggle.addEventListener('change', () => {
        const sElements = document.querySelectorAll('.s'); // Находим все элементы с классом .s
        sElements.forEach(element => {
            if (blurToggle.checked) {
                element.style.filter = 'blur(6px)'; // Устанавливаем размытие
            } else {
                element.style.filter = 'blur(0px)'; // Убираем размытие
            }
        });
    });

    // Инициализируем отображение
    updateCardCount();
});