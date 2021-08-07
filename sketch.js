var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(100, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect1 = createSprite(200, 400, 50, 80);
  fixedRect1.shapeColor = "green";
  fixedRect2 = createSprite(300, 400, 50, 80);
  fixedRect2.shapeColor = "green";
  fixedRect3 = createSprite(400, 400, 50, 80);
  fixedRect3.shapeColor = "green";
  fixedRect4 = createSprite(500, 400, 50, 80);
  fixedRect4.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}

function draw() {
 background(0,0,0);  
   movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

    if (isTouching(movingRect,fixedRect3)){
      movingRect.shapeColor = "red";
      fixedRect2.shapeColor = "red";
    }
      else
      {
        movingRect.shapeColor = "blue";
          fixedRect2.shapeColor = "green";
      }
    
  drawSprites();
}
  function isTouching(object1,object2){
    
    if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2
      && object1.y - object2.y < object2.height/2 + object1.height/2
      && object2.y - object2.y < object2.height/2 + object1.height/2) {
      
  
return true;
}
else { 
return false;
}
  }