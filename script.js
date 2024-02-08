const game = document.getElementById("game");
let images = [
  "Images/BarMinder.png",
  "Images/BatMinder.png",
  "Images/CowMinder.png",
  "Images/FuzzyMinder.png",
  "Images/AutumnMinder.png",
  "Images/Bigodes.png",
  "Images/MinderGamer.png",
  "Images/FemaleMinder.png",
  "Images/GentlemanMinder.png",
  "Images/MinderBiker.png",
];
images = images.concat(images);

document.getElementById("darkLight").addEventListener("click", function () {
  document.body.classList.toggle("light-mode");
});

let cardsObjct = [
  {
    id: 1,
    name: "BarMinder",
    imageFront: "Images/BarMinder.png",
    imageBack: "Images/cardBack.webp",
  },
  {
    id: 2,
    name: "BatMinder",
    imageFront: "Images/BatMinder.png",
    imageBack: "Images/cardBack.webp",
  },
  {
    id: 3,
    name: "CowMinder",
    imageFront: "Images/CowMinder.png",
    imageBack: "Images/cardBack.webp",
  },
  {
    id: 4,
    name: "FuzzyMinder",
    imageFront: "Images/FuzzyMinder.png",
    imageBack: "Images/cardBack.webp",
  },
  {
    id: 5,
    name: "AutumnMinder",
    imageFront: "Images/AutumnMinder.png",
    imageBack: "Images/cardBack.webp",
  },
  {
    id: 6,
    name: "Bigodes",
    imageFront: "Images/Bigodes.png",
    imageBack: "Images/cardBack.webp",
  },
  {
    id: 7,
    name: "MinderGamer",
    imageFront: "Images/MinderGamer.png",
    imageBack: "Images/cardBack.webp",
  },
  {
    id: 8,
    name: "FemaleMinder",
    imageFront: "Images/FemaleMinder.png",
    imageBack: "Images/cardBack.webp",
  },
  {
    id: 9,
    name: "GentlemanMinder",
    imageFront: "Images/GentlemanMinder.png",
    imageBack: "Images/cardBack.webp",
  },
  {
    id: 10,
    name: "MinderBiker",
    imageFront: "Images/MinderBiker.png",
    imageBack: "Images/cardBack.webp",
  },
];

let easyCards = cardsObjct.slice(0, 8);
let mediumCards = cardsObjct.slice(0, 16);
let hardCards = cardsObjct;

function startGame(difficulty) {
  let cards;
  if (difficulty === "Easy") {
    cards = shuffle(easyCards);
  } else if (difficulty === "Medium") {
  } else if (difficulty === "Hard") {
  }
  renderBoard();
}

document.getElementById("Easy").addEventListener("click", function () {
  startGame("Easy");
});

document.getElementById("Medium").addEventListener("click", function () {
  startGame("Medium");
});

document.getElementById("Hard").addEventListener("click", function () {
  startGame("Hard");
});

cardsObjct = cardsObjct.concat(cardsObjct);

function shuffle(array) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

cardsObjct = shuffle(cardsObjct);

function renderBoard() {
  game.innerHTML = "";
  for (let i = 0; i < cardsObjct.length; i++) {
    const scene = document.createElement("div");
    scene.classList.add("scene", "scene_card");

    const card = document.createElement("div");
    card.classList.add("card", "is-flipped");

    const cardFront = document.createElement("div");
    cardFront.classList.add("card_face", "card_front");

    const cardBack = document.createElement("div");
    cardBack.classList.add("card_face", "card_back");

    card.appendChild(cardFront);
    card.appendChild(cardBack);
    scene.appendChild(card);

    if (i % 5 === 0) {
      const row = document.createElement("div");
      row.classList.add("row");
      row.appendChild(scene);
      game.appendChild(row);
    } else {
      game.lastChild.appendChild(scene);
    }

    scene.addEventListener("click", () => handleCardClick(i, card));
  }
}

let arraySelection = [];
let domSelection = [];

function handleCardClick(index, card) {
  if (card.classList.contains("matched")) {
    return;
  }

  let currentCard = cardsObjct[index];
  if (card.classList.contains("is-flipped")) {
    card.classList.remove("is-flipped");
    card.querySelector(
      ".card_front"
    ).style.backgroundImage = `url(${currentCard.imageFront})`;

    arraySelection.push(currentCard);
    domSelection.push(card);
    if (arraySelection.length == 2) {
      checkMatch(
        arraySelection[0],
        arraySelection[1],
        domSelection[0],
        domSelection[1]
      );
      arraySelection = [];
      domSelection = [];
    }
  } else {
    card.classList.add("is-flipped");
    card.querySelector(".card_front").style.backgroundImage = "none";
  }
  done();
}

let maxPairs = 10;

function checkMatch(card1, card2, domCard1, domCard2) {
  if (card1.id === card2.id) {
    domCard1.classList.add("matched");
    domCard2.classList.add("matched");
    domCard1.style.pointerEvents = "none";
    domCard2.style.pointerEvents = "none";
    console.log(domCard1);
    console.log(domCard2);
    maxPairs--;
    return true;
  } else {
    setTimeout(() => {
      domCard1.classList.add("is-flipped");
      domCard2.classList.add("is-flipped");
    }, 1000);

    return false;
  }
}

function done() {
  if (maxPairs === 0) {
    setTimeout(() => {
      alert("Parabéns, você acertou!");
    }, 1000);
  }
}
renderBoard();

document.getElementById("restartBtn").addEventListener("click", restartGame);
function restartGame() {
  cardsObjct = shuffle(cardsObjct);
  arraySelection = [];
  domSelection = [];
  renderBoard();
  max = 10;
  //location.reload();
}
