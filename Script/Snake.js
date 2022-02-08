export const movement = 1

//To set the snake at the very center of the gameboard at start.
const snake=[{x:11, y:11}]



//Define how to update the snake
export function update(){


}

//Define how to render the snake
export function draw(snakeBoard){

snake.forEach(body => {

const snakeBody = document.createElement('div')

//Where to draw the new body

snakeBody.style.gridRowStart=body.x
snakeBody.style.gridColumnStart=body.y

//To give the extra "body" same visuals

snakeBody.classList.add('snake')
snakeBoard.appendChild(snakeBody)

})

}