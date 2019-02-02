/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var player0CurrentScore = 0;
var player1CurrentScore = 0;

var player0GlobalScore = 0;
var player1GlobalScore = 0;

var currentPlayer = 0;

function rollDice() {
    var randomN = 1 + Math.floor(Math.random() * 6);

    if (currentPlayer == 0) {
        if (randomN == 1) {
            //Remove focus to this player and give it to the next
            changePlayer();
        } else {
            //Keep increasing Player 0  current score
            player0CurrentScore += randomN;
            var currentState = document.querySelector("#current-0").innerHTML = player0CurrentScore;
        }
    } else {

        if (randomN == 1) {

            //Remove focus to this player and give it to the next
            changePlayer();
        } else {
            //Keep increasing Player 1  current score
            player1CurrentScore += randomN;
            var currentState = document.querySelector("#current-1").innerHTML = player1CurrentScore;
        }
    }
    var dice = document.querySelector(".dice").src = "dice-" + randomN + ".png";
}

function hold() {
    //check which player is playing...
    if (currentPlayer == 0) {
        player0GlobalScore += player0CurrentScore;
        if (player0GlobalScore >= 100) {
            showWinner();
        }
        var playerScore = document.querySelector("#score-0").innerHTML = player0GlobalScore;
        changePlayer();

    } else {
        player1GlobalScore += player1CurrentScore;
        if (player1GlobalScore >= 100) {
            showWinner();
        }
        var playerScore = document.querySelector("#score-1").innerHTML = player1GlobalScore;
        changePlayer();
    }
}

function changePlayer() {
    var previousPlayer = currentPlayer;
    if (currentPlayer == 0) {
        player0CurrentScore = 0;
        var currentState = document.querySelector("#current-0").innerHTML = player0CurrentScore;
        currentPlayer = 1;
    } else {
        player1CurrentScore = 0;
        var currentState = document.querySelector("#current-1").innerHTML = player1CurrentScore;
        currentPlayer = 0;
    }
    var rem1 = document.querySelector(".player-" + previousPlayer + "-panel").classList.remove("active");
    var classes = document.querySelector(".player-" + currentPlayer + "-panel").classList.add("active");
}

function showWinner() {
    if (player1GlobalScore >= 100) {
        removeElement("player1win");
        addElement("player-1-panel", "img", "winner.jpg", "winner")
    }

    if (player0GlobalScore >= 100) {
        removeElement("player0win");
        addElement("player-0-panel", "img", "winner.jpg", "winner")
    }
}

function removeElement(elementClass) {
    // Removes an element from the document
    var element = document.querySelector("." + elementClass);
    element.parentNode.removeChild(element);
}

function addElement(parentClass, elementTag, elementSrc, ElementClass) {
    // Adds an element to the document
    var p = document.querySelector("." + parentClass);
    var newElement = document.createElement(elementTag);
    newElement.setAttribute('src', elementSrc);
    newElement.setAttribute('class', ElementClass);
    p.appendChild(newElement);
}

function newGame() {
    player0CurrentScore = 0;
    player1CurrentScore = 0;
    player0GlobalScore = 0;
    player1GlobalScore = 0;

    changePlayer();
    var playerScore = document.querySelector("#score-0").innerHTML = player0GlobalScore;
    playerScore = document.querySelector("#score-1").innerHTML = player1GlobalScore;




}