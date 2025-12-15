// 1.  Write a program to print the odd numbers from 1 to 20 using a for loop.
//  Use the continue statement to skip even numbers.
for (let i: number = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        continue; // Skip even numbers
    }   
    console.log(i); // Print odd numbers
}

// 2. Write a program to print numbers from 1 to 30, but skip numbers that are multiples of 5.
//  Use the continue statement within a while loop.
let numb: number = 1;
while (numb <= 30) {
    if (numb % 5 === 0) {    
        numb++;
        continue; // Skip multiples of 5
    }
    console.log(numb); // Print numbers that are not multiples of 5
    numb++;
}   
