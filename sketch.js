   //creating the balloons ,bow and background
  var ground, groundImage;
  var bow, bowImage;
  var red_balloon, red_balloonImage, red_balloonGroup;
  var green_balloon, green_balloonImage, green_balloonGroup;
  var blue_balloon, blue_balloonImage, blue_balloonGroup;
  var pink_balloon, pink_balloonImage, pink_balloonGroup;
  var arrow, arrowImage, arrowGroup;
  var score;

function preload(){
      //adding images to bow ,balloons and background
     groundImage = loadImage("background0.png");

     bowImage = loadImage("bow0.png");

     red_balloonImage = loadImage("red_balloon0.png");

     green_balloonImage = loadImage("green_balloon0.png");

     blue_balloonImage = loadImage("blue_balloon0.png");

     pink_balloonImage = loadImage("pink_balloon0.png");
  
     arrowImage = loadImage("arrow0.png");
}

function setup() {
      createCanvas(600, 600);

      //create a ground sprite
      ground = createSprite(0,0,600,600);
      ground.addImage("ground",groundImage);
      ground.x = ground.width/2;
      ground.velocityX = -4;
      ground.scale = 3;

      //create the bow
      bow = createSprite(550,300,10,40);
      bow.addImage("bow",bowImage);
  
      //creating groups
      red_balloonGroup = new Group();
      green_balloonGroup = new Group();
      blue_balloonGroup = new Group();
      pink_balloonGroup = new Group();
      arrowGroup = new Group();

      score = 0;
  
}

function draw() {
      //giving the background colour
      background(220);

      //making the bow move according to the mouseY
      bow.y = World.mouseY

          //making a infinite ground
          if (ground.x < 0) {
            ground.x = ground.width /2;
          }

          //launching arrow when pressing space
          if (keyDown("space")) {
            var temp_arrow = createArrow();
            temp_arrow.addImage("launch_arrow",arrowImage);
            temp_arrow.y = bow.y;
          }

      //displaying the Yposition of the bow
      //console.log(bow.y);
  
          //launching random balloons
          var balloon = Math.round(random(1,4));
          console.log(balloon);

          if (frameCount%80 === 0) {
            if (balloon === 1) {
              redBalloon();
            }
            else if(balloon === 2) {
              blueBalloon();
            }
            else if(balloon === 3) {
              greenBalloon();
            }
            else if(balloon === 4) {
              pinkBalloon();
            }
          }
  
  if (arrowGroup.isTouching(red_balloonGroup)) {
    red_balloonGroup.destroyEach();
    arrowGroup.destroyEach();
    score = score+2;
  }
  
  if (arrowGroup.isTouching(blue_balloonGroup)) {
    blue_balloonGroup.destroyEach();
    arrowGroup.destroyEach();
    score = score+4;
  }

  if (arrowGroup.isTouching(pink_balloonGroup)) {
    pink_balloonGroup.destroyEach();
    arrowGroup.destroyEach();
    score = score+1;
  }
  
  if (arrowGroup.isTouching(green_balloonGroup)) {
    green_balloonGroup.destroyEach();
    arrowGroup.destroyEach();
    score = score+3;
  }
  
    //displaying the sprites
      drawSprites();
  
          //simple score system
          //score = score+Math.round(frameCount/60);
          text("SCORE: " + score, 500,50);
  
  
}

function createArrow() {
  arrow = createSprite(360,100,5,10);
  arrow.velocityX = -6;
  arrow.scale = 0.3;
  arrow.lifetime = 100;
  arrowGroup.add(arrow);
  return arrow;
}

function redBalloon() {
  var red_balloon = createSprite(0,Math.round(random(20,580)),10,10);
  red_balloon.addImage(red_balloonImage);
  red_balloon.velocityX = 3;
  red_balloon.lifetime = 200;
  red_balloon.scale = 0.1;
  red_balloonGroup.add(red_balloon);
}

function blueBalloon() {
  var blue_balloon = createSprite(0,Math.round(random(20,580)),10,10);
  blue_balloon.addImage(blue_balloonImage);
  blue_balloon.velocityX = 3;
  blue_balloon.lifetime = 200;
  blue_balloon.scale = 0.1;
  blue_balloonGroup.add(blue_balloon);
}

function pinkBalloon() {
  var pink_balloon = createSprite(0,Math.round(random(20,580)),10,10);
  pink_balloon.addImage(pink_balloonImage);
  pink_balloon.velocityX = 3;
  pink_balloon.lifetime = 200;
  pink_balloon.scale = 1.3;
  pink_balloonGroup.add(pink_balloon);
}

function greenBalloon() {
  var green_balloon = createSprite(0,Math.round(random(20,580)),10,10);
  green_balloon.addImage(green_balloonImage);
  green_balloon.velocityX = 3;
  green_balloon.lifetime = 200;
  green_balloon.scale = 0.1;
  green_balloonGroup.add(green_balloon);
}




