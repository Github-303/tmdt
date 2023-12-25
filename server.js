const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Connect to MongoDB (replace 'your_database_url' with your actual MongoDB URL)
mongoose.connect(
  "mongodb+srv://admin:<admin>@exception.wrnvwew.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// Define a user schema (replace with your actual user schema)
const User = mongoose.model("User", {
  email: String,
  password: String,
});

// Handle login requests
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists in the database
    const user = await User.findOne({ email, password });

    if (user) {
      res.json({ success: true, message: "Login successful!" });
    } else {
      res
        .status(401)
        .json({ success: false, message: "Invalid email or password." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error." });
  }
});
// Handle registration requests
app.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if the user already exists in the database
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      res.status(400).json({ success: false, message: "Email already in use." });
    } else {
      // Create a new user in the database
      const newUser = new User({ username, email, password });
      await newUser.save();

      res.json({ success: true, message: "Registration successful!" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error." });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
