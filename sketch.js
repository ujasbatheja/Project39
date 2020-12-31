var gameState = 0;
var playerCount = 0;
var form, player, game;
var database;
var allPlayers;
var distance = 0;
var man1, man2, man3, man4;
var mans;
var man1Image, man2Image, man3Image, man4Image;
var trackImage;

function preload(){
    man1Image = loadImage("images/man1.jpg");
    man2Image = loadImage("images/man2.jpg");
    man3Image = loadImage("images/man3.jpg");
    man4Image = loadImage("images/man4.jpg");

    trackImage = loadImage("images/track.jpg");
}

function setup(){
    createCanvas(displayWidth-20, displayHeight-30);
    database = firebase.database();
    game = new Game();
    game.getGameState();
    game.start();
    console.log(database);
}

function draw(){
    background("white");
    if (playerCount===4){
        game.setGameState(1);
    }
    
    if(gameState===1){
        game.play();
    }

    if(gameState===2){
        game.end();
        console.log("you have finished the end line");
    }
    
}