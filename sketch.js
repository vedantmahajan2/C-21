var fixedRect, movingRect;
var o1,o2,o3,o4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

o1=createSprite(100,100,50,50);
o1.shapeColor="blue";

o2=createSprite(200,100,50,50);
o2.shapeColor="blue";

o3=createSprite(300,100,50,50);
o3.shapeColor="blue";

o4=createSprite(400,100,50,50);
o4.shapeColor="blue";
o3.velocityY=-5;
o4.velocityY=5;
}

function draw() {
  background(0,0,0);  
  o3.x = World.mouseX;
  o3.y = World.mouseY;

 if (isTouching(o3,o2)){
o2.shapeColor="orange";
o3.shapeColor="orange";
 }
 else{
  o2.shapeColor="lightblue";
  o3.shapeColor="lightblue";
 }
  
 bounceOff(o3,o4);
 
  drawSprites();
}

function isTouching(o1,o2){
  if (o1.x - o2.x < o2.width/2 + o1.width/2
    && o2.x - o1.x < o2.width/2 + o1.width/2
    && o1.y - o2.y < o2.height/2 + o1.height/2
    && o2.y - o1.y < o2.height/2 + o1.height/2) {
  return true;
}
else {
return false;
}
}

function bounceOff(o1,o2){
  if (o1.x - o2.x < o2.width/2 + o1.width/2
    && o2.x - o1.x < o2.width/2 + o1.width/2){
    o1.velocityX=o1.velocityX*(-1);
    o2.velocityX=o2.velocityX*(-1);
    }
if (o1.y - o2.y < o2.height/2 + o1.height/2
  && o2.y - o1.y < o2.height/2 + o1.height/2) {
    o1.velocityY=o1.velocityY*(-1);
    o2.velocityY=o2.velocityY*(-1);
}

}   
  