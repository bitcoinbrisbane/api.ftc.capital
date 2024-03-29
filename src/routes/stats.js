const express = require("express");
const router = express.Router();

router.get("/stats", (req, res) => {
  const stats = [
    {
      raised: 5000000,
      clients: 200,
      partners: 50,
      average_roi: 3.5,
    },
  ];

  res.send(stats);
});

module.exports = router;
