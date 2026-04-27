const matrix = [[1, 2, 3, 3.5], 
                [4, 5, 6, "a"], 
                [7, 8, 9, true]];

for (let row of matrix) {
    console.log(row.join(' '));
}

console.log(matrix[0][0]); // 1
console.log(matrix[1][0]);
console.log(matrix[2][2]); // 9
console.log();

// telephone numbar paaad
const phoneNumber = [[1, 2, 3],
                    [4, 5, 6],
                    [7, 8, 9],
                    ["*", 0, "#"]];

for (let row of phoneNumber) {
    console.log(row.join(' '));
}