let input = {x:0 , y:0}
let lastInput ={x:0, y:0}

//Adding listener to detect keystrokes and if statments to prevent impossible movement.
document.addEventListener('keydown', event =>{

switch (event.key){
case 'ArrowDown':
    if(lastInput.y!==0)break
    input={x:0, y:+1}
    break
    
    case 'ArrowUp':
    if(lastInput.y!==0)break
    input={x:0, y:-1}
    break
    
    case 'ArrowRight':
     if(lastInput.x!==0)break
    input={x:+1, y:0}
    break
    
    case 'ArrowLeft':
    if(lastInput.x!==0)break
    input={x:-1, y:0}
    break
    



}



})

export function getInput(){

lastInput=input


return input

}
