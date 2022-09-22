"use strict"
function ticketDisplay(seatNum,rowNum,ticketNum){
    console.log(rowNum + ". sor")
    console.log(seatNum + ". szék")
    console.log("Jegy sorszám: "+ ticketNum)
}
let age = Number(prompt("Adja meg az életkorát!",0))
if(!isNaN(age)){
    if(age<18){
        console.log("NO")
    }
    else{
        let seat = Math.floor(Math.random()*22)
        let row = Math.floor(Math.random()*12)
        let tnum = Math.floor(Math.random()*12*22)
        ticketDisplay(seat,row,tnum)
        if(age<25){
            console.log("A jegy ára: 500Ft")
        }
        else{
            console.log("A jegy ára: 1850Ft")
        }
    }
}
