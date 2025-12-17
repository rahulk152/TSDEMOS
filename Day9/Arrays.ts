/* Array in typescript
- An array is a special type of variable that stores multiple values in a single variable.
- The value can be of same or different data types.
- Arrays are an ordered collection of elements.
- Each element in an array has a numeric index starting from 0.
- Arrays are declared using square brackets [] or generic array type Array<type>.


*/

// Approach 1: Using literal syntax
/*let names: string[] = []; //Declaring an array of strings

// Initializing/assigning values to the array
names[0] = "Alice";
names[1] = "Bob";
names[2] = "Charlie";*/

let names: string[] = ["Alice", "Bob", "Charlie"]; //Declaring and initializing an array of strings
console.log("Names Array:", names);

// Approach 2: Using generic array type
let empName: Array<string> = ["Alice", "Bob", "Charlie"]; //Declaring and initializing an array of strings
let empId: Array<number> = [101, 102, 103]; //Declaring and initializing an array of numbers
let data: Array<number | string> = [1, "Two", 3, "Four"]; //Declaring and initializing an array of mixed data types
let mixedData: Array<any> = [1, "Two", true, 4.5, null]; //Declaring and initializing an array of any data types
console.log("Employee Names:", empName);
console.log("Employee IDs:", empId);
console.log("Mixed Data Array:", data);
console.log("Any Data Array:", mixedData);

// Example 1: Iterating through an array using traditional for loop
console.log("Iterating using traditional for loop: Emaployee Names");
for (let i = 0; i < empName.length; i++) {
    console.log(empName[i]);
}

// Example 2: Iterating through an array using for...in loop(Indexes)
console.log("Iterating using for...in loop: Employee IDs");
for (let index in empId) {
    console.log(empId[index]);
}   
// Example 3: Iterating through an array using for...of loop(Values)
console.log("Iterating using for...of loop: Mixed Data Array");
for (let value of data) {
    console.log(value);
}   

// Example 4: Passing array to a function
// Search an element in an array using function
function searchElement(ele: number, arr: number[]): Boolean {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === ele) {
            return true; // Return true if found
        }
    }   
    return false; // Return false if not found
}

let arr : number[] = [10, 20, 30, 40, 50];
console.log(searchElement(30, arr));    // Output: true
console.log(searchElement(60, arr));    // Output: false

// Example 5: A function takes an array and returns an array

function capitalizeWords(arr: string[]): string[] {
    let result: string[] = [];
   for (let i = 0; i < arr.length; i++) {
         result[i] = arr[i].toUpperCase();
    }
    return result;
}
let words: string[] = ["hello", "world", "typescript"];
console.log("Capitalized Words:", capitalizeWords(words)); // Output: ["HELLO", "WORLD", "TYPESCRIPT"]