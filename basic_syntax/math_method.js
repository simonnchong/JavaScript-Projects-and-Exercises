// -------------------------------------------------------- FLOOR, CEILING -------------------------------------------------------

var float_num = 22.52;

console.log("Number: ", float_num);

// floor number
var floor_num = Math.floor(float_num); // the variable is immutable, so it returns a new data
console.log("Floor number: ", floor_num);

// ceiling number
var ceiling_number = Math.ceil(float_num);
console.log("Ceiling number: ", ceiling_number);

// -------------------------------------------------------- RANDOM -------------------------------------------------------
var random_number = Math.random(); // this will return a random float number between 0 and 1
console.log("Random number between 0 - 1:", random_number);

var random_number2 = Math.random() * 10; // if you want a number between 0 and 10
console.log("Random number between 0 - 10", random_number2);
