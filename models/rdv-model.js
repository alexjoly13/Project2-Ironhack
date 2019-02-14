const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const rdvSchema = new Schema({
  location: {
    type: String,
    required: true
  },
  formatedDay: {
    type: String,
    required: true,
  },
  formatedDayNum: {
    type: String,
    required: true,
  },
  formatedMonth: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  sport: {
    type: Array,
    maxlength: 1, // tester si ca met 1 ou 2 objets 
    required: true
  },
  host: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  userIcon: {
    type: String,
  },
  // guests: {
  //   type: Array,
  // },
  level: {
    type: String,
    enum: ["Beginner", "Intermediate", "Confirmed", "Expert"],
    required: true
  }
}, {
  timestamps: true
});




const Rdv = mongoose.model("Rdv", rdvSchema);
module.exports = Rdv;