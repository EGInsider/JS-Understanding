let first = Number("23")
let second = Number("Divyansh")
let third = Number(null)
let fourth = Number(undefined)
let fifth = Number(true)
let sixth = Number(false)
let seventh = Number("")


// console.log(typeof first, first)
// console.log(typeof second, second)   // => NaN is also a number
// console.log(typeof third, third)
// console.log(typeof fourth, fourth)   // => NaN is also a number
// console.log(typeof fifth, fifth)
// console.log(typeof sixth, sixth)
//console.log(typeof seventh, seventh)


// ******************** Operations on Data *********************

// console.log(1 + "2");
// console.log("1" + 2);
// console.log(1 + 2 + "2");
// console.log("1" + 2 + 2);

// console.log(+true);
// console.log(+"");

let counter = 1
counter++;
console.log(counter);
++counter
console.log(counter);
counter = counter++     // => assignment has more precedence than postfix
console.log(counter);
counter = ++counter     // => assignment has less precedence than prefix
console.log(counter);
