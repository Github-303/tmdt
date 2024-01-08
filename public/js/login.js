function login() {
            var userType = document.getElementById("userType").value;
            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;

            if (userType === "admin" && username === "admin" && password === "admin") {
                window.location.href = "manager.html";
            } else if (userType === "user") {
                alert("User login logic here");
            } else {
                alert("Invalid credentials. Please try again.");
            }
        }
        function onSignIn(googleUser) {
            var userType = document.getElementById("userType").value;
            var profile = googleUser.getBasicProfile();
            if (userType === "admin") {
                alert("Admin logged in using Google Sign-In");
                window.location.href = "manager.html";
            } else if (userType === "user") {
                alert("User logged in using Google Sign-In");
            }
        }