function isEven(num) {
  return num % 2 === 0 ? "Yes, it is even :)": "No, wtf";
}

console.log(isEven(4)); // true
console.log(isEven(7)); // false
console.log(isEven("6")); // true (string is coerced to number)
console.log(isEven("abc")); // false (NaN is not even)