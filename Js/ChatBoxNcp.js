class ChatBoxNcp {

    constructor() {
        this.para = null;
        this.buttonYes = null;
        this.buttonNo = null;
        

    }
    hide() {
    

    }

    display() {

        this.para = createP('ARE YOU OK SATISFIED WITH THE CURRENT PLAYERS ANSWER???');
        this.buttonYes = createButton('YES');
        this.buttonNo = createButton('NO');


        this.para.position(displayWidth / 2 - 80, displayHeight / 2 - 120);
        this.buttonYes.position(displayWidth / 2 + 70, displayHeight / 2);
        this.buttonNo.position(displayWidth / 2 + 90, displayHeight / 2);


        this.buttonYes.style('background-color', "green");
        this.buttonNo.style('background-color', "red");



        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
        });

    }
}
