function setup() {
  createCanvas(800,400);

    //creating blocks in the shape of pyramid

    block1 = newBlock(330,235,20,30);
    block2 = newBlock(360,235,20,30);
    block3 = newBlock(390,235,20,30);
    block4 = newBlock(420,235,20,30);
    block5 = newBlock(450,235,20,30);
    block6 = newBlock(360,195,20,30);
    block7 = newBlock(390,195,20,30);
    block8 = newBlock(420,195,20,30);
    block9 = newBlock(390,155,20,30);

    polygon = bodies.circle(50,200,50);
    World.add(World,polygon);

    slingshot = newSlingshot(this.polygon,{x:100,y:200})

    ImageMode(CENTER)
    Image(polygon_img,polygon.position.x,polygon.position.y,40,40)

  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}