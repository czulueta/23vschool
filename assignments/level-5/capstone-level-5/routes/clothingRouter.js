const express = require("express")
const clothingRouter = express.Router()
const Clothing = require("../models/clothingSchema.js")

clothingRouter.get("/", async(req, res, next) => {
  try {
    const allClothing = await Clothing.find()
    return res.status(200).send(allClothing)
  } catch (err) {
    res.status(500)
    return next(err)
  }
})

clothingRouter.post("/", async(req, res, next) => {
  try {
    const newClothing = new Clothing(req.body)
    const savedClothing = await newClothing.save()
    return res.status(201).send(savedClothing)
  } catch (err) {
    res.status(500)
    return next(err)
  }
})

clothingRouter.get("/:clothingId", async(req, res, next) => {
  try {
    const oneItem = req.params.clothingId
    const foundItem = await Clothing.findById(oneItem)
    return res.status(200).send(foundItem)
  } catch (err) {
    res.status(500)
    return next(err)
  }
})

clothingRouter.delete("/:clothingId", async(req, res, next) => {
  try {
    const itemId = req.params.clothingId
    const deletedItem = await Clothing.findByIdAndDelete(itemId)
    return res.status(200).send(`Successfully deleted ${deletedItem.product}`)
  } catch (err) {
    res.status(500)
    return next(err)
  }
})

clothingRouter.put("/:clothingId", async(req, res, next) => {
  try {
    const itemId = req.params.clothingId
    const updatedItem = await Clothing.findByIdAndUpdate(
      itemId,
      req.body,
      {new: true}
    )
    return res.status(201).send(updatedItem)
  } catch (err) {
    res.status(500)
    return next(err)
  }
})

module.exports = clothingRouter