let slidePosition=1;
slideShow(slidePosition)
function nextSlides(n){
    slideShow(slidePosition+=n)
}
function slideShow(n){
    let slides=document.getElementsByClassName('container')
    if(n>slides.length){slidePosition=1}
    if(n<1){slidePosition=slides.length}
    for(let i=0;i<slides.length;i++){
        slides[i].style.display="none";
    }
    slides[slidePosition-1].style.display="block"
}