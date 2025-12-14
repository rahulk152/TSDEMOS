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
var city = "New York";
var city = "Los Angeles"; // Re-declaration allowed
console.log(city); // Output: Los Angeles
let country = "USA";
//let country = "Canada"; // Error: Cannot redeclare block-scoped variable 'country'
console.log(country); // Output: USA
const pi = 3.14;
//const pi = 3.14159; // Error: Cannot redeclare block-scoped variable 'pi'
console.log(pi); // Output: 3.14    
//4) Re-initialization/Re-assignment:
// var, let - allow re-assignment
// const - do not allow re-assignment(make code safer)
var score = 100;    
score = 150; // Re-assignment allowed
console.log(score); // Output: 150
let level = 1;
level = 2;
console.log(level); // Output: 2
const gravity = 9.8;
//gravity = 10; // Error: Assignment to constant variable.
console.log(gravity); // Output: 9.8
//5) Hoisting:
// var - hoisted and initialized with undefined
// let, const - hoisted but not initialized (Temporal Dead Zone)
//console.log(a); // Output: undefined (due to hoisting)
var a = 5;  
//console.log(b); // Error: Cannot access 'b' before initialization
let b = 10;
//console.log(c); // Error: Cannot access 'c' before initialization
const c = 15;


