const min = 0;
const max = 101; // not included
const myButton = document.getElementById("myBtn");
const myLabel = document.getElementById("myLabel");
let randomNum;

myButton.onclick = function () {
    randomNum = Math.floor(Math.random() * max) + min;
    myLabel.textContent = randomNum;
}

