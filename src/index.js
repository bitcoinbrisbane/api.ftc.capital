const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON body
app.use(express.json());

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

app.get("/story", (req, res) => {
  const data = [
    {
      title: "Crypto under lock and key",
      description: "",
      lvr: 0.5,
      investment: 30000,
      return: 50000,
      duration: 24,
      risk: "low",
      firm: "Men's Legal",
    },
  ];

  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
