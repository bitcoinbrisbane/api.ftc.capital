const express = require("express");
const router = express.Router();
const Story = require("../models/story");

router.post("/", async (req, res) => {
  const { uid, title, description, firm, location, type, tag } = req.body;

  const newStory = new Story({
    uid,
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

router.get("/", async (req, res) => {
  const data = await Story.find();

  res.json(data);
});

module.exports = router;
