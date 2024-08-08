const mongoose = require("mongoose")
const Schema = mongoose.Schema 

const websiteSchema = new Schema({
  website: {
    type: String
  }
})

module.exports = mongoose.model("Websites", websiteSchema)