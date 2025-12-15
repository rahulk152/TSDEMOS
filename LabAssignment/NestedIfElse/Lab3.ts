//Assignment Nested If-Else
// 1. Check if a number is positive and even.
let numCheck: number = 28;
if (numCheck > 0 && numCheck % 2 === 0 ) {
        console.log(`${numCheck} is a positive even number.`);
} else {   
        console.log(`${numCheck} is a positive odd number.`);
}

// 2. Check if a character is an uppercase vowel.
let character: string = 'E';
if (character >= 'A' && character <= 'Z') {
    if (character === 'A' || character === 'E' || character === 'I' || character === 'O' || character === 'U') {
        console.log(`${character} is an uppercase vowel.`);
    } else {
        console.log(`${character} is an uppercase consonant.`);
    }
} else {
    console.log(`${character} is not an uppercase letter.`);
}

// 3. Find the largest of three numbers.
let numA: number = 45, numB: number = 78, numC: number = 32;
if (numA >= numB && numA >= numC) {
    console.log(`${numA} is the largest number.`);
} else if (numB >= numC) {
        console.log(`${numB} is the largest number.`);
    } else {
        console.log(`${numC} is the largest number.`);
}

// 4. Check if a number is a multiple of both 5 and 10.
let multipleCheck: number = 60;
if (multipleCheck % 5 === 0 && multipleCheck % 10 === 0) {
        console.log(`${multipleCheck} is a multiple of both 5 and 10.`);
}  else if (multipleCheck % 5 == 0) {   
        console.log(`${multipleCheck} is a only multiple of 5.`);   
} else {  
        console.log(`${multipleCheck} is not a multiple of both 5 and 10.`);   
}
  
// 5. Check if a character is a vowel or consonant.
let charCheck: string = 'k';
if ((charCheck >= 'A' && charCheck <= 'Z') || (charCheck >= 'a' && charCheck <= 'z')) {
    if (charCheck === 'A' || charCheck === 'E' || charCheck === 'I' || charCheck === 'O' || charCheck === 'U' ||
        charCheck === 'a' || charCheck === 'e' || charCheck === 'i' || charCheck === 'o' || charCheck === 'u') {
        console.log(`${charCheck} is a vowel.`);
    } else {
        console.log(`${charCheck} is a consonant.`);
    }
} else {
    console.log(`${charCheck} is not an alphabetic character.`);
}

// 6. Check if a number is divisible by both 2 and 3.
let divCheck: number = 6;
if (divCheck % 2 === 0 && divCheck % 3 === 0) {
        console.log(`${divCheck} is divisible by both 2 and 3.`);
} else if (divCheck % 2 === 0) {
        console.log(`${divCheck} is only divisible by 2.`);
} else if (divCheck % 3 === 0) {
        console.log(`${divCheck} is only divisible by 3.`);
} else {
        console.log(`${divCheck} is not divisible by both 2 and 3.`);
}
