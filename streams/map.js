const numbers = [1, 2, 3, 4, 5];

function double(number) {
  return number * 2;
}

// map() method creates a new array with the results of calling a provided function on every element in the calling array.
const doubledNumbers = numbers.map(double);
console.log(doubledNumbers);
console.log(numbers); // Original array remains unchanged

// Using arrow function with map()
const tripledNumbers = numbers.map(num => num * 3);
console.log(tripledNumbers);

// Capitalize first letter of array using map()
const names = ['john', 'michael', 'sarah'];
const capitalizedNames = names.map(name => name.charAt(0).toUpperCase() + name.slice(1));
console.log(capitalizedNames);

// Format dates with lambda
const dates = ['2021-01-10', '2022-02-20', '2023-03-30'];
const formattedDates = dates.map(element => {const parts = element.split("-");
                                             return `${parts[2]}/${parts[1]}/${parts[0]}`});
console.log(formattedDates);
