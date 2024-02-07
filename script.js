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
      !cards[index].canClick ||
      cards[index].isFlipped ||
      cards[index].isMatch
    ) {
      // Se a carta não pode ser clicada, já está virada ou já foi encontrada como par, não fazer nada
      return;
    }

    card.classList.toggle("is-flipped");
    cards[index].isFlipped = true;
    if (!card1) {
      card1 = card;
      console.log(card1);
    } else if (!card2) {
      card2 = card;
      console.log(card2);
    }
    checkMatch();
  });
});

cards = images.map((image, index) => {
  return {
    id: `card${index + 1}`,
    nome: image,
    isFlipped: false,
    isMatch: false,
    canClick: true,
  };
});
console.log(cards);

function checkMatch() {
  if (card1 && card2) {
    if (card1.id == card2.id) {
      card1.isMatch = true;
      card2.isMatch = true;
      card1.canClick = false;
      card2.canClick = false;
      card1.style.backgroundImage = `url(${images[card1.id - 1]})`;
      card2.style.backgroundImage = `url(${images[card2.id - 1]})`;
      card1 = null;
      card2 = null;
      console.log("match");
    } else {
      // Se as cartas não formam um par, vire-as de volta após um curto intervalo
      setTimeout(function () {
        card1.classList.remove("is-flipped");
        card2.classList.remove("is-flipped");
        card1.isFlipped = false;
        card2.isFlipped = false;
      }, 1000);
    }
    // Limpar as referências para as cartas
    card1 = null;
    card2 = null;
  }
}
