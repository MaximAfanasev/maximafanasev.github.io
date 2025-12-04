document.addEventListener('DOMContentLoaded', function() {
    // Целевая последовательность (исправлены опечатки)
    const targetSequence = ['t', 'k', 'f', 'k', 'd', 'g', 'o', 'd', 'y', 'ㅅ', 'ㅏ', 'ㄹ', 'ㅏ', 'ㅇ', 'ㅎ', 'ㅐ', 'ㅇ', 'ㅛ'];
    
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
        for (let i = startIndex; i <= endIndex; i++) {
            if (inputs[i].value.toLowerCase() !== targetSequence[i]) {
                return false;
            }
        }
        return true;
    }
    
    // Функция для обработки ввода
    function handleInput(event) {
        const input = event.target;
        const index = parseInt(input.dataset.index);
        
        // Определяем к какой строке принадлежит инпут
        const rowIndex = index < 9 ? 0 : 1;
        const startIndex = rowIndex * 9;
        const endIndex = startIndex + 8;
        
        // Проверяем введенную букву
        if (input.value.toLowerCase() === targetSequence[index]) {
            input.classList.add('correct');
            input.classList.remove('wrong');
            
            // Переход к следующему инпуту, если это не последний в строке
            if (index < endIndex) {
                inputs[index + 1].focus();
            }
        } else if (input.value !== '') {
            input.classList.add('wrong');
            input.classList.remove('correct');
        } else {
            input.classList.remove('correct', 'wrong');
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
            const isCorrect = checkSequence(startIndex, endIndex);
            
            // Подсветка всех полей строки
            for (let i = startIndex; i <= endIndex; i++) {
                if (isCorrect) {
                    inputs[i].classList.add('correct');
                    inputs[i].classList.remove('wrong');
                } else {
                    inputs[i].classList.add('wrong');
                    inputs[i].classList.remove('correct');
                }
            }
            
            if (isCorrect) {
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
        
        // Определяем к какой строке принадлежит инпут
        const rowIndex = index < 9 ? 0 : 1;
        const startIndex = rowIndex * 9;
        const endIndex = startIndex + 8;
        
        // Обработка Backspace
        if (event.key === 'Backspace' && input.value === '' && index > startIndex) {
            inputs[index - 1].focus();
            event.preventDefault();
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
            const targetIndex = Math.min(index + 9, inputs.length - 1);
            inputs[targetIndex].focus();
            event.preventDefault();
        }
        
        if (event.key === 'ArrowUp' && rowIndex === 1) {
            const targetIndex = Math.max(index - 9, 0);
            inputs[targetIndex].focus();
            event.preventDefault();
        }
    }
    
    // Назначаем обработчики событий для инпутов
    inputs.forEach(input => {
        input.addEventListener('input', handleInput);
        input.addEventListener('keydown', handleKeyDown);
    });
    
    // Фокус на первый инпут при загрузке
    if (inputs.length > 0) {
        inputs[0].focus();
    }
});