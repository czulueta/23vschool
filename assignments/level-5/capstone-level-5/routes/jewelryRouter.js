const express = require("express")
const jewelryRouter = express.Router()
const Jewelry = require("../models/jewelrySchema.js")

jewelryRouter.post("/", async(req, res, next) => {
  try {
    const newJewelry = new Jewelry(req.body)
    const savedJewelry = await newJewelry.save()
    return res.status(201).send(savedJewelry)
  } catch (err) {
    res.status(500)
    return next(err)
  }
})

jewelryRouter.get("/", async(req, res, next) => {
  try {
    const getJewelry = await Jewelry.find()
    return res.status(200).send(getJewelry)
  } catch (err) {
    res.status(500)
    return next(err)
  }
})

jewelryRouter.get("/:jewelryId", async(req, res, next) => {
  try {
    const jewelryId = req.params.jewelryId 
    const foundJewelry = await Jewelry.findById(jewelryId)
    return res.status(200).send(foundJewelry)
  } catch (err) {
    res.status(500)
    return next(err)
  }
})

jewelryRouter.delete("/:jewelryId", async(req, res, next) => {
  try {
    const jewelryId = req.params.jewelryId 
    const deletedJewelry = await Jewelry.findByIdAndDelete(jewelryId)
    return res.status(200).send(`Successfully deleted ${deletedJewelry.product}`)
  } catch (err) {
    res.status(500)
    return next(err)
  }
})

jewelryRouter.put("/:jewelryId", async(req, res, next) => {
  try {
    const jewelryId = req.params.jewelryId
    const updatedJewelry = await Jewelry.findByIdAndUpdate(
      jewelryId,
      req.body,
      {new: true}
    )
    return res.status(201).send(updatedJewelry)
  } catch (err) {
    res.status(500)
    return next(err)
  }
})

module.exports = jewelryRouter