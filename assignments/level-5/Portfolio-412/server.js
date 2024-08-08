const mongoose = require("mongoose")
const express = require("express")
const morgan = require("morgan")
require("dotenv").config()

const app = express()

app.use(express.json())
app.use(morgan("dev"))

const connectDb = async() => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("Connected to the Data Base!!!")
  } catch (err) {
    console.log(err)
  }
}

connectDb()

app.use("/api/websites", require("./routes/websiteRouter.js"))

app.use((err, req, res, next) => {
  console.log(err)
  return res.send({errMsg: err.message})
})

app.listen(process.env.PORT, () => {
  console.log(`runngin on port ${process.env.PORT}`)
})