const button = document.querySelector("button");

button.onclick = function() {
    playDice()
};

function playDice() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var diceChange1 = document.querySelector(".dice .img1");
    var diceChange2 = document.querySelector(".dice .img2");
    
    if (randomNumber1 === 1) {
        diceChange1.setAttribute("src", "./images/dice6.png");
    } else if (randomNumber1 === 2) {
        diceChange1.setAttribute("src", "./images/dice2.png");
    } else if (randomNumber1 === 3) {
        diceChange1.setAttribute("src", "./images/dice3.png");
    } else if (randomNumber1 === 4) {
        diceChange1.setAttribute("src", "./images/dice4.png");
    } else if (randomNumber1 === 5) {
        diceChange1.setAttribute("src", "./images/dice5.png");
    } else {
        diceChange1.setAttribute("src", "./images/dice6.png");
    }
    
    if (randomNumber2 === 1) {
        diceChange2.setAttribute("src", "./images/dice6.png");
    } else if (randomNumber2 === 2) {
        diceChange2.setAttribute("src", "./images/dice2.png");
    } else if (randomNumber2 === 3) {
        diceChange2.setAttribute("src", "./images/dice3.png");
    } else if (randomNumber2 === 4) {
        diceChange2.setAttribute("src", "./images/dice4.png");
    } else if (randomNumber2 === 5) {
        diceChange2.setAttribute("src", "./images/dice5.png");
    } else {
        diceChange2.setAttribute("src", "./images/dice6.png");
    }

    countScore(randomNumber1, randomNumber2);
}

function countScore(randomNumber1, randomNumber2) {
    var playerWins = document.querySelector(".container h1");

    if (randomNumber1 > randomNumber2) {
        playerWins.textContent = "Player 1 Wins!";
    } else if (randomNumber1 < randomNumber2) {
        playerWins.textContent = "Player 2 Wins!";
    } else if (randomNumber1 === randomNumber2) {
        playerWins.textContent = "A draw!";
    } else {
        playerWins.textContent = "404 Error!";
    }
}
 