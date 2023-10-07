const slides=document.querySelectorAll(".slide")
var c=0;
slides.forEach(
    (slide,index)=>{
        slide.style.bottom = `${index*100}%`
    }
)

const goNext=()=>{
    c++
    if(c<10)
    slideImage()
}
const goPrev=()=>{
    c--;
    if(c>=0)
    slideImage()
}
const slideImage=()=>{
    slides.forEach(
        (slide) =>{
            slide.style.transform=`translateY(${c*100}%)`
        }
    )
}