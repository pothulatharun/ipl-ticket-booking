
// Reusable Toast Notification Function
function showToast(message) {

    let toast = document.getElementById("toast");

    if (!toast) return;

    toast.innerHTML = message;

    toast.classList.add("show");

    setTimeout(function() {
        toast.classList.remove("show");
    }, 3000);

}


// Wait until the HTML page is loaded
document.addEventListener("DOMContentLoaded", function() {

    // Activity 5: Smooth Scrolling
    let bookButton = document.getElementById("scrollToBooking");

    if (bookButton) {

        bookButton.addEventListener("click", function() {

            document.getElementById("bookingForm").scrollIntoView({
                behavior: "smooth"
            });

            showToast("Taking you to the booking form!");

        });

    }


    // Activity 5: Booking Form Submission
    let form = document.getElementById("bookingForm");

    if (form) {

        form.addEventListener("submit", function(event) {

            event.preventDefault();

            showToast("Your booking form was submitted successfully!");

        });

    }


    // Activity 7: Select Form Controls
    const matchSelect = document.getElementById("match");

    const standSelect = document.getElementById("stand");

    const quantityInput = document.getElementById("tickets");


    // Select Booking Summary Elements
    const summaryMatch = document.getElementById("summaryMatch");

    const summaryStand = document.getElementById("summaryStand");

    const summaryQuantity = document.getElementById("summaryQuantity");

    const totalPrice = document.getElementById("totalPrice");


    // Activity 7: Update Booking Summary
    function updateSummary() {

        const match = matchSelect.value;

        const stand = standSelect.value;

        const quantity = parseInt(quantityInput.value) || 0;


        // Get selected stand price
        const selectedOption = standSelect.querySelector("option:checked");

        const price = parseInt(selectedOption.dataset.price) || 0;


        // Calculate total price
        const total = price * quantity;


        // Display selected details
        summaryMatch.textContent = match || "Not selected";

        summaryStand.textContent = stand || "Not selected";

        summaryQuantity.textContent = quantity;

        totalPrice.textContent = total;


        // Show Toast Notification
        showToast("Booking Summary Updated!");

    }


    // Activity 7: Add Event Listeners
    if (matchSelect && standSelect && quantityInput) {

        matchSelect.addEventListener("change", updateSummary);

        standSelect.addEventListener("change", updateSummary);

        quantityInput.addEventListener("change", updateSummary);

        quantityInput.addEventListener("input", updateSummary);

    }

});
