import { getInput } from "./Input.js"

export let movement = 4




//To set the snake at the very center of the gameboard at start.
const snake=[{x:11, y:11}]

let newBody=0




//Define how to update the snake
export function update(){
     
    
    addParts()

const input=getInput()
for (let i = snake.length-2; i>=0; i--){
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

export function increaseSnake(amount){

updateScore()
newBody+=amount

}

export function  eat (position, {ignoreHead=false}={}){

return snake.some((snakeBody,index)=>{
   
   if(ignoreHead&&index==0)
   


   
    return false
    return samePosition(snakeBody,position)

       
   



})

}
//Checking if the snake has eaten an apple
export function samePosition(pos1, pos2,){



return  (pos1.x ===pos2.x&&pos1.y ===pos2.y)


}

//Function to add a new part to the snake when it has eaten an apple
function addParts(){




for(let i=0; i<newBody; i++){

snake.push({...snake[snake.length-1]})

}
newBody=0



}

export function getSnakeHead(){


    return snake[0]

}

export function snakeSelfHit(){

    return eat(snake[0], {ignoreHead:true})
 

}


function updateScore(){



    let scoreText= document.querySelector(".numberLabel").innerHTML
    
    
       let score = parseInt(scoreText)


    if(!isNaN(score)){
    
    score++
        //If the player reaches a certain score we can increase the speed of the snake if we like.
    if(score===5){

        movement=5

    }

    if(score===10){

        movement=7

    }
   
    
    document.querySelector(".numberLabel").innerHTML=score.toString()
    
    
    }
    
    
    
    
    }


