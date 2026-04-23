// 1. window prompt
/* let username;

username = window.prompt("WHat the dog doin?");
console.log(username); */

// 2. html textbox
const PI = 3.14;
let radius;
let ümbermõõt;

document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    ümbermõõt = 2 * PI * radius;
    document.getElementById("H3").textContent = ümbermõõt;
}
