// Anonymous Functions : Functions without a name, 
// Instead assigned to a variable, which act as it's name.

/* syntax
let variableName = function(parameters) {
    // function body
};
variableName(arguments); // function call
*/

// Example 1: Anonymous function 
let msg = function(): String {
    return "Hello, World!";
}   
console.log(msg()); // Function call

// Example 2: Anonymous function with parameters 
let multiply = function(x: number, y: number): number {
    return x * y;
}
let product: number = multiply(5, 10); // Function call
console.log("Product:", product);