  
var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"


function preload(){
  towerImg = loadImage("360_F_108938284_U9U4Gnre7Mgehaiifa5qZCcKkqVx0CwK.jpg");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("depositphotos_42931179-stock-illustration-boy-scout-or-explorer-boy.jpg");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600,600);
 //spookySound.loop();
  tower = createSprite(300,300);
  tower.addImage("360_F_108938284_U9U4Gnre7Mgehaiifa5qZCcKkqVx0CwK.jpg",towerImg);
  tower.velocityY = 1;
  
  doorsGroup = new Group();
  climbersGroup = new Group();
  invisibleBlockGroup = new Group();
  
  ghost = createSprite(200,200,50,50);
  ghost.scale = 0.3;
  ghost.addImage("ghost", ghostImg);
}


function draw() {
  background(0);
  
  if (gameState === "play") {

    if(tower.y>500){
      tower.y=300;
    }
    
    if(keyDown("left_arrow")){
      ghost.x=ghost.x-3;
  
      // write a code to move left when left arrow is pressed
    }
    if(keyDown("right_arrow")){
      ghost.x=ghost.x+3;
    
      // write a code to move left when right arrow is pressed
      
    }
    if(keyDown("space")){
     ghost.velocityY=-8;
   
      // write a code to move up when space arrow is pressed
      
    }
  
  ghost.velocityY = ghost.velocityY + 0.8;
  
   
      //write a condition for infinte scrolling tower
    
      spawnDoors();

      if(ghost.isTouching(invisibleBlockGroup) || ghost.y>600){
        ghost.destroy();
        gameState="end";
      }

      if(ghost.isTouching(climbersGroup)){
        ghost.velocityY=0;
      }

  
      //write a code to make climbersGroup collide with ghost change the ghost velocity  
//write a code to make invisibleBlockGroup collide with ghost destroy the ghost and make gamestate to end.
  
  drawSprites();
}
  if (gameState === "end"){
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over", 230,250)

  }
}

function spawnDoors()
 {
  //write code here to spawn the clouds
  if (frameCount % 240 === 0) {
    var door = createSprite(200, -50);
    var climber = createSprite(200,10);
    var invisibleBlock = createSprite(200,15);
    invisibleBlock.width = climber.width;
    invisibleBlock.height = 2;
    //add the random function
    //
    door.addImage(doorImg);
    climber.addImage(climberImg);
    
    door.velocityY = 1;
    climber.velocityY = 1;
    invisibleBlock.velocityY = 1;

    door.lifetime=800;
    climber.lifetime=800;
    invisibleBlock.lifetime=800;

    invisibleBlockGroup.add(invisibleBlock);
    climbersGroup.add(climber);

    //change the depth of the ghost and door
    
     

    
    //assign lifetime to the obstacle.lifetime = 300; here  obstacle are door, climber and invisible block


    //add each obstacle to the group obstaclesGroup.add(obstacle);here  obstacle are door, climber and invisible block
  }
}

