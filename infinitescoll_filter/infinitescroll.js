let listItem=1;
let infinteScroll=document.getElementById('infinite-scroll')
// console.log('hello')
let loadMore=function(){
    for(let i=0;i<50;i++){
        let item=document.createElement('li')
        item.innerText=`Item ${listItem++}`
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

// console.log('hi3')