class Barrel extends BaseClass{
    constructor(x,y){
      super(x,y,20,20);
      this.image = loadImage("images/barrel.png");
    }
    display(){
        super.display();
    }
  }