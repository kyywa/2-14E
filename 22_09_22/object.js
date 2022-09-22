"use strict"
let kutya = {
    name:"Dogg",
    age:4,
    "likes feesh": true
}
console.log(kutya.name + " " + kutya.age)
kutya.iskorcs = true
kutya["likes feesh"] = false
delete kutya.name

let user ={
    name:John,
    age:20
}
let key = prompt("Mit szeretnél tudni a felhasználóról","name")
console.log(user(key))