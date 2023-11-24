//====================== Common JS Start =================================
const slide = document.querySelectorAll('.slide');

let counter = 0;
let countDown = slide.length;

slide.forEach((slide, index)=>{
 slide.style.left= `${index * 100}%`
})

//==================== Common JS End =====================================
//==================== Manual Slider Start ===============================

const goPrev = ()=>{
    if(counter > 0){
        counter--
        slideImage();
        }
        console.log('decrement counter: ', counter)
    }

const goNext = ()=>{
    if(counter < slide.length -1){
        counter++
        slideImage();
    }
    console.log('increment counter: ', counter)
    }

const slideImage = ()=>{
    slide.forEach(slide=>{
        slide.style.transform = `translateX(-${counter * 100}%)`        
        }) 
    }

//================================== Manual Slider End ==========================
//================================== Auto Slider Start ==========================

const autoChangeImageToLeft = ()=>{
    slide.forEach((slide)=>{
slide.style.transform = `translateX(-${counter * 100}%)`;  
})
}

const incremenCountDown = ()=>{
    if(countDown <= slide.length && countDown > 0){
        countDown--
        reStartCycle()
    }else if(countDown === 0){
        counter =0;
        incrementCounter();
        countDown = slide.length;
    }
}
const reStartCycle =()=>{
    slide.forEach((slide)=>{
        slide.style.transform = `translateX(-${countDown * 100}%)`;
    })    
}

const incrementCounter = ()=>{ 
    if(counter < (slide.length -1)){
        counter++
        autoChangeImageToLeft();

    } else if(counter ===(slide.length-1) ){
        incremenCountDown();
    }
}

setInterval(incrementCounter, 3000);
//================================== Auto Slider End ==========================