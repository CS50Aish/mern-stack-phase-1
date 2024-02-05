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
let precedenceresult = num1 * num2 + (num1 - num2) / num2;
console.log("PrecedenceResult: ",precedenceresult);

let associativityresult = num1 + (- num2) + num2;
console.log("AssociativityResult: ",associativityresult);

// Bitwise Operators

let bitwiseandresult = num1 & num2;
let bitwiseorresult = num1 | num2;
let bitwiseleftshift = num1 << 1;
let bitwiserightshift = num1 >> 2;

console.log("bitwiseandresult: ",bitwiseandresult);
console.log("bitwiseorresult: ",bitwiseorresult);
console.log("bitwiseleftshift: ",bitwiseleftshift);
console.log("bitwiserightshift: ",bitwiserightshift);

console.log("Binary of num1: ", num1.toString(2));

// Ternary Operator
num2 = 20;
let ternaryResult = num1 > num2 ? "Number1 is greater" : "Number2 is greater";
console.log("ternaryresult: ",ternaryResult);
