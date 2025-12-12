// Variables - conatiner which holds/stores some data
// var, let, const
//Sytax: var/let/const variableName : dataType = value  
//Example: var age: number = 25;
//Ex var age = 25;

var age = 30; // number
console.log(age);

// var vs let vs const
/*
1) Scope:
   var - function scope
   let - block scope
   const - block scope
2) Declaration/ Value Assignment:
3) Re-declaration:
4) Re-initialization/Re-assignment:
5) Hoisting:
*/
//var - we do not use this in Modern TS/JS. Avoid using var because of its function scope and can lead to unexpected issues.
//let - Use let when you need a variable that can change.
//const - Use const when the variable value should not change.

//Scope - Accessible area of a variable(Function scope(var), Block scope(let, const))
//Ex 1: var
function varScope() {
    if (true) {
        var varVariable = "I am a var variable";
        //console.log(varVariable); // Accessible here
    }   

    console.log(varVariable); // Accessible here
}
varScope();
//Ex 2: let, const
function blockScope() {
    if (true) {
        let msg = "hello world";
        const greet = "Good Morning";
        console.log(msg); // Accessible here
        console.log(greet); // Accessible here
    }       
    //console.log(msg); // Error: letVariable is not defined
}
blockScope();

//2) Declaration/ Value Assignment:
//Ex: var can be declared without value assignment
var x; // Declaration without value assignment
console.log(x); // Output: undefined
x = 10; // Value assignment
console.log(x); // Output: 10
//Ex: let can be declared without value assignment
let y; // Declaration without value assignment
console.log(y); // Output: undefined        
y = 20; // Value assignment
console.log(y); // Output: 20
//Ex: const must be declared with value assignment
//const z; // Error: Missing initializer in const declaration
const z = 30; // Declaration with value assignment
console.log(z); // Output: 30   

//3) Re-declaration:
// var - allows re-declaration
//let, const - do not allow re-declaration(make code safer)

