document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("submitBtn").addEventListener("click", function() {
        const screws = document.getElementById("screw").value;
        const nuts = document.getElementById("nut").value;
        const grommets = document.getElementById("grommet").value;
        const price = calculatePrice(screws, nuts, grommets);

        document.getElementById("price").innerText = "⇨ " + Math.round(price * 100) / 100 + " CHF"
    });
});

function calculatePrice(screws, nuts, grommets) {
    let price = 0;
    price += screws * 0.2;
    price += nuts * 0.1;
    price += grommets * 0.05;
    return price;
}
