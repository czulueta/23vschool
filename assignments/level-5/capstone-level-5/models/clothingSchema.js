const mongoose = require("mongoose")
const Schema = mongoose.Schema 

const clothingSchema = new Schema({
  product:{
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  size: {
    type: String,
    required: true
  },
  quantity: {
    type: Number
  }
})

module.exports = mongoose.model("Clothing", clothingSchema)
