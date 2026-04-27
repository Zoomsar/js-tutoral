const value = document.getElementById("textbox");
const result = document.getElementById("result");
const cToFBtn = document.getElementById("toFahrenheit");
const fToCBtn = document.getElementById("toCelsius");

function convert() {
    if (cToFBtn.checked) {
        result.textContent = (value.value * 9 / 5) + 32 + " °F";
    } else if (fToCBtn.checked) {
        result.textContent = (value.value - 32) * 5 / 9 + " °C";
    } else {
        result.textContent = "Please select a conversion type.";
    }
}