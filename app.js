const cardArray = [
  {
    name: 'fox',
    img: 'img/fox.jpg'
  },
  {
    name: 'bird',
    img: 'img/bird.jpg'
  },
  {
    name: 'deer',
    img: 'img/deer.jpg'
  },
  {
    name: 'rabbit',
    img: 'img/rabbit.jpg'
  },
  {
    name: 'raccoon',
    img: 'img/raccoon.jpg'
  },
  {
    name: 'tiger',
    img: 'img/tiger.jpg'
  },
  {
    name: 'fox',
    img: 'img/fox.jpg'
  },
  {
    name: 'bird',
    img: 'img/bird.jpg'
  },
  {
    name: 'deer',
    img: 'img/deer.jpg'
  },
  {
    name: 'rabbit',
    img: 'img/rabbit.jpg'
  },
  {
    name: 'raccoon',
    img: 'img/raccoon.jpg'
  },
  {
    name: 'tiger',
    img: 'img/tiger.jpg'
  } 
]


//shuffle array randomly
cardArray.sort(() => 1/2 - Math.random());

const gridDisplay = document.getElementById('grid');
const resultDisplay = document.querySelector('#result');

//create the empty arrays
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];


//create the board
function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement('img'); 
    card.setAttribute('src', 'img/pattern.png');
    card.setAttribute('data-id', i);
    card.addEventListener('click', flipCard);
    gridDisplay.append(card); //add the images in the div
    
  }
}




//check for a match
function checkMatch() {
  const cards = document.querySelectorAll('img');
  const optionOneId = cardsChosenIds[0];
  const optionTwoId = cardsChosenIds[1];
 
    if (optionOneId == optionTwoId) {
      //picked the same img
      cards[optionOneId].setAttribute('src','img/pattern.png');
      cards[optionTwoId].setAttribute('src','img/pattern.png');
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      //found a match - make the chosen cards white
      cards[optionOneId].setAttribute('src','img/white.jpg');
      cards[optionTwoId].setAttribute('src','img/white.jpg');
      //make them not clickable
      cards[optionOneId].removeEventListener('click', flipCard);
      cards[optionTwoId].removeEventListener('click', flipCard);
      cardsWon.push(cardsChosen);
    } else {
      //try again
      cards[optionOneId].setAttribute('src','img/pattern.png');
      cards[optionTwoId].setAttribute('src','img/pattern.png');
    }
    //start the process again
    cardsChosen = [];
    cardsChosenIds = [];
    resultDisplay.innerHTML = cardsWon.length;
    //when you find all pairs
    if (cardsWon.length === (cardArray.length/2)) {
      resultDisplay.innerHTML = '6/6! <a href="index.html">Play again</a>';
    }
}



//select the card, add name and image
function flipCard() {
  let cardId = this.getAttribute('data-id');
  cardsChosen.push(cardArray[cardId].name); //Add the name of the card in the new array
  cardsChosenIds.push(cardId);
  this.setAttribute('src', cardArray[cardId].img); //Add  the image in the new array

  if (cardsChosen.length ===2) {
    setTimeout(checkMatch,500)
  }
}



createBoard();

