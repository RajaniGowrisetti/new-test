var bg;
var bgImg;

function preload(){
    bgImg = loadImage("city.jpeg");
}

function setup(){
    createCanvas(1200,900);

     bg = createSprite(900,700);
     bg.addImage(bgImg);
}


function draw(){
    background(0);
    drawSprites();
}
