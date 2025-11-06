
const resultInput = document.getElementById('result');

function appendNumber(number) {
    resultInput.value += number;
}

function appendOperator(operator) {
    resultInput.value += operator;
}

function clearResult() {
    resultInput.value = '';
}

function deleteLastChar() {
    resultInput.value = resultInput.value.slice(0, -1);
}

function calculateResult() {
    try {
        const result = eval(resultInput.value);
        resultInput.value = result;
    } catch (error) {
        resultInput.value = 'Error';
    }
}
