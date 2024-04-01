const mongoose = require("mongoose");

const updateSchema = new mongoose.Schema({
  opportunity_id: {
    required: true,
    type: String,
  },
  title: {
    required: true,
    type: String,
  },
  description: {
    required: true,
    type: String,
  },
  date: {
    required: true,
    type: Date,
  },
});

module.exports = mongoose.model("Update", updateSchema);
