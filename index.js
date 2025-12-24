/*** You will not need this file until Unit 5 ***/






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










/*** Form Handling [PLACEHOLDER] [ADDED IN UNIT 6] ***/


/*** Form Validation [PLACEHOLDER] [ADDED IN UNIT 7] ***/


//Step 1: Add your query for the submit RSVP button here

// Get the Form element and the button element

// You should remove the original click listener since we are using the form submit listener now:
// submitButton.addEventListener("click", addParticipant); // <-- Delete this line


