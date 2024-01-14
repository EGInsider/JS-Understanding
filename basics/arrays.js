// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

const myArr = [1,2,3,4,5];

// an array can store elements of different datatypes as well
// const myArr = [1,'Divyansh', true, null, undefined, 23, 97]

// declaring array using new keyword
// const myArr = new Array(1,2,3,4,5);

// ----------------------Array Methods-------------------------

// Addition and Deletion
// myArr.push(6)
// myArr.unshift()
// myArr.shift()
// myArr.pop()
// console.log(myArr);

// splice(index, number, items[])
// splice(index elements need to be deleted from, number of elements to be deleted, elements need to be added(if not deleting))
// also returns a new array ontaining the elements that were deleted
// myArr.splice(myArr.length,0,7,8)
// console.log(myArr.splice(myArr.length,0,7,8));

// Searching
// console.log(myArr.indexOf(5)); 
// console.log(myArr.indexOf(5,5));
// const myArr2 = [1,5,23,6,97,5]
// console.log(myArr2.lastIndexOf(5));
// console.log(myArr2.includes(23));
// console.log(myArr2.includes(23, 3));

// joining array elements as string
// const arr = ['Hi',"I'm",'Divyansh','and',"I'm", 23]
// console.log(arr.join(" "));

// Merging two(or more) arrays

// concat returns a new array
// const mergedArr = myArr.concat([7,8])
// console.log(mergedArr); 

// merging using spread operator
// const veg = ['paneer butter masala', 'paneer tikka', 'veg-roll']
// const non_veg = ['butter chicken', 'chicken tikka', 'chicken-roll']
// const cuisine = [...veg, ...non_veg]
// console.log(cuisine);

// converting multidimensional arrays into one-dimensional array
// const multiArr = [1,2,3,[4,5],6,[7,8,[9,10,[11,12]]]]
// console.log(multiArr.flat(Infinity));

// splice method returns a new array containing elements deleted from original array
// also adds/deletes to/from the original array
// const modArr = myArr.splice(5,0,6,7,8)
// console.log(modArr);
// console.log(myArr);

// slice method returns a portion of an array
// doesn't modify the original array
// console.log(myArr.slice(1,3));
// console.log(myArr);

// convert other datatypes into array
// console.log(Array.from("Divyansh"));
// const myObj = {name:'Divyansh', age:26}
// console.log(Object.keys(myObj))