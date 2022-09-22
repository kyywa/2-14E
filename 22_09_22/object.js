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
function UserLetre(name,age){
    return{
        name:name,
        age:age
    }
}
let obj={
    for: 1,
    let: 2,
    return:3
}
console.log(obj.for + obj.let + obj.return)

