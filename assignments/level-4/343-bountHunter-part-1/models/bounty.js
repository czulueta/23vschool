const mongoose = require("mongoose")
const Schema = mongoose.Schema 

const bountySchema = new Schema({
  firstName: {
    type: String,
    required: true, 
  },
  lastName: {
    type: String,
  },
  living: {
    type: Boolean,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  bounty: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model("Bounty", bountySchema)

//firstName: "Anakin",
//     lastName: "Skywalker",
//     living: true,
//     bounty: 1200,
//     type: "Jedi",
//     _id: uuidv4()