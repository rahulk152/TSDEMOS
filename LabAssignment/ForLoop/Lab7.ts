// 1. Print Multiples of 5 from 5 to 50
for (let i: number = 5; i <= 50; i += 5) {
    console.log(i);
}
 
// 2. Print Prime Numbers between 1 and 50
for (let num: number = 2; num <= 50; num++) {
    let isPrime: boolean = true;
    for (let i: number = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(num);
    }
}

// 3. Print Sum of Even Numbers between 1 and 20
let sumEven: number = 0;
for (let i: number = 1; i <= 20; i++) {
    if (i % 2 === 0) {  
        sumEven += i;
    }
}
console.log(`Sum of even numbers between 1 and 20 is: ${sumEven}`);

// 4. Print Sum of Odd Numbers between 1 and 20
let sumOdd: number = 0;
for (let i: number = 1; i <= 20; i++) {
    if (i % 2 !== 0) {  
        sumOdd += i;
    }
}
console.log(`Sum of odd numbers between 1 and 20 is: ${sumOdd}`);

// 5. Print Table of 7
for (let i: number = 1; i <= 10; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
}       

// 6. Print Numbers Divisible by 3 and 5 from 1 to 100  
for (let i: number = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i);
    }
}

// 7. Count Number of Digits in a Number
let number7: number = 123456; // You can change this value to test with a different number.
let countDigits: number = 0;
for ( num2 = number7; num2 > 0; num2 = Math.floor(num2 / 10)) { 
    countDigits++;
}
console.log(`Number of digits in ${number7} is: ${countDigits}`);

// 8. Find Sum of Digits in a Number
let number8: number = 78945; // You can change this value to test with a different number.
let sumDigits: number = 0;
for ( num1 = number8; num1 > 0; num1 = Math.floor(num1 / 10)) { 
    let digit: number = num1 % 10;   
    sumDigits += digit;   
}
console.log(`Sum of digits in ${number8} is: ${sumDigits}`);

// 9. Print Multiples of 7 between 1 and 100
for (let i: number = 1; i <= 100; i++) {
    if (i % 7 === 0) {
        console.log(i);
    }
}

// 10. Calculate the sum of all even numbers from 1 to N.
let N: number = 30; // You can change this value to test with a different N.
let totalSumEven: number = 0;   
for (let i: number = 1; i <= N; i++) {
    if (i % 2 === 0) {
        totalSumEven += i;
    }
}
console.log(`Sum of all even numbers from 1 to ${N} is: ${totalSumEven}`);

// 11. 