const panels = document.querySelectorAll('.panel');
    const content = document.getElementById('mainContent');

    function openBlinds() {
      // Добавляем задержку перед началом анимации
      setTimeout(() => {
        panels.forEach((panel, index) => {
          setTimeout(() => {
            panel.classList.add('hide'); // Поворачиваем панели с задержкой
          }, index * 300);
        });

        // Показываем контент после того, как все панели открыты
        setTimeout(() => {          document.getElementById('blinds').style.display = 'none'; // Скрываем жалюзи
          content.style.display = 'block'; // Показываем контент
        }, panels.length * 500); // Время, равное времени, необходимому для поворота всех панелей
      }, 1000); // Задержка 2 секунды
    }

    window.onload = openBlinds;

    const textElement = document.getElementById('text');
    const textToAnimate = "JAVASCRIPT";
    let index = 0;

    function animateText() {
      if (index < textToAnimate.length) {
        textElement.innerText += textToAnimate[index];
        index++;
        textElement.style.opacity = 1;
        setTimeout(animateText, 300);
      }
    }

    setTimeout(animateText, 3300);