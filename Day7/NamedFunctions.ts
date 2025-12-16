// Named fuction: A fucntion that is declared with a specific name.

/* syntax
function functionName(parameters) {
    // function body
}

functionName(arguments); // function call
*/

// Example 1: Named fuction with no parameters and no return type
function display(): void {
    console.log("Hello, World!");
}
display(); // Function call

// Example 2: Named function with parameters and return type
function addNumbers(a: number, b: number): number {
    return a + b;
}
let result:number = addNumbers(5, 10); // Function call
console.log("Sum:", result);

// Example 3: Named function with Rest parameters
//Rest parameters don't restrict the number of arguments passed to a function.
function sumOfNumbers(...numbers: number[]) {
    let i;
    let sum: number = 0;
    for (i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    console.log("Sum of numbers:", sum);
}

sumOfNumbers(1, 2, 3); // Function call

// Example 4: Named function with Rest parameters - multiple data types
function findElement(...element: (number | string)[]):number {
 return element.length;
}
let lengthOfElement:number = findElement(1, "two", 3, "four", 5); // Function call
console.log("Length of elements:", lengthOfElement);

// Example 5: Named function with optional parameters
function displayDetails(id: number, name: string, mailId?: string): void {
    console.log("ID:", id);
    console.log("Name:", name);
    if (mailId !== undefined){
        console.log("Mail ID:", mailId);
    }
    
}
displayDetails(1, "John Doe", "john@gmail.com"); // Function call with all parameters
displayDetails(2, "Jane Doe"); // Function call without optional parameter

// Example 6: Named function with default parameters
function calculateDiscount(price: number, rate: number = 0.50): void {
    let discount: number = price * rate;
    console.log("Discount:", discount);
}
calculateDiscount(1000, 0.30); // Function call with both parameters
calculateDiscount(1000); // Function call with default parameter