const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT || 3000;

const clients = require("./routes/clients");
const opportunities = require("./routes/opportunities");
const stats = require("./routes/stats");
const stories = require("./routes/stories");

// Middleware to parse JSON body
app.use(cors());
app.use(express.json());

const mongoose = require("mongoose");
const mongoString = process.env.CONNECTION_STRING;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Check if email and password match the mock user data
  if (email === mockUser.email && password === mockUser.password) {
    res.json({ success: true, message: "Login successful" });
  } else {
    res
      .status(401)
      .json({ success: false, message: "Invalid email or password" });
  }
});

app.use("/clients", clients);
app.use("/opportunities", opportunities);
app.use("/stats", stats);
app.use("/stories", stories);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
