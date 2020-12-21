var fixedRect, movRect;

function setup() {
  createCanvas(1200, 800);
  
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "blue";
  //fixedRect.debug = true;

  movRect = createSprite(400, 200, 80, 30);
  movRect.shapeColor = "blue";
  //movRect.debug = true;

}

function draw() {
  background(255,255,255); 
  
  movRect.x = World.mouseX;
  movRect.y = World.mouseY;

  if((movRect.x - fixedRect.x < movRect.width/2 + fixedRect.width/2) && 
  (fixedRect.x - movRect.x < movRect.width/2 + fixedRect.width/2) && 
  (movRect.y - fixedRect.y < movRect.height/2 + fixedRect.height/2) && 
  (fixedRect.y - movRect.y < movRect.height/2 + fixedRect.height/2)) {
    fixedRect.shapeColor = "red";
    movRect.shapeColor = "red";
  } else {
    fixedRect.shapeColor = "blue";
    movRect.shapeColor = "blue";
  }

  drawSprites();
}