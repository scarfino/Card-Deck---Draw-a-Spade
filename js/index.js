/*
@scarfino 2018
Card Deck draw randomizer, continues to draw cards until a Spade is drawn.
*/

let cards = ['Diamond ◆', 'Spade ♠', 'Heart ♥', 'Club ♣'];

let currentCard = 'Heart ♥';

while (currentCard !== 'Spade ♠') {
  console.log(currentCard);
  currentCard = cards[Math.floor(Math.random() * 4)];

}
console.log('You Found a Spade ♠!')
