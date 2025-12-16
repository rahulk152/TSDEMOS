// Arrow Functions/Lamda Functions : A shorter syntax for writing functions in TypeScript.

/* Lamada refers to an anonymous function in programming.
Lamada functions are a concise way to represent functions using the "fat arrow" syntax (=>).
These functions are often used for short, single-expression functions or as callbacks.

There are 3 parts to an arrow function:
1. Parameters: The input values for the function, enclosed in parentheses.
2. Arrow (=>): The fat arrow symbol that separates the parameters from the function body.
3. Function Body: The code that defines what the function does. 
It can be a single expression or a block of code enclosed in curly braces.

 syntax
let variableName = (parameters) => {
    // function body
};
variableName(arguments); // function call
*/

// Example 1: Arrow function with no parameters and no return type
let greet = (): void => {
    console.log("Hello, World!");
}
greet(); // Function call

// Example 2: Arrow function with parameters and return type
let add = (a: number, b: number): number => {
    return a + b;
}   
let sum: number = add(5, 10); // Function call
console.log("Sum:", sum);

// Example 3: Arrow function with single parameter and implicit return type
let square = (x: number): number => x * x;
let squaredValue: number = square(6); // Function call
console.log("Squared Value:", squaredValue);

// Example 4: Arrow function with optional parameters
let displayInfo = (id: number, name: string, email?: string): void => {
    console.log("ID:", id);
    console.log("Name:", name); 
    if (email !== undefined) {
        console.log("Email:", email);
    }
}
displayInfo(1, "Alice", "alice@gmail.com"); // Function call with all parameters
displayInfo(2, "Bob"); // Function call without optional parameter

// Example 5: Arrow function with default parameters
let calculateDiscount1 = (price: number, rate: number = 0.10): void => {
    let discount: number = price * rate;
    console.log("Discount:", discount);
}
calculateDiscount1(200); // Function call with default rate
calculateDiscount1(200, 0.20); // Function call with custom rate

// Example 6: Arrow function with Rest parameters
let findElement1 = (...element: (number | string)[]):number =>{
 return element.length;
}
let res = findElement1 (1, "two", 3, "four", 5); // Function call
console.log("Length of elements:", res);