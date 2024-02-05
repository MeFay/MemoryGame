

// I added this for the cards
var cards = document.querySelectorAll('.card');

[...cards].forEach((card)=>{
  card.addEventListener( 'click', function() {
    card.classList.toggle('is-flipped');
  });
});

//-------------------this--------------------------
var cardFront = document.querySelector('.card-front');
function shuffle(cardFront) {
  let currentIndex = cardFront.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    
    temporaryValue = cardFront[currentIndex];
    cardFront[currentIndex] = cardFront[randomIndex];
    cardFront[randomIndex] = temporaryValue;
  }

  return cardFront;
}