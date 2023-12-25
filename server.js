process.on("unhandledRejection", (err) => {
  console.error("Unhandled Rejection:", err);
  // Thêm các xử lý khác nếu cần
  process.exit(1); // Dừng quá trình Node.js với mã lỗi 1
});

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());

mongoose.connect(
  "mongodb+srv://admin:admin@exception.wrnvwew.mongodb.net/?retryWrites=true&w=majority"
);

const db = mongoose.connection;
db.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

db.once("open", () => {
  console.log("Connected to MongoDB");
});
app.use(express.static("../"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/login.html");
});
const User = mongoose.model("User", {
  email: String,
  password: String,
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });

    if (user) {
      res.json({ success: true, message: "Login successful!" });
    } else {
      res
        .status(401)
        .json({ success: false, message: "Invalid email or password." });
    }
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ success: false, message: "Internal server error." });
  }
});

app.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      res
        .status(400)
        .json({ success: false, message: "Email already in use." });
    } else {
      const newUser = new User({ username, email, password });
      await newUser.save();
      res.json({ success: true, message: "Registration successful!" });
    }
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ success: false, message: "Internal server error." });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
