class Player {
  constructor() {
    this.index = null;
    this.name = null;
    this.cards = [];
    this.status = null;

  }

  getCount() {
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value", (data) => {
      playerCount = data.val();
    })
  }

  updateCount(count) {
    database.ref('/').update({
      playerCount: count
    });
  }

  update() {
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name: this.name,
      cards: this.cards,
      status: this.status
    });
  }

  static getPlayerInfo() {
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value", (data) => {
      allPlayers = data.val();
    })
  }
}
