const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const skateSchema = new Schema(
  {
    // document structure & rules defined here
    name: { type: String, required: true },
    address: { type: String, required: true, minlength: 10 },
    metroStop: { type: String },
    metroLine: { type: String },
    arrondissement: { type: Number, required: true },
    phone: { type: String },
    entryPrice: { type: Number },
    disabledAccess: { type: String }
  },
  {
    // additional settings for the Schema class defined here
    timestamps: true
  }
);

const SkateParks = mongoose.model("Skateparks", skateSchema);

module.exports = SkateParks;
