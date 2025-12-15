// while loop : A while loop repeatedly executes a block of code as long as a specified condition is true.

// Example: Print numbers from 1 to 10 using a while loop.
let count: number = 1;
while (count <= 10) {
    console.log(count);
    count++;
}   

// Print even numbers from 2 to 10 using a while loop.
// Method 1: Incrementing by 2 to directly get even numbers.
let evenCount: number = 2;
while (evenCount <= 10) {
    console.log(evenCount);
    evenCount += 2;
}   
// Method 2: Using an if condition inside the while loop.
let numEven: number = 1;
while (numEven <= 10) {
    if (numEven % 2 === 0) {
        console.log(numEven);
    }   
    numEven++;
}

// Print odd numbers from 2 to 10 using a while loop.
// Method 1: Incrementing by 2 to directly get even numbers.
let oddCount: number = 1;
while (evenCount <= 10) {
    console.log(evenCount);
    evenCount += 2;
}   
// Method 2: Using an if condition inside the while loop.
let numOdd: number = 1;
while (numOdd <= 10) {
    if (numOdd % 2 != 0) {
        console.log(numOdd);
    }   
    numOdd++;
}

