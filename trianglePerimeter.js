// trianglePerimeter.js

document.addEventListener("DOMContentLoaded", () => {
    const calculateButton = document.getElementById('calculatePerimeter');
    const clearButton = document.getElementById('clearForm');
    const perimeterResult = document.getElementById('perimeterResult');
    const moreInfoToggle = document.getElementById('moreInfoToggle');
    const additionalInfo = document.getElementById('additionalInfo');

    calculateButton.addEventListener('click', (e) => {
        e.preventDefault(); // Зупиняємо стандартну поведінку кнопки

        // Скидання попередніх помилок
        resetErrors();

        // Отримання значень з полів
        const sideA = parseFloat(document.getElementById('sideA').value);
        const sideB = parseFloat(document.getElementById('sideB').value);
        const sideC = parseFloat(document.getElementById('sideC').value);

        let isValid = true;

        // Валідація полів
        if (isNaN(sideA) || sideA <= 0) {
            showError('sideA', 'Сторона A повинна бути числом більше 0');
            isValid = false;
        }
        if (isNaN(sideB) || sideB <= 0) {
            showError('sideB', 'Сторона B повинна бути числом більше 0');
            isValid = false;
        }
        if (isNaN(sideC) || sideC <= 0) {
            showError('sideC', 'Сторона C повинна бути числом більше 0');
            isValid = false;
        }

        // Якщо всі поля валідні, розраховуємо периметр
        if (isValid) {
            const perimeter = sideA + sideB + sideC;
            perimeterResult.textContent = `Периметр трикутника: ${perimeter}`;
        }
    });

    clearButton.addEventListener('click', resetErrors);

    moreInfoToggle.addEventListener('change', () => {
        additionalInfo.style.display = moreInfoToggle.checked ? 'block' : 'none';
    });

    function showError(fieldId, message) {
        const field = document.getElementById(fieldId);
        const errorMessage = document.getElementById(`${fieldId}Error`);
        field.classList.add('error');
        errorMessage.textContent = message;
    }

    function resetErrors() {
        const fields = ['sideA', 'sideB', 'sideC'];
        fields.forEach(fieldId => {
            const field = document.getElementById(fieldId);
            const errorMessage = document.getElementById(`${fieldId}Error`);
            field.classList.remove('error');
            errorMessage.textContent = '';
        });
        perimeterResult.textContent = '';
    }
});
