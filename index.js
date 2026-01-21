/*** You will not need this file until Unit 5 ***/

document.getElementById("button").addEventListener("click", function () {
  document.getElementById("booking-section").scrollIntoView({ behavior: "smooth" });
});



const backToTopButton = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});



  const form = document.getElementById("bookingForm");
  const popup = document.getElementById("deposit-popup");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // stop page redirect
    popup.style.display = "flex";

    // submit to Formspree after popup shows
    setTimeout(() => {
      form.submit();
    }, 1200);
  });

  function closePopup() {
    popup.style.display = "none";
  }








/*** Form Handling [PLACEHOLDER] [ADDED IN UNIT 6] ***/


/*** Form Validation [PLACEHOLDER] [ADDED IN UNIT 7] ***/


//Step 1: Add your query for the submit RSVP button here

// Get the Form element and the button element

// You should remove the original click listener since we are using the form submit listener now:
// submitButton.addEventListener("click", addParticipant); // <-- Delete this line







