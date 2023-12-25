document.addEventListener("DOMContentLoaded", function () {
  // Execute this code after the DOM has loaded

  // Select the login form
  var loginForm = document.querySelector(".login-form");

  if (loginForm) {
    // Add a submit event listener to the form
    loginForm.addEventListener("submit", function (event) {
      // Prevent the default form submission
      event.preventDefault();

      // Get the values entered by the user
      var email = loginForm.elements.email.value;
      var password = loginForm.elements.password.value;

      // Call a function to perform the login process
      // Replace this function with your actual login logic
      handleLogin(email, password);
    });
  }

  // Function to handle the login process
  function handleLogin(email, password) {
    // Simulate a login process (replace with your actual authentication logic)
    if (email === "example@email.com" && password === "password") {
      alert("Login successful!");
      // You can redirect to another page or perform other actions upon successful login
    } else {
      alert("Invalid email or password. Please try again.");
    }
  }
});
