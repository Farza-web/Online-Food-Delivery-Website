// Get references to the form elements
const itemSelect = document.getElementById("item");
const quantityInput = document.getElementById("quantity");
const orderSummary = document.querySelector(".order-summary");
const form = document.querySelector("form");

// Payment elements
const paymentMethods = document.querySelectorAll('input[name="payment"]');
const cardDetails = document.getElementById("card-details");

// Prices for each item (BDT)
const prices = {
    pepperoni: 950,
    margherita: 1242,
    bbq: 850,
    cheeseburger: 400,
    chickenburger: 200,
    veggieburger: 220,
    fries: 100,
    coke: 120
};

// Show / Hide card details
paymentMethods.forEach(method => {
    method.addEventListener("change", () => {
        if (method.value === "card") {
            cardDetails.style.display = "block";
        } else {
            cardDetails.style.display = "none";
        }
        updateSummary();
    });
});

// Function to update the summary
function updateSummary() {
    const itemValue = itemSelect.value;
    const quantity = parseInt(quantityInput.value);
    const payment = document.querySelector('input[name="payment"]:checked');

    if (itemValue && quantity > 0 && payment) {
        const itemText = itemSelect.options[itemSelect.selectedIndex].text;
        const price = prices[itemValue];
        const total = price * quantity;

        orderSummary.innerHTML = `
            <h3>Your Order Summary</h3>
            <p>Item: <strong>${itemText}</strong></p>
            <p>Quantity: <strong>${quantity}</strong></p>
            <p>Payment Method: <strong>${payment.value.toUpperCase()}</strong></p>
            <p>Total Price: <strong>৳ ${total}</strong></p>
        `;
    } else {
        orderSummary.innerHTML = `
            <h3>Your Order Summary</h3>
            <p>Select items and fill the form to see summary here.</p>
        `;
    }
}

// Event listeners
itemSelect.addEventListener("change", updateSummary);
quantityInput.addEventListener("input", updateSummary);

// Prevent form submission (for frontend project)
form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Order placed successfully!");
});

// Initialize summary on page load
updateSummary();
