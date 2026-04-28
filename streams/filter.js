let numbers = [0, 1, 2, 3, 4, 5, 6, 7];

function isEven(element){
    return element % 2 === 0;
}

// filters out true values
let evenNumbers = numbers.filter(isEven);
let oddNumbers = numbers.filter(element => element % 2 !== 0)

console.log(evenNumbers); // Output: [2, 4, 6]
console.log(oddNumbers)