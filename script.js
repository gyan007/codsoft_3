let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = '';
}

function appendOperator(operator) {
    if (displayValue !== '' && !isNaN(displayValue[displayValue.length - 1])) {
        displayValue += operator;
        document.getElementById('display').value = displayValue;
    }
}

function calculate() {
    try {
        const result = eval(displayValue);
        document.getElementById('display').value = result;
        displayValue = '';
    } catch (error) {
        document.getElementById('display').value = 'Error';
        displayValue = '';
    }
}
