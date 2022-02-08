let input = {x:0 , y:0}
//Adding listener to detect keystrokes
window.addEventListener('keydowm', event =>{

switch (event.key){
case 'ArrowDown':
    input={x:0, y:+1}
    break
    case 'ArrowUP':
    input={x:0, y:+-1}
    break
    case 'ArrowRight':
    input={x:+1, y:0}
    break
    case 'ArrowLeft':
    input={x:-1, y:0}
    break
    



}



})

export function getInput(){




return input

}
