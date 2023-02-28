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
      if (firstCard.dataset.name === secondCard.dataset.name) {
        // a match
        firstCard.removeEventListener('click', flipCard);
        firstCard.removeEventListener('click', flipCard);
      } else {
        //not a match
        setTimeout(() => {
          firstCard.classList.remove('flip');
          secondCard.classList.remove('flip');
        }, 1600)
      }
    }
}

cards.forEach(card => card.addEventListener("click", flipCard))