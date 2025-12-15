// 1. Write a program to find and print the first even number between 1 and 10 using a for loop. 
// Use the break statement to exit the loop as soon as you find the first even number.
for (let i: number = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(`First even number is: ${i}`);
        break; // Exit the loop after finding the first even number
    }
}

// 2. Write a program to print numbers from 1 to 30. 
// Stop printing and exit the loop when you find a number greater than 15.
//  Use the break statement within a for loop.
for (let i: number = 1; i <= 30; i++) {
    if (i > 15) {
        break; // Exit the loop when number is greater than 15
    }   
    console.log(i);
}