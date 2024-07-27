const mongoose = require("mongoose");
const { boolean } = require("webidl-conversions");
const Schema = mongoose.Schema

const jewelrySchema = new Schema({
  product: {
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
  inStock: {
    type: Boolean,
    required: true
  }
});

module.exports = mongoose.model("Jewelry", jewelrySchema)


// jewelrySchema.inStock.map(item => item.size.length)
