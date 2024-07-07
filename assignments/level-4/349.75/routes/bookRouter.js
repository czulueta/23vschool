const express = require("express")
const bookRouter = express.Router()


bookRouter.get("/", (req, res, next) => {
  console.log("Your get request was recieved!!! thank you")
  res.send(req.body)
})

module.exports = bookRouter