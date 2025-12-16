// Step 1 : Write overloaded function signatures
// Step 2 : Write function implementation
// Step 3 : Call the overloaded function

// Example 1 : Different parameter types
 function getInfo(id: number): string; // Function signature 1
 function getInfo(name: string): string; // Function signature 2

    function getInfo(value: number | string): string { // Function implementation
        if (typeof value === "number") {
            return `ID: ${value}`;
        } else {
            return `Name: ${value}`;
        }
    }

    console.log(getInfo(101)); // Function call with number parameter
    console.log(getInfo("Alice")); // Function call with string parameter

// Example 2 : Different number of parameters
function addNum(a: number, b: number): number; // Function signature 1
function addNum(a: number, b: number, c: number): number; // Function signature 2

function addNum(a: number, b: number, c?: number): number { // Function implementation
    if (c !== undefined) {
        return a + b + c;
    } else {
        return a + b;
    }
}

console.log("Sum of 2 numbers:", addNum(5, 10)); // Function call with 2 parameters
console.log("Sum of 3 numbers:", addNum(5, 10, 15)); // Function call with 3 parameters 

// Example 3 : Different return types
function processInput(input: string): string; // Function signature 1
function processInput(input: number): number; // Function signature 2

function processInput(input: string | number): string | number { // Function implementation 
    if (typeof input === "string") {
        return `Processed String: ${input.toUpperCase()}`;
    } else {
        return input * 2;
    }
}   
console.log(processInput("hello")); // Function call with string parameter
console.log(processInput(50)); // Function call with number parameter

// Example 4 : 
function greet2(name: string): string; // Function signature 1
function greet2(age: number): string; // Function signature 2
function greet2(isMarried: boolean): string; // Function signature 3

function greet2(value: string | number | boolean): string { // Function implementation  
    if (typeof value === "string") {
        return `Hello, ${value}!`;
    } else if (typeof value === "number") {
        return `You are ${value} years old.`;
    } else {
        return value ? "You are married." : "You are single.";
    }
}

console.log(greet2("Bob")); // Function call with string parameter
console.log(greet2(30)); // Function call with number parameter
console.log(greet2(true)); // Function call with boolean parameter
