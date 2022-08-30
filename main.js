const userChoiceDisplay = document.createElement('h3');
const compChoiceDisplay = document.createElement('h3');
const resultDisplay = document.createElement('h2');

// let playerHealthBar = document.getElementsByClassName("div.player-health-bar");
// let compHealthBar = document.getElementsByClassName("div.comp-health-bar");

const gameGrid = document.getElementById('game');
gameGrid.append(userChoiceDisplay, compChoiceDisplay, resultDisplay);


const choices = ['rock', 'paper', 'scissors']
let userChoice;
let compChoice;

let playerScore = 0;
let compScore = 0;

let score = "";
let result = "";
const button = document.querySelectorAll('input');


// function to create an event handler //
const handleClick = (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = 'User choice: ' + userChoice
    generateCompChoice()
    getResult()
}

// Generates a random selection for the computer
const generateCompChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    compChoice = randomChoice
    compChoiceDisplay.innerHTML = 'Computer choice: ' + compChoice
}

// Once the game finishes the buttons will be disabled
function disableButton() {
    button.forEach(elem => {
        elem.disabled = true;
    })
}


// Cycle through the choices //
for (let i = 0; i < choices.length; i++) {
    const button = document.querySelector('input')
    button.id = choices[i]
    button.innerHTML = choices[i]
    button.addEventListener('click', handleClick)
    gameGrid.appendChild(button)
}


// Functionality of the game //
function getResult() {
    let result = ""
    let score = ""

    let playerHealthBar = document.getElementById("player-health-bar").style.width;

    if (userChoice === compChoice) {
        // resultDisplay.innerHTML = "It's a Draw!"
        score = ("<br> Play Score: " + playerScore + "Computer Score " + compScore )
    } if (
        (userChoice === 'rock' && compChoice == 'scissors') ||
        (userChoice === 'scissors' && compChoice == 'paper') ||
        (userChoice === 'paper' && compChoice == 'rock')
    ) {
        // resultDisplay.innerHTML = "You win this round"
        playerScore++;
        score = ("Play Score " + playerScore + "Computer Score " + compScore)

        if (playerScore === 1) {
            document.getElementById("comp-health-bar").style.width = "160px";
        } else if (playerScore === 2) {
            document.getElementById("comp-health-bar").style.width = "120px";
            document.getElementById('comp-health-bar').style.backgroundColor = "yellow"
        } else if (playerScore === 3) {
            document.getElementById("comp-health-bar").style.width = "80px";
            document.getElementById('comp-health-bar').style.backgroundColor = "yellow"
        } else if (playerScore === 4) {
            document.getElementById("comp-health-bar").style.width = "40px";
            document.getElementById('comp-health-bar').style.backgroundColor = "red"
        } else if (playerScore === 5) {
            result += "You won the match!"
            document.getElementById("comp-health-bar").style.width = "0px";
            document.getElementById('comp-health-bar').style.backgroundColor = "red"
            userChoiceDisplay.remove()
            compChoiceDisplay.remove()
            disableButton();
        } 
    } if (
        (compChoice === 'rock' && userChoice == 'scissors') ||
        (compChoice === 'scissors' && userChoice == 'paper') ||
        (compChoice === 'paper' && userChoice == 'rock')
    ) {
        // resultDisplay.innerHTML = "Computer takes this round"
        compScore++;
        score = ("Play Score: " + playerScore + "Computer Score: " + compScore)

        if (compScore === 1) {
            document.getElementById("player-health-bar").style.width = "160px";
        } else if (compScore === 2) {
            document.getElementById("player-health-bar").style.width = "120px";
            document.getElementById('player-health-bar').style.backgroundColor = "yellow"
        } else if (compScore === 3) {
            document.getElementById("player-health-bar").style.width = "80px";
            document.getElementById('player-health-bar').style.backgroundColor = "yellow"
        } else if (compScore === 4) {
            document.getElementById("player-health-bar").style.width = "40px";
            document.getElementById('player-health-bar').style.backgroundColor = "red"
        }  else if (compScore === 5) {
            result += "You lost the match!"
            document.getElementById("player-health-bar").style.width = "0px";
            document.getElementById('player-health-bar').style.backgroundColor = "red"
            userChoiceDisplay.remove()
            compChoiceDisplay.remove()
            disableButton();
        }   

    }

    document.getElementById('result').innerHTML = result;
}


// function to reload the page
function refreshPage() {
    window.location.reload();
}