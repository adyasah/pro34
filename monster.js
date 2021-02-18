class Monster{
    constructor(x,y,w,h){
        this.body=Bodies.rectangle(x,y,w,h)
        this.image = loadImage("images/m.png");
        //physics engine body, physics engine will take care of rotation
        World.add(world,this.body)
        this.width=w
        this.height=h
    }

    display(){
        var pos=this.body.position
        var angle = this.body.angle;
        push()
        translate(pos.x,pos.y)
        
        rotate(angle);
        angleMode(RADIANS)
        imageMode(CENTER)
        image(this.image, 0,0, this.width,this.height);
        pop()
    }
}
