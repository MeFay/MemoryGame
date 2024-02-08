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

cardsObjct = cardsObjct.concat(cardsObjct);

function shuffle(array) {
  var currentIndex = array.length,
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

function handleCardClick(index, card) {
  let currentCard = cardsObjct[index];
  if (card.classList.contains("is-flipped")) {
    card.classList.remove("is-flipped");
    card.querySelector(".card_front").style.backgroundImage = `url(${currentCard.imageFront})`;
  } else {
    card.classList.add("is-flipped");
    card.querySelector(".card_front").style.backgroundImage = "none";
  }
}

renderBoard();

document.getElementById("restartBtn").addEventListener("click", restartGame);
function restartGame() {
  cardsObjct = shuffle(cardsObjct);
  renderBoard();
}