// const keyword doesn't allow change 
// const declarations must be initialised
const accountId = 177890

// let keyword allows change 
let userName = "divyansh@gmail.com"

// Prefer not to use var keyword because of block scope and functional scope issues
var password = "12345"
var city = "Kanpur"

// when variable is declared but not initialized then default value is `undefined`
let state

console.table([accountId, userName, password, city, state])
