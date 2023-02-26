const cards = document.querySelectorAll('.memory-card');
function flipCard() {
    // console.log("clicked!");
    this.classList.toggle('flip')
}
cards.forEach(card => card.addEventListener("click", flipCard))