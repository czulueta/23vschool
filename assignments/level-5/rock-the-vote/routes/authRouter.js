const express = require("express")
const authRouter = express.Router()
const User = require("../models/user.js")
const jwt = require("jsonwebtoken")

authRouter.post("/signup", async(req, res, next) => {
  try {
    const user = await User.findOne({username: req.body.username})
    if(user){
      res.status(403)
      return next(new Error("Sorry That Username is already taken try another Username"))
    }
    const newUser = new User(req.body)
    const savedUser = await newUser.save()
    const token = jwt.sign(savedUser.toObject(), process.env.SECRET)
    return res.status(201).send({user: savedUser, token})
  } catch (err) {
    res.status(500)
    return next(err)
  }
})

module.exports = authRouter