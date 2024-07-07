const express = require("express")
const app = express()
const { v4: uuidv4 } = require("uuid")

app.use(express.json())

app.use("/books", (req, res, next) => {
  console.log("my books middleware was fired!!!")
  next()
})

app.use("/books", (req, res, next) => {
  req.body = { 
    title: "King James 1611"
  }
  next()
})

app.use("/books", require("./routes/bookRouter.js"))

// app.get("/books", (req, res, next) => {
//   console.log("Your get request was recieved!!! thank you")
//   res.send(req.body)
// })
app.listen(9000, () => {
  console.log("Successfully running on port 9000")
})