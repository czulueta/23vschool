const express = require("express")
const bountyRouter = express.Router();
const Bounty = require("../models/bounty.js")


bountyRouter.route("/")
// get all bounties
  .get(async(req, res, next) => {
    try {
      const foundBounties = await Bounty.find()
      return res.status(200).send(foundBounties)
    } catch (err) {
      res.status(500)
      return next(err)
    }
  })
// post a new bountyy
  .post(async(req, res, next) => {
    try {
      const newBounty = new Bounty(req.body)
      const savedBounty = await newBounty.save()
      return res.status(201).send(savedBounty)
    } catch (err) {
      res.status(500)
      return next(err)
    }
  })

  // get one bounty
bountyRouter.get("/:bountyId", async(req, res, next) => {
  try {
    const bountyId = req.params.bountyId
    const singleBounty = await Bounty.findById(bountyId)
    return res.status(200).send(singleBounty)
  } catch (err) {
    res.status(500)
    return next(err)
  }
})

// delete a bounty
bountyRouter.delete("/:bountyId", async(req, res, next) => {
  try {
    const bountyId = req.params.bountyId
    const paidBounty = await Bounty.findByIdAndDelete(bountyId)
    return res.status(200).send(`Successfully got paid for ${paidBounty.firstName}`)
  } catch (error) {
    res.status(500)
    return next(err)
  }
})

//update or edit a bounty
bountyRouter.put("/:bountyId", async(req, res, next) => {
  try {
    const bountyId = req.params.bountyId
    const updatedBounty = await Bounty.findByIdAndUpdate(
      bountyId,
      req.body,
      {new: true}
    )
    return res.status(201).send(updatedBounty)
  } catch (err) {
    res.status(500)
    return next(err)
  }
 
 
})

module.exports = bountyRouter