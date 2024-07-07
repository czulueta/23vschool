const express = require("express")
const app = express()
require("dotenv").config()


app.use(express.json())

app.use("/inventoryItems", require("./routes/inventoryRouter.jsx"))

app.listen(process.env.PORT, () => {
  console.log(`Successfully running on ${process.env.PORT}!!!`)
})