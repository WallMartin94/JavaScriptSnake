//Importing variables and functions that are defined in separate scripts.
import {movement, update as updateSnake ,draw as reRenderSnake,getSnakeHead,snakeSelfHit}from './Snake.js'
import {update as updateApple, draw as drawApple}from './Apple.js'
import {outsideGrid} from './Grid.js'


let lastRender=0
let gameOver=false













//Should be careful using id here since if the project was larger there could be many other things having that id name. Works in this case.
const snakeBoard = document.getElementById('snake-board')




//To calculate gamespeed
function gameLoop (currentTime){

 

    if(gameOver){

        let printPoints= document.querySelector(".numberLabel").innerHTML


        return alert('You lost\nPoints: '+printPoints)
    }
   

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
    updateApple()
    checkLoss()


}





       

         
        

        





//Render the snake at the new position
function draw(){
//To make sure to remove previously drawn parts when appropriate 
    snakeBoard.innerHTML =''
    
    reRenderSnake(snakeBoard)
    drawApple(snakeBoard)

}

function checkLoss(){


    gameOver = outsideGrid(getSnakeHead())||snakeSelfHit()



    
}

let scoreButton= document.querySelector('#scoreButton')

scoreButton.addEventListener('click',function (e){

    snakeBoard.style.display='none'

    let scoreText = document.querySelector('.scoreLabel')
    let numberText = document.querySelector('.numberLabel')
    
    scoreText.style.display='none'
    numberText.style.display='none'
    
    loadScore()

})


  
     
   

   async function loadScore(){

    let rawData = await fetch('../score.json')
    // deserialize the json (wait for it)
    let scorers = await rawData.json()

    // loop through the products and build some html
    let html = ''
    for (let scorer of scorers) {
    
      // the backticks indicate of a special type
      // of string - called a template literal
      // template literal can span over several lines
      // and contain javascript epressions: ${...}
      html += `
        <body>
          <h3>Name: ${scorer.name}</h3>
          <p>SCORE: ${scorer.score}</p>
        <body>
      `;
    }

  
    // grab the DOM element that has the class products
    // and replace its contents with our newly created html
 document.querySelector('.scores').innerHTML = html;

   }



   