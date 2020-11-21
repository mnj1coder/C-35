class Game {
    constructor(){}


    readState(){
        database.ref('gameState').on("value",function(data){
          gameState = data.val()
        }); 
        
    }
    updatestate(state){
     database.ref('/').update({gameState:state})    
    } 
    start(){
        if(gameState == 0){
            player = new Player();
            player.readcount();
            form = new Form();
            form.display();
        }
    }
}


