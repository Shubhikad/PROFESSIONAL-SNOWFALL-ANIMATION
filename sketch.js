
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint;

var backgroundImg, backgroundImg1, backgroundImg2, backgroundImg3, number;
var snow;
function setup() {

  engine = Engine.create()
  world = engine.world
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  backgroundImg1 = loadImage("snow1.jpg")
  backgroundImg2 = loadImage("snow2.jpg")
  backgroundImg3 = loadImage("snow3.jpg")

  number1 = Math.round(random(1,3))
  number2 = number1;
  console.log(number1)

  var snowX = 0

  
  snow = new Snow(random(0,800)),(random(0,400))
  snow1 = new Snow((random(0,800)),(random(0,400)))
  snow2 = new Snow((random(0,800)),(random(0,400)))
  snow3 = new Snow((random(0,800)),(random(0,400)))
  snow4 = new Snow((random(0,800)),(random(0,400)))
  snow5 = new Snow((random(0,800)),(random(0,400)))
  snow6 = new Snow((random(0,800)),(random(0,400)))
  snow7 = new Snow((random(0,800)),(random(0,400)))
  snow8 = new Snow((random(0,800)),(random(0,400)))
  snow9 = new Snow((random(0,800)),(random(0,400)))
  snow10 = new Snow((random(0,800)),(random(0,400)))
  snow11 = new Snow((random(0,800)),(random(0,400)))
  snow12 = new Snow((random(0,800)),(random(0,400)))
  snow13 = new Snow((random(0,800)),(random(0,400)))
  snow14 = new Snow((random(0,800)),(random(0,400)))

}

function draw() {

  if(number2 === 1){
    background(backgroundImg1);
  }
  if(number2 === 2){
    background(backgroundImg2);
  }

  if(number2 === 3){
    background(backgroundImg3);
  }
 
  var snowX = snowX + 1

  snow.display()
  snow1.display()
  snow2.display()
  snow3.display()
  snow4.display()
  snow5.display()
  snow6.display()

  snow7.display()
  snow8.display()
  snow9.display()
  snow10.display()

  snow11.display()
  snow12.display()
  snow13.display()
  snow14.display()

    drawSprites();
}


  



