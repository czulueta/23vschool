const express = require("express")
const commentRouter = express.Router()
const Comment = require("../models/comment.js")
const Issue = require("../models/issue.js")

// Add new Comment
commentRouter.post("/:issueId", async(req, res, next) => {
  try {
    req.body.issueId = req.params.issueId
    req.body.userId = req.auth._id
    req.body.username = req.auth.username
    const newComment = new Comment(req.body)
    const savedComment = await newComment.save()
    const foundIssue = await Issue.findById( {_id: req.params.issueId} )
    res.status(200).send(savedComment)
  } catch (err) {
    res.status(500)
    return next(err)
  }

})

// get all comments
commentRouter.get("/", async(req, res, next) => {
  try {
    const foundComments = await Comment.find()
    res.status(200).send(foundComments)
  } catch (err) {
    res.status(500)
    return next(err)
  }
})

//delete comment
commentRouter.delete("/:commentId", async(req, res, next) => {
  try {
    const foundComment = await Comment.findByIdAndDelete(req.params.commentId)
    res.status(201).send(`You deleted the comment sucessfully`)
  } catch (err) {
    res.status(500)
    return next(err)    
  }
})

//update comment
commentRouter.put("/:commentId", async(req, res, next) => {
  try {
    const foundComment = await Comment.findByIdAndUpdate(
      commentId,
      req.body,
      {new: true}
    )
    res.status(201).send(`Updated comment a success`)
  } catch (err) {
    res.status(500)
    return next(err)
  }
})

module.exports = commentRouter

//localhost:9000/api/main/comments/66ce9cd345001b211832a368
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmNlOWM3MjQ1MDAxYjIxMTgzMmEzNjQiLCJ1c2VybmFtZSI6ImpvaG53aWNrIiwiaXNBZG1pbiI6ZmFsc2UsIm1lbWJlclNpbmNlIjoiMjAyNC0wOC0yOFQwMzo0MTozOC4xNzVaIiwiX192IjowLCJpYXQiOjE3MjY2Nzg1MDB9.R5tZo_OFu_QbikjySKcFXJy8tZ4B4IpqYUVfm-SOP5k