var fixedRect;
var movingRect;
var car, wall;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(400, 100, 50, 50);
  movingRect.velocityY = 5;

  fixedRect.shapeColor = 'red';
  movingRect.shapeColor = 'red';

  car = createSprite(200, 100, 40, 20);
  car.velocityX = 5;

  wall = createSprite(600, 100, 20, 40);
}

function draw() {
  background(0,0,0);  
  drawSprites();

  edges = createEdgeSprites();

  //movingRect.x = mouseX;
  //movingRect.y = mouseY;

  //changeColor();

    bounceOff(car, wall);

  console.log(edges);
}

/*function changeColor() {
  if(movingRect.x - fixedRect.x <= movingRect.width/2 + fixedRect.width/2 && fixedRect.x - movingRect.x <= movingRect.width/2 + fixedRect.width/2 && movingRect.y - fixedRect.y <= movingRect.height/2 + fixedRect.height/2 && fixedRect.y - movingRect.y <= movingRect.height/2 + fixedRect.height/2) {
    fixedRect.shapeColor = 'blue';
  } else{
    fixedRect.shapeColor = 'red';
  }
}*/

function bounceOff(object1, object2) {
  if(object1.x - object2.x <= object1.width/2 + object2.width/2
    && object2.x - object1.x <= object1.width/2 + object2.width/2) {

    object1.velocityX = -object1.velocityX

  } else if(object1.y - object2.y <= object1.height/2 + object2.height/2 &&
    object2.y - object1.y <= object1.height/2 + object2.height/2) {

      object1.velocityY = -object1.velocityY

    }
}

function isTouching(object1, object2) {
  if(object1.x - object2.x <= object1.width/2 + object2.width/2 &&
    object2.x - object1.x <= object1.width/2 + object2.width/2 &&
    object1.y - object2.y <= object1.height/2 + object2.height/2 &&
    object2.y - object1.y <= object1.height/2 + object2.height/2) {

      return true;

  }  else{
    return false;
  }
}

/*function bounceOffEdges() {
  if(movingRect.x + movingRect.width >= edges) {

  }
}*/