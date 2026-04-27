const myCheckbox = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const masterBtn = document.getElementById("masterBtn");
const submitBtn = document.getElementById("submitBtn");
const subResult = document.getElementById("subResult");
const payResult = document.getElementById("payResult");

submitBtn.onclick = function () {
    if (myCheckbox.checked) {
        subResult.textContent = "You are subscirbed :))";
    } else {
        subResult.textContent = "You are not subscirbed :(";
    }

    if (visaBtn.checked) {
        payResult.textContent = "You are paying with Visa :))";
    } else if (masterBtn.checked) {
        payResult.textContent = "You are paying with MasterCard :))";
    } else {
        payResult.textContent = "You are not paying :(";
    }
}

