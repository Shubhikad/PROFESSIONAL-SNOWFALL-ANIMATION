class Snow{
    constructor(x,y){
        var options = {
            isStatic:false,
			restitution :0,
            friction :1,
        }
        this.snow = Bodies.rectangle(x,y,20,20, options)
        this.x = x
        this.y = y
        this.width = 200
        this.height = 200
        this.image = loadImage("snow4.webp")
        World.add(world, this.snow)
    }
    display(){
        push()
        translate(this.snow.position.x, this.snow.position.y);
        
       image(this.image, 0,0,60,60);
        
        pop()

    }
}