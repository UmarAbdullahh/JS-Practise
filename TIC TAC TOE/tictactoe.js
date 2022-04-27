let boxes=document.getElementsByClassName('box')
let player=document.getElementById('player')
let message=document.getElementById('message')
let winner=document.getElementById('winner')
let currentPlayer='X'
let gameStatus=true
 function playerChange(){
    currentPlayer=currentPlayer==='X' ? '0' : 'X'
     return currentPlayer;
 }
for (let i=0;i<boxes.length;i++){
    boxes[i].addEventListener('click',()=>{ 
        if (boxes[i].innerHTML.trim() == "" && gameStatus) {
            boxes[i].innerHTML=currentPlayer
            playerChange()
            player.innerHTML=currentPlayer
            if (
                boxes[0].innerHTML == boxes[1].innerHTML &&
                boxes[1].innerHTML == boxes[2].innerHTML &&
                boxes[0].innerHTML.trim() != ""
              ) { 
                Winner();
              } else if (
                boxes[3].innerHTML == boxes[4].innerHTML &&
                boxes[4].innerHTML == boxes[5].innerHTML &&
                boxes[3].innerHTML.trim() != ""
              ) {
                Winner();
              } else if (
                boxes[6].innerHTML == boxes[7].innerHTML &&
                boxes[7].innerHTML == boxes[8].innerHTML &&
                boxes[6].innerHTML.trim() != ""
              ) {
                Winner();
              } else if (
                boxes[0].innerHTML == boxes[3].innerHTML &&
                boxes[3].innerHTML == boxes[6].innerHTML &&
                boxes[0].innerHTML.trim() != ""
              ) {
                Winner();
              } else if (
                boxes[1].innerHTML == boxes[4].innerHTML &&
                boxes[4].innerHTML == boxes[7].innerHTML &&
                boxes[1].innerHTML.trim() != ""
              ) {
                Winner();
              } else if (
                boxes[2].innerHTML == boxes[5].innerHTML &&
                boxes[5].innerHTML == boxes[8].innerHTML &&
                boxes[2].innerHTML.trim() != ""
              ) {
                Winner();
              } else if (
                boxes[0].innerHTML == boxes[4].innerHTML &&
                boxes[4].innerHTML == boxes[8].innerHTML &&
                boxes[0].innerHTML.trim() != ""
              ) {
                Winner();
              } else if (
                boxes[2].innerHTML == boxes[4].innerHTML &&
                boxes[4].innerHTML == boxes[6].innerHTML &&
                boxes[2].innerHTML.trim() != ""
              ) {
                Winner();
              }     
        }
    })
}
function Winner() {
    winner.innerHTML=currentPlayer=="X" ? '0' : 'X'
    message.style.display="block"
    gameStatus=false
}
function drawGame() {
    window.alert("Game Draw!")
    gameStatus=false
}
function reset(){
    for(let i=0;i<boxes.length;i++){
    boxes[i].innerHTML="";
    }
    player.innerHTML='X'
    message.style.display="none"
    gameStatus=true
}