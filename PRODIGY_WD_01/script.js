document.addEventListener("DOMContentLoaded", function () {
    console.log("Script loaded successfully!");

    // Get all dropdowns
    const componentSelects = document.querySelectorAll(".component-select");
    const totalPriceElement = document.getElementById("total-price");

    // Object storing component prices
    const componentPrices = {
        cpu: { "Ryzen 7 7800X": 300, "Intel i7-13700K": 350 },
        gpu: { "RTX 4070 Ti": 700, "RX 7900 XTX": 800 },
        ram: { "16GB DDR5": 100, "32GB DDR5": 180 },
        storage: { "1TB NVMe SSD": 120, "2TB NVMe SSD": 200 }
    };

    // Function to update total price
    function updateTotalPrice() {
        let total = 0;
        componentSelects.forEach(select => {
            const category = select.getAttribute("data-category");
            const selectedOption = select.value;
            if (componentPrices[category] && componentPrices[category][selectedOption]) {
                total += componentPrices[category][selectedOption];
            }
        });
        totalPriceElement.textContent = `$${total}`;
    }

    // Event listener for component selection
    componentSelects.forEach(select => {
        select.addEventListener("change", updateTotalPrice);
    });

    // Initialize total price
    updateTotalPrice();
});
