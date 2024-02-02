//----------Variables----------\\
let cards = document.querySelectorAll("button");

let buttons = document.getElementsBy.getElementsByTagName("button");

//----------Functions----------\\

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

function flipCard() {
  this.classList.toggle("flip");
}
cards.forEach((flipCard) => flipCard.addEventListener("click", flipCard));
