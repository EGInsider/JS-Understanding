var mySym = Symbol("key")

const myself = {
    name : "Divyansh",
    "surname" : "Mishra",
    age : 26,
    city : "Kanpur",
    state : "Uttar Pradesh",
    email : "random@gmail.com",
    [mySym]: "key1",
    greet : function(){
                console.log(`Hey ${this.name}`)
            }
}

// Accesssing the object properties through dot notation
// console.log(myself.name);
// console.log(myself.city);

// Accesssing the object properties through bracket notation
// console.log(` hello ${myself[name]} ${myself["surname"]}`);

// console.log(myself);
// console.log(myself.greet());
// console.log(myself.greet);