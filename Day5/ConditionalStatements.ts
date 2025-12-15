//if Condtional Statements in TypeScript
let age: number = 20;
/*
if (age >= 18) {    
    console.log("You are eligible to vote.");
} */


//if-else Conditional Statements in TypeScript

if (age >= 18) {    
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}

// if-else if-else Conditional Statements in TypeScript number is even or odd
let number: number = 15;    
if (number % 2 === 0) {    
    console.log(`${number} is an even number.`);    
} else  {    
    console.log(`${number} is an odd number.`);    
}

//Nested if-else Conditional Statements in TypeScript
//depending on marks assign grade
let marks: number = 85;

if (marks >= 90 && marks <= 100 ) { 
    console.log("Grade: A");
} else if (marks >= 75 && marks < 90) {
    console.log("Grade: B");
} else if (marks >= 50 && marks < 75) {
    console.log("Grade: C");
} else if (marks >= 35 && marks < 50) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}

// Browser selection using if-else if-else
let browser: string = "Chrome"; 
if (browser === "Chrome") {
    console.log("You are using Google Chrome.");
} else if (browser === "Firefox") {
    console.log("You are using Mozilla Firefox.");
} else if (browser === "Safari") {
    console.log("You are using Apple Safari.");
} else {
    console.log("Unknown browser.");
}   

//Switch Case Conditional Statements in TypeScript
//Depening on the value day, print the corresponding day of week
let day: number = 3;
switch (day) {
    case 1:
        console.log("Monday");  
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");   
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;  
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day number");
        break;
}

//The switch statement can also include expressions
let x: number = 10, y: number = 5;
switch (x - y) {    
    case 0:    
        console.log("Result is Zero");    
        break;
    case 5:    
        console.log("Result is Five");    
        break;  
    case 10:    
        console.log("Result is Ten");    
        break;  
    default:    
        console.log("Result is neither Zero, Five nor Ten");    
        break;  
}
