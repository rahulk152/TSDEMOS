// Callback fucntion : A function that is passed as an argument to another function.

/* syntax   
function higherOrderFunction(callback: Function) {
    // function body
    callback();
}   
higherOrderFunction(functionName); // function call
*/
// Example 1: Callback function with named function

// function that takes another function as a parameter
function greet1(name: string, smg: (message:string) => void) {
    console.log( name);
    smg("Welcome"); // Invoking the callback function
}
// named function to be used as a callback
function showMessage(message:string): void {
    console.log("Message:", message);
}
//Calling function by passing the callback function
greet1("john", showMessage); // Function call

// Example 2:

// function that takes another function as a parameter
function sumNum(a: number, b: number, callback: (result: number) => void){
    let result: number = a + b;
    callback(result); // Invoking the callback function with the result
}

// Call back fuction
function displayResult(result: number): void {
    console.log("Result:", result);
}

sumNum(5, 10, displayResult); // Function call


