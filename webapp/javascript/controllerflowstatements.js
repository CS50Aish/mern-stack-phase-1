// If-Else Conditional Statements

let condition = true;

if(condition)
{
    console.log("The condition is: ", condition);
}
else
{
    console.log("The condition is: ", condition);
}

let str = "20";
let num = 20;

if(str === num)
{
    console.log("Inside If condition is: ", str===num);
}
else if(str == num)
{
    console.log("Inside else if condition is: ", str==num);
}
else
{
    console.log("Inside else condition is");
}

// Switch Statements

let fruit = "orange";

switch(fruit)
{
    case "apple":
        console.log("I am an", fruit);
        break;
    case "banana":
        console.log("I am a", fruit);
        break;
    case "orange":
        console.log("I am an", fruit);
        break;
    default:
        console.log("I am a", fruit);
}

// Loops

console.log("For Loop: ");

for(let i = 1; i <= 5; i++)
{
    console.log(i);
}

console.log("While Loop");
let counter = 3;
while(counter > 0)
{
    console.log(counter);
    counter--;
}

console.log("Do while loop: ");
let doWhileCounter = 4;
do
{
    console.log(doWhileCounter);
    doWhileCounter--;
}while(doWhileCounter > 0);

console.log("For In loop: ");
let person = {Name: "John", Age:30, Job:"Developer"};

for(let key in person)
{
    console.log(key + " : " + person[key]);
}

console.log("For of loop: ");

let numbers = [1, 2, 3, 4, 5];
for(let num of numbers)
{
    console.log(num);
}

// Break and continue
console.log("Break statements: ");

for(let i = 1; i <= 5; i++)
{
    if(i == 3)
    {
        break;
    }
    console.log("Inside loop: ",i);
}

console.log("Outside loop")

console.log("Continue statements: ");

for(let i = 1; i <= 5; i++)
{
    if(i == 3)
    {
        continue;
    }
    console.log("Inside loop: ",i);
}
console.log("Continue Statements");

