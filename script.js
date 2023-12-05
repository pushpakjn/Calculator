let d = document.getElementById('d');

function appendValue(value) {
    d.value += value;
}

function clearDisplay() {
    d.value = '';
}

function calculateResult() {
    try {
        d.value = eval(d.value);
    } catch (error) {
        d.value = 'Error';
    }
}

function resetDisplay() {
    clearDisplay();
}

function backspace() {
    d.value = d.value.slice(0, -1);
}

function handleKeyPress(event) {
    const key = event.key;

    if (key === 'Enter'|| key === '=') {
        calculateResult();
    } else if (key === 'c' || key === 'C') {
        clearDisplay();
    } else if (key === 'Escape') {
        resetDisplay();
    } else if (key === 'Backspace') {
        backspace();
    } else if (/[0-9+\-*/]/.test(key)) {
        appendValue(key);
    }
}

document.addEventListener('keydown', handleKeyPress);
