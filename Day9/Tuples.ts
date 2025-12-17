/*
Tuples in TypeScript
- A tuple is a fixed-length array where each element has a specific type.
- It helps in storing multiple fields of different data types together.

*/

// Example 1: Tuple with two elements

let person1: [string, number] = ["Alice", 30]; //Declaring and initializing a tuple
console.log("Name:", person1[0]); //Accessing first element
console.log("Age:", person1[1]); //Accessing second element

// Example 2: Tuple with multiple values
let user: [number, string, boolean,number, string] = [101, "Bob", true, 25, "Engineer"]; //Declaring and initializing a tuple
console.log(user);

// Example 3: Iterating through a tuple using traditional for loop
console.log("Iterating through tuple using traditional for loop:");
for (let i = 0; i < user.length; i++) {
    console.log(user[i]);
}   

// Example 4: Iterating through a tuple using for...in loop
console.log("Iterating through tuple using for...in loop:");
for (let index in user) {
    console.log(user[index]);
}   
// Example 5: Iterating through a tuple using for...of loop
console.log("Iterating through tuple using for...of loop:");    
for (let value of user) {
    console.log(value);
}
// Example 6: Tuple Array(Array of Tuples )
let students: [number, string][] = [  //Declaring and initializing an array of tuples   
    [1, "Alice"],
    [2, "Bob"],
    [3, "Charlie"]
];
console.log(students.length); // Output: 3
console.log(students[0]); // Output: [1, "Alice"]

let tp = students[0];
console.log(tp[0]); // Output: 1
console.log(tp[1]); // Output: "Alice"