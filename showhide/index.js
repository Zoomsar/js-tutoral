const myButton = document.getElementById("toggleButton");
const myImg = document.getElementById("myImg");

myButton.addEventListener("click", () => {
    if(myImg.style.display === "none") {
        myImg.style.display = "block";
        myButton.textContent = "Hide";
    } else {
        myImg.style.display = "none";
        myButton.textContent = "Show";
    }
});