const express = require("express");
const router = express.Router();
const Client = require("../models/client");

router.post("/apply", async (req, res) => {
  const data = new Client({
    name: req.body.name,
    age: req.body.age,
    email: req.body.email,
    parenting: req.body.parenting,
    assetPool: req.body.assetPool,
    otherSideLawyer: req.body.otherSideLawyer,
  });

  const result = await data.save();
  res.status(201).json(result);
});

module.exports = router;
