// Функция для сохранения данных в локальное хранилище
function saveToLocalStorage() {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const dob = document.getElementById('dob').value;
    const birthPlace = document.getElementById('birthPlace').value;
    const hobbies = document.getElementById('hobbies').value;

    // Сохранение данных в локальное хранилище
    localStorage.setItem('fullName', fullName);
    localStorage.setItem('email', email);
    localStorage.setItem('dob', dob);
    localStorage.setItem('birthPlace', birthPlace);
    localStorage.setItem('hobbies', hobbies);

    displayOutput("Данные сохранены!");
}

// Функция для очистки локального хранилища
function clearLocalStorage() {
    localStorage.clear();
    displayOutput("Все данные были очищены.");
}

// Функция для отображения вывода
function displayOutput(message) {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `
        <strong>${message}</strong><br>
        Полное имя: ${localStorage.getItem('fullName')}<br>
        Электронная почта: ${localStorage.getItem('email')}<br>
        Дата рождения: ${localStorage.getItem('dob')}<br>
        Место рождения: ${localStorage.getItem('birthPlace')}<br>
        Увлечения: ${localStorage.getItem('hobbies')}
    `;
}

// При отправке формы
document.getElementById('userForm').onsubmit = function (event) {
    event.preventDefault(); // Предотвращаем стандартную отправку формы
    saveToLocalStorage(); // Сохраняем данные в локальное хранилище
};

// При загрузке окна
window.onload = function () {
    if (localStorage.getItem('fullName')) {
        displayOutput("Ранее сохраненные данные:");
    }
};
