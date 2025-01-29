// Add event listener to all Buy Now buttons
document.querySelectorAll(".buy-btn").forEach(button => {
    button.addEventListener("click", () => {
        alert("Product added to cart!");
    });
});