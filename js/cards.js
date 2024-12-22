document.addEventListener('DOMContentLoaded', () => {
    const totalCards = document.querySelectorAll('.a').length; // Общее количество карточек
    const cardCountDisplay = document.getElementById('cardCount'); // Элемент для отображения текущего количества
    const totalCardsDisplay = document.getElementById('totalCards'); // Элемент для отображения общего количества

    let cardCount = 0; // Начальное количество пройденных карточек

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

    // Инициализируем отображение
    updateCardCount();
});