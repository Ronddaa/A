function formatDays(count) {
    if (count === 1) {
        return "день";
    } else if (count >= 2 && count <= 4) {
        return "дня";
    } else {
        return "дней";
    }
}

function decreaseDays() {
    // Получаем доступ к элементу p
    let daysElement = document.getElementById('days');
    // Получаем текущее значение числа дней
    let currentDays = parseInt(daysElement.innerText);

    // Уменьшаем значение на 1 и обновляем текст в элементе p
    currentDays--;
    daysElement.innerText = `${currentDays} ${formatDays(currentDays)}`;

    // Если остался хотя бы один день, планируем вызов этой же функции на следующий день
    if (currentDays > 0) {
        setTimeout(decreaseDays, 24 * 60 * 60 * 1000); // Вызываем функцию через 24 часа (в миллисекундах)
    }
}

// Вызываем функцию decreaseDays() для первого запуска
decreaseDays();