document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Останавливаем отправку формы для проверки

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    
    // Сбор данных о интересах
    let interests = [];
    const interestElements = document.querySelectorAll('input[name="interest"]:checked');
    interestElements.forEach((element) => {
        interests.push(element.value);
    });

    const country = document.getElementById('country').value;
    
    // Проверка имени на пустоту и длину (минимум 2 символа)
    if (name.trim() === '' || name.length < 2) {
        alert("Имя должно содержать не менее 2 символов.");
        return;
    }

    // Регулярное выражение для проверки имени (только буквы)
    const namePattern = /^[A-Za-zА-Яа-яЁё]+$/;
    if (!namePattern.test(name)) {
        alert("Имя может содержать только буквы.");
        return;
    }

    // Проверка возраста на числовой формат через RegEx
    const agePattern = /^\d+$/;
    if (!agePattern.test(age)) {
        alert("Возраст должен быть числом.");
        return;
    }

    // Проверка выбора страны
    if (country === '') {
        alert("Пожалуйста, выберите страну.");
        return;
    }

    // Формирование строки для вывода в диалоговое окно
    const resultText = `
        Имя: ${name}\n
        Возраст: ${age}\n
        Пол: ${gender}\n
        Интересы: ${interests.join(', ')}\n
        Страна: ${country}
    `;

    // Вывод данных в диалоговое окно
    alert(resultText);

    // Вывод данных на HTML-страницу
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h3>Результаты формы:</h3>
        <p><strong>Имя:</strong> ${name}</p>
        <p><strong>Возраст:</strong> ${age}</p>
        <p><strong>Пол:</strong> ${gender}</p>
        <p><strong>Интересы:</strong> ${interests.join(', ')}</p>
        <p><strong>Страна:</strong> ${country}</p>
    `;
});

// Регулярные выражения
document.getElementById('checkButton').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    const regexResultDiv = document.getElementById('regexResult');
    regexResultDiv.innerHTML = ''; // Очистить предыдущие результаты

    // Пример регулярного выражения с флагами
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i; // флаг i для нечувствительности к регистру

    // Использование метода test()
    // Проверяется, является ли введенная строка корректным адресом электронной почты.
    if (emailPattern.test(inputText)) {
        regexResultDiv.innerHTML += `<p>Электронная почта '${inputText}' корректна.</p>`;
    } else {
        regexResultDiv.innerHTML += `<p>Электронная почта '${inputText}' некорректна.</p>`;
    }

    // Использование метода exec()
    // Поиск номера телефона в введенной строке, где телефон может быть с международным кодом
    // Регулярное выражение для поиска телефонного номера с необязательным международным кодом (+1 до +999), пробелом или дефисом, и 10 цифрами основного номера
    const phonePattern = /(\+?\d{1,3})?\s?-?(\d{10})/g;
    const phoneMatches = phonePattern.exec(inputText);
    if (phoneMatches) {
        regexResultDiv.innerHTML += `<p>Найден телефон: ${phoneMatches[0]}</p>`;
    } else {
        regexResultDiv.innerHTML += `<p>Телефон не найден.</p>`;
    }

    // Использование методов объекта String
    // split
    // Выводится список всех слов, разделенных пробелами.
    const words = inputText.split(/\s+/);
    regexResultDiv.innerHTML += `<p>Слова в тексте: ${words.join(', ')}</p>`;

    // match
    // Выводится список всех найденных слов длиной 5 символов, если такие найдены.
    const foundWords = inputText.match(/\b\w{5}\b/g); // Найти слова длиной 5 символов
    regexResultDiv.innerHTML += `<p>Слова длиной 5 символов: ${foundWords ? foundWords.join(', ') : 'Нет'}</p>`;

    // search
    // Ищет первое совпадение с регулярным выражением и возвращает индекс начала этого совпадения.
    const searchIndex = inputText.search(/test/i); // Найти индекс слова "test"
    regexResultDiv.innerHTML += `<p>Индекс слова "test": ${searchIndex !== -1 ? searchIndex : 'Не найдено'}</p>`;

    // replace
    const replacedText = inputText.replace(/bad/g, 'good'); // Замена "bad" на "good"
    regexResultDiv.innerHTML += `<p>Измененный текст: ${replacedText}</p>`;
});
