function calculateInterest() {
    const total = document.getElementById("total");
    const principal = document.getElementById("principal").value;
    const rate = document.getElementById("rate").value / 100;
    const time = document.getElementById("time").value;

    if (principal < 0 || time < 0) {
        total.textContent = "Value can't be neg >:(";
    } else {
        const result  = principal * Math.pow(1+rate/1, 1*time );
        total.textContent = result.toLocaleString(undefined, {style: "currency", currency: "EUR"});
    }
}