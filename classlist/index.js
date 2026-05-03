const myButton = document.getElementById('btn');

myButton.classList.add("enabled");

myButton.addEventListener('mouseover', (event) => {
    event.target.classList.toggle("hovered");
});

myButton.addEventListener('mouseout', (event) => {
    event.target.classList.toggle("hovered");
});

myButton.addEventListener('click', (event) => {
    if (event.target.classList.contains("disabled")) {
        event.target.textContent = "No";
    } else {
        event.target.classList.replace("enabled", "disabled");
    }
});