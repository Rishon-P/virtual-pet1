var dog;
var happyDog;
var database;
var foodS,foodStack
function preload()
{
dog_img = loadImage("images/Dog1.png")
dog_happy = loadImage("images/happydog.png")
}

function setup() {

  database = firebase.database();

  createCanvas(500, 500);



  var dog = createSprite(250,250)
  dog.addImage(dog_img);
  dog.scale = 0.5
  

  foodStock = database.ref('Food');
  foodStock.on("value",readStock)






  
}


function draw() {  

  background(46,139,87)

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage(dog_happy);
  }
 


  drawSprites();
  fill(255,0,0)
  stroke(255,0,0)
  textSize(15);
  text("Press UP_ARROW Key To Feed Drago Milk!",150,20)
  

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1
  }

  database.ref('/').update({
    Food:x
  })
}


