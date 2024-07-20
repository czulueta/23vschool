const mongoose = require("mongoose")
const Schema = mongoose.Schema


const inventorySchema = new Schema({
  product: {
    type: String,
    required: false,
    unique: true
  },
  description: {
    type: String,
  
  },
  class:{
    type: String,
    required: true
  },
  price:{
    type: Number,
    required: true
  }
})

module.exports = mongoose.model("Inventory", inventorySchema)

//firstName: "Anakin",
//     lastName: "Skywalker",
//     living: true,
//     bounty: 1200,
//     type: "Jedi",