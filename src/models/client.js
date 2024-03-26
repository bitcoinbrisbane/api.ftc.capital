const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  age: {
    required: true,
    type: Number,
  },
  email: {
    required: true,
    type: String,
  },
  parenting: {
    required: true,
    type: Boolean,
  },
  assetPool: {
    required: true,
    type: Number,
  },
  otherSideLawyer: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model("Client", clientSchema);
