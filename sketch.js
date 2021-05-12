var  soldier;
//var ground;
var bgImg;
var bg;
var soldier1, enemy1,bomb1

var PLAY =1;
var END = 0;


function preload(){
bgImg = loadImage("finalbg.jpg");
soldier1 = loadImage("soldier1.png")
rope = loadImage("rope5.png");
enemy1 = loadImage("terr.png");
bomb1 = loadImage("bomb.png");
start1 = loadImage("start.png");
reset1 = loadImage("gameOver.png");



}

function setup(){
var canvas = createCanvas(windowWidth,windowHeight);
soldier = createSprite(windowWidth/2-400, windowHeight/2);

 ground = createSprite(width/2,height/2+70,width,10);
 ground.addImage(rope);
var invisibleGround = createSprite(width/2,height/2+65,width,10);
//invisibleGround.visible = false;
ground.velocityX = -3;

//bg = createSprite(0,0,width,height);
//bg.velocityX = -10;
//bg.addImage(bgImg);
soldier.addImage(soldier1);
soldier.scale = 0.5;






} 

function draw(){
background(bgImg);

if(keyDown("space")) {
  soldier.velocityY = -12;
}
soldier.velocityY = soldier.velocityY + 0.8
soldier.collide(ground);

if (ground.x <ground.width/2-200){
    ground.x =ground.width/2;
 }


  //bg.depth = soldier.depth;
  //soldier.depth = soldier.depth+1;

  spawnBomb();
  spawnEnemey();
drawSprites();

}
function spawnBomb(){
  if(frameCount%200===0){
    var bomb = createSprite(windowWidth/2+400, windowHeight/2);
    bomb.addImage(bomb1);
    bomb.scale = 0.5
    //bomb.lifetime = windowWidth;
    bomb.velocityX = -2;
  }

}

function spawnEnemey(){
  if(frameCount%300===0){
  var enemy = createSprite(windowWidth/2+400, windowHeight/2);
enemy.addImage(enemy1);
enemy.scale = 1;
enemy.lifetime = 300
   }
}

function gameOver(){
  if(soldier.isTouching(enemy)|| soldier.isTouching(bomb)){
    gameState = END;
  }
}

