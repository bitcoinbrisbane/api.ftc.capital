const express = require("express");
const router = express.Router();
const Opportunity = require("../models/opportunity");

router.get("/", async (req, res) => {
  const data = await Opportunity.find();
  res.json(data);
});

router.post("/", async (req, res) => {
  const data = new Opportunity({
    title: req.body.title,
    description: req.body.description,
    asset_pool: req.body.asset_pool,
    ask: req.body.ask,
    offer: req.body.offer,
    status: req.body.status,
    duration: req.body.duration,
    image: req.body.image,
    tags: req.body.tags,
    status: req.body.status,
  });

  const result = await data.save();
  res.status(201).json(result);
});

module.exports = router;
