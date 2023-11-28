//'use strict' means we'll be using newer JS code (new standards)
"use strict"; 

//not allowed because we're working in NodeJs not browser
//alert("hello") 

//Datatypes

// number => range is (2 to power 53)
// BigInt => very large number
// string => ""
// boolean => true/false
// null => standalone value
// undefined => value not defined/assigned
// NaN
// symbol => used for uniquenes (mostly used with React)

let age = 26
let myName = "Divyansh"
let isStudying = true
let goingToOffice

//typeof 
console.log(typeof age)
console.log(typeof myName)
console.log(typeof isStudying)
console.log(typeof goingToOffice)

// typeof null is object
console.log(typeof null)

// typeof undefined is undefined because undefined is a type in itself
console.log(typeof undefined)

// NaN is also a number
console.log(typeof (NaN));

//typeof can also be used like method
console.log(typeof (isStudying))