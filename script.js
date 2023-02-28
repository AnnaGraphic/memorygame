const cards = document.querySelectorAll('.memory-card');

let hasCardFlipped = false;
let firstCard, secondCard;

function flipCard() {
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
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
  }, 1600)
}

cards.forEach(card => card.addEventListener("click", flipCard))