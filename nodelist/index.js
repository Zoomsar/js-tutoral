let myButtons = document.querySelectorAll(".myBtns");
const newBtn = document.createElement("button");

newBtn.textContent = "New Button";
newBtn.classList = "myBtns";
document.body.appendChild(newBtn);

// needed to update nodelist, which is a static method ööööööööööööö
myButtons = document.querySelectorAll(".myBtns");
// console.log(myButtons);
myButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        event.target.style.backgroundColor = "lightgreen";
    });
});

/* myButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        event.target.remove();
        myButtons = document.querySelectorAll(".myBtns");
        console.log(myButtons);
    });
}); */