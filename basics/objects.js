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

// singleton object
const singleObject = new Object()
singleObject.id = 23

// nesting in objects
singleObject.creds = {
    callname : "Mr_Unknownymous",
    callsign : "Phoenix",
    classifiedData : {
        fullname : "Divyansh Mishra",
        age : 26,
    }
}

// console.log(`hello ${singleObject.creds.callname} callsign: ${singleObject.creds.callsign} aka ${singleObject.creds.classifiedData.fullname}`);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

// console.log({obj1, obj2}); // wrong
// console.log({...obj1, ...obj2}); // right

// object.assign(target, source1, source2,.....sourceN)
// console.log(Object.assign({}, obj1, obj2)); // right