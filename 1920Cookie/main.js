// Сохранение данных в cookies
function saveToCookies() {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const dob = document.getElementById('dob').value;
    const birthPlace = document.getElementById('birthPlace').value;
    const hobbies = document.getElementById('hobbies').value;

    // Установка cookies
    document.cookie = `fullName=${fullName}; path=/`;
    document.cookie = `email=${email}; path=/`;
    document.cookie = `dob=${dob}; path=/`;
    document.cookie = `birthPlace=${birthPlace}; path=/`;
    document.cookie = `hobbies=${hobbies}; path=/`;

    displayOutput("Данные сохранены!");
}

// Очистка cookies
function clearCookies() {
    document.cookie.split(';').forEach(cookie => {
        const eqPos = cookie.indexOf('=');
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
    });
    displayOutput("Все данные были очищены.");
}

// Отображение вывода
function displayOutput(message) {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `
        <strong>${message}</strong><br>
        Полное имя: ${getCookieValue('fullName')}<br>
        Электронная почта: ${getCookieValue('email')}<br>
        Дата рождения: ${getCookieValue('dob')}<br>
        Место рождения: ${getCookieValue('birthPlace')}<br>
        Увлечения: ${getCookieValue('hobbies')}
    `;
}

// Получение значения cookie
function getCookieValue(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

// При отправке формы
document.getElementById('userForm').onsubmit = function (event) {
    event.preventDefault(); // Предотвращаем стандартную отправку формы
    saveToCookies(); // Сохраняем данные в cookies
};

// При загрузке окна
window.onload = function () {
    if (getCookieValue('fullName')) {
        displayOutput("Ранее сохраненные данные:");
    }
};
