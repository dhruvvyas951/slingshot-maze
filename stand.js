class stand {
    
    constructor(x, y) {
        
        var options = {
           
            isStatic:true

        }
       
        this.body = Bodies.rectangle(x, y, 200,20, options);
        this.width = 200;
        this.height = 20;
        World.add(world, this.body);

      }

      display(){

        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        fill(76, 72, 72)
        rect( 0, 0, this.width, this.height);
        pop();
      }
}

