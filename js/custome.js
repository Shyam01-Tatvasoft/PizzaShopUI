let eyeButton = document.getElementById("eye-icon");
let passwordField = document.getElementById("Password");
let loginForm = document.getElementById("loginForm");

let LoginHandler = (data) => {
  console.log(data);
};

eyeButton.addEventListener("click", () => {
  if (passwordField.type == "password") {
    passwordField.type = "text";
    eyeButton.classList.add("fa-eye");
    eyeButton.classList.remove("fa-eye-slash");
  } else {
    passwordField.type = "password";
    eyeButton.classList.remove("fa-eye");
    eyeButton.classList.add("fa-eye-slash");
  }
});

