const resultInput = document.getElementById('result');
let isCalculated = false; // Tracks if the current value on screen is a final answer

function appendNumber(number) {
    // If a result was just calculated, clear it and start fresh with the new number
    if (isCalculated) {
        resultInput.value = '';
        isCalculated = false;
    }
    resultInput.value += number;
}

function appendOperator(operator) {
    // If they click an operator after an answer, keep the answer and continue calculating
    if (isCalculated) {
        isCalculated = false;
    }
    
    // Prevent adding consecutive operators which causes eval errors
    const lastChar = resultInput.value.slice(-1);
    if (['+', '-', '*', '/', '%'].includes(lastChar)) {
        // Replace the old operator with the new one
        resultInput.value = resultInput.value.slice(0, -1) + operator;
    } else {
        resultInput.value += operator;
    }
}

function clearResult() {
    resultInput.value = '';
    isCalculated = false;
}

function deleteLastChar() {
    if (isCalculated) {
        clearResult();
    } else {
        resultInput.value = resultInput.value.slice(0, -1);
    }
}

function calculateResult() {
    try {
        // Fallback to empty if there's nothing typed
        if (!resultInput.value) return; 
        
        const result = eval(resultInput.value);
        resultInput.value = result;
        isCalculated = true; // Mark that calculation is done
    } catch (error) {
        resultInput.value = 'Error';
        isCalculated = true; 
    }
}