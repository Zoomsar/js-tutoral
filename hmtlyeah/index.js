const newH1 = document.createElement("h1");
const box2 = document.getElementById("box2");
const boxes = document.querySelectorAll(".box");
const newListItem = document.createElement("li");

newH1.textContent = "Hello World!";
document.body.prepend(newH1);
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.fontSize = "3em";

// document.getElementById("box1").append(newH1);
// document.body.insertBefore(newH1, box2);
document.body.insertBefore(newH1, boxes[1]);

// document.body.removeChild(newH1);
// document.getElementById("box1").removeChild(newH1);

newListItem.textContent = "Coconut";
newListItem.style.color = "brown";
newListItem.style.backgroundColor = "lightgreen";
document.getElementById("fruits").append(newListItem);
