class Player {
    constructor(){}
    readcount(){
        database.ref('playerCount').on("value",function(data){
          playerCount = data.val()
        }); 
        
    }
    updatecount(playerCount){
     database.ref('/').update({playerCount:playerCount})    
    } 
    
    updateName(name){
       database.ref('player'+playerCount).set({
           Playername:name
       })

       
    }
}