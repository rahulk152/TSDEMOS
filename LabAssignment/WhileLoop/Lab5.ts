//While loop
// 1. Write a program to calculate the sum of the first 10 natural numbers using a while loop.
let sumNatural: number = 0;
let numNatural: number = 1;
while (numNatural <= 10) {
    sumNatural += numNatural;
    numNatural++;
}  
console.log(`Sum of first 10 natural numbers: ${sumNatural}`);

// 2. Write a program to calculate the factorial of a given number using a while loop.
let factorialNum: number = 5; // You can change this value to calculate factorial of a different number.
let factorialResult: number = 1;
let counterFactorial: number = 1;
while (counterFactorial <= factorialNum) {
    factorialResult *= counterFactorial;
    counterFactorial++;
}   
console.log(`Factorial of ${factorialNum} is: ${factorialResult}`);

// 3. Write a program to reverse a given number using a while loop. in simple way
let num3: number = 45678;
let reversed: number = 0;

while (num3 > 0) {
  const digit = num3 % 10;
  reversed = reversed * 10 + digit;
  num3 = Math.floor(num3 / 10);
}

console.log("Reversed number:", reversed);

// 4. Write a program to check if a given number is a prime number using a while loop.
let primeNum: number = 29; // You can change this value to check for a different number.
let isPrime: boolean = true;
let divisor: number = 2;
if (primeNum <= 1) {
    isPrime = false;
}
while (divisor <= Math.sqrt(primeNum)) {
    if (primeNum % divisor === 0) {
        isPrime = false;
        break;
    }
    divisor++;
}
if (isPrime) {
    console.log(`${primeNum} is a prime number.`);
} else {
    console.log(`${primeNum} is not a prime number.`);
}

// 5. Write a program to find the largest digit in a given number using a while loop.
let number5: number = 493867; // You can change this value to test with a different number.
let largestDigit: number = 0;
while (number5 > 0) {
    let digit: number = number5 % 10;   
    if (digit > largestDigit) {   
        largestDigit = digit;   
    }   
    number5 = Math.floor(number5 / 10);
}
console.log(`The largest digit is: ${largestDigit}`);
 
// 6. Write a program to check if a given number is a palindrome using a while loop.
let number6: number = 12321; // You can change this value to test with a different number.
let originalNumber: number = number6;
let reversedNumber: number = 0; 
while (number6 > 0) {
    let digit: number = number6 % 10;   
    reversedNumber = reversedNumber * 10 + digit;   
    number6 = Math.floor(number6 / 10);   
}   
