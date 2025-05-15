let numberOfGuesses=document.getElementById('noOfGuesses');
let guessesRemaining=10;
numberOfGuesses.textContent=guessesRemaining;
let submitBtn=document.getElementById('submit');
let prevGuesses=document.getElementById('prevGuesses');
let prevGuessesArr=[];
let randomNumber=Math.floor(Math.random() * 100) + 1;
let guess=document.getElementById('userGuess');
let displayHint=document.getElementById('displayHint');
let startOverBtn=document.createElement('button')
let result=document.getElementsByClassName('result')[0];
let userWon=false;
function gameStart() {
    submitBtn.addEventListener('click', () => {
        let userGuess = parseInt(guess.value);

        if (isNaN(userGuess)) {
            alert("Please enter a valid Number");
            guess.value = '';
        } else if (userGuess < 1) {
            alert("Please enter a number greater than 1");
            guess.value = '';
        } else if (userGuess > 100) {
            alert("Please enter a number less than 100");
            guess.value = '';
        } else {
            updateDisplay(userGuess); 
        }
    });
}

function updateDisplay(userGuess)
{

    guess.value='';
    //prev guesses array update
    prevGuessesArr.push(userGuess);
    prevGuesses.textContent=prevGuessesArr;

    //reduce Guesses Remaining
    guessesRemaining--;
    numberOfGuesses.textContent=guessesRemaining;

    //Show the guess status if guesses remaining are > 0
    if(guessesRemaining>0)
    {
        if(userGuess ==  randomNumber)
        {
            userWon = true;
            endGame();
            return;
        }
        if(userGuess<randomNumber)
        {
            displayHint.innerHTML='Too less';
        }
        else{
            displayHint.innerHTML='Too High';
                }
    }
    else{
        endGame();
    }
}
function endGame()
{
    guess.value='';
    if(userWon)
    {
        displayHint.innerHTML=`You Guessed it Right - ${randomNumber}`;
    }
    else{
        displayHint.innerHTML=`The number is - ${randomNumber}`;

    }
    //start again
    submitBtn.setAttribute('disabled','');
    startOver();
}

function startOver()
{
    result.appendChild(startOverBtn);

}
startOverBtn.classList.add('restart-btn'); 
startOverBtn.innerHTML='Start again';
startOverBtn.addEventListener('click', ()=>{
    submitBtn.removeAttribute('disabled','');
    guess.value='';
    prevGuessesArr=[];
    prevGuesses.textContent=prevGuessesArr;
    guessesRemaining=10;
    numberOfGuesses.textContent=guessesRemaining;
    randomNumber=Math.floor(Math.random() * 100) + 1;
    result.removeChild(startOverBtn);
    displayHint.innerHTML='';

})
gameStart();
