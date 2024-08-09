const express = require("express")
const issueRouter = express.Router()
const Issue = require("../models/issue.js")

//Post
issueRouter.post("/", async(req, res, next) => {
  try {
    req.body.userId = req.auth._id //logged in user
    const newIssue = new Issue(req.body)
    const savedIssue = await newIssue.save()
    return res.status(201).send(savedIssue)
  } catch (err) {
    res.status(500)
    return next(err)
  }
})

//get
issueRouter.get("/:userId", async(req, res, next) => {
  try {
    const foundIssues = await Issue.find({userId: req.params.userId})
    return res.status(200).send(foundIssues)
  } catch (err) {
    res.status(500)
    return next(err)
  }
})

module.exports = issueRouter