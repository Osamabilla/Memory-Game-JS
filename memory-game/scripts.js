const cards = document.querySelectorAll('.memory-card')

let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;


function flipCard(){
    if(lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');

if (!hasFlippedCard){
    // first click
    hasFlippedCard = true;
    firstCard = this;

} else {
    secondCard = this; 

    checkForMatch()

    }
}

function checkForMatch() {
    if (firstCard.dataset.framework === secondCard.dataset.framework) {
        disableCards()
    } else {
        lockBoard = true;
        setTimeout(() => {
            unflipCards()



    }, 700);
    }
}


function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
}

function unflipCards() {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    lockBoard = false;
    resetBoard();
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];

    [firstCard. secondCard] = [null, null];
}

(function shuffle () {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12)
        card.style.order = randomPos;
    });
})();

cards.forEach(card => card.addEventListener('click', flipCard));