const canvas= document.getElementById('canvas');
const ctx = canvas.getContext("2d");
const playerImage= document.getElementById('img-source');




const player={
    width: 50,
    height: 80,
    xAxis: 20,
    yAxis: 200,
    speed: 5,
    dx: 0,
    dy: 0
};

function drawPlayer(){
    ctx.drawImage(playerImage,player.xAxis, player.yAxis, player.width, player.height)
}

function clear(){
    ctx.clearRect(0,0, canvas.width, canvas.height)
}

function newPosition(){
    player.xAxis += player.dx;
    player.yAxis += player.dy;

    detectScreenWalls()
}

function detectScreenWalls(){

}

function updatePlayerPosition(){
    clear();
    drawPlayer();
    newPosition();
    requestAnimationFrame(updatePlayerPosition)
}


function moveToDirection(key){
    switch (key) {
        case "ArrowRight" || "Right":
            player.dx = player.speed;
            break;
    
        case "ArrowLeft" || "Left":
            player.dx = -player.speed;
            break;
    
        case "ArrowUp" || "Up":
            player.dy = -player.speed;
            break;
    
        case "ArrowDown" || "Down":
            player.dy = player.speed;
            break;
        default:
            break;
    }
}

function stopMovement(){
    player.dx = 0;
    player.dy = 0;
}


function keyDown(event){
    const eventsArray=["ArrowRight","Right","ArrowLeft", "Left","ArrowUp","Up","ArrowDown","Down"]
    const theKey= eventsArray.find((key)=>{
        return key === event.key
    });
    
    moveToDirection(theKey);
}

function keyUp(event){
    const eventsArray=["ArrowRight","Right","ArrowLeft", "Left","ArrowUp","Up","ArrowDown","Down"]

    if(eventsArray.includes(event.key)){
        stopMovement()
    }
}


window.document.addEventListener('DOMContentLoaded',()=>{
    updatePlayerPosition()
    document.addEventListener('keydown', keyDown);
    document.addEventListener('keyup', keyUp);
})
