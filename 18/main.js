document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // ������������� �������� ����� ��� ��������

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    
    // ���� ������ � ���������
    let interests = [];
    const interestElements = document.querySelectorAll('input[name="interest"]:checked');
    interestElements.forEach((element) => {
        interests.push(element.value);
    });

    const country = document.getElementById('country').value;
    
    // �������� ����� �� ������� � ����� (������� 2 �������)
    if (name.trim() === '' || name.length < 2) {
        alert("��� ������ ��������� �� ����� 2 ��������.");
        return;
    }

    // ���������� ��������� ��� �������� ����� (������ �����)
    const namePattern = /^[A-Za-z�-��-���]+$/;
    if (!namePattern.test(name)) {
        alert("��� ����� ��������� ������ �����.");
        return;
    }

    // �������� �������� �� �������� ������ ����� RegEx
    const agePattern = /^\d+$/;
    if (!agePattern.test(age)) {
        alert("������� ������ ���� ������.");
        return;
    }

    // �������� ������ ������
    if (country === '') {
        alert("����������, �������� ������.");
        return;
    }

    // ������������ ������ ��� ������ � ���������� ����
    const resultText = `
        ���: ${name}\n
        �������: ${age}\n
        ���: ${gender}\n
        ��������: ${interests.join(', ')}\n
        ������: ${country}
    `;

    // ����� ������ � ���������� ����
    alert(resultText);

    // ����� ������ �� HTML-��������
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h3>���������� �����:</h3>
        <p><strong>���:</strong> ${name}</p>
        <p><strong>�������:</strong> ${age}</p>
        <p><strong>���:</strong> ${gender}</p>
        <p><strong>��������:</strong> ${interests.join(', ')}</p>
        <p><strong>������:</strong> ${country}</p>
    `;
});

// ���������� ���������
document.getElementById('checkButton').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    const regexResultDiv = document.getElementById('regexResult');
    regexResultDiv.innerHTML = ''; // �������� ���������� ����������

    // ������ ����������� ��������� � �������
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i; // ���� i ��� ������������������ � ��������

    // ������������� ������ test()
    // �����������, �������� �� ��������� ������ ���������� ������� ����������� �����.
    if (emailPattern.test(inputText)) {
        regexResultDiv.innerHTML += `<p>����������� ����� '${inputText}' ���������.</p>`;
    } else {
        regexResultDiv.innerHTML += `<p>����������� ����� '${inputText}' �����������.</p>`;
    }

    // ������������� ������ exec()
    // ����� ������ �������� � ��������� ������, ��� ������� ����� ���� � ������������� �����
    // ���������� ��������� ��� ������ ����������� ������ � �������������� ������������� ����� (+1 �� +999), �������� ��� �������, � 10 ������� ��������� ������
    const phonePattern = /(\+?\d{1,3})?\s?-?(\d{10})/g;
    const phoneMatches = phonePattern.exec(inputText);
    if (phoneMatches) {
        regexResultDiv.innerHTML += `<p>������ �������: ${phoneMatches[0]}</p>`;
    } else {
        regexResultDiv.innerHTML += `<p>������� �� ������.</p>`;
    }

    // ������������� ������� ������� String
    // split
    // ��������� ������ ���� ����, ����������� ���������.
    const words = inputText.split(/\s+/);
    regexResultDiv.innerHTML += `<p>����� � ������: ${words.join(', ')}</p>`;

    // match
    // ��������� ������ ���� ��������� ���� ������ 5 ��������, ���� ����� �������.
    const foundWords = inputText.match(/\b\w{5}\b/g); // ����� ����� ������ 5 ��������
    regexResultDiv.innerHTML += `<p>����� ������ 5 ��������: ${foundWords ? foundWords.join(', ') : '���'}</p>`;

    // search
    // ���� ������ ���������� � ���������� ���������� � ���������� ������ ������ ����� ����������.
    const searchIndex = inputText.search(/test/i); // ����� ������ ����� "test"
    regexResultDiv.innerHTML += `<p>������ ����� "test": ${searchIndex !== -1 ? searchIndex : '�� �������'}</p>`;

    // replace
    const replacedText = inputText.replace(/bad/g, 'good'); // ������ "bad" �� "good"
    regexResultDiv.innerHTML += `<p>���������� �����: ${replacedText}</p>`;
});
