const express = require("express");
const router = express.Router();
const Client = require("../models/client");
const crypto = require("crypto");

router.post("/apply", async (req, res) => {
  const data = new Client({
    name: req.body.name,
    age: req.body.age,
    email: req.body.email,
    parenting: req.body.parenting,
    assetPool: req.body.assetPool,
    otherSideLawyer: req.body.otherSideLawyer
  });

  const result = await data.save();

  // create hmac with result id
  const hmac = crypto.createHmac("sha256", process.env.HMAC_SECRET);
  hmac.update(result._id.toString());

  const resultWithHmac = {
    ...result,
    hmac: hmac.digest("hex")
  };

  res.status(201).json(resultWithHmac);
});

router.post("/verify", async (req, res) => {
  // check hmac and verify the request
  // https://api.xero.com/api.xro/2.0/Contacts
});

module.exports = router;
