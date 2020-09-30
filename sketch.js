var movingRect,fixedRect;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(300,200,70,50); 
  movingRect=createSprite(700,200,50,70);
   movingRect.shapeColor="green"; fixedRect.shapeColor="green";
   movingRect.debug=true;
   fixedRect.debug=true;
fixedRect.velocityX=3;
movingRect.velocityX=-3;

  }

function draw() {
  background(0);
 // movingRect.x=mouseX;
   //movingRect.y=mouseY;
if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 && 
  fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2){
     movingRect.velocityX=movingRect.velocityX*(-1);
     fixedRect.velocityX=fixedRect.velocityX*(-1);
     }
  if ( movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2&&
    fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2) {
      movingRect.velocityY=movingRect.velocityY*(-1);
      fixedRect.velocityY=fixedRect.velocityY*(-1);
  }
  drawSprites();
}