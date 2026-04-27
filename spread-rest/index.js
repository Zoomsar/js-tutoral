// SPREAD
let numbers = [1, 2, 3, 4, 5];
let max = Math.max(...numbers);
let min = Math.min(...numbers);

console.log("Max:", max); // Max: 5
console.log("Min:", min); // Min: 1

let username = "OsamaBinLaden";
let chars = [...username].join(' ');
console.log(chars);

let fruits = ["Apple", "Banana", "Cherry"];
let veggies = ["Carrot", "Broccoli", "Spinach"];
let allItems = [...fruits, ...veggies, "Watermelon"];
console.log(allItems);

// REST aka VARARGS
const food1 = "Pizza";
const food2 = "Burger";
const food3 = "Pasta";

function orderFood(...foods) {
    console.log("You ordered:", foods.join(', '));
}

orderFood(food1, food2, food3);
orderFood("Sushi", "Tacos", "Salad", "Fries");

function getAverage(...numbers) {
    let result = 0;
    for(let num of numbers) {
        result += num;
    }
    return result / numbers.length;
}

console.log("Average:", getAverage(10, 20, 30, 40));