var fixedRect , movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(200, 200, 50, 50);
  fixedRect.shapeColor="red";
  fixedRect.debug=true;

  movingRect=createSprite(400, 100, 20, 50);
  movingRect.shapeColor="red";
  movingRect.debug=true;

}

function draw() {
  background(0);  

  movingRect.x=mouseX;
  movingRect.y=mouseY;

  if (movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 &&
      fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2 &&
      movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2 &&
      fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2) {

    fixedRect.shapeColor="green";
    movingRect.shapeColor="green";


  } else {
    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";
  }



  drawSprites();
}