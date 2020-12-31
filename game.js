class Game{
    constructor(){
        
    }
    getGameState(){
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value",function(data)
        {
            gameState = data.val();
        })
        console.log("getGameState"+gameState);
    }
    setGameState(state){
        database.ref("/").update({
            gameState: state
        })
        console.log("setGameState"+state);
    }
    start(){
        if (gameState===0){
            console.log("startingGame");
            player = new Player();
            player.getPlayerCount();
            form = new Form();
            form.display();
        }
        man1 = createSprite(100,200);
        man1.addImage("man1",man1Image);
        man2 = createSprite(300,200);
        man2.addImage("man2",man2Image);
        man3 = createSprite(500,200);
        man3.addImage("man3",man3Image);
        man4 = createSprite(700,200);
        man4.addImage("man4",man4Image);
        mans = [man1, man2, man3, man4];
    }
    play(){
        form.hide();
        Player.getPlayerInfo();
        if (allPlayers!==undefined){
            image(trackImage,0,-displayHeight*4,displayWidth,displayHeight*5);
            var display_position = 130;
            var index = 0;
            var manIndex = 0;
            var x = 150;
            var y=displayHeight-50
            for(var plr in allPlayers){
                manIndex = index; 
                index = index+1;
                x=x+250;             
                y = displayHeight-allPlayers[plr].distance-100;
                console.log("x: "+x+" y: "+y);
                mans[manIndex].x=x;
                mans[manIndex].y=y; 
                if(index===player.index){
                    mans[manIndex].shapeColor="red";
                    camera.position.x = displayWidth/2;
                    camera.position.y = mans[manIndex].y;
                }
                //display_position+=20;
                //textSize(15);
                //text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,display_position);
            }
        }
        if (keyIsDown(UP_ARROW) && player.index!==null){
            player.distance+=50;
            player.updatePlayerInfo();
        }
        if(player.distance>4050){
            gameState = 2;
            this.setGameState(2);
        }

        drawSprites();
    }

    end(){
        console.log("gameOver");
    }
}