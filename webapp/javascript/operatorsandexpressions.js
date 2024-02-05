// Operators and Expressions

let num1 = 10;
let num2 = 5;

console.log("Addition(+): " +(num1 + num2));
console.log("Subtraction(-): " +(num1 - num2));
console.log("Multiplication(*): " +(num1 * num2));
console.log("Division(/): " +(num1 / num2));
console.log("Modulus(%): " +(num1 % num2));
console.log("Exponentiation(**): " +(num1 ** num2));

// Comparison Operators

let doubleEqualsResult = num1 == num2;
console.log("num1==num2 : ", doubleEqualsResult, " and type of doubleEqualsResult is: ", typeof doubleEqualsResult);
console.log("num1===num2 : ", num1===num2);
console.log("num1!=num2 : ", num1!=num2);
console.log("num1>=num2 : ", num1>=num2);
console.log("num1<=num2 : ", num1<=num2);
console.log("num1!==num2 : ", num1!==num2);

// Logical Operators

let logicalAndValue = num1 > 0 && num2 < 0;
let logicalOrValue = num1 > 0 || num2 < 0;
let logicalNotValue = !(num1 > 0);

console.log("logicalAndValue: ", logicalAndValue);
console.log("logicalOrValue: ", logicalOrValue);
console.log("logicalNotValue: ", logicalNotValue);

// Precedence and associativity
let precedenceresult = num1 * num2 + num1 - num2 / num2;
console.log(precedenceresult)