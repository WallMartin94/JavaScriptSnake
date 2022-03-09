

import { eat, increaseSnake } from './Snake.js'
import {randomGridPos} from './Grid.js'



let apple=generateApple()

const EXPANSION=1

export function update(){

if(eat(apple)){

increaseSnake(EXPANSION)


apple=generateApple()

}
 }
    
    
    
    //Define how to render the snake
    export function draw(snakeBoard){
    
   
    
    const appleElement = document.createElement('div')
    
    //Where to draw the new body
    
    appleElement.style.gridRowStart=apple.y
    appleElement.style.gridColumnStart=apple.x
    
    //To give the extra "body" same visuals
    appleElement.classList.add('apple')
    snakeBoard.appendChild(appleElement)

    }

function generateApple(){

    let newApple
    while(newApple==null || eat(newApple)){

        newApple=randomGridPos()

    }
return newApple

}