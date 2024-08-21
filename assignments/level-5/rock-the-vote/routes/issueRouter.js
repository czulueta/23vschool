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
    const foundIssues = await Issue.find({userId: req.auth._id})
    return res.status(200).send(foundIssues)
  } catch (err) {
    res.status(500)
    return next(err)
  }
})

//- **Get All Issues**: Fetch all issues

issueRouter.get("/", async(req, res, next) => {
  try {
    const foundIssues = await Issue.find()
    return res.status(200).send(foundIssues)
  } catch (err) {
    res.status(500)
    return next(err)
  }
})

//- **Update Issue**: Update an existing issue
issueRouter.put("/:issueId", async(req, res, next) => {
  try {
    const issueId = req.params.issueId
    const updatedIssue = await Issue.findByIdAndUpdate(
      issueId,
      req.body,
      {new: true}
    )
    res.status(201).send(updatedIssue)
  } catch (err) {
    res.status(500)
    return next(err)
  }
})

//- **Delete Issue**: Delete an existing issue
issueRouter.delete("/:issueId", async(req, res, next) => {
  try {
    const issueId = req.params.issueId 
    const deletedIssue = await Issue.findByIdAndDelete(issueId)
    res.status(200).send(`Successfully Deleted ${deletedIssue.title}`)
  } catch (err) {
    res.status(500)
    return next(err)
  }
})

module.exports = issueRouter