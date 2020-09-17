class Division {
    constructor(x, y,w,h) {
      var options = {
        isStatic: true,
        restitution:0.3,
        friction:0.5,
        density:1.2
      }
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.w = w;
      this.h = h;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      rectMode(CENTER);
      fill("white");
      rect(pos.x, pos.y, this.w, this.h);
      pop();
    }
  };
  