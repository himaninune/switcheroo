class Game {
  constructor() {

  }

  getState() {
    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value", function (data) {
      gameState = data.val();
    })

  }

  update(state) {
    database.ref('/').update({
      gameState: state
    });
  }

  async start() {
    if (gameState === 0) {
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if (playerCountRef.exists()) {
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }


  }

  play() {
    console.log('play');
    form.hide();

    Player.getPlayerInfo();

    if (allPlayers !== undefined) {
      console.log('insideOuterIf');

      for (var plr in allPlayers) {
        console.log('insideOuterFor',plr,player.index);


        if (plr === "player" + player.index) {
          console.log('insideInnerIf');


          if (allPlayers[plr].status === "current") {
            console.log('if status is current');

            chatCp.display();

          }
          else {
            chatNcp.display();

          }
        }
      }

      for (var x = 0; x < arrplayer1.length, count < arrplayer1.length; x++ ){
        div = createDiv(arrplayer1[x].cardContent)
        div.position(100, 100*(x + 1));
        div.class('Card');
        count++
      }



    }


    drawSprites(); 
  }
  
}
