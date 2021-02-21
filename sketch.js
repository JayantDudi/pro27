
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	log1 = new Log(200,100,40,20);
	log2 = new Log(240,100,40,20);
	log3 = new Log(280,100,40,20);
	log4 = new Log(320,100,40,20);
	log5 = new Log(340,100,40,20);

	bob1 = new Bob(400,450,50)
	bob2 = new Bob(350,450,50);
	bob3 = new Bob(300,450,50);
	bob4 = new Bob(450,450,50);
	bob5 = new Bob(500,450,50);

	slingShot1 = new SlingShot(bob1.body,log1.body); 
	slingShot3 = new SlingShot(bob3.body,log3.body); 
	slingShot2 = new SlingShot(bob2.body,log2.body); 
	
	slingShot4 = new SlingShot(bob4.body,log4.body); 
	slingShot5 = new SlingShot(bob5.body,log5.body); 
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

	log1.display();
	log2.display();
	log3.display();
	log4.display();
	log5.display();
	
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();

	slingShot1.display();
	slingShot3.display();
	slingShot2.display();
	
	slingShot4.display();
	slingShot5.display();

		
	

	
	
	
	keyp();

  drawSprites();
 
}


function keyp(){
	if(keyDown(UP_ARROW)){
		Matter.Body.applyForce(bob5.body,bob5.body.position,{x:2,y:-0.5});
		}

		
}
