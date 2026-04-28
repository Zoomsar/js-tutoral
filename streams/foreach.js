let numbers = [1 , 2, 3, 4, 6];

numbers.forEach(double);
numbers.forEach(display);

// foreach() method gives arguments
function double(value, index, array) {
    array[index] = value * 2;
}

function display(value, index, array) {
    console.log(value);
}

//Capitalize first letter of array
let names = ['john', 'michael', 'sarah'];

names.forEach(capitalize);
names.forEach(display);

function capitalize(value, index, array) {
    array[index] = value.charAt(0).toUpperCase() + value.slice(1);
}