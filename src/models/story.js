const mongoose = require("mongoose");

const storySchema = new mongoose.Schema({
  title: {
    required: true,
    type: String,
  },
  description: {
    required: true,
    type: String,
  },
  firm: {
    required: true,
    type: String,
  },
  location: {
    required: true,
    type: String,
  },
  tag: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model("Story", storySchema);
