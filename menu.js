// Select category buttons
const buttons = document.querySelectorAll(".cat-btn");

// Select all food items
const items = document.querySelectorAll(".menu-card");

// Add click event to each button
buttons.forEach(button => {
    button.addEventListener("click", () => {
        
        // Remove "active" from all buttons
        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        // Get category name
        const category = button.dataset.category;

        // Filter items
        items.forEach(item => {
            // Show matching items, hide others
            if (item.classList.contains(category)) {
                item.style.display = "block";
                item.style.opacity = "1";
            } else {
                item.style.display = "none";
                item.style.opacity = "0";
            }
        });
    });
});
