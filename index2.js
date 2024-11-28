function appendToResult(value) {
    document.getElementById('result').value += value;
}

function clearResult() {
    document.getElementById('result').value = '';
}

function backspace() {
    let result = document.getElementById('result').value;
    document.getElementById('result').value = result.slice(0, -1);
}

function calculateResult() {
    let result = document.getElementById('result').value;
    try {
        // Replace 'x' with '*' for multiplication
        result = result.replace(/x/g, '*');
        // Evaluate the result
        document.getElementById('result').value = eval(result);
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}