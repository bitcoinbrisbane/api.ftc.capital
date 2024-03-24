const express = require("express");
const router = express.Router();

// Eventually, the stats object will be fetched from the CMS
router.get("/", (req, res) => {
  const opportunities = [
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

  res.send(opportunities);
});

module.exports = router;
