const bubbles = document.querySelectorAll('.bubble')
const bg = document.querySelector('.bg')
var animationDir = "true";

for(let bubble of bubbles){
    bubble.addEventListener('click', function(e){
        $.ajax({
            type: "GET", url: 'javascripts/bubbleAnimation.js', dataType: "script",
            success: (data) => {
                const unpackage = eval(data)
                const obj = unpackage()
                obj.secret(data)
            }, 
            error: (error) => {
                console.log("There was an error")
                console.log(error)
            }
        })
    })
}

const alpha = (num, direction) => {
    // console.log("num is currently" +num)
    num = (direction === "true") ? num += .01 : num -= .01 
    return num;
}

setInterval(function(){
    // if(parseFloat(bg.style.opactiy) > 0.7){
    //     animationDir = "false"
    // }
    // if(parseFloat(bg.style.opactiy) < 0.3){
    //     animationDir = "true"
    // }
    // const num = alpha(parseFloat(bg.style.opacity), animationDir)
    // console.log(animationDir)
    // console.log(num)
    // bg.style.opacity = num.toFixed(2)
    bg.classList.toggle('max')
}, 6000)