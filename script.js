let images = ['Images/BarMinder.png', 'Images/BatMinder.png', 'Images/CowMinder.png', 'Images/FuzzyMinder.png', 'Images/AutumnMinder.png', 'Images/Bigodes.png', 'Images/MinderGamer.png', 'Images/FemaleMinder.png', 'Images/GentlemanMinder.png', 'Images/MinderBiker.png'];

// Duplicate the array
images = images.concat(images);

// Function to shuffle array
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// Shuffle images
images = shuffle(images);

// Now you can assign each image from the shuffled array to a card
let cards = document.querySelectorAll('.card');
cards.forEach((card, index) => {
  // Here you can assign the image to the card
  // For example, if you're using a div with a background image, you could do:
  let cardFront = card.querySelector('.card_front');
  cardFront.style.backgroundImage = `url(${images[index]})`;
});

// Add event listener to each card
cards.forEach((card) => {
  card.addEventListener('click', function() {
    card.classList.toggle('is-flipped');
  });
});


/*
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
}*/