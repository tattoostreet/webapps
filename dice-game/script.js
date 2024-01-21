let diceButton = document.querySelector("button");
let playerOne = document.getElementById("player1");
let playerTwo = document.getElementById("player2");
let resultDraw = document.getElementById("draw");
let numbers = [];

// Random number generator
function generateRandomNumber(number) {
    newNumber = Math.random() * number;
    return Math.floor(newNumber) + 1;
}

document.querySelector("button").addEventListener("click", () => {

    //Animate Dice Roll
    diceButton.classList.remove("buttonclick")
    window.requestAnimationFrame(function () {
        diceButton.classList.add("buttonclick")
        let diceRollSound = new Audio("mixkit-retro-game-notification-212.wav")
        diceRollSound.play();
    });

    //Update Dice Image based on random number
    for (let i = 1; i <= 2; i++) {
        let randomNumber = generateRandomNumber(6);
        document.querySelector(`.img${i}`).src = `images/dice${randomNumber}.png`;
        numbers.push(randomNumber);
        console.log(numbers);
    }

    //TODO: Display game result.. 
    if (numbers[0] === numbers[1]) {
        console.log("Draw!")
        playerOne.innerHTML = "Draw! 😏";
        playerOne.style.color = "yellow";
        playerTwo.innerHTML = "Draw! 😏";
        playerTwo.style.color = "yellow";
        setTimeout(() => {
            playerOne.innerHTML = "Player 1"
            playerOne.style.color = "#4ECCA3";
            playerTwo.innerHTML = "Player 2"
            playerTwo.style.color = "#4ECCA3";
        }, 1500);
    } else if (numbers[0] > numbers[1]) {
        console.log("Player 1 Wins!")
        playerOne.innerHTML = "Player 1 Wins! 😁";
        playerOne.style.color = "yellow";
        setTimeout(() => {
            playerOne.innerHTML = "Player 1"
            playerOne.style.color = "#4ECCA3";
        }, 1500);
    } else {
        console.log("Player 2 Wins!")
        playerTwo.innerHTML = "Player 2 Wins! 😁";
        playerTwo.style.color = "yellow";
        setTimeout(() => {
            playerTwo.innerHTML = "Player 2"
            playerTwo.style.color = "#4ECCA3";
        }, 1500);
    }

    //TODO: Add a score for each player

    // Reset numbers array
    numbers.length = 0;
});

