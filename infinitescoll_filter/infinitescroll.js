let listItem=1;
let infinteScroll=document.getElementById('infinite-scroll')
// console.log('hello')
let loadMore=function(){
    for(let i=0;i<50;i++){
        let item=document.createElement('li')
        item.innerText=`Item ${listItem++}`
        item.classList.add('items')
        infinteScroll.appendChild(item)
        // console.log('hi')
    }
}
function infinitescroll(){
    if(infinteScroll.scrollTop + infinteScroll.clientHeight >= infinteScroll.scrollHeight){
        loadMore()
        console.log('hi')
    }
}
// console.log('hi1')
window.onscroll=function (){
    infinitescroll()
}
// console.log('hi2')
loadMore()
let cards=document.querySelectorAll('.items')
// console.log('hi3')
function myFunction(){
    // alert('hi')
    // let input=document.getElementById('myInput')
    let search=document.getElementById('myInput').value
   
   
    // console.log(cards)
    // if(input.value.macth)
    for (var i = 0; i < cards.length; i++) { 
        if(cards[i].innerText.toLowerCase()
                .includes(search.toLowerCase())) {console.log(search)
            cards[i].classList.add("is-hidden");console.log(cards[i],'1')
        } else {
            cards[i].classList.remove("is-hidden");console.log(cards[i],'2')
        }
    }
    }
    let typingTimer;               
let typeInterval = 500;  
    let searchInput =document.getElementById('myInput')
    searchInput.addEventListener('keyup', () => {
        clearTimeout(typingTimer);
        typingTimer = setTimeout(myFunction, typeInterval);
    });



