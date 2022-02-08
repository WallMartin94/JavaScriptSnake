//Importing variables and functions that are defined in separate scripts.
import {movement}from './Snake.js'
import { update as updateSnake } from './Snake.js'
import { draw as reRenderSnake } from './Snake.js'

let lastRender=0
//Should be careful using id here since if the project was larger there could be many other things having that id name. Works in this case.
const snakeBoard = document.getElementById('snake-board')




//To calculate gamespeed
function gameLoop (currentTime){
   
    window.requestAnimationFrame(gameLoop)
    
    const secondsLastRender=(currentTime-lastRender)/1000
    if(secondsLastRender< 1/movement) return
    


    lastRender=currentTime


update()
draw()


}

window.requestAnimationFrame(gameLoop)

//Calcuate the new snake position
function update (){

    updateSnake()


}

//Render the snake at the new position
function draw(){

reRenderSnake(snakeBoard)

}
