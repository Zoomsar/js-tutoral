// keydown, keyup
const myBox = document.getElementById("myBox");
const moveBy = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown", (event) => {
    if(event.key.startsWith("Arrow")) {
        
        switch(event.key) {
            case "ArrowUp":
                y -= moveBy;
                break;
            case "ArrowDown":
                y += moveBy;
                break;
            case "ArrowLeft":
                x -= moveBy;
                break;
            case "ArrowRight":
                x += moveBy;
                break;
        }
        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`;
    }
});

