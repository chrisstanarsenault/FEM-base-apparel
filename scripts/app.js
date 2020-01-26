const form = document.getElementsByTagName("form")[0];
const textbox = document.getElementById("email-text-box");
const submitButton = document.getElementsByClassName("submit-button")[0];
const errorMessage = document.getElementsByClassName("error-text")[0];

form.addEventListener("submit", function(event) {
  if (!textbox.validity.valid) {
    showError();
    event.preventDefault();
  } else {
    textbox.className = "text-box";
    textbox.value = "";
    errorMessage.className = "error-text";
  }
});

function showError() {
  errorMessage.className = "error-text active";
  textbox.className = "text-box active";
  if (textbox.validity.valueMissing) {
    errorMessage.textContent = "You need to enter an e-email address.";
  } else if (textbox.validity.typeMismatch) {
    errorMessage.textContent = "Entered value needs to be an e-mail address.";
  }
}
