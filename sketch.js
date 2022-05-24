
function preload(){
  //pre-load images
  trackImage = loadImage("path.png")
  boyRunning = loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200, 200, 400, 400)
  path.addImage(trackImage)
  path.velocityY = 4
  path.scale = 1.2

  boy = createSprite(200, 350)
  boy.addAnimation("Running",boyRunning)
  boy.scale = 0.08

  leftEdge1 = createSprite(0, 0, 100, 100)
  rightEdge1 = createSprite(400, 0, 100, 100)
  leftEdge1.visible = false
  rightEdge1.visible = false
}

function draw() {
  background(0);

  if(path.y > 400){
    path.y = 100
  }

  boy.x = mouseX
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftEdge1)
  boy.collide(rightEdge1)

  drawSprites()

  
}
