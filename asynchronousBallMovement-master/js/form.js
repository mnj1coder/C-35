class Form {
    constructor(){}
    
    display(){
        var title = createElement('h1')
        title.position(250,100);
        title.html("Car racing championship");
        var Button = createButton('CLICK HERE')
        Button.position(260,250);

        var info = createInput('Full name here');
        info.position(255,200);
        Button.mousePressed(()=>{
            Button.hide();
            info.hide();
            playerCount++ 
            player.updateName(info.value());
            player.updatecount(playerCount);
        })
    }
}