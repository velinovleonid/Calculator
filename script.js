const display = document.getElementById('display');
const keys = document.querySelectorAll('.keys button');

let currentOperation = '';
let previousOperation = '';

keys.forEach((key) => {
    key.addEventListener('click', (e) => {
        const keyValue = e.target.value;
        switch (keyValue) {
            case '=':
                calculate();
                break;
            case 'C':
                clearDisplay();
                break;
            default:
                updateDisplay(keyValue);
        }
    });
});

function updateDisplay(keyValue) {
    if (keyValue === '+' || keyValue === '-' || keyValue === '*' || keyValue === '/') {
        currentOperation += keyValue;
        display.value = currentOperation;
    } else {
        currentOperation += keyValue;
        display.value = currentOperation;
    }
}

function calculate() {
    try {
        const result = eval(currentOperation);
        display.value = result;
        previousOperation = currentOperation;
        currentOperation = '';
    } catch (error) {
        display.value = 'Error';
    }
}

function clearDisplay() {
    display.value = '';
    currentOperation = '';
    previousOperation = '';
}
