let countdown = 10; // Начальное значение таймера
let timerSpeed = 1000; // Интервал таймера в миллисекундах (по умолчанию 1 секунда)
let timer; // Переменная для таймера

// Функция для обновления и отображения оставшегося времени
function updateTimer() {
    const timerOutput = document.getElementById("timer-output");
    timer = setInterval(function () {
        if (countdown > 0) {
            countdown--;
            timerOutput.textContent = countdown;
        } else {
            clearInterval(timer);
            alert("Таймер завершен! Запуск заново...");
            resetTimer(); // Сброс таймера после завершения
        }
    }, timerSpeed);
}

// Функция для сброса таймера
function resetTimer() {
    countdown = 10; // Сброс значения на 10 секунд
    timerSpeed = 1000; // Сброс скорости на нормальную (1 секунда)
    updateTimer(); // Перезапуск таймера
}

// Кнопка для запуска таймера
document.getElementById("start-timer").addEventListener("click", function () {
    clearInterval(timer); // Остановка текущего таймера (если был)
    updateTimer(); // Запуск нового таймера
});

// Кнопка для остановки таймера
document.getElementById("stop-timer").addEventListener("click", function () {
    clearInterval(timer); // Остановка таймера
});

// Кнопка для ускорения таймера
document.getElementById("speed-up").addEventListener("click", function () {
    if (timerSpeed > 100) { // Минимальная скорость 0.1 секунды (100 мс)
        timerSpeed /= 2; // Ускоряем таймер в 2 раза
        clearInterval(timer); // Остановка текущего таймера
        updateTimer(); // Перезапуск с новой скоростью
    }
});

// Кнопка для замедления таймера
document.getElementById("slow-down").addEventListener("click", function () {
    timerSpeed *= 2; // Замедляем таймер в 2 раза
    clearInterval(timer); // Остановка текущего таймера
    updateTimer(); // Перезапуск с новой скоростью
});

// 1. События мыши: Срабатывает при клике на элементе.
document.getElementById("mouse-event").addEventListener("click", function () {
    alert("Вы кликнули на блок!");
});

// 2. События клавиатуры: Обрабатывает нажатие клавиш на клавиатуре.
document.getElementById("keyboard-input").addEventListener("keydown", function (event) {
    document.getElementById("keyboard-output").textContent = `Вы нажали: ${event.key}`;
});

// 3. Drag & Drop: Перетаскивание элемента и сброс его в область.
const dragSource = document.getElementById("drag-source");
const dropTarget = document.getElementById("drop-target");
let canDrop = true; // Флаг, указывающий, можно ли сбросить элемент

dragSource.addEventListener("dragstart", function () {
    dragSource.style.opacity = "0.5";
});

dragSource.addEventListener("dragend", function () {
    dragSource.style.opacity = "1";
});

dropTarget.addEventListener("dragover", function (event) {
    event.preventDefault(); // Необходимо для срабатывания drop
});

dropTarget.addEventListener("drop", function () {
    if (canDrop) {
        dropTarget.textContent = "Элемент сброшен!";
        dropTarget.classList.add("dropped"); // Изменяем цвет после сброса
        canDrop = false; // Запрещаем сбрасывать элемент на 10 секунд

        // Через 10 секунд снова разрешаем сброс
        setTimeout(function () {
            dropTarget.textContent = "Сбросьте сюда";
            dropTarget.classList.remove("dropped"); // Возвращаем исходный стиль
            canDrop = true;
        }, 10000); // 10 секунд
    } else {
        alert("Подождите 10 секунд перед повторным сбросом.");
    }
});

// 4. События указателя: Отслеживает движение указателя мыши или других указательных устройств.
const pointerEventBox = document.getElementById("pointer-event");

pointerEventBox.addEventListener("pointermove", function () {
    this.style.backgroundColor = "#b3e5fc";  // Нежно-голубой цвет при наведении
});

pointerEventBox.addEventListener("pointerleave", function () {
    this.style.backgroundColor = "";  // Возвращаем исходный цвет при убирании указателя
});

// 5. События полосы прокрутки: Реагирует на прокрутку содержимого.
let canTriggerScrollAlert = true; // Флаг, позволяющий повторить оповещение через 10 секунд

document.getElementById("scroll-event").addEventListener("scroll", function () {
    if (canTriggerScrollAlert) {
        alert("Вы прокрутили содержимое!");
        canTriggerScrollAlert = false; // Отключаем возможность показывать алерт

        // Через 10 секунд снова включаем возможность показывать алерт
        setTimeout(function () {
            canTriggerScrollAlert = true;
        }, 10000); // 10 секунд
    }
});

// 6. События сенсорных экранов: Срабатывает при касании сенсорного экрана.
document.getElementById("touch-event").addEventListener("touchstart", function () {
    this.style.backgroundColor = "#FF0000";  // Нежно-голубой цвет при касании
});

// 7. События, связанные с таймером: Реализован таймер с отсчетом времени и событием по его окончанию.
document.getElementById("start-timer").addEventListener("click", function () {
    clearInterval(timer); // Остановка текущего таймера (если был)
    updateTimer(); // Запуск нового таймера
});
