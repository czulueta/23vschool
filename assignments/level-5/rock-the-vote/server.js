const mongoose = require("mongoose")
const express = require("express")
const morgan = require("morgan")
require("dotenv").config()
const {expressjwt} = require("express-jwt")

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
app.use("/api/main", expressjwt({secret: process.env.SECRET, algorithms: ["HS256"]}))
app.use("/api/main/issues", require("./routes/issueRouter.js"))

app.use((err, req, res, next) => {
  console.log(err)
  if(err.name === "UnauthorizedError"){
    res.status(err.status)
  }
  return res.send({errMsg: err.message})
})

app.listen(process.env.PORT, () => {
  console.log(`running on port ${process.env.PORT}`)
})