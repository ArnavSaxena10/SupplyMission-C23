var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, side1, side2, side3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(400, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(400, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(400, 665, 800,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(400 , 200 , 5 , {restitution:0.7, isStatic:true});
	World.add(world, packageBody);

	side1 = Bodies.rectangle(400,650,200,20,{isStatic:true});
	World.add(world, side1);

	side2 = Bodies.rectangle(300,610,20,100,{isStatic:true});
	World.add(world, side2);

	side3 = Bodies.rectangle(500,610,20,100,{isStatic:true});
	World.add(world, side3);


	

	//Create a Ground
	ground = Bodies.rectangle(400, 650, 800, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
  keyPressed();
  
  fill(255,0,0);
  rectMode(CENTER)
  rect(side1.position.x,side1.position.y,200,20);

  rectMode(CENTER)
  rect(side2.position.x,side2.position.y,20,100);

  rectMode(CENTER)
  rect(side3.position.x,side3.position.y,20,100);
 
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(packageBody,false);
  }
}



