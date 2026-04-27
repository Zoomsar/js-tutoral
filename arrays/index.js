let fruits = ["Apple", "Banana", "Cherry"]

// Accessing elements
console.log(fruits[0]) // Apple
console.log(fruits[1]) // Banana
console.log(fruits[2]) // Cherry

// Adding elements to end
fruits.push("Date")
console.log(fruits) // ["Apple", "Banana", "Cherry", "Date"]

// Removing elements from end
fruits.pop()
console.log(fruits) // ["Apple", "Banana", "Cherry"]

// Adding elements to beginning
fruits.unshift("Elderberry")
console.log(fruits) // ["Elderberry", "Apple", "Banana", "Cherry"]

// Removing elements from beginning
fruits.shift()
console.log(fruits) // ["Apple", "Banana", "Cherry"]

// Length of the array
console.log(fruits.length) // 3

// Finding index of an element
console.log(fruits.indexOf("Banana")) // 1

// Checking if an element exists
console.log(fruits.includes("Cherry")) // true
console.log(fruits.includes("Date")) // false

// Iterating over the array
for (let fruit of fruits) {
    console.log(fruit)
}