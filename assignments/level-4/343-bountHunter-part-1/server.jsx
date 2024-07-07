const express = require("express");
const app = express()

app.use(express.json())

app.use("/bounties", require("./routes/bountyRouter.jsx"))

app.listen(8000, () => {
  console.log("Your Server is running on Port 9000!!!")
})
