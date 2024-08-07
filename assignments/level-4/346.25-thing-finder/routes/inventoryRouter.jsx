const express = require("express")
const inventoryRouter = express.Router()
const {v4: uuidv4 } = require("uuid")

const inventoryItems = [
  {
      name: "banana",
      type: "food",
      price: 200,
      _id: uuidv4()
  },{
      name: "pants",
      type: "clothing",
      price: 2500,
      _id: uuidv4()
  },{
      name: "basket ball",
      type: "toy",
      price: 1000,
      _id: uuidv4()
  },{
      name: "rockem sockem robots",
      type: "toy",
      price: 1500,
      _id: uuidv4()
  },{
      name: "shirt",
      type: "clothing",
      price: 800,
      _id: uuidv4()
  },{
      name: "soup",
      type: "food",
      price: 300,
      _id: uuidv4()
  },{
      name: "flour",
      type: "food",
      price: 100,
      _id: uuidv4()
  }
]

inventoryRouter.route("/")
  .get((req, res) => {
    res.send(inventoryItems)
  })
  .post((req, res) => {
    const newItem = req.body
    newItem._id = uuidv4()
    inventoryItems.push(newItem)
    res.send(`Successfully added new ${newItem.name} to the database!!!`) 
  })

  inventoryRouter.get("/:itemId", (req, res) => {
    const itemId = req.params.itemId
    const foundItem = inventoryItems.find(item => item._id === itemId)
    res.send(foundItem)
  })

  inventoryRouter.get("/search/type", (req, res) => {
    const type = req.query.type 
    const filteredTypes = inventoryItems.filter(item => item.type === type)
    res.send(filteredTypes)
  })

  module.exports = inventoryRouter