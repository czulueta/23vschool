const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")
require("dotenv").config();

app.use(express.json())
app.use(morgan("dev"))

async function connectToDb(){
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("connected to the DB")
  } catch (err) {
    console.log(err)
  }
}

connectToDb()

app.use("/inventory", require("./routes/inventory.js"))

app.use((err, req, res, next) => {
  console.log(err)
  return res.send({errMsg: err.message})
})

app.listen(9000, (err) => {
  console.log("Server is running on port 9000!!!!")
})