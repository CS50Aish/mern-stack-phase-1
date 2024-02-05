let numberArray = [1, 2, 3, 4, 5];

let stringArray = ["John", "Sam", "Roy", "Chad", "Michael"];

let charArray = ['A', 'B', 'C', 'D', 'E'];

let mixedArray = [1, "Johnny", 'A', 30, "Developer"];

console.log("numberArray: ",numberArray, "and type is: ",typeof numberArray);
console.log("stringArray: ",stringArray,"and type is: ",typeof stringArray);
console.log("charArray: ",charArray,"and type is: ",typeof charArray);
console.log("mixedArray: ",mixedArray,"and type is: ",typeof mixedArray);

console.log("numberArray.length: ",numberArray.length);
console.log("stringArray.length: ",stringArray.length);
console.log("charArray.length: ",charArray.length);
console.log("mixedArray.length: ",mixedArray.length);

console.log("numberArray.constructor: ",numberArray.constructor);
console.log("numberArray.constructor.prototype: ",numberArray.constructor.prototype);

// Data manipulation with different methods

numberArray.push(6, 7);
console.log("numberArray with push: ",numberArray," and its length: ",numberArray.length);

for(let val of numberArray)
{
    console.log("Value at index: ",numberArray.indexOf(val)," is: ",val);
}

console.log("numberArray.pop(): ",numberArray.pop());

for(let val of numberArray)
{
    console.log("Value at index: ",numberArray.indexOf(val)," is: ",val);
}

console.log("numberArray.unshift():",numberArray.unshift(1, 2));

for(let val of numberArray)
{
    console.log("Value at index: ",numberArray.indexOf(val)," is: ",val);
}

console.log("numberArray.shift():",numberArray.shift);

for(let val of numberArray)
{
    console.log("Value at index: ",numberArray.indexOf(val)," is: ",val);
}

let concatNumberArray = [7, 8, 9, 10];
let concatenatedArray = numberArray.concat(concatNumberArray);

console.log("Printing Concatenated Array: ");

for(let val of concatenatedArray)
{
    console.log("Value at index: ",concatenatedArray.indexOf(val)," is: ",val);
}

let joinedStringFromArray = concatenatedArray.join(" | ");
console.log("joinedStringFromArray: ",joinedStringFromArray);

let slicedArray = concatenatedArray.slice(4, 8);
console.log("Sliced Array: ",slicedArray);

// let splicedArray = concatNumberArray.splice(3, 4, "a");
// console.log("splicedArray: ",splicedArray);

for(let i = 0; i <= concatenatedArray.length; i++)
{
    console.log("Value at index: ",i,"is:",concatenatedArray[i]);
}
