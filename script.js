//header-sliding
const images=document.querySelectorAll('.header-slider ul img');
const prev_slide=document.querySelector('.previous-slide');
const next_slide=document.querySelector('.next-slide');

let n=4;

function changeSlide(){
    for (let i = 0; i < images.length; i++) {
        images[i].style.display='none';
    }
    images[n].style.display='block';
}
changeSlide();

prev_slide.addEventListener('click',(e)=>{
      if(n>0){
        n--;
      }
      else{
        n=images.length-1;
      }
      changeSlide();
})
next_slide.addEventListener('click',(e)=>{
    if(n<images.length-1){
      n++;
    }
    else{
     n=0;
    }
    changeSlide();
})

//scrolling
const scrolling=document.querySelectorAll('.products');
for (const i of scrolling) {
    i.addEventListener('wheel',(evt)=>{
        evt.preventDefault();
        i.scrollLeft+=evt.deltaY;
    });
}
