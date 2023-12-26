require("dotenv").config();

process.on("unhandledRejection", (err) => {
  console.error("Unhandled Rejection:", err);
  process.exit(1);
});

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI);

const db = mongoose.connection;
db.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.use(bodyParser.json());
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/images", express.static(__dirname + "public/images"));
app.use("/js", express.static(__dirname + "public/js"));
app.set("views", "./views");
app.set("view engine", "html");
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../tmdt/views/index.html"));
});
app.get("/tmdt/views/register.html", (req, res) => {
  res.sendFile(path.join(__dirname, "../tmdt/views/paintings.html"));
});
app.get("/tmdt/views/register.html", (req, res) => {
  res.sendFile(path.join(__dirname, "../tmdt/views/login.html"));
});
app.get("/tmdt/views/register.html", (req, res) => {
  res.sendFile(path.join(__dirname, "../tmdt/views/register.html"));
});
app.get("/tmdt/views/register.html", (req, res) => {
  res.sendFile(path.join(__dirname, "../tmdt/views/cart.html"));
});
app.get("/tmdt/views/register.html", (req, res) => {
  res.sendFile(path.join(__dirname, "../tmdt/views/card.html"));
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
