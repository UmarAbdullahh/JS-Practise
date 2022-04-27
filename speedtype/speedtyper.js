let timer=document.getElementById('timer')
let points=document.getElementById('score')
let word=document.getElementById('word')
let button=document.getElementById('btn')
let input=document.getElementById('input')
let seconds=60
let score=0
let bestScore=0
let words;
const countDown=()=>{
   let time= setInterval(function(){
        button.disabled = true;
       seconds--;
       timer.innerHTML=`Time Left : ${seconds}s`
       if(seconds===0){
        alert("Game over! Your score is " + score);
        clearInterval(time)
        seconds=60
        points.innerHTML='Score : 0'
        timer.innerHTML=`Time Left : ${seconds}s`
        button.disabled = false;
        word.innerHTML=""
       }
   },1000)
}
const random=()=>{
    words=Math.floor(Math.random()*9999)
    word.innerHTML=words
}
button.addEventListener('click',()=>{
    countDown();
    random();
    button.disabled = true;
})
    function speedTyper(){
    if(words==input.value){
        score++;
        points.innerHTML=`Score : ${score}`
        random()
    }
}