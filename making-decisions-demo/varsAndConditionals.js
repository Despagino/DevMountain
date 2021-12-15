/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 


let jonSnowAttack = 25
let jamieLannisterAttack =35
let jonSnowHealth = 50

if (jamieLannisterAttack > jonSnowAttack) {
    console.log("Jamie has a better attack")
} else if (jonSnowAttack > jamieLannisterAttack) {
    console.log("Jon has a better attack")
} else {
    console.log("Jon and Jami have the same attack")
}

if (jonSnowHealth <= 0) {
    console.log("Jon Snow is dead")
} else {
    jonSnowHealth -= jamieLannisterAttack
}
console.log(jonSnowHealth)