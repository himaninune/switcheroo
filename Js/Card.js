class Card {
  constructor() {
    this.type = null;
    this.content = null;
    this.id = null;
  }

 getCardInfo() {
    

    var cardsInfoRef = database.ref('cardsInGame');
    var  YourAsyncFunctionName = (data) => { allCards = data.val(); }
    cardsInfoRef.on("value", YourAsyncFunctionName);
    setTimeout(distributeCards, 5000);
    

  }
}



