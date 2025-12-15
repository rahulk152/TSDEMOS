//Assignment
// 1. Check if a person is a teenager (age between 13 and 19 inclusive).
let agePerson: number = 16;   
if (agePerson >= 13 && agePerson <= 19) {   
    console.log("The person is a teenager.");
}   else {
    console.log("The person is not a teenager.");
}

// 2. Compare two numbers and print the larger one.
let num1: number = 45, num2: number = 30;
if (num1 > num2) {   
    console.log(`${num1} is larger than ${num2}.`); 
} else {   
    console.log(`${num2} is larger than ${num1}.`); 
}

// 3. Check if a number is positive, negative, or zero.
let numberCheck: number = -10;
if (numberCheck > 0) {   
    console.log(`${numberCheck} is a positive number.`);    
} else if (numberCheck < 0) {   
    console.log(`${numberCheck} is a negative number.`);    
} else {   
    console.log("The number is zero.");    
}

// 4. Check if a person is eligible for a senior citizen discount (age >= 60).
let seniorAge: number = 65;   
if (seniorAge >= 60) {   
    console.log("The person is eligible for a senior citizen discount.");    
} else {   
    console.log("The person is not eligible for a senior citizen discount.");    
}   