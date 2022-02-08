
let lastRender=0
const movement = 2




function gameLoop (currentTime){
   
    if(secondsLastRender< 1/movement) break
    
    const secondsLastRender=(currentTime-lastRender)/1000

    lastRender=currentTime


window.requestAnimationFrame(gameLoop)


}

window.requestAnimationFrame(gameLoop)