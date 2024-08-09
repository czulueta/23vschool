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
    console.log("Connected to the DataBase!!!")
  } catch (err) {
    console.log(err)
  }
}

connectDb()

app.use("/api/auth", require("./routes/authRouter.js"))
app.use("/api/issues", require("./routes/issueRouter.js"))

app.use((err, req, res, next) => {
  console.log(err)
  return res.send({errMsg: err.message})
})

app.listen(process.env.PORT, () => {
  console.log(`running on port ${process.env.PORT}`)
})