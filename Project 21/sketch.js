var car,wall;
var speed,weight,thickness;
function setup() {
  createCanvas(1360,400);

  speed=random(223,321)
  weight=random(30,50);
  thickness=random(22,83)

  car = createSprite(50, 200, 50, 10);
  car.velocityX = speed;
  car.shapeColor = "yellow";

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = "white";
}

function draw() {
  background(0,0,0); 
  
  if (wall.x-car.x < (car.width+wall.width)/2){
    car.velocityX=0;
    var deformation=0.1 * weight *speed*speed/(thickness*thickness*thickness);

    if(deformation>10){
      wall.shapeColor="red";
    }

    if(deformation<10){
      wall.shapeColor="green";
    }
  }
  drawSprites();
}