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

console.log(typeof bigNumber, bigNumber);
console.log(typeof id, id);
console.log(typeof bikes, bikes);
console.log(typeof myInfo, myInfo);
console.log(typeof myFunction, myFunction);
