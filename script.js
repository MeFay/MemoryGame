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
    if (!firstCard) {
      firstCard = cardsC[index];
      console.log(firstCard);
    } else if (!secondCard) {
      secondCard = cardsC[index];
      console.log(secondCard);
    }

    if (firstCard.name == secondCard.name) {
      checkMatch();
    } else{
      if(firstCard.isFlipped)
      card.classList.toggle("is-flipped");
      if(secondCard.isFlipped)
      card.classList.toggle("is-flipped");
    }
  });
});


function checkMatch() {
  if (firstCard.name === secondCard.name) {
    firstCard.isMatch = true;
    secondCard.isMatch = true;
    firstCard.canClick = false;
    secondCard.canClick = false;
    firstCard = null;
    secondCard = null;
    console.log("match");
  } 
  
}