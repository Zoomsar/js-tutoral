let number = 123456.789

let numberUS = number.toLocaleString("en-US", {style: "currency", currency: "USD"});
let numberIN = number.toLocaleString("hi-IN", {style: "currency", currency: "INR"});
let numberDE = number.toLocaleString("de-DE", {style: "currency", currency: "EUR"});

console.log(number);
console.log(numberUS);
console.log(numberIN);
console.log(numberDE);