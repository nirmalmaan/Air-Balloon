var balloon,balloonImage1,balloonImage2;
var edge1
var edge2
var edge3
var edge4
// create database and position variable here

function preload(){
   bg =loadImage("cityImage.png");
   balloonImage1=loadAnimation("hotairballoon1.png");
}
//Function to set initial environment
function setup() {

  edges();
  
  createCanvas(1500,700);

  balloon=createSprite(250,450,150,150);
  balloon.addAnimation("hotAirBalloon",balloonImage1);
  balloon.scale=0.5;

  
 
  

  textSize(20); 
}

// function to display UI
function draw() {
  background(bg);
  createEdgeSprites();

  if(keyDown(LEFT_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage1);
    //write code to move air balloon in left direction
    balloon.velocityX=-1
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage1);
    balloon.velocityX=1
    //write code to move air balloon in right direction
  }
  else if(keyDown(UP_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage1);
    balloon.velocityY=-1;
    //write code to move air balloon in up direction
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage1);
    balloon.velocityY=1;
    //write code to move air balloon in down direction
  }

 
balloon.bounceOff(edge1);
balloon.bounceOff(edge2);
balloon.bounceOff(edge3);
balloon.bounceOff(edge4);

  drawSprites();
  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air Balloon!",40,40);

}