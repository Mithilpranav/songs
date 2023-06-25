

var v;
document.querySelector(".play").addEventListener("click",function(){
    
    v = new Audio("sounds/song2.mp3");
    v.play();
    

})
document.querySelector(".stop").addEventListener("click",function(){
    if(v){
        document.querySelector(".stop").classList.add(".clicked")
        v.pause();

    }
    
    
})

document.querySelector(".playkani").addEventListener("click",function(){
    v = new Audio("sounds/song1.mp3");
    v.play();
})
document.querySelector(".stopkani").addEventListener("click",function(){

        v.pause();
    
})