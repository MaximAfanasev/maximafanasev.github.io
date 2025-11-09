        const canvas = document.getElementById('gameCanvas');
        const ctx = canvas.getContext('2d');

        const box = 15; // размер клетки
        let snake;
        let food;
        let direction; // текущее направление
        let game;

        function resetGame() {
            snake = [{ x: 4 * box, y: 4 * box }];
            food = {
                x: Math.floor(Math.random() * (canvas.width / box)) * box,
                y: Math.floor(Math.random() * (canvas.height / box)) * box
            };
            direction = 'RIGHT'; // начальное направление
            clearInterval(game); // Останавливаем предыдущую игру
            game = setInterval(draw, 100); // Запускаем игру заново
        }

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Рисуем змею
            for (let i = 0; i < snake.length; i++) {
                ctx.fillStyle = (i === 0) ? 'green' : 'lightgreen';
                ctx.fillRect(snake[i].x, snake[i].y, box, box);
                ctx.strokeStyle = 'darkgreen';
                ctx.strokeRect(snake[i].x, snake[i].y, box, box);
            }

            // Рисуем еду
            ctx.fillStyle = 'red';
            ctx.fillRect(food.x, food.y, box, box);

            // Логика движения змейки
            let snakeX = snake[0].x;
            let snakeY = snake[0].y;

            if (direction === 'LEFT') snakeX -= box;
            if (direction === 'UP') snakeY -= box;
            if (direction === 'RIGHT') snakeX += box;
            if (direction === 'DOWN') snakeY += box;

            // Проверка на сбитие с едой
            if (snakeX === food.x && snakeY === food.y) {
                // Создаем новую еду в случайном месте
                food = {
                    x: Math.floor(Math.random() * (canvas.width / box)) * box,
                    y: Math.floor(Math.random() * (canvas.height / box)) * box
                };
            } else {
                snake.pop(); // Удаляем последний сегмент змейки
            }

            // Обработка выхода за границы
            snakeX = (snakeX + canvas.width) % canvas.width;
            snakeY = (snakeY + canvas.height) % canvas.height;

            const newHead = { x: snakeX, y: snakeY };

            // Проверка на столкновение со своим телом
            if (collide(newHead, snake)) {
                resetGame(); // Перезагружаем игру
                return; // Выход из функции, чтобы не добавлять новую голову
            }

            snake.unshift(newHead); // Добавляем новую голову
            autoDirection(newHead); // Вызываем функцию для изменения направления
        }

        function collide(head, array) {
            for (let i = 1; i < array.length; i++) { // Начинаем с 1, чтобы не проверять голову
                if (array[i].x === head.x && array[i].y === head.y) {
                    return true;
                }
            }
            return false;
        }

        function autoDirection(snakeHead) {
            // Логика самоуправления: поворачиваем к еде
            if (snakeHead.x < food.x) direction = 'RIGHT';
            else if (snakeHead.x > food.x) direction = 'LEFT';
            else if (snakeHead.y < food.y) direction = 'DOWN';
            else if (snakeHead.y > food.y) direction = 'UP';
        }

        // Инициализация первой игры
        resetGame();