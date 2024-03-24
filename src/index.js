const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3000;

// const opportunities = require("./routes/opportunities");
const stats = require("./routes/stats");

// Middleware to parse JSON body
app.use(cors());
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

app.get("/opportunities", (req, res) => {

  console.log("GET /opportunities");

  const data = [
    {
      title: "Really a Dr?",
      description:
        "Sam has 3 children under the age of 12 and is on a modest income. Her ex, an questionable Medical Doctor with own practice refuses to pay child support. Sam is seeking funding to resolver her matter and move on.",
      assets: [
        {
          type: "House",
          value: 1300000,
        },
        {
          type: "Car",
          value: 20000,
        },
      ],
      ask: 35000,
      offer: 50000,
      duration: 24,
      image: "https://via.placeholder.com/150",
      tags: ["Wife", "Child Support", "DV"],
    },
  ];

  res.json(data);
});

// app.use("/opportunities", opportunities);
app.use("/stats", stats);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
