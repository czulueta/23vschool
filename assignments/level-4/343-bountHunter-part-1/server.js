const express = require("express");
const mongoose = require("mongoose")
const morgan = require("morgan")
const app = express()
require("dotenv").config()

app.use(express.json())
app.use(morgan("dev"))

async function connectToDb(){
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("Connected to the DB")
  } catch (err) {
    console.log(err)
  }
}

connectToDb()

app.use("/bounties", require("./routes/bountyRouter.js"))

app.use((err, req, res, next) => {
  console.log(err)
  return res.send({errMsg: err.message})
})

app.listen(9000, () => {
  console.log("Your Server is running on Port 9000!!!")
})
