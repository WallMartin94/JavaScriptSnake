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

    //Grab the score before we remove this html. Its going to later say its null
    //becuase its going to be deleted but we have saved its content in printPoints


      let printPoints= document.querySelector(".numberLabel").innerHTML
      
      gameOverFunction(printPoints)

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

    let rawData = await fetch('./score.json')
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
        </body>
      `;
    }

  
    // grab the DOM element that has the class products
    // and replace its contents with our newly created html
 document.querySelector('.scores').innerHTML = html;

   }

function gameOverFunction(printPoints){
  

let html=`

<body>
<h1 class= gameOverHeader>Game Over!</h1
<div class="submitContainer">
<label for="uname"><b>Username</b></label>
<input class="userAlias"type="text" placeholder="Enter Username" name="uname" required>
<label class = finalScore><b>Final Score</b></label>

<button  class="submitButton" >Submit Score</button>
<button class="cancelButton" >Cancel</button>
</div>
</body>
`

document.querySelector('.body').innerHTML=html


document.querySelector('.finalScore').textContent="Final Score: "+printPoints


 let submitButton = document.querySelector('.submitButton')
 let cancelButton = document.querySelector('.cancelButton')
 
 
 cancelButton.addEventListener('click', function (){
 document.location.replace('http://127.0.0.1:3000')

 })

 submitButton.addEventListener('click', function(){


submit(printPoints)

 })


  



 //function to submit the score and post it to the json file
function submit(printPoints){
 
 
 let newName = document.querySelector('.userAlias').value
 
 let finalScore = document.querySelector('.finalScore').innerHTML




console.log(finalScore)

finalScore=+finalScore.split(":")[1]

console.log(finalScore)

updateHighScore(finalScore,newName)
}

   
  

 async function updateHighScore(score, name){

  let scoreList = await (await fetch('./score.json')).json()

  scoreList.push({name,score})

  scoreList.sort((a,b)=>a.score>b.score?-1:1)

  scoreList=scoreList.slice(0,10)

  let result  = await (await fetch('/api/writeScore',{
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify(scoreList)
  })).json()

}

}