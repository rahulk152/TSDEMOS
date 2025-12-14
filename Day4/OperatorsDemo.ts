let a:number = 10, b:number=20;

// Arithmetic Operators
console.log("********Arithmetic Operators********");
console.log("a + b =", a + b); // Addition
console.log("b - a =", b - a);  // Subtraction
console.log("a * b =", a * b); // Multiplication
console.log("b / a =", b / a); // Division
console.log("b % a =", b % a); // Modulus   
console.log("a ** 2 =", a ** 2); // Exponentiation

// Assignment Operators
console.log("********Assignment Operators********");
a=10;
b=5;
console.log(a+=b); // a = a + b
console.log(a-=b); // a = a - b
console.log(a*=b); // a = a * b
console.log(a/=b); // a = a / b
console.log(a%=b); // a = a % b

// Relational Operators
//return boolean value
console.log("********Relational Operators********");
console.log("a > b:", a > b); // Greater than
console.log("a < b:", a < b); // Less than  
console.log("a >= b:", a >= b); // Greater than or equal to
console.log("a <= b:", a <= b); // Less than or equal to
console.log("a == b:", a == b); // Equal to
console.log("a != b:", a != b); // Not equal to
console.log("a === b:", a === b); // Strict equal to
console.log("a !== b:", a !== b); // Strict not equal to    

// Difference between '==' and '==='
console.log("********Difference between '==' and '==='********");
let num1: any = 5;
let num2: any = "5";
console.log("Using '==':", num1 == num2); // true, type coercion (only value comparison)
console.log("Using '===':", num1 === num2); // false, no type coercion (both value and type comparison)

// Logical Operators
//return boolean value
// b1  b2  b1&&b2  b1||b2  !b1
// T   T     T      T     F
// T   F     F      T     F
// F   T     F      T     T
// F   F     F      F     T
console.log("********Logical Operators********");
let x: boolean = true;
let y: boolean = false;
console.log("x && y:", x && y); // Logical AND
console.log("x || y:", x || y); // Logical OR
console.log("!x:", !x); // Logical NOT  

// combination of relational and logical operators
console.log("********Combination of Relational and Logical Operators********");
console.log(20>10 && 5<15); // true
console.log(20<10 || 5>15); // true

