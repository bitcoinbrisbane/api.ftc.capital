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

app.get("/stories", (req, res) => {
  const data = [
    {
      uid: "1",
      title: "A new beginning",
      description:
        "After facing financial hurdles in a complex family law case, Jane Doe found hope through FTX.Finance. Our platform enabled her to secure the necessary legal representation, resulting in a favorable outcome. 'FTX.Finance was a beacon of hope during one of the most challenging times of my life,' says Jane.",
      firm: "Men's Legal",
      location: "Brisbane, Australia",
      type: "Family Law",
      tag: "Legal Support"
    },
    {
      uid: "2",
      title: "A brighter future",
      description:
        "John Smith was able to secure funding for his business through FTX.Finance. Our platform connected him with investors who believed in his vision. 'FTX.Finance made it possible for me to turn my dreams into reality,' says John.",
      firm: "FTX Legal",
      location: "Sydney, Australia",
      type: "Family Law",
      tag: "Funding"
    },
    {
      uid: "3",
      title: "Path to empowerment",
      description:
        "Emily was navigating through a difficult divorce and felt overwhelmed by the legal process. FTX.Finance not only funded her case but also connected her with a community of supporters. 'I am grateful for the financial and emotional support I received, which empowered me to start anew,' Emily expresses.",
      firm: "Not disclosed",
      location: "Melbourne, Australia",
      type: "Family Law",
      tag: "Community Support"
    }
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
