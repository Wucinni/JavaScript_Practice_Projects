// Global Variables
let alive = true;
let winner = false;
let cardsValue = 0;

// Main game function
function playGame() {
    // DOM elements
    let cardsElem = document.getElementById("cards");
    let sumElem = document.getElementById("sum");
    let playButton = document.getElementById("playButton");

    // Reset values after changing them on lose scenario
    if (!alive) {
        cardsValue = 0;
        cardsElem.innerText = "";
        playButton.style.backgroundColor = "green";
        playButton.innerText = "Play";
        alive = true;
    // Do the same on win scenario
    } else if (winner) {
        cardsValue = 0;
        cardsElem.innerHTML = "";
        playButton.style.backgroundColor = "green";
        playButton.innerText = "Play";
        playButton.style.color = "white";
        winner = false;
    }

    // Call new card to get a random number from 1 to 11
    let newCard = getCard();

    // Increment the sum with new card value
    cardsValue += newCard;

    // Modify card values and sum in HTML
    cardsElem.innerText += " " + newCard;
    sumElem.innerText = "Sum is: " + cardsValue;

    // In case of lose make things pretty
    if (cardsValue > 21){
        console.log("User Lost");
        cardsElem.innerText = "You Lost!";
        playButton.style.backgroundColor = "red";
        playButton.innerText = "Play again?";
        sumElem.innerText = "";
        alive = false; // Notify for lost game
    // In case of win make things even prettier
    } else if (cardsValue === 21){
        console.log("User won");
        cardsElem.innerHTML = "<span style='color: darkgoldenrod'>Blackjack! </span><span style='color: green'>You win!</span>";
        playButton.innerText = "Play again?";
        playButton.style.color = "gold";
        winner = true; // Notify for win
    }
}

function getCard (){ // pseudo function for random number from 1 to 11
    return 1 + Math.floor(Math.random() * 11);
}
