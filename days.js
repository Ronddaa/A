function formatDays(count) {
    if (count === 1) {
        return "день";
    } else if (count >= 2 && count <= 4) {
        return "дні";
    } else {
        return "днів";
    }
}

function decreaseDays(daysLeft) {
    // Получаем доступ к элементу p
    let daysElement = document.getElementById('days');
    // Устанавливаем начальное количество дней
    daysElement.innerText = `${daysLeft} ${formatDays(daysLeft)}`;

    // Уменьшаем количество дней на 1 каждые 24 часа
    let interval = setInterval(function() {
        daysLeft--;
        daysElement.innerText = `${daysLeft} ${formatDays(daysLeft)}`;
        
        // Если достигнуто значение 0, останавливаем интервал
        if (daysLeft === 0) {
            clearInterval(interval);
        }
    }, 24 * 60 * 60 * 1000); // Вызываем функцию каждые 24 часа (в миллисекундах)
}

// Вызываем функцию decreaseDays() для первого запуска с начальным значением 7 дней
decreaseDays(7);