//Assignment Switch Case
// 1. Print the corresponding month name for a given month number.
let month: number = 4;
switch (month) {
    case 1: 
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;  
    case 4:
        console.log("April");
        break;
    case 5:     
        console.log("May");
        break;
    case 6:     
        console.log("June");
        break;  
    case 7:     
        console.log("July");
        break;
    case 8:     
        console.log("August");
        break;
    case 9:     
        console.log("September");
        break;
    case 10:     
        console.log("October");
        break;
    case 11:     
        console.log("November");
        break;
    case 12:     
        console.log("December");
        break;
    default:     
        console.log("Invalid month number");
        break;
}

// 2. Perform basic arithmetic operations based on user input.
let operation: string = "multiply";
let a: number = 15, b: number = 3;      
switch (operation) {
    case "add":
        console.log(`Result: ${a + b}`);    
        break;
    case "subtract":
        console.log(`Result: ${a - b}`);
        break;
    case "multiply":
        console.log(`Result: ${a * b}`);    
        break;
    case "divide":
        if (b !== 0) {
            console.log(`Result: ${a / b}`);    
        } else {
            console.log("Error: Division by zero");
        }       
        break;
    default:
        console.log("Invalid operation");
        break;
}

// 3. Print the season based on the month number.
let monthNum: number = 7;
switch (monthNum) {
    case 12:    
    case 1:    
    case 2:
        console.log("Winter");
        break;
    case 3:    
    case 4:
    case 5:
        console.log("Spring");
        break;
    case 6:    
    case 7:
    case 8:     
        console.log("Summer");
        break;  
    case 9:    
    case 10:
    case 11:    
        console.log("Autumn");
        break;  
    default:    
        console.log("Invalid month number");
        break;  
}
