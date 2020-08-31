var canvas;
var form;
var database;
var allCards, shuffledCards;
var gameState = 0;
var playerCount;
var allPlayers;
var player;
var game;
var chatCp, chatNcp;
var count = 0;
var div;
var card;



function setup() {
  canvas = createCanvas(displayWidth - 20, displayHeight - 30);
  database = firebase.database();
  game = new Game();
  game.start();
  card = new Card();
  card.getCardInfo();
  chatCp = new ChatBoxCp();
  chatncp = new ChatBoxNcp();
  console.log(allCards);



  

}

function draw() {
  background(255, 255, 255);
  if (playerCount === 2) {
    game.update(1);
  }
  if (gameState === 1) {
    clear();
    game.play();

    if(allCards !== undefined){

      
    }
  }
  
  drawSprites();
}

function distributeCards(){

  var arrplayer1 = [];
  var arrplayer2 = [];

  if(allCards !== undefined){

    console.log(allCards);
    var shuffledCards = shuffle(allCards);
    console.log(shuffledCards);


    for (var i = 1; i <= 20; i++) {
      if (i === 0 || i % 2 === 0) {
        arrplayer1.push(shuffledCards[i]);
        
  
  
      }
      else {
        arrplayer2.push(shuffledCards[i]);
      }
    }  
    console.log(arrplayer1);
    console.log(arrplayer2);

  }
  
  
  

}
