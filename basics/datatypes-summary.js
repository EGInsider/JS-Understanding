//  Primitve Types : Number, String, Boolean, null, undefined, Symbol, BigInt

// Symbol is mostly used in frontend while working with components to make them unique
const id = Symbol('123');
const andotherId = Symbol('123');

// BigInt can be declared by suffxing number with letter `n`
let bigNumber = 834974514756893450983560n

// Reference Types(Non Primitive types) : Array, Object, function

//Array
let bikes = ["roadster", "cruiser", "adventure"]

// object
let myInfo = {name: "Divyansh", age: 26}

//function
let myFunction = function(){
   console.log(myInfo.name)
}

// console.log(typeof bigNumber, bigNumber);
// console.log(typeof id, id);
// console.log(typeof bikes, bikes);
// console.log(typeof myInfo, myInfo);
// console.log(typeof myFunction, myFunction);


//  ********************************* Memory Allocation in JS **************************************

// Stack (Primitive types)
// In stack memory we always get a copy of the original value and a change in copy will not affect the original value
let name1 = "Divyansh"
let name2 = name1
name2 = "Mishra Ji"

console.log(name1);  // original value remains intact
console.log(name2);

// Heap (Non Primitive Types/ Reference types)
// In heap memory we always get a reference of the original value and any change will result in changes in the original value
let newInfo = myInfo
newInfo.age = 27

console.log(myInfo); // original value changed
console.log(newInfo);

