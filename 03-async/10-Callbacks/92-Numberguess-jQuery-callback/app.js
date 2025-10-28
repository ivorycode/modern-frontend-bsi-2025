
const guessInput = document.getElementById('guess');
const submitButton = document.getElementById('submit');
const resetButton = document.getElementById('reset');
const resultText = document.getElementById('result');

submitButton.addEventListener('click', sendGuess);
resetButton.addEventListener('click', sendReset);

function sendGuess(){
    $.post('http://localhost:3456/numberguess', {number: guessInput.value}, () => {
        resultText.innerText = 'TODO';
    });
}

function sendReset() {
    $.post('http://localhost:3456/numberguess/reset');
}
