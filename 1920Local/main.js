// ������� ��� ���������� ������ � ��������� ���������
function saveToLocalStorage() {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const dob = document.getElementById('dob').value;
    const birthPlace = document.getElementById('birthPlace').value;
    const hobbies = document.getElementById('hobbies').value;

    // ���������� ������ � ��������� ���������
    localStorage.setItem('fullName', fullName);
    localStorage.setItem('email', email);
    localStorage.setItem('dob', dob);
    localStorage.setItem('birthPlace', birthPlace);
    localStorage.setItem('hobbies', hobbies);

    displayOutput("������ ���������!");
}

// ������� ��� ������� ���������� ���������
function clearLocalStorage() {
    localStorage.clear();
    displayOutput("��� ������ ���� �������.");
}

// ������� ��� ����������� ������
function displayOutput(message) {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `
        <strong>${message}</strong><br>
        ������ ���: ${localStorage.getItem('fullName')}<br>
        ����������� �����: ${localStorage.getItem('email')}<br>
        ���� ��������: ${localStorage.getItem('dob')}<br>
        ����� ��������: ${localStorage.getItem('birthPlace')}<br>
        ���������: ${localStorage.getItem('hobbies')}
    `;
}

// ��� �������� �����
document.getElementById('userForm').onsubmit = function (event) {
    event.preventDefault(); // ������������� ����������� �������� �����
    saveToLocalStorage(); // ��������� ������ � ��������� ���������
};

// ��� �������� ����
window.onload = function () {
    if (localStorage.getItem('fullName')) {
        displayOutput("����� ����������� ������:");
    }
};
