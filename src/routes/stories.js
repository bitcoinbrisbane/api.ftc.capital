const express = require("express");
const router = express.Router();
const Story = require("../models/story");

router.get("/", async (req, res) => {
  const data = await Story.find();

  res.json(data);
});

router.post("/", async (req, res) => {
  const { title, description, firm, location, type, tag } = req.body;

  const newStory = new Story({
    title,
    description,
    firm,
    location,
    type,
    tag,
  });

  const savedStory = await newStory.save();

  res.json(savedStory);
});

module.exports = router;
