const form = document.querySelector("form");
const email = document.getElementById("mail");
const emailError = document.querySelector("span.error");
const input = document.querySelector("input#mail")

form.addEventListener("submit", (event) => {
  if (!email.validity.valid) {
    emailError.textContent = "You need to enter an email address.";
    emailError.className = "error active";
    input.className = "invalid";
  } else {
    emailError.textContent = "";
    emailError.className = "error";
    input.className = "";
  }
  event.preventDefault();
});
