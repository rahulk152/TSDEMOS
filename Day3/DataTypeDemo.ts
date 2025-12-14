/*
1) Primitive Types (Built-in Types)
    1. Number
    2. String
    3. Boolean
    4. Null
    5. Undefined
    6. Any
    7. Union Type
    8. void
2) Non-Primitive Types (Objects & Custom Types)
    1. Array
    2. Tuple
    3. Class
    4. Functions
    5. Interface
*/

// 1. Number Type
//Represent both integer and floating point numbers
let age: number = 25;
let price: number = 99.99;
let bigInt: bigint = 9007199254741991n; // BigInt type for large integers
console.log("Age:", age);
console.log("Price:", price);
console.log("BigInt:", bigInt);

// 2. String Type
//Represent textual data
// single quotes('')
// double quotes("")
// backticks(``)

let firstName: string = "John";
let lastName: string = 'Doe';
let greeting: string = `Hello, ${firstName} ${lastName}!`;  
console.log(greeting);

// 3. Boolean Type
//Represent true/false values
let isActive: boolean = true;
let isCompleted: boolean = false;
console.log("Is Active:", isActive);
console.log("Is Completed:", isCompleted);

// 4. Null Type
//Represents the intentional absence of any object value
let emptyValue: null = null;
console.log("Empty Value:", emptyValue);

// 5. Undefined Type
//Indicates that a variable has not been assigned a value
let notAssigned: undefined = undefined; 
console.log("Not Assigned:", notAssigned);

// 6. Any Type
//Can hold any type of value, opting out of type checking
let randomValue: any = 10;
console.log("Random Value (number):", randomValue);
randomValue = "Now I'm a string";
console.log("Random Value (string):", randomValue);
randomValue = true; 
console.log("Random Value (boolean):", randomValue);

// 7. Union Type
//Can hold values of multiple specified types
let multiType: number | string; 
multiType = 42;
console.log("Multi Type (number):", multiType);
multiType = "Forty Two";
console.log("Multi Type (string):", multiType);

// 8. Void Type
//Represents the absence of any type, commonly used for functions that do not return a value
function logMessage(message: string): void {    
    console.log("Log Message:", message);
}
logMessage("This is a void function.");

