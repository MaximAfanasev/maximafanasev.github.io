function hideCards(cards) {
      cards.forEach(card => {
        card.classList.add('hide');
        card.classList.remove('show'); 
      });
    }

    // Функция для показа карточек
    function showCards(cards) {
      cards.forEach(card => {
        card.classList.remove('hide');
        card.classList.add('show'); // Добавляем класс показа
      });
    }

    // Функция для анимации карточек
    function startAnimation() {
      const cards1 = document.querySelectorAll('.card:nth-child(1), .card:nth-child(4)');
      const cards2 = document.querySelectorAll('.card:nth-child(2), .card:nth-child(3)');

      // Показываем все карточки
      showCards(document.querySelectorAll('.card'));

      // Скрываем карточки "1" через 3 секунды
      setTimeout(() => {
        hideCards(cards1);
      }, 2000);

      // Затем скрываем карточки "2" через 6 секунд
      setTimeout(() => {
        hideCards(cards2);
      }, 4000);
    }

    // Запускаем анимацию при загрузке страницы
    startAnimation();

    // Устанавливаем интервал для повторения анимации
    setInterval(() => {
      startAnimation();
    }, 7000); // Повторяем каждые 7 секунд