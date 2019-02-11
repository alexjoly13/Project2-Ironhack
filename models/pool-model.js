const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const poolSchema = new Schema(
  {
    // document structure & rules defined here
    name: { type: String, required: true },
    address: { type: String, required: true, minlength: 10 },
    metroStop: { type: String },
    metroLine: { type: String },
    arrondissement: { type: Number, required: true },
    map: { type: String },
    phone: { type: String },
    activities: { type: Array, required: true },
    entryPrice: { type: Number, required: true },
    poolLength: { type: String },
    poolWidth: { type: String },
    poolBoard: { type: String },
    situation: { type: String },
    disabledAccess: { type: String }
  },
  {
    // additional settings for the Schema class defined here
    timestamps: true
  }
);

const SwimmingPools = mongoose.model("swimming-pools", poolSchema);

module.exports = SwimmingPools;
