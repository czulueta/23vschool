const express = require("express")
const bountyRouter = express.Router();
const { v4: uuidv4 } = require("uuid");


const bounties = [
  {
    firstName: "yoda",
    lastName: "yoda",
    living: true,
    bounty: 1400,
    type: "Jedi",
    _id: uuidv4()
  },
  {
    firstName: "luke",
    lastName: "skywalker",
    living: true,
    bounty: 1200,
    type: "Jedi",
    _id: uuidv4()
  },
  {
    firstName: "boba",
    lastName: "fett",
    living: true,
    bounty: 1400,
    type: "Jedi",
    _id: uuidv4()
  },
  {
    firstName: "anakin",
    lastName: "skywalker",
    living: true,
    bounty: 1200,
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

bountyRouter.delete("/:bountyId", (req, res) => {
  const bountyId = req.params.bountyId
  const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
  bounties.splice(bountyIndex, 1) 
  res.send("Successfully deleted your kill")
})

bountyRouter.put("/:bountyId", (req, res) => {
  const bountyId = req.params.bountyId
  const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
  const updatedBounty = Object.assign(bounties[bountyIndex], req.body)
  res.send(updatedBounty)
})

// bountyRouter.get("/", (req, res) => {
//   res.send(bounties)
// })
// bountyRouter.post("/", (req, res) => {

// })

module.exports = bountyRouter