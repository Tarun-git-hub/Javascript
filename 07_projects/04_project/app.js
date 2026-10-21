let randomNumber = parseInt(Math.random()*100 + 1);
const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remainGuess = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const resultParas = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    });
}

function validateGuess(guess){
if(guess<1){
    alert('Please enter a valid number')
} else if(guess>100){
    alert('Please enter a valid number')
} else if(isNaN(guess)){
    alert('Please enter a valid number')
}
else{
    prevGuess.push(guess)
    if(numGuess===11){
        displayGuess(guess)
        displayMessage('Game over')
        endGame()
    }else{
        displayGuess(guess)
        checkGuess(guess)
    }
}
}

function checkGuess(guess){
if(guess===randomNumber){
    displayMessage('You guessed it right')
    endGame()
} else if(guess<randomNumber){
    displayMessage('Your guessed number is smaller')
}
else{
    displayMessage('Your number is bigger')
}
}

function displayGuess(guess){
userInput.value = ''
guessSlot.innerHTML+=`${guess} `
numGuess++
remainGuess.innerHTML=`${11-numGuess}`
}


function displayMessage(message){
lowOrHi.innerHTML=`<h2>${message}</h2>`
}

function endGame(){
userInput.value=''
userInput.setAttribute('disabled','')
p.classList.add('button')
p.innerHTML=`<h3 id="newGame">Start new game</h3>`
resultParas.appendChild(p)
playGame=false
newGame()
}

function newGame(){
const newGameButton = document.querySelector('#newGame')
newGameButton.addEventListener('click',function(){
 randomNumber = parseInt(Math.random()*100 + 1);
 prevGuess = []
 numGuess = 1
userInput.value = ''
guessSlot.innerHTML=''
userInput.removeAttribute('disabled')
resultParas.removeAttribute(p)
playGame=true
})

}

