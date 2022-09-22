"use strict"
/*
function Hello(){
    console.log("Hello")
}
Hello()
let func = Hello
func()

let Hello = function(){
    console.log("WAT")
}
Hello()

function sum(a,b){ //első felírás
    return a+b
}
console.log(sum(2,3))

let sum = function(a,b){ //második felírás
    return a+b
}
console.log(sum(3,4))

let sum = (a,b) => a + b // harmadik felírás
alert (sum(2,3))

let double = n => n*2
console.log(double(3))

let hello = () => alert("hello")
hello()

let age = prompt("age now!")
let hello2 = (age<10) ? () => alert("hello") : alert("üdv")
*/
let sum = (a,b) =>{
    let eredmeny = a+b
    return eredmeny
}
console.log(sum(5,3))