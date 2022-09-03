// -------------------------------------------------------- REGULAR FUNCTION -------------------------------------------------------

// -------------------------------------------------------- NO ARGUMENT -------------------------------------------------------
function say_hello() {
    console.log("Hello");
}

// -------------------------------------------------------- 1 ARGUMENT -------------------------------------------------------
function display_my_name(name) {
    // 3 ways to print out
    console.log("Hello", name, "nice to meet you");
    console.log("Hello " + name + " nice to meet you");
    console.log(`Hello ${name} nice to meet you`);
}
display_my_name("Simon");

// -------------------------------------------------------- 2 ARGUMENTS -------------------------------------------------------
function sum(num1, num2) {
    return num1 + num2;
}
result_sum = sum(2, 5);
console.log("Sum is", result_sum);

// -------------------------------------------------------- TIP CALCULATOR -------------------------------------------------------

function calculate_tips(food_price, tip_percentage) {
    const tip_amount = sum(food_price, tip_percentage); // call the previous created function
    return `Your tip amount is ${tip_amount} and total amount is ${food_price + tip_amount}`;
}

const food_price = Number(prompt("Enter your food price here")); // convert the user input into number/integer
const tip_percentage = Number(prompt("Enter your tip in percentage %") / 100);

console.log(calculate_tips(food_price, tip_percentage));

// -------------------------------------------------------- ARROW FUNCTION (ES6)-------------------------------------------------------
// it return the result implicitly, you don't have to write "{ }" and "return" explicitly
const multiply = (a, b) => a * b;

multiply_result = multiply(2, 5);
console.log("Multiply result:", multiply_result);
