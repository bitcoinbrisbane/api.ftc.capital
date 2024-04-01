const express = require("express");
const router = express.Router();
const Opportunity = require("../models/opportunity");
const Update = require("../models/update");

router.get("/", async (req, res) => {
  const data = await Opportunity.find();
  res.json(data);
});

router.get("/:id", async (req, res) => {
  let data = await Opportunity.findById(req.params.id);

  if (!data) {
    data = await Opportunity.findOne({ slug: req.params.id });
  }

  if (!data) {
    res.status(404).json({ message: "Opportunity not found" });
  }

  res.json(data);
});

router.patch("/:id", async (req, res) => {
  const data = await Opportunity.findById(req.params.id);

  if (data) {
    const title = data.title;
    let slug = title.toLowerCase().replace(/ /g, "-");

    // remove any special characters
    slug = slug.replace(/[^\w-]+/g, "");

    await data.save();
  }

  res.json(data);
});

router.get("/:id/details", async (req, res) => {
  const data = {
    title: "Opportunity Title",
    description: "Opportunity Description",
    asset_pool: "Asset Pool",
    ask: "Ask",
    offer: "Offer",
    status: "Status",
    duration: "Duration",
    image: "Image",
    revenue: [
      {
        date: "2022-01-01",
        amount: 1000,
        description: "Revenue Description"
      }
    ],
    expenses: [
      {
        date: "2022-01-01",
        amount: 3000,
        description: "Deposit paid"
      }
    ]
  };
  res.json(data);
});

router.get("/:id/updates", async (req, res) => {
  const data = await Update.find({ opportunity_id: req.params.id });

  res.json(data);
});

router.post("/:id/update", async (req, res) => {
  const data = new Update({
    opportunity_id: req.params.id,
    title: req.body.title,
    description: req.body.description,
    date: req.body.date
  });

  const result = await data.save();

  res.json(result);
});


router.post("/", async (req, res) => {
  const data = new Opportunity({
    title: req.body.title,
    slug: req.body.title.toLowerCase().replace(/ /g, "-"),
    description: req.body.description,
    asset_pool: req.body.asset_pool,
    ask: req.body.ask,
    offer: req.body.offer,
    status: req.body.status,
    duration: req.body.duration,
    image: req.body.image,
    tags: req.body.tags,
    status: req.body.status
  });

  const result = await data.save();
  res.status(201).json(result);
});

module.exports = router;
