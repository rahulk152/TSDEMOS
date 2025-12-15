//do-while-loop : A do-while loop is similar to a while loop, 
// but it guarantees that the block of code will be executed at least once before checking the condition.

// Example: Print numbers from 1 to 10 using a do-while loop.
let countDo: number = 1;    
do {
    console.log(countDo);    
    countDo++;    
} while (countDo <= 10);

// print number 10 to 1 using do-while loop
let reverseCountDo: number = 10;    
do {
    console.log(reverseCountDo);    
    reverseCountDo--;    
} while (reverseCountDo >= 1);