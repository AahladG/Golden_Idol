var right_idle;
var left_idle;

function preload(){
    right_idle = loadAnimation("Animations/right_idle/right_idle0.png","Animations/right_idle/right_idle1.png",
    "Animations/right_idle/right_idle2.png");
    left_idle = loadAnimation("Animations/left_idle/left_idle0.png","Animations/left_idle/left_idle1.png",
    "Animations/left_idle/left_idle2.png");

    background_1 = loadImage("Static/background_1.png");
}

function setup(){
    createCanvas(550, 550);
    right_idle.frameDelay = 15;
    left_idle.frameDelay = 15;

    player = createSprite(100, 100);
    player.addAnimation("right", left_idle);
    player.scale = 1.5;
}

function draw(){
    background(background_1);
    drawSprites();
}