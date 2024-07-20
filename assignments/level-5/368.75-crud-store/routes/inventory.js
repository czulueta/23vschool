const express = require("express")
const inventoryRouter = express.Router()
const Inventory = require("../models/inventory.js")

inventoryRouter.get("/", async(req, res, next) => {
  try {
    const foundInventory = await Inventory.find()
    return res.status(200).send(foundInventory)
  } catch (err) {
    res.status(500)
    return next(err)
  }
})

inventoryRouter.get("/:inventoryId", async(req, res, next) => {
  try {
    const inventoryId = req.params.inventoryId 
    console.log(inventoryId)
    const singleInventory = await Inventory.findById(inventoryId)
    return res.status(200).send(singleInventory)
  } catch (err) {
    res.status(500)
    return next(err)
  }
})

inventoryRouter.post("/", async(req, res, next) => {
  try {
    const newInventory = new Inventory(req.body)
    const savedInventory = await newInventory.save()
    return res.status(201).send(savedInventory)
  } catch (err) {
    res.status(500)
    return next(err)
  }
})

inventoryRouter.delete("/:inventoryId",  async(req, res, next) => {
  try {
    const inventoryId = req.params.inventoryId
    const deletedInventory =  await Inventory.findByIdAndDelete(inventoryId)
    return res.status(200).send(`You have deleted ${deletedInventory.product}`)
  } catch (err) {
    res.status(500)
    return next(err)
  }
})

inventoryRouter.put("/:inventoryId", async(req, res, next) => {
  try {
    const inventoryId = req.params.inventoryId
    const editedInventory = await Inventory.findByIdAndUpdate(
      inventoryId,
      req.body,
      {new: true }
    )
    return res.status(201).send(editedInventory)
  } catch (err) {
    res.status(500)
    return next(err)
  }
})

module.exports = inventoryRouter