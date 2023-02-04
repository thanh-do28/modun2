import {player, enemy} from '../controller/sprite'
// background, shop, 

export function rectangularCollision({ rectangle1, rectangle2 }) {
    return (
      rectangle1.attackBox.position.x + rectangle1.attackBox.width >=
        rectangle2.position.x &&
      rectangle1.attackBox.position.x <=
        rectangle2.position.x + rectangle2.width &&
      rectangle1.attackBox.position.y + rectangle1.attackBox.height >=
        rectangle2.position.y &&
      rectangle1.attackBox.position.y <= rectangle2.position.y + rectangle2.height
    )
}
  
export function determineWinner({ player, enemy, timerId }) {
  clearTimeout(timerId)
  document.querySelector('#displayText').style.display = 'flex'
  if (player.health === enemy.health) {
    document.querySelector('#displayText').innerHTML = 'Tie'
    return;
  } else if (player.health > enemy.health) {
    document.querySelector('#displayText').innerHTML = 'Player 1 Wins'
    return;
  } else if (player.health < enemy.health) {
    document.querySelector('#displayText').innerHTML = 'Player 2 Wins'
    return;
  }
}
  
export let timer = 60
export let timerId
export function decreaseTimer() {
  if (timer > 0) {
    timerId = setTimeout(decreaseTimer, 1000)
    timer--
    document.querySelector('#timer').innerHTML = timer
  }

  if (timer === 0) {
    determineWinner({ player, enemy, timerId })
  }
}
  

// let timestar = 4
// let timeId 
// export function starTimer(animate) {
//   if (timestar > 0) {
//     timeId = setTimeout(starTimer,1000)
//     timestar--
//     document.querySelector('#displayText1').style.display = 'flex'
//     document.querySelector("#displayText1").innerHTML = timestar
//   }else if (timestar == 0) {
//     document.querySelector('#displayText1').style.display = 'flex'
//     document.querySelector('#displayText1').style.color = 'red'
//     document.querySelector("#displayText1").innerHTML = 'START'
//     setTimeout(()=>{
//       document.querySelector('#displayText1').style.display = 'none'
//       animate()
//     },2000)
    
//   }
// }

