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


<script>
const form = document.querySelector("form");

form.addEventListener("submit", function () {
  setTimeout(() => {
    document.getElementById("deposit-popup").style.display = "flex";
  }, 500);
});

function closePopup() {
  document.getElementById("deposit-popup").style.display = "none";
}
</script>







/*** Form Handling [PLACEHOLDER] [ADDED IN UNIT 6] ***/


/*** Form Validation [PLACEHOLDER] [ADDED IN UNIT 7] ***/


//Step 1: Add your query for the submit RSVP button here

// Get the Form element and the button element

// You should remove the original click listener since we are using the form submit listener now:
// submitButton.addEventListener("click", addParticipant); // <-- Delete this line





