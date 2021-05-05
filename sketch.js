var PLAY = 1;
var END = 0;
var monkey , monkey_running , gameOver , reset;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score , gamestate;
var invisibleGround , ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600, 200);

  monkey = createSprite(50,160,20,50);
  
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.06;
  ground = createSprite(300,183,600,10);
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  
  score = 0;
}


function draw() {
  background(180);
  
  text("Score: "+ score, 500,50);
 
 if(gamestate === PLAY)
 {
    if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
    }
   if(obstacle.isTouching(monkey)){
     obstacle.velocityX=0;
   }
   
 }
  if(gamestate === END){
     monkey.velocityY = -12;
    
    
    
    
  }
  
 
   spawnObstacles();
  spawnbanans();
  
 // monkey.velocityY = monkey.velocityY + 0.8;
 monkey.colide = invisibleGround
  
        
   // console.log("best"+" of luck you all");
  
  
  
  
  
 
  
  drawSprites();
}



function spawnbanans() {
  
 if (frameCount % 100 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(50,80));
    banana.addImage(bananaImage);
    banana.scale = 0.5;
    banana.velocityX = -3;
   banana.scale = 0.05;
    
     
    banana.lifetime = 200;
  //  FoodGroup.add(banana);
 
  }
}

function spawnObstacles(){
 if (frameCount % 90 === 0){
   var obstacle = createSprite(600,165,10,40);
   obstacle.addImage(obstaceImage);
   obstacle.scale = 0.09;
   obstacle.velocityX = -3;
    obstacle.lifetime = 300;
   // obstacleGroup.add(obstacle);
 }
}

