function login() {
            var userType = document.getElementById("userType").value;
            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;

            if (userType === "user" && username === "user" && password === "user") {
                window.location.href = "/tmdt/views/card.html";
            } else if (userType === "admin") {
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
                window.location.href = "/tmdt/views/card.html.html";
            } else if (userType === "user") {
                alert("User logged in using Google Sign-In");
            }
        }