
let number: number[] = [1, 2, 3, 4, 5];
let fruites: string[] = ['Apple', 'Banana', 'Orange'];

console.log('Original number array:', number);
console.log('Original fruites array:', fruites);

// length - Attributes (Not a method)
console.log('Length of number array:', number.length);
console.log('Length of fruites array:', fruites.length);

// push() - Add single or multiple elements to the end of an array
// Syntax: array.push(element1, ..., elementN)
number.push(6, 7);
console.log('After push, number array:', number);

// pop() - Remove the last element from an array
// Syntax: array.pop()
let remove = fruites.pop();
console.log('After pop, fruites array:', fruites);
console.log('Popped element:', remove);

// Shift() - Remove the first element from an array
// Syntax: array.shift()
let removeFirst = number.shift();
console.log('After shift, number array:', number);
console.log('Shifted element:', removeFirst);   

// unshift() - Add single or multiple elements to the beginning of an array
// Syntax: array.unshift(element1, ..., elementN)
fruites.unshift('Mango', 'Pineapple');
console.log('After unshift, fruites array:', fruites);

// Concat() - Merge two or more arrays
// Syntax: array1.concat(array2, ..., arrayN)
let combinedArray = number.concat([8, 9], [10]);
console.log('After concat, combined number array:', combinedArray);

// Slice() - Extract a section of an array and return it as a new array
// Starting index starts from Zero
//Ending index will be exclusive.
// Syntax: array.slice(begin, end)
let slicedArray = fruites.slice(1, 3);
console.log('Sliced fruites array (index 1 to 3):', slicedArray);

// Splice() - Add or remove elements from an array
// Syntax: array.splice(start, deleteCount, item1, item2, ...)
number.splice(2, 2, 20, 30); // Removes 2 elements from index 2 and adds 20, 30
console.log('After splice, number array:', number);

// Ex 1: only remove elements
console.log('Before splice, fruites array:', fruites);
fruites.splice(1, 2); // Remove 2 elements starting from index 1
console.log('After splice, fruites array:', fruites);

// Ex 2: not removing elements, just adding
fruites.splice(1, 0, 'Grapes', 'Peach'); // Add elements at index 1 without removing any
console.log('After splice to add, fruites array:', fruites);    

// Ex 3: removing and adding elements
fruites.splice(1, 2, 'cherry','apple'); // Replace 2 elements at index 1 with 'cherry'
console.log('After splice to replace, fruites array:', fruites);

// IndexOf() - Return the first index at which a given element can be found in the array
// Syntax: array.indexOf(searchElement, fromIndex)

// Example 1:
let index = fruites.indexOf('Mango');
console.log('Index of Mango in fruites array:', index);

// Example 2:
let notFoundIndex = fruites.indexOf("pineapple");
console.log('Index of pineapple in fruites array:', notFoundIndex); // Returns -1 if not found

// Example 3: Using fromIndex
let fromIndexExample = fruites.indexOf('cherry', 0);
console.log('Index of cherry in fruites array starting from index 2:', fromIndexExample);

// Includes() - Determine whether an array includes a certain element
// Syntax: array.includes(searchElement, fromIndex) 
let hasApple = fruites.includes('apple');
console.log('Does fruites array include apple?', hasApple);
let hasPineapple = fruites.includes('Pineapple');
console.log('Does fruites array include Pineapple?', hasPineapple);
let hasBananaFromIndex2 = fruites.includes('Banana', 2);
console.log('Does fruites array include Banana starting from index 2?', hasBananaFromIndex2);

// ToString() - Convert an array to a string
// Syntax: array.toString()
let numberString = number.toString();   
console.log('Number array as string:', numberString);
let fruitesString = fruites.toString();
console.log('Fruites array as string:', fruitesString);
