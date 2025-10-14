/*require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// ------------------ DATABASE CONNECTION ------------------
mongoose.connect(process.env.MONGO_URI, {
})
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// ------------------ USER SCHEMA ------------------
const UserSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  username: String,
  email: { type: String, unique: true },
  password: String,
  mobile: String,
  country: String,
  currency: String,
  account: [String]
});

const User = mongoose.model("User", UserSchema);

// ------------------ AUTH MIDDLEWARE ------------------
function auth(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Expecting "Bearer <token>"

  if (!token) {
    return res.status(401).json({ error: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ error: "Invalid or expired token" });
  }
}

// ------------------ REGISTER ------------------
app.post("/register", async (req, res) => {
  try {
    const { fname, lname, username, email, password, password2, mobile, country, currency, account } = req.body;

    if (password !== password2) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }

    const hashed = await bcrypt.hash(password, 10);
    const user = await new User({
      fname, lname, username, email,
      password: hashed,
      mobile, country, currency, account
    }).save();

   res.json({ message: "✅ User registered successfully", user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// ------------------ LOGIN ------------------
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) return res.status(400).json({ error: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: "Invalid password" });

    // Create token
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.SECRET_KEY,
      { expiresIn: "1h" }
    );

    res.json({
      message: "✅ Login successful",
      token,
      user: {
        id: user._id,
        fname: user.fname,
        lname: user.lname,
        username: user.username,
        email: user.email,
        mobile: user.mobile,
        country: user.country,
        currency: user.currency,
        account: user.account
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// ------------------ PROTECTED ROUTE ------------------
app.get("/dashboard", auth, (req, res) => {
  res.json({ message: `Welcome, ${req.user.email}`, userId: req.user.id });
});

// ------------------ START SERVER ------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));*/
