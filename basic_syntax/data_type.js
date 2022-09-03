// -------------------------------------------------------- DATA TYPE -------------------------------------------------------
/*
    number 👉 1, -19999, 0.5
    string 👉 'hello', "world"
    boolean 👉 true, false
    array 👉 [1, 2], ["hello", "world"]
    objects 👉 {}
    */

var short_sentence = "short sentence";

var long_sentence = `long long long
                    long long
                    long long sentence`;

// converting string to number, in default, user input will be in string format
// string is immutable, so you have to store it into a new variable, it wont be changed
var number = prompt("Enter a number");
console.log(typeof number);
// string
number_int = Number(number);
console.log(typeof number_int);
// number
