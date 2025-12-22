// ================== LOGOUT FUNCTION ==================
function logout() {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    window.location.href = "login.html";
}

// ================== LOGIN CHECK ==================
const username = localStorage.getItem("username");
if (!username) {
    console.log("User not logged in");
} else {
    console.log("Welcome back, " + username);
}

// ================== CART LOGIC ==================
let cart = [];

// Add to cart buttons
const addButtons = document.querySelectorAll(".add-btn");

function updateCartSummary() {
    let summary = "Your Cart:\n\n";
    let totalPrice = 0;

    cart.forEach(item => {
        summary += `${item.name} - Qty: ${item.qty} - ৳ ${item.price * item.qty}\n`;
        totalPrice += item.price * item.qty;
    });

    summary += `\nTotal: ৳ ${totalPrice}`;
    alert(summary);
}

addButtons.forEach(button => {
    button.addEventListener("click", function (e) {
        e.preventDefault();

        const card = this.parentElement;
        const name = card.querySelector("h3").innerText;
        const priceText = card.querySelector(".price").innerText;
        const price = parseFloat(priceText.replace("৳", "").trim());

        const existingItem = cart.find(item => item.name === name);
        if (existingItem) {
            existingItem.qty++;
        } else {
            cart.push({ name, price, qty: 1 });
        }

        alert(`${name} added to cart!`);
        console.log(cart);
    });
});

// ================== CART SUMMARY BUTTON ==================
const cartBtn = document.querySelector(".cart-btn");

if (cartBtn) {
    cartBtn.addEventListener("click", function (e) {
        e.preventDefault();
        if (cart.length === 0) {
            alert("Your cart is empty!");
        } else {
            updateCartSummary();
        }
    });
}
