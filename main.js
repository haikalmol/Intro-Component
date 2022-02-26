// - Receive an error message when the `form` is submitted if:
//   - Any `input` field is empty. The message for this error should say _"[Field Name] cannot be empty"_
//   - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Looks like this is not an email"_

// Got button out of HTML document
const button = document.getElementById("btn");
// Added an eventlistener and a function
button.addEventListener("click", myFunction);

function myFunction() {
  // Created a boolean variable which is true by default
  let allFilled = true;
  // Got all values of the forms input fields and set it to a variable
  let firstName = document.getElementById("first").value;
  let lastName = document.getElementById("last").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  // Got all validation texts which are not visible by default and set it to a variable
  let firstText = document.getElementById("firstText");
  let lastText = document.getElementById("lastText");
  let emailText = document.getElementById("emailText");
  let passwordText = document.getElementById("passwordText");
  // Regular expression (email)
  const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  //Made a few if statements to check if the variables containing the input field values are empty. If they are empty then the hidden text becomes visible and the boolean allfilled will be false.
  if (firstName === "") {
    allFilled = false;
    firstText.style.visibility = "visible";
  }
  if (lastName === "") {
    allFilled = false;
    lastText.style.visibility = "visible";
  }
  // Made an else if statement to check if the value not(!) matches the regular expression. If it doesn't the HTML text in emailText will be changed and made visible.
  if (email === "") {
    allFilled = false;
    emailText.style.visibility = "visible";
  } else if (!filter.test(email)) {
    allFilled = false;
    emailText.innerHTML = "Looks like this is not an email";
    emailText.style.visibility = "visible";
  }

  if (password === "") {
    allFilled = false;
    passwordText.style.visibility = "visible";
  }

  // If the boolean allFilled stays true then a message will appear. And the page will be reloaded.
  if (allFilled) {
    alert(`Thanks ${firstName} for enrolling!`);
    location.reload();
  }
}
