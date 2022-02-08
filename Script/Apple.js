let apple

export function update(){
    
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
}