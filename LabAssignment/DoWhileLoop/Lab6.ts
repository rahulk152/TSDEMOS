// 1. Write a program to print numbers from 1 to 10 using a do-while loop.
let countDoWhile: number = 1;
do {
    console.log(countDoWhile);
    countDoWhile++;
} while (countDoWhile <= 10);   

// 2. Write a program that performs basic arithmetic operations (addition, subtraction,
// multiplication, and division) using a do-while loop until the user chooses to exit.
let choice: number;
do {
    // Simulating user choice for demonstration purposes
    choice = Math.floor(Math.random() * 5); // Random choice between 0 and 4    
    let a: number = 10; // Example operand
    let b: number = 5; // Example operand
    switch (choice) {
        case 1:
            console.log(`Addition: ${a} + ${b} = ${a + b}`);    
            break;
        case 2:
            console.log(`Subtraction: ${a} - ${b} = ${a - b}`);    
            break;
        case 3:
            console.log(`Multiplication: ${a} * ${b} = ${a * b}`);    
            break;
        case 4:
            console.log(`Division: ${a} / ${b} = ${a / b}`);    
            break;
        case 0:
            console.log("Exiting...");
            break;
        default:
            console.log("Invalid choice, please try again.");
    }
} while (choice !== 0);