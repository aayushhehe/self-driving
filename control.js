class Controls{
    constructor()  //constructor called
    {
        this.forward = false;
        this.left = false;
        this.right = false;
        this.reverse = false;

        this.#addKeyboardListeners();
    }


    //keyboard control listeners
    #addKeyboardListeners(){
        document.onkeydown=(event)=>{
            switch(event.key){
                case "a":
                    this.left = true;
                    break;
                case "d":
                    this.right = true;
                    break;
                case "w":
                    this.forward = true;
                    break;
                case "s":
                    this.reverse = true;
                    break;
            }
            // console.table(this); //debug
        }
        //to change the control from toggle to hold
        document.onkeyup=(event)=>{             
            switch(event.key){
                case "a":
                    this.left = false;
                    break;
                case "d":
                    this.right = false;
                    break;
                case "w":
                    this.forward = false;
                    break;
                case "s":
                    this.reverse = false;
                    break;
            }
            // console.table(this); //debug
        }
    }
}