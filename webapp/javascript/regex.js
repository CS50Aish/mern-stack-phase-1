// Regex expressions using patterns

let regexPattern = /a[bcd]+/;
let teststring = "abcbcdabcdd";

let regexResult = regexPattern.exec(teststring);
console.log("Regex result:",regexResult);
