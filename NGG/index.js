const minNum = 1;
const maxNum = 100;
const randomNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
let isRunning = true;



while (isRunning) {
let guess = prompt("Guess a number between " + minNum + " and " + maxNum);
guess = Number(guess);

if (guess == randomNum) {
    alert("Congratulations! The number was " + randomNum + "!");
    isRunning = false;
} else if (guess < randomNum) {
    alert("Too low! Try again.");
} else if (guess > randomNum) {
    alert("Too high! Try again.");
} else {
    alert("Invalid input! Please enter a number.");
}
}