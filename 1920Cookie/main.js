// ���������� ������ � cookies
function saveToCookies() {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const dob = document.getElementById('dob').value;
    const birthPlace = document.getElementById('birthPlace').value;
    const hobbies = document.getElementById('hobbies').value;

    // ��������� cookies
    document.cookie = `fullName=${fullName}; path=/`;
    document.cookie = `email=${email}; path=/`;
    document.cookie = `dob=${dob}; path=/`;
    document.cookie = `birthPlace=${birthPlace}; path=/`;
    document.cookie = `hobbies=${hobbies}; path=/`;

    displayOutput("������ ���������!");
}

// ������� cookies
function clearCookies() {
    document.cookie.split(';').forEach(cookie => {
        const eqPos = cookie.indexOf('=');
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
    });
    displayOutput("��� ������ ���� �������.");
}

// ����������� ������
function displayOutput(message) {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `
        <strong>${message}</strong><br>
        ������ ���: ${getCookieValue('fullName')}<br>
        ����������� �����: ${getCookieValue('email')}<br>
        ���� ��������: ${getCookieValue('dob')}<br>
        ����� ��������: ${getCookieValue('birthPlace')}<br>
        ���������: ${getCookieValue('hobbies')}
    `;
}

// ��������� �������� cookie
function getCookieValue(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

// ��� �������� �����
document.getElementById('userForm').onsubmit = function (event) {
    event.preventDefault(); // ������������� ����������� �������� �����
    saveToCookies(); // ��������� ������ � cookies
};

// ��� �������� ����
window.onload = function () {
    if (getCookieValue('fullName')) {
        displayOutput("����� ����������� ������:");
    }
};
