var  dog, happyDog, database, foodS, foodStock;

function preload()
{
	dog = loadImage("images/Dog.png");
  happyDog = loadImage("images/happydog.png");
}

function setup() {
	createCanvas(500, 500);

  foodStock = database .ref('food');
  foodStock.on("value",readStok);
}


function draw() {  

  background (46, 139, 87) 

  if( keyWentDown(upArrow)){
writeStoke(foodS);
dog.addImage(happyDog)
  }

  drawSprites();
  //add styles here

}
function readStok(data){
  foodS = data.val();
}

function writeStoke(x){
  if(x<=0){
    x = 0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
food:x
  })
}
