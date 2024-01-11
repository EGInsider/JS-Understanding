let todayDate = new Date();
// console.log(todayDate);
// console.log(todayDate.toDateString());
// console.log(todayDate.toString());

// // below methods can take locales and options object as arguments
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
// console.log(todayDate.toLocaleString('en-IN', {weekday:"long"}));
// console.log(todayDate.toLocaleDateString());
// console.log(todayDate.toLocaleTimeString());


// -------------------DATE CONSTRUCTOR-------------------

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date
//  we can pass year, month, day, hour, seconds, milliseconds in Date constructor
//  month and hour are 0 index based
// console.log(new Date(2023, 0, 11, 7, 24).toLocaleString());

// // Date constructor also takes string as argument
// console.log(new Date('Wed Jan 11 2023 07:25:00').toLocaleString());

// // Date constructor can also take array of strings which will be coerced
// console.log(new Date(['Wed Jan 11 2023', '07:25:00']).toLocaleString());

// // we can also pass epoch timestamp
// console.log(new Date(628021800000).toLocaleString());

// // passing non-date, non-string(date), non-number will display `Invalid Date`
// console.log(new Date("Divyansh").toLocaleString()); 
// console.log(new Date(undefined).toLocaleString()); 

// // Date.now() returns the number of milliseconds since 1st January 1970 midnight
// console.log(Date.now(), new Date(Date.now()).toDateString());

// // getTime() method can be used to get the time in milliseconds for particular date since 1st Jan 1970
// let newDate = new Date('January 12, 2023');
// console.log(newDate.toLocaleDateString(), newDate.getTime());

// let now = new Date(Date.now());
// console.log(now.getMilliseconds());
// console.log(now.getFullYear());

// // getDay() returns the number of day of week
// console.log(now.getDay());
// console.log(now.getHours());
// console.log(now.getMinutes());
// console.log(now.getMonth());

// // getDate() returns the number of day of month
// console.log(now.getDate());



