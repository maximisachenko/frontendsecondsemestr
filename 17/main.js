let countdown = 10; // ��������� �������� �������
let timerSpeed = 1000; // �������� ������� � ������������� (�� ��������� 1 �������)
let timer; // ���������� ��� �������

// ������� ��� ���������� � ����������� ����������� �������
function updateTimer() {
    const timerOutput = document.getElementById("timer-output");
    timer = setInterval(function () {
        if (countdown > 0) {
            countdown--;
            timerOutput.textContent = countdown;
        } else {
            clearInterval(timer);
            alert("������ ��������! ������ ������...");
            resetTimer(); // ����� ������� ����� ����������
        }
    }, timerSpeed);
}

// ������� ��� ������ �������
function resetTimer() {
    countdown = 10; // ����� �������� �� 10 ������
    timerSpeed = 1000; // ����� �������� �� ���������� (1 �������)
    updateTimer(); // ���������� �������
}

// ������ ��� ������� �������
document.getElementById("start-timer").addEventListener("click", function () {
    clearInterval(timer); // ��������� �������� ������� (���� ���)
    updateTimer(); // ������ ������ �������
});

// ������ ��� ��������� �������
document.getElementById("stop-timer").addEventListener("click", function () {
    clearInterval(timer); // ��������� �������
});

// ������ ��� ��������� �������
document.getElementById("speed-up").addEventListener("click", function () {
    if (timerSpeed > 100) { // ����������� �������� 0.1 ������� (100 ��)
        timerSpeed /= 2; // �������� ������ � 2 ����
        clearInterval(timer); // ��������� �������� �������
        updateTimer(); // ���������� � ����� ���������
    }
});

// ������ ��� ���������� �������
document.getElementById("slow-down").addEventListener("click", function () {
    timerSpeed *= 2; // ��������� ������ � 2 ����
    clearInterval(timer); // ��������� �������� �������
    updateTimer(); // ���������� � ����� ���������
});

// 1. ������� ����: ����������� ��� ����� �� ��������.
document.getElementById("mouse-event").addEventListener("click", function () {
    alert("�� �������� �� ����!");
});

// 2. ������� ����������: ������������ ������� ������ �� ����������.
document.getElementById("keyboard-input").addEventListener("keydown", function (event) {
    document.getElementById("keyboard-output").textContent = `�� ������: ${event.key}`;
});

// 3. Drag & Drop: �������������� �������� � ����� ��� � �������.
const dragSource = document.getElementById("drag-source");
const dropTarget = document.getElementById("drop-target");
let canDrop = true; // ����, �����������, ����� �� �������� �������

dragSource.addEventListener("dragstart", function () {
    dragSource.style.opacity = "0.5";
});

dragSource.addEventListener("dragend", function () {
    dragSource.style.opacity = "1";
});

dropTarget.addEventListener("dragover", function (event) {
    event.preventDefault(); // ���������� ��� ������������ drop
});

dropTarget.addEventListener("drop", function () {
    if (canDrop) {
        dropTarget.textContent = "������� �������!";
        dropTarget.classList.add("dropped"); // �������� ���� ����� ������
        canDrop = false; // ��������� ���������� ������� �� 10 ������

        // ����� 10 ������ ����� ��������� �����
        setTimeout(function () {
            dropTarget.textContent = "�������� ����";
            dropTarget.classList.remove("dropped"); // ���������� �������� �����
            canDrop = true;
        }, 10000); // 10 ������
    } else {
        alert("��������� 10 ������ ����� ��������� �������.");
    }
});

// 4. ������� ���������: ����������� �������� ��������� ���� ��� ������ ������������ ���������.
const pointerEventBox = document.getElementById("pointer-event");

pointerEventBox.addEventListener("pointermove", function () {
    this.style.backgroundColor = "#b3e5fc";  // �����-������� ���� ��� ���������
});

pointerEventBox.addEventListener("pointerleave", function () {
    this.style.backgroundColor = "";  // ���������� �������� ���� ��� �������� ���������
});

// 5. ������� ������ ���������: ��������� �� ��������� �����������.
let canTriggerScrollAlert = true; // ����, ����������� ��������� ���������� ����� 10 ������

document.getElementById("scroll-event").addEventListener("scroll", function () {
    if (canTriggerScrollAlert) {
        alert("�� ���������� ����������!");
        canTriggerScrollAlert = false; // ��������� ����������� ���������� �����

        // ����� 10 ������ ����� �������� ����������� ���������� �����
        setTimeout(function () {
            canTriggerScrollAlert = true;
        }, 10000); // 10 ������
    }
});

// 6. ������� ��������� �������: ����������� ��� ������� ���������� ������.
document.getElementById("touch-event").addEventListener("touchstart", function () {
    this.style.backgroundColor = "#FF0000";  // �����-������� ���� ��� �������
});

// 7. �������, ��������� � ��������: ���������� ������ � �������� ������� � �������� �� ��� ���������.
document.getElementById("start-timer").addEventListener("click", function () {
    clearInterval(timer); // ��������� �������� ������� (���� ���)
    updateTimer(); // ������ ������ �������
});
