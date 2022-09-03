// -------------------------------------------------------- USER_INPUT -------------------------------------------------------
var food_price = Number(prompt("Enter your food price here")); // convert the user input into number/integer
var tip_percentage = Number(prompt("Enter your tip in percentage %") / 100);
var tip_amount = food_price * tip_percentage;
console.log(`Your tip amount is ${tip_amount}`);
console.log(`Your total amount is ${food_price + tip_amount}`);
