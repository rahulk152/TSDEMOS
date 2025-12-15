// for Loop : Iterates over a block of code a specified number of times.
// Example: Print numbers from 1 to 10 using a for loop.
for (let i: number = 1; i <= 10; i++) {
    console.log(i);
}

// Print even numbers from 1 to 10 using a for loop.
for (let i: number = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }       
}

// Print odd numbers from 1 to 10 using a for loop.
for (let i: number = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }       
}

// Print numbers from 10 to 1 using a for loop.
for (let i: number = 10; i >= 1; i--) {
    console.log(i);
}   

// local and global scope demonstration
let i:number = 1; // global scope
for (let i: number = 1; i <= 5; i++) { // local scope
    console.log(`Inside loop: ${i}`);
}
console.log(`Outside loop: ${i}`);

// Output:
// Inside loop: 1
// Inside loop: 2
// Inside loop: 3
// Inside loop: 4
// Inside loop: 5
// Outside loop: 1  
// The variable 'i' inside the for loop is different from the global 'i'.

let sum: number;;
for(sum =1; sum <=5; sum++);
console.log(`Sum is : ${sum}`);