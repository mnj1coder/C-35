var ball;
var database;
var position;
var gameState = 0;
var playerCount;
var form,game,player;
function setup(){
    createCanvas(500,500);
    database = firebase.database();
    game = new Game();
    game.readState();
    game.start();
    
}

function draw(){
    background("white");
    
}




