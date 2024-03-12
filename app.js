
let btn = document.querySelector(".btn")
btn.addEventListener("click" , ()=>{
    let dice1 = document.querySelector(".p-1")
let dice2 = document.querySelector(".p-2")
    dice1.setAttribute("src", "diceroll.gif")
    dice2.setAttribute("src", "diceroll.gif")
    let result = document.querySelector('h1')
    result.innerHTML = ""
    setTimeout(()=>{
let randomNum1 = Math.floor(Math.random()*6+1); 
let randomNum2 = Math.floor(Math.random()*6+1); 
dice1.setAttribute("src","dice"+randomNum1+".png");
dice2.setAttribute("src","dice"+randomNum2+".png");
if(randomNum1 === randomNum2){
    result.innerText = "Draw!!"
}else if(randomNum1 > randomNum2){
    result.innerText = " player-1 won"
}else{
    result.innerText = "player-2 won"
}
    },2500)//set time interval is used to generate a random number after 2.5 secs//
})