class Ball {
  constructor(x, y, r) {

  var options = { 
    density: 1, 
    frictionAir: 0.005
  }
    
    this.x=x
    this.y=y
    this.r=r
    this.image=loadImage("images/Superhero02.png")
    this.body = Bodies.circle(this.x,this.y,(this.r)/2,options)
    World.add(world, this.body);
  }
  
    display() {
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER)
      image(this.image,0,0, this.body.position.x, this.body.position.y )
      ball.scale=0.01
     // ellipse(0, 0, this.width, this.height);
      pop();
    }
}
