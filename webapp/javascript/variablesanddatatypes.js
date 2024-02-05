console.log("Welcome to my javascript file");

// Variables and Constants

let variable1 = "I am a variable";
const constant1 = "I am a constant";
var variable2 = "I am a legacy variable";

console.log("Let variable value: ", variable1);
console.log("Const variable value: ", constant1);
console.log("Var variable value: ", variable2);

variable1 = "I am an updated let variable";
variable2 = "I am an updated var variable";
// COnstant values cannot cannot be reassigned
// constant1 = "I am an updated constant";

console.log("Let variable value: ", variable1);
// console.log("Const variable value: ", constant1);
console.log("Var variable value: ", variable2);

// Primitive Data Types
let stringVal = "Hello I am String";
let numberVal = 20;
let booleanVal = true;
// let nullValue = null;

console.log("String Value: ", stringVal, " and its data type: ", typeof stringVal);
console.log("Number Value: ", numberVal, " and its data type: ", typeof numberVal);
console.log("String Value: ", booleanVal, " and its data type: ", typeof booleanVal);
// console.log("Null Value: ", nullValue, " and its data type: ", typeof nullValue);

// Data Type Conversion
let convertedStringVal = String(numberVal);
console.log("Converted value from Number to String: ", convertedStringVal, " and its data type ", typeof convertedStringVal);

let convertedNumberVal = String(convertedStringVal);
console.log("Converted value from Number to String: ", convertedNumberVal, " and its data type ", typeof convertedNumberVal);

// Anything positive and negative becomes true, only zero means false for boolean value
let convertedBooleanVal = Boolean(numberVal);
console.log("Converted value from Number to Boolean: ", convertedBooleanVal, " and its data type ", typeof convertedBooleanVal);

let addStringNumber = "20" + 20;
console.log("Added string and number :",addStringNumber, " and its data type is ", typeof addStringNumber);

let subStringNumber = "20" - 20;
console.log("Added string and number :",subStringNumber, " and its data type is ", typeof subStringNumber);