const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const gymnaseSchema = new Schema(
  {
    // document structure & rules defined here
    name: { type: String, required: true },
    address: { type: String, required: true, minlength: 10 },
    metroStop: { type: String },
    metroLine: { type: String },
    arrondissement: { type: Number, required: true },
    phone: { type: String },
    sports: { type: Array, required: true },
    disabledAccess: { type: String }
  },
  {
    // additional settings for the Schema class defined here
    timestamps: true
  }
);

const Gymnase = mongoose.model("Gymnase", gymnaseSchema);

module.exports = Gymnase;
