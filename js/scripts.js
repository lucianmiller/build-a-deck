$(document).ready(function () {
  $("form#button").submit(function(event){
    const suits = ["of clubs", "of diamonds", "of spades", "of hearts"];
    console.log(suits);
    const ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
    console.log(ranks);
    event.preventDefault();
  });
});