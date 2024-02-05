// Regex expressions using patterns

let regexPattern = /a[bcd]+/;
let teststring = "abcbcdabcdd";

let regexResult = regexPattern.exec(teststring);
console.log("Regex result:",regexResult);
let dynamicRegexPattern = new RegExp("[0-9]{3}","g");
let dynamicRegexResult = "123-456-789".match(dynamicRegexPattern);
console.log(dynamicRegexResult);

let dynamicRegexPattern1 = new RegExp("[0-9]{5}","g");
let dynamicRegexResult1 = "12345-45678-78A78".match(dynamicRegexPattern1);
console.log(dynamicRegexResult1);
