var ninja,ninjaimage,bgimg1,ground,healthbarimage1,healthbarimage2,healthbarimage3,healthbarimage4
var obstaclecouresimage,healthbar

function preload(){
ninjaimage=loadAnimation("images/Ninja1.png","images/Ninja2.png","images/Ninja3.png","images/Ninja4.png","images/Ninja5.png","images/Ninja6.png","images/Ninja sword1.png","images/Ninja sword2.png","images/Ninja sword3.png","images/Ninja sword4.png","images/Ninja sword5.png")
healthbarimage1=loadImage("images/Health bar 1.jpg")
healthbarimage2=loadImage("images/Health bar2.jpg")
healthbarimage3=loadImage("images/health bar 3.jpg")
healthbarimage4=loadImage("images/health bar 4.jpg")
obstaclecouresimage=loadImage("images/obstacle coures 1.jpg","images/obstacle coures 2.jpg","images/obstacle coures 3.jpg")

bgimg1=loadImage("images/Fantasy Forest.jpg")


}




function setup(){
createCanvas(1500,500);
ground=createSprite(0,490,1500,10)
ground.visble=false

ninja=createSprite(100,350);
ninja.addAnimation("ninja",ninjaimage)




healthbar=createSprite(400,50);
healthbar.addImage("health",healthbarimage1)

obstaclecoures=createSprite(0,390,1200,5)
obstaclecoures.visble=true

}




function draw(){
background(bgimg1)
ground.visble=false
ground.velocityX=-3;
//infinite ground
if(ground.x<0){
  ground.x=ground.width/2

  
}
if(KeyDown(UP_ARROW) ){
ninja.velocityY=-6
}
//gravity
ninja.velocityY=ninja.velocityY+1

ninja.collide(ground)



drawSprites()

}