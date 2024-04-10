const express = require("express");
const router = express.Router();
const Story = require("../models/story");

router.get("/", async (req, res) => {
  const data = await Story.find();

  res.json(data);
});

router.post("/", async (req, res) => {
  const { title, description, firm, location, type, tag } = req.body;

  const data = new Story({
    client,
    title,
    description,
    firm,
    location,
    type,
    tag,
  });

  const result = await data.save();
  res.json(result);
});

module.exports = router;
