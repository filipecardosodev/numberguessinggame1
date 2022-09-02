

const guess = document.getElementById('number')

const buttons = document.querySelectorAll('button')

let previousGuesses = 'Previous guesses: '
let attempts = 0;
let num = Math.floor((Math.random() * 100) + 1)
const b = document.getElementById('submit')
const statuss = document.getElementById('statuss')
let highlow = document.getElementById('highlow')

guess.focus();

for (const button of buttons) {

    if (button.id == 'submit') {
        button.addEventListener('click', start)
    } else {
        button.addEventListener('click', restart)
    }


}


function start() {



    if (attempts < 10) {
        let respostas = document.getElementById('respostas')
        respostas.classList.remove('hide');
        if (guess.value == '') {

            previousGuesses = previousGuesses + 0 + ' '

            respostas.innerHTML = previousGuesses
        } else {
            previousGuesses = previousGuesses + guess.value + ' '

            respostas.innerHTML = previousGuesses
        }

        attempts = attempts + 1;


        guess.focus()


    } if (attempts == 10) {
        const hide = document.getElementById('tryAgaind')
        hide.classList.remove('hide')
        guess.disabled = true;

        b.disabled = true;


    }

    if (guess.value == '') {
        guess.value = 0
    }

    if (guess.value == num) {
        statuss.classList.add('green')
        statuss.innerHTML = 'Congratulations! You got it right!'

        const hide = document.getElementById('tryAgaind')
        hide.classList.remove('hide')
        guess.disabled = true;

        b.disabled = true;
        highlow.innerHTML = ''


    } else {
        statuss.classList.remove('green')
        statuss.innerHTML = 'Wrong!!'


        if (guess.value < num) {
            highlow.innerHTML = 'Last guess was too low!'
            console.log(num)

        } else if (guess.value > num) {
            console.log(num)
            highlow.innerHTML = 'Last guess was too high!'
        }

        if (attempts == 10 && num != guess.value) {
            statuss.innerHTML = '!!!Game Over!!!'
            highlow.innerHTML = ''
        }

    }




    guess.value = ''
}

function restart() {
    attempts = 0
    const hide = document.getElementById('tryAgaind')
    hide.classList.add('hide')
    guess.disabled = false;
    b.disabled = false;
    previousGuesses = 'Previous guesses: ';
    respostas.classList.add('hide');
    respostas.innerHTML = previousGuesses
    guess.focus()
    statuss.innerHTML = ''
    num = Math.floor((Math.random() * 100) + 1)
    highlow.innerHTML = ''
}

