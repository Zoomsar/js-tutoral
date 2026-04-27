function rollDice() {
    const numDice = document.getElementById("numDice").value;
    const resultDiv = document.getElementById("result");
    const imagesDiv = document.getElementById("images");
    const values = [];
    const images = [];

    for (let i = 0; i < numDice; i++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        values.push(roll);
        images.push(`<img src="diceImgs/${roll}.png">`);
    }

    resultDiv.textContent = `You rolled: ${values.join(", ")}`;
    imagesDiv.innerHTML = images.join("");
}