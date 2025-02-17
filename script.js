let currentOperand = '0';
let previousOperand = '';
let operation = undefined;
let memory = 0;

const currentOperandElement = document.querySelector('.current-operand');
const previousOperandElement = document.querySelector('.previous-operand');
const memoryDisplayElement = document.querySelector('.memory-display');

function updateDisplay() {
    currentOperandElement.textContent = currentOperand;
    previousOperandElement.textContent = previousOperand;
}

function appendNumber(number) {
    if (number === '.' && currentOperand.includes('.')) return;
    if (currentOperand === '0' && number !== '.') {
        currentOperand = number;
    } else {
        currentOperand += number;
    }
    updateDisplay();
}

function appendOperator(operator) {
    if (currentOperand === '') return;
    if (previousOperand !== '') {
        calculate();
    }
    operation = operator;
    previousOperand = currentOperand + ' ' + operator;
    currentOperand = '';
    updateDisplay();
}

function calculate() {
    let computation;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;

    switch (operation) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '*':
            computation = prev * current;
            break;
        case '/':
            computation = prev / current;
            break;
        default:
            return;
    }

    currentOperand = computation.toString();
    operation = undefined;
    previousOperand = '';
    updateDisplay();
}

function clearAll() {
    currentOperand = '0';
    previousOperand = '';
    operation = undefined;
    updateDisplay();
}

function deleteNumber() {
    currentOperand = currentOperand.toString().slice(0, -1);
    if (currentOperand === '') currentOperand = '0';
    updateDisplay();
}

function percentage() {
    currentOperand = (parseFloat(currentOperand) / 100).toString();
    updateDisplay();
}

function squareRoot() {
    currentOperand = Math.sqrt(parseFloat(currentOperand)).toString();
    updateDisplay();
}

function power() {
    currentOperand = Math.pow(parseFloat(currentOperand), 2).toString();
    updateDisplay();
}

function memoryStore() {
    memory = parseFloat(currentOperand);
    memoryDisplayElement.textContent = `Memory: ${memory}`;
}

function memoryRecall() {
    if (memory !== null) {
        currentOperand = memory.toString();
        updateDisplay();
    }
}
