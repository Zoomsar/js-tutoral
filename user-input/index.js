// 1. window prompt
/* let username;

username = window.prompt("WHat the dog doin?");
console.log(username); */

// 2. html textbox
let username;

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("H1").textContent = `Hello ${username}!`;
}