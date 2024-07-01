const express = require("express")
const bountyRouter = express.Router();
const { v4: uuidv4 } = require("uuid");


const bounties = [
  {
    firstName: "yoda",
    lastName: "yoda",
    living: true,
    bounty: 100,
    type: "Jedi",
    _id: uuidv4()
  }
]

bountyRouter.route("/")
  .get((req, res) => {
    res.send(bounties)
  })
  .post((req, res) => {
    const newBounty = req.body
    newBounty._id = uuidv4()
    bounties.push(newBounty)
    res.send(`Successfully added ${newBounty.firstName} to the database!!!`)
  })

// bountyRouter.get("/", (req, res) => {
//   res.send(bounties)
// })
// bountyRouter.post("/", (req, res) => {

// })

module.exports = bountyRouter