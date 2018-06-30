// CLick on card
// Add selected
// If two cards have have selected - see if they are a match
// If they are a match add match class and remove select, so you can keep selecting


var color = ['blue', 'red', 'blue', 'red', 'green', 'yellow', 'orange', 'yellow', 'orange', 'green']

Array.prototype.shuffle = function() {
    var input = color;

    for (var i = input.length-1; i >=0; i--) {

        var randomIndex = Math.floor(Math.random()*(i+1));
        var itemAtIndex = input[randomIndex];

        input[randomIndex] = input[i];
        input[i] = itemAtIndex;
    }
    return console.log(color)
}
color.shuffle();

var cards = document.getElementsByClassName('card');

for(let i = 0; i < cards.length; i++){
  cards[i].addEventListener("click",function(){
      cards[i].classList.add(color[i]);
  });
}

const game = {
  checkIfMatch: function(){
    if( $('.selected').eq(0).attr('class') == $('.selected').eq(1).attr('class') ){
      $('selected').addClass('matched').removeClass('selected')
    }else{
      $('.selected').removeClass('selected')
    }
  },
  checkEnd: function(){
    if( $('.card').length == $('.selected').length ){
      alert("Game Over!")
    }
  }
}

$('.card').on('click', function(){
  $(this).toggleClass('selected')
  if($('.selected').length == 2){
    game.checkIfMatch()
  }
  game.checkEnd()
});

function refreshPage(){
    window.location.reload();
}
