// ======== forEach(), map(), filter(), reduce(), some(), every() ========

// 1. forEach() - Executes a function once for each array element.
// It takes function as parameter
// Syntax: array.forEach(function(currentValue, index, array){})
// currentValue: The current element being processed in the array
// index (Optional): The index of the current element being processed in the array
// array (Optional): The array that forEach() is being applied to

// Example: get index of all the fruites along with value
let fruits: string[] = ['Apple', 'Banana', 'Orange', 'Mango', 'kiwi'];

console.log('Using for in loop to get index and value of fruits:');
for(let i in fruits) {
    console.log(`Index: ${i}, Fruit: ${fruits[i]}`);
}   

console.log('Using forEach to get index and value of fruits:');
fruits.forEach(function(element, index) {
    console.log(`Index: ${index}, Fruit: ${element}`);
});

// using arrow function
console.log('Using forEach with arrow function to get index and value of fruits:'); 
fruits.forEach((element, index) => {
    console.log(`Index: ${index}, Fruit: ${element}`);
});

// Example: Element in uppercase
console.log('Fruits in uppercase using forEach:');  
fruits.forEach((element) => {
    console.log(element.toUpperCase());
});

// 2. map() - Creates a new array populated with the results of calling function on every element of an array.
// It take function as parameter
// Return the same number of elements that we have in original array
// Syntax: array.map(function(currentValue, index, array){})
// currentValue: The current element being processed in the array
// index (Optional): The index of the current element being processed in the array
// array (Optional): The array that map() is being applied to

// Ex: Get square of all the numbers in an array. Ex: [1,2,3,4] => [1,4,9,16]
let numbers: number[] = [1, 2, 3, 4, 5];
let squares = numbers.map(function(num) {
    return num * num;
});
console.log('Original numbers array:', numbers);
console.log('Squares of numbers using map:', squares);

// EX: Douple each Number
let doubledNumbers = numbers.map(num => num * 2);//If you have single return statement, you can skip {} as they are optional
console.log('Doubled numbers using map and arrow function:', doubledNumbers);

// 3. filter() - Creates a new array with all elements that pass/satisfy the function.
// It take function as parameter
// Return either same number of elements or less than original array
// Syntax: array.filter(function(currentValue, index, array){})
// currentValue: The current element being processed in the array
// index (Optional): The index of the current element being processed in the array
// array (Optional): The array that filter() is being applied to

// Ex: Get all the even numbers from an array
let evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log('Even numbers using filter:', evenNumbers);

// Ex: Get the numbers greater than 3 from an array
let greaterThanThree = numbers.filter(num => num > 3);
console.log('Numbers greater than 3 using filter:', greaterThanThree);

// 4. reduce() - Applies a function on every element of the array and returnsa single output value.
// It take function as parameter
// Syntax: array.reduce(function(accumulator, currentValue, index, array){})
// accumulator: It accumulates the callback's return values. It is the accumulated value previously returned in the last invocation of the callback, or initialValue, if supplied.
// currentValue: The current element being processed in the array
// index (Optional): The index of the current element being processed in the array
// array (Optional): The array that reduce() is being applied to

// Ex: Get the sum of all numbers in an array
let sum = numbers.reduce((total, element) => {
    return total + element;
}, 0); // here 0 is default value of accumulator
console.log('Sum of all numbers using reduce:', sum);

// some() - checks if any element satisfies the condition provided in the function
// Return true if atleast one element satisfies the condition otherwise return false
// It take function as parameter
// Syntax: array.some(function(currentValue, index, array){})
// currentValue: The current element being processed in the array
// index (Optional): The index of the current element being processed in the array
// array (Optional): The array that some() is being applied to

// EX: check array conatins negative number
let hasNegative = numbers.some(num => num < 0);
console.log('Array contains negative number using some():', hasNegative);

// Ex: check array conatins positive number
let hasPositive = numbers.some(num => num > 0);
console.log('Array contains positive number using some():', hasPositive);

// 6. every() - checks if all elements satisfies the condition provided in the function
// Return true if all elements satisfies the condition otherwise return false
// It take function as parameter
// Syntax: array.every(function(currentValue, index, array){})
// currentValue: The current element being processed in the array
// index (Optional): The index of the current element being processed in the array
// array (Optional): The array that every() is being applied to
// EX: check if all numbers are even
let allEven = numbers.every(num => num % 2 === 0);
console.log('All numbers are even using every():', allEven);

// Ex: check all the number are greater than 1
let allGreaterThanOne = numbers.every(num => num >= 1);
console.log('All numbers are greater than 1 using every():', allGreaterThanOne);    

// Ex: check all number are positive
let allPositive = numbers.every(num => num > 0);
console.log('All numbers are positive using every():', allPositive);    