// console.log(Number("02"));    

// console.log("2" > 1);
// console.log(true > 1);
// console.log(true >= 1);

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined <= 0);

// console.log("" > 0);    // 0 > 0
// console.log("" >= 0);   // 0 >= 0
// console.log("" == 0);   // 0 == 0

//here comparsion operators except(==) converts values to number 
// equality works differently than comparison operators

// strict check vs normal equality check

// normal equality check does conversion then checking 
console.log("2" == 2);  // number == number => true

// strict check does exact checking along with datatype check
console.log("2" === 2); // string == number => false


// NOTE : avoid such comparisions and conversions in real world scenarios