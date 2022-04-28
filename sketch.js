var soloinvisivel
var solo , solo_image
var trex ,trex_running;
var nuvem , nuvem_image
var cacto , cacto_image1 , cacto_image2 , cacto_image3 , cacto_image4 , cacto_image5 , cacto_image6
function preload(){
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  solo_image = loadImage("ground2.png")
  nuvem_image = loadImage("cloud.png")
  cacto_image1 = loadImage("obstacle1.png")
  cacto_image2 = loadImage("obstacle2.png")
  cacto_image3 = loadImage("obstacle3.png")
  cacto_image4 = loadImage("obstacle4.png")
  cacto_image5 = loadIamge("obstacle5.png")
  cacto_image6 = loadImage("obstacle6.png")
}

function setup(){
  createCanvas(600,200)
  
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.8
  
  solo = createSprite(300,185,600,10)
  solo.addImage("chao",solo_image)
  
  soloinvisivel = createSprite(300,195,600,10)
  soloinvisivel.visible = 0

}

function draw(){
  background(255)
  
  if (keyDown("space")&& trex.y>=150) {
    trex.velocityY = -12
  }
  trex.velocityY = trex.velocityY +0.8
  trex.collide(soloinvisivel)
  
  if (solo.x<0) {
    solo.x = 300  
  }
  solo.velocityX = -6
  
  criadorDeNuvens()
  criadorDeCactos()
  drawSprites();

}
function criadorDeNuvens() {
if (frameCount%50===0) {
  nuvem = createSprite(620,40)
  nuvem.addImage("nuvem" ,nuvem_image)
  nuvem.velocityX = -5 
  nuvem.y = Math.round(random(40,70))
  trex.depth = nuvem.depth
  trex.depth += 1
}
}
function criadorDeCactos () {
 if (frameCount%100===0) {
  cacto = createSprite(620,175) 
  cacto.velocityX = -5
  cacto.scale = 0.8
  var numero = Math.round(random(1,6))
  switch (numero) {
   case 1: cacto.addImage(cacto_image1) 
   break;
   case 2: cacto.addImage(cacto_image2)
   break;
   case 3: cacto.addImage(cacto_image3)
   break;
   case 4: cacto.addImage(cacto_image4)
   break;
   case 5: cacto.addImage(cacto_image5)
   break;
   case 6: cacto.addImage(cacto_image6)
   break;
   default: break;
  }
}
}