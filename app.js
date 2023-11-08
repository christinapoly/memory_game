const cardArray = [
  {
    name: 'fries',
    img: 'img/fries.png'
  },
  {
    name: 'cheeseburger',
    img: 'img/cheeseburger.png'
  },
  {
    name: 'hotdog',
    img: 'img/hotdog.png'
  },
  {
    name: 'ice-cream',
    img: 'img/ice-cream.png'
  },
  {
    name: 'milkshake',
    img: 'img/milkshake.png'
  },
  {
    name: 'pizza',
    img: 'img/pizza.png'
  },
  {
    name: 'fries',
    img: 'img/fries.png'
  },
  {
    name: 'cheeseburger',
    img: 'img/cheeseburger.png'
  },
  {
    name: 'hotdog',
    img: 'img/hotdog.png'
  },
  {
    name: 'ice-cream',
    img: 'img/ice-cream.png'
  },
  {
    name: 'milkshake',
    img: 'img/milkshake.png'
  },
  {
    name: 'pizza',
    img: 'img/pizza.png'
  },
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
    card.setAttribute('src', 'img/blank.png');
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
      //make the chosen cards white
      cards[optionOneId].setAttribute('src','img/blank.png');
      cards[optionTwoId].setAttribute('src','img/blank.png');
      alert('You have clicked the same image!');
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert("You found a match!");
      //make the chosen cards white
      cards[optionOneId].setAttribute('src','img/white.png');
      cards[optionTwoId].setAttribute('src','img/white.png');
      //make them not clickable
      cards[optionOneId].removeEventListener('click', flipCard);
      cards[optionTwoId].removeEventListener('click', flipCard);
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute('src','img/blank.png');
      cards[optionTwoId].setAttribute('src','img/blank.png');
      alert('Try again!');
    }
    //start the process again
    cardsChosen = [];
    cardsChosenIds = [];
    resultDisplay.innerHTML = cardsWon.length;
    //when you find all pairs
    if (cardsWon.length === (cardArray.length/2)) {
      resultDisplay.innerHTML = 'Congratulations! You found them all!'
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

