const signupCard = document.getElementById("signup-card");
const email = document.getElementById("email");
const newsLetterForm = document.getElementById("newsletter-form");
const errorMsg = document.getElementById("error-msg");
const successCard = document.getElementById("success-card");
const userEmail = document.getElementById("user-email");
const dismissBtn = document.getElementById("dismiss-btn");

// Helper function to check email format
function isValidEmail(emailStr) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(emailStr);
}

// 1. Listen for the form submission
newsLetterForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Stop page reload
  const emailValue = email.value.trim(); // Get the typed email

  // ---> VALIDATION CONNECTED HERE <---
  if (isValidEmail(emailValue)) {
    // SUCCESS: Clear errors
    email.classList.remove("error");
    errorMsg.textContent = "";

    // Insert user's email into the success message
    userEmail.textContent = emailValue;

    // Switch which card is visible
    signupCard.classList.add("hidden");
    successCard.classList.remove("hidden");
  } else {
    // ERROR: Show error styling and text
    errorMsg.textContent = "Valid email required";
    email.classList.add("error");
  }
});

// 2. Listen for the dismiss button click
dismissBtn.addEventListener("click", () => {
  // Reset the input field
  email.value = "";
  
  // Switch back to the sign-up card
  successCard.classList.add("hidden");
  signupCard.classList.remove("hidden");
});



