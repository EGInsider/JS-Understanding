// function name (loggedInUser) holds the reference of the the function 
function loggedInUser(username){
    return `${username} just logged in`
}

// isUserLoggedIn also holds the reference of the the function 
// const isUserLoggedIn = function loggedInUser(username){
//     return `${username} just logged in`
// }

// console.log(loggedInUser("Divyansh"));

// stores the result returned by the function 
// const result = loggedInUser("Divyansh")
// console.log(result);

// when a variable is not initialised/not assigned a value
// then it by default stores undefined
// in this case username will have undefined
// console.log(loggedInUser());

// setting default values for parameters
// function showUser(username = "Anonymous"){
//     return `Mr.${username} just logged in`
// }

// console.log(showUser());
// console.log(showUser("Divyansh"));

// passing multiple values to function
// function addNumbers(...allNumbers){
//     var sum = 0
//     for(var item of allNumbers){
//         sum += item;
//     }

//     return sum
// }

// console.log(addNumbers(5,6,7));
// console.log(addNumbers(10, 200, 4000, 80000));
// console.log(addNumbers(1,3));

