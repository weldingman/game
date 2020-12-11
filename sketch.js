var x = 100;
var y = 100;
var w = 20;
var h = 20;
var speed = 0.4;
var speedX = 0;
var speedY = 0;
var accX = 0;
var accY = 0;
var floorX = 0;
var floorY = 380;
var floorW = 400;
var floorH = 10;
var jumpForce = 15;
var gravity = 0.5;
var frictionX = 0.8;
var frictionY = 0.98;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  if(y + h + speedY < floorY){
    speedY += gravity;
  }
  else{
    speedY = 0;
    y = floorY - h;
    if (keyIsDown(UP_ARROW)) {
      accY -= jumpForce;
    }
  }
  
  if (keyIsDown(LEFT_ARROW)) {
    accX -= speed;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    accX += speed;
  }
 
  speedX += accX;
  speedY += accY;
  
  speedX *= frictionX;
  speedY *= frictionY;
  
  x += speedX;
  y += speedY;
  
  accX = 0;
  accY = 0;
  
  noFill();
  stroke(0);
  rect(x, y, w, h);
  rect(floorX, floorY, floorW, floorH);
}
