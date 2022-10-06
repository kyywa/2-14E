"use strict"
/*
//
const nums = []
for(let i = 0;i<10;i++){
    nums.push(i)
}
console.log(nums)
//
console.log("A tömb számossága" + nums.length)
console.log("A tömb 0. eleme:"+ nums[0] )
*/
//
/*
const a = []
const b = []
const c = []
let j = 0
for(let i = 0; i<100;i++){
    a.push(i+1)
    if(a[i]%2==0){
        b.push(a[i])
    }
    if(a[i]%3==0){
        c.push(a[i])
    }
    if(a[i]%5==0 && a[i]%3==0){
        document.write(a[i]+"osztható öttel és hárommal is<br>")
    }
}
console.log(a)
console.log(b)
console.log(c)
console.log(a.length)
console.log(b.length)
console.log(c.length)
*/
//
/*
const a = []
for(let i = 0; i < 100; i++){
    let x = Math.floor(Math.random()*101)
    a.push(x)
}
for(let i=0;i<a.length;i++){
    document.write(a[i]+" ")
    if(a[i]%3){
        document.write("<br>")
    }
}
*/

function load(length,arrayToLoad){
    for(let i= 1; i<length+1;i++){
        arrayToLoad.push(i)
    }
}
function pullNumbers(number,arr){
    let tmparr=[]
    let done = false;
    while(!done){
        let tmp = Math.floor(Math.random() * arr.length);

    }
}
const five = []
const six = []
const scandinavian = []
load(90,five)
load(45,six)
load(35,scandinavian)
