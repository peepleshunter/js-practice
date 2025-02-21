ct = console.table;

let player = {
    name: "J",
    score: 0,
    level: 1,
    isOnline: true
};

let submitNameCalled = false;
let submitNameCalled1 = false;

function submitName() {
    const playerName = document.getElementById('playerName').value;
    const greetingMessage = `Hello, ${playerName}! Welcome to this game...`;
    document.getElementById('greeting').innerText = greetingMessage;
    submitNameCalled = true;
    checkFunctionsCalled();
}

function submitName1() {
    const playerName1 = document.getElementById('playerName1').value;
    const greetingMessage = `Hello, ${playerName1}! Welcome to this game...`;
    document.getElementById('greeting1').innerText = greetingMessage;
    submitNameCalled1 = true;
    checkFunctionsCalled();
}

function checkFunctionsCalled() {
    if (submitNameCalled && submitNameCalled1) {
        executeAfterBoth();
    }
}

function executeAfterBoth() {
    console.log("Thank You!");
    document.getElementById('startButton').style.display = 'block'; // Show the start button
}

function startGame() {
    alert("Start Game?");
    hideElements();
    showNames();
    dealHands();
    document.getElementById('gameStatus').style.display = 'block'; // Show the h4 element
}

function hideElements() {
    document.getElementById('heading1').style.display = 'none';
    document.getElementById('heading2').style.display = 'none';
    document.getElementById('playerName').style.display = 'none';
    document.getElementById('playerName1').style.display = 'none';
    document.getElementById('subName').style.display = 'none';
    document.getElementById('subName1').style.display = 'none';
    document.getElementById('greeting').style.display = 'none';
    document.getElementById('greeting1').style.display = 'none';
    document.getElementById('startButton').style.display = 'none';
}

function showNames() {
    const playerName = document.getElementById('playerName').value;
    const playerName1 = document.getElementById('playerName1').value;

    const playerNamesDiv = document.getElementById('playerNames');
    playerNamesDiv.innerHTML = ''; // Clear previous names

    const player1NameElement = document.createElement('p');
    player1NameElement.innerText = `Player 1: ${playerName}`;
    playerNamesDiv.appendChild(player1NameElement);

    const player2NameElement = document.createElement('p');
    player2NameElement.innerText = `Player 2: ${playerName1}`;
    playerNamesDiv.appendChild(player2NameElement);
}

function dealHands() {
    let deck = buildDeck();
    let player1Hand = dealhand(deck, 26);
    let player2Hand = dealhand(deck, 26);

    displayHand('player1Hand', player1Hand);
    displayHand('player2Hand', player2Hand);
}

function displayHand(elementId, hand) {
    const handElement = document.getElementById(elementId);
    handElement.innerHTML = ''; // Clear previous hand
    hand.forEach(card => {
        const cardElement = document.createElement('img');
        cardElement.className = 'card';
        cardElement.src = `images/cards/${card.rank}_of_${card.suit.toLowerCase()}.png`;
        handElement.appendChild(cardElement);
    });
}

let createCard = function (rank, suit) {
    return {
        rank: rank,
        suit: suit,
        color: getColor(suit),
        name: getName(rank),
    };
};

let getName = function (rank) {
    switch (rank) {
        case 11:
            return "Jack";
        case 12:
            return "Queen";
        case 13:
            return "King";
        case 14:
            return "Ace";
        default:
            return rank + "";
    }
};

let getColor = function (suit) {
    return suit === "Hearts" || suit === "Diamonds" ? "red" : "black";
};

let buildDeck = function () {
    let deck = [];
    for (let i = 2; i <= 14; i++) {
        deck.push(createCard(i, "Spades"));
        deck.push(createCard(i, "Hearts"));
        deck.push(createCard(i, "Clubs"));
        deck.push(createCard(i, "Diamonds"));
    }
    return deck;
};

let dealcard = function (deck) {
    let randomNumber = Math.floor(Math.random() * deck.length);
    return deck.splice(randomNumber, 1)[0];
};

let dealhand = function (deck, numCards) {
    let hand = [];
    for (let i = 0; i < numCards; i++) {
        hand.push(dealcard(deck));
    }
    return hand;
};

let deck = buildDeck();
ct(deck);

console.log(createCard(11, "Clubs"));
console.log(getColor("Hearts"));
console.log(getName(13));
console.log("The deck has", deck.length, "cards");
console.log(dealhand(deck, 26));
console.log("The deck now has", deck.length, "cards after dealing.");

let Hand1 = dealhand;

let Hand2 = dealhand;