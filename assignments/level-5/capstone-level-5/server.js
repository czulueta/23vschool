const mongoose = require("mongoose")
const express = require("express")
const morgan = require("morgan")
require("dotenv").config()


const app = express()

app.use(express.json())
app.use(morgan("dev"))


const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("Connected to the database!!!")
  } catch (err) {
    console.log(err)
  }
}

connectToDb()

app.use("/api/jewelry", require("./routes/jewelryRouter.js"))
app.use("/api/clothing", require("./routes/clothingRouter.js"))

app.use((err, req, res, next) => {
  console.log(err)
  return res.send({errMsg: err.message})
})

app.listen(process.env.PORT, () => {
  console.log(`running port ${process.env.PORT}!!!`)
})

