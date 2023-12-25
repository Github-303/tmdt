document.addEventListener("DOMContentLoaded", function () {
  var loginForm = document.querySelector(".login-form");

  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();

      var email = loginForm.elements.email.value;
      var password = loginForm.elements.password.value;

      // Make an AJAX request to the server
      fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            alert(data.message);
            // Redirect or perform other actions upon successful login
          } else {
            alert(data.message);
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("An error occurred. Please try again.");
        });
    });
  }
  function validateEmail(email) {
    // Basic email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function validatePassword(password) {
    // Basic password validation (minimum length)
    return password.length >= 6;
  }
});
