// String - Text  value or a combination of characters
/* 
1. Single Quotes: String Literal
2. Double Quotes: String Literal
3. Backticks: String Template - When we try to use a string variable inside another string value ${variableName}

// Index in string starts from 0

'', "", ``

// String value is case-sensitive
*/

// Declartion of string
let str1: string = 'Hello World'; // Single Quotes
let str2: string = "Hello World"; // Double Quotes
let str3: string = `Hello World`; // Backticks
console.log(str1, str2, str3);

// When to user Backticks
let num1: number = 10;
console.log(`The value of num1 is: ${num1}`); // Using variable inside string

// String Methods
let str: string = 'Hello, TypeScript!';

// 1. length - Find the Length of string(How many characters are there in string)
console.log('Length of string:', str.length);

// 2. toUpperCase() and toLowerCase() - Convert to Uppercase and Lowercase
console.log('Uppercase:', str.toUpperCase());
console.log('Lowercase:', str.toLowerCase());

// 3. charAt(index) and indexOf(string) - Get character at specific index
console.log('Character at index 7:', str.charAt(7));
console.log('Index of "TypeScript":', str.indexOf("TypeScript"));   

// 4. substring(start, end) - Extract substring from string
// ending index is exclusive
console.log('Substring (0 to 5):', str.substring(0, 5));

// 5. includes(substring) - Check if substring exists in string returns boolean
console.log('Includes "TypeScript"?', str.includes("TypeScript"));
console.log('Includes "JavaScript"?', str.includes("JavaScript"));

// 6. startsWith(substring) and endsWith(substring) - Check start and end of string returns boolean
console.log('Starts with "Hello"?', str.startsWith("Hello"));
console.log('Ends with "TypeScript!"?', str.endsWith("TypeScript!"));

// 7. replace(oldSubstring, newSubstring) - Replace part of string
let newStr = str.replace("TypeScript", "JavaScript");
console.log('After replacement:', newStr);

// 8. split(delimiter) - Split string into array based on delimiter
let strArray: string[] = str.split(" ");
console.log('Split string:', strArray);

// 9. trim(), trimStart(), trimEnd() - Remove whitespace from both ends of string
let strWithSpaces: string = '   Hello, TypeScript!   ';
console.log('Trimmed string:', strWithSpaces.trim());
console.log('Trimmed start:', strWithSpaces.trimStart());
console.log('Trimmed end:', strWithSpaces.trimEnd());

// 10. concat(string1, string2, ...) - Concatenate multiple strings
let strA: string = 'Hello';
let strB: string = 'World';
let concatenatedStr = strA.concat(', ', strB, '!');
console.log('Concatenated string:', concatenatedStr);

// concept of immutability
let originalStr: string = 'Hello';
let modifiedStr: string = originalStr.replace('H', 'J');
console.log('Original String:', originalStr); // Hello
console.log('Modified String:', modifiedStr); // Jello

// Strings are immutable in TypeScript. Any modification creates a new string.

// multi-line string using backticks
let multiLineStr: string = `This is a multi-line string.
It can span across multiple lines.
Using backticks makes it easy!`;
console.log(multiLineStr);
