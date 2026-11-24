
// Reusable Toast Notification Function
function showToast(message) {

    let toast = document.getElementById("toast");

    toast.innerHTML = message;

    toast.classList.add("show");

    setTimeout(function() {
        toast.classList.remove("show");
    }, 3000);

}


// Wait until the HTML page is loaded
document.addEventListener("DOMContentLoaded", function() {

    // Smooth Scrolling
    let bookButton = document.getElementById("scrollToBooking");

    if (bookButton) {

        bookButton.addEventListener("click", function() {

            document.getElementById("bookingForm").scrollIntoView({
                behavior: "smooth"
            });

            showToast("Taking you to the booking form!");

        });

    }


    // Booking Form Submission
    let form = document.getElementById("bookingForm");

    if (form) {

        form.addEventListener("submit", function(event) {

            event.preventDefault();

            showToast("Your booking form was submitted successfully!");

        });

    }

});
