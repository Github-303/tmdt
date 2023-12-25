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

  var registerForm = document.querySelector(".register-form");

  if (registerForm) {
    registerForm.addEventListener("submit", function (event) {
      event.preventDefault();

      var username = registerForm.elements.firstname.value;
      var email = registerForm.elements.email.value;
      var password = registerForm.elements.password.value;

      // Make an AJAX request to the server
      fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            alert(data.message);
            // Redirect or perform other actions upon successful registration
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
});
