//generate a random number

const getRandomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = "#"
    let randomNum
    for (let i = 0; i < 6; i++) {
        randomNum = getRandomNumber();
        color += hex[randomNum] 
    }
    return color
}

const getRandomNumber = function(){
   return Math.floor(Math.random() *  16 );
}

let intervalId;
const startChangingColor  = function () {
    if(!intervalId){
        intervalId = setInterval(changeBgColor,1000)
    }
    function changeBgColor(){
        let randomColor = getRandomColor()
        console.log(randomColor)
        document.body.style.backgroundColor =  randomColor
    }
}

const stopChangingColor = function(){
    clearInterval(intervalId);
    intervalId = null;
}

document.querySelector('#start').addEventListener('click',startChangingColor)
document.querySelector('#stop').addEventListener('click',stopChangingColor)