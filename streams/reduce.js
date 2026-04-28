const prices = [9.99, 1.53, 19.99, 4.99];

function sum(accumulator, element){
    return accumulator + element;
}

const total = prices.reduce(sum);
// const total = prices.reduce((accumulator, element) => accumulator + element);

console.log(`${total.toFixed(2)}€`);

// get the highest price
const maxPrice = prices.reduce((max, price) => Math.max(max, price));

console.log(`The highest price is ${maxPrice}€`);