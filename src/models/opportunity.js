const mongoose = require("mongoose");

const opportunitySchema = new mongoose.Schema({
  title: {
    required: true,
    type: String,
  },
  slug: {
    required: true,
    type: String,
  },
  description: {
    required: true,
    type: String,
  },
  asset_pool: {
    required: true,
    type: Number,
  },
  ask: {
    required: true,
    type: Number,
  },
  offer: {
    required: true,
    type: Number,
  },
  status: {
    required: true,
    type: String,
  },
  duration: {
    required: true,
    type: Number,
  },
  image: {
    required: true,
    type: String,
  },
  tags: [
    {
      type: String,
      required: true,
    },
  ],
});

module.exports = mongoose.model("Opportunity", opportunitySchema);
