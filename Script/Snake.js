import { getInput } from "./Input.js"

export const movement = 2

//To set the snake at the very center of the gameboard at start.
const snake=[{x:11, y:11}]



//Define how to update the snake
export function update(){
const input=getInput()
for (let i = snake.length-1; i>=0; i--){
//Creating a duplicate part of the snake to render the extra parts at correct position
snake[i+1]={...snake[i]}

}

snake[0].x+=input.x
snake[0].y+=input.y
}

//Define how to render the snake
export function draw(snakeBoard){

snake.forEach(body => {

const snakeBody = document.createElement('div')

//Where to draw the new body

snakeBody.style.gridRowStart=body.y
snakeBody.style.gridColumnStart=body.x

//To give the extra "body" same visuals

snakeBody.classList.add('snake')
snakeBoard.appendChild(snakeBody)

})

}