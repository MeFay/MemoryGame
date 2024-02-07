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

images = shuffle(images);
let cards = document.querySelectorAll(".card");

let cardsC = [];
cardsC = images.map((image, index) => {
  return {
    id: `card${index + 1}`,
    name: image,
    isFlipped: false,
    isMatch: false,
    canClick: true,
  };
});
console.log(cardsC);

cards.forEach((card, index) => {
  let cardFront = card.querySelector(".card_front");
  cardFront.style.backgroundImage = `url(${images[index]})`;
});

let firstCard = {};
let secondCard = {};
// Add event listener to each card
/*
cards.forEach((card, index) => {
  card.addEventListener("click", function () {
    if (
      !cardsC[index].canClick ||
      cardsC[index].isFlipped ||
      cardsC[index].isMatch
    ) {
      return;
    }
    card.classList.toggle("is-flipped");
    cardsC[index].isFlipped = true;

    if (!card1) {
      card1 = cardsC[index];
      console.log(card1);
    } else if (!card2) {
      card2 = cardsC[index];
      console.log(card2);
    }

    console.log(card1.name, card2.name);
    checkMatch();
  });
});
*/

function flipCard(card) {
  card.classList.toggle("is-flipped");
}

cards.forEach((card, index) => {
  card.addEventListener("click", function () {
    if (
      !cardsC[index].canClick ||
      cardsC[index].isFlipped ||
      cardsC[index].isMatch
    ) {
      return;
    }

    flipCard(card);

    cardsC[index].isFlipped = true;

    if (!firstCard.name) { // Verifica se firstCard não tem um nome
      firstCard = cardsC[index];
      console.log(firstCard);
      console.log(firstCard.id)
    } else if (!secondCard.name) { // Verifica se secondCard não tem um nome
      secondCard = cardsC[index];
      console.log(secondCard);
      console.log(firstCard.id)
    }

    console.log(firstCard.name, secondCard.name);
    checkMatch();
  });
});

function checkMatch() {
  if (firstCard.name === secondCard.name) {
    firstCard.isMatch = true;
    secondCard.isMatch = true;
    firstCard.canClick = false;
    secondCard.canClick = false;
    console.log("match");
  } else {
    setTimeout(() => {
      flipCard(document.getElementById(images.getElementById(firstCard.id)));
      flipCard(document.getElementById(images.getElementById(firstCard.id)));
      console.log("not match");
    }, 1000); // Ajuste o tempo de atraso conforme necessário
  }

  firstCard = {};
  secondCard = {};
}
