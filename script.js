const cards = document.querySelectorAll('.memory-card');

let hasCardFlipped = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  if (lockBoard) return;
    // console.log("clicked!");
    this.classList.add('flip');

    if (!hasCardFlipped) {
        // 1. click
        hasCardFlipped = true;
        firstCard = this;
        //  console.log("click 1", hasCardFlipped, firstCard)
    } else {
      hasCardFlipped = false;
      secondCard = this;
      // find match
      checkForMatch()
    }
}

function checkForMatch() {
  firstCard.dataset.name === secondCard.dataset.name ? lockCards(): unflipCards();
}

function lockCards() {
  firstCard.removeEventListener('click', flipCard);
  firstCard.removeEventListener('click', flipCard);
}
function unflipCards() {
  lockBoard = true;
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    lockBoard = false;
  }, 1600)
}

cards.forEach(card => card.addEventListener("click", flipCard))