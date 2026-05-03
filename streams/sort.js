let fruits = ["Banana", "Orange", "Apple", "Mango", 1, '$', 10];

// Sort the elements of fruits (1. symbols 2. numbers 3. letters)
// lexicographic - käitleme kõike stringidena
fruits.sort();

console.log(fruits);

// blabla.sort((a, b) => a - b); // kasvav
// blabla.sort((a, b) => b - a); // kahanev
// stringide puhul - blabla.sort((a, b) => a.localeCompare(b));