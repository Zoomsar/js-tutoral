const myBox = document.getElementById("myBox");
const myBtn = document.getElementById("myBtn");

myBtn.addEventListener("click", (event) => {
    alert("You clicked the button!");
    myBox.style.backgroundColor = "darkred";
    myBox.textContent = "👹";
});

myBtn.addEventListener("mouseover", (event) => {
    myBox.style.backgroundColor = "yellow";
    myBox.textContent = "Don't you dare! 😮";
});

myBtn.addEventListener("mouseout", (event) => {
    myBox.style.backgroundColor = "rgb(122, 243, 85)";
    myBox.textContent = "Click Me 🍆";
});

