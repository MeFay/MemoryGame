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

let card1 = null;
let card2 = null;
// Add event listener to each card
cards.forEach((card, index) => {
  card.addEventListener("click", function () {
    if (
      !cardsC[index].canClick ||
      cardsC[index].isFlipped ||
      cardsC[index].isMatch
    ) {
      // Se a carta não pode ser clicada, já está virada ou já foi encontrada como par, não fazer nada
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

function checkMatch() {
  if (card1.name === card2.name) {
    card1.isMatch = true;
    card2.isMatch = true;
    card1.canClick = false;
    card2.canClick = false;
    console.log("match");
  } else {
    card1.isFlipped = false;
    card2.isFlipped = false;
    card1.canClick = true;
    card2.canClick = true;
  }
  card1 = null;
  card2 = null;
  console.log("match");
}
