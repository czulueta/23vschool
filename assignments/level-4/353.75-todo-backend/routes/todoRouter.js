const express = require("express")
const todoRouter = express.Router()
const {v4: uuidv4 } = require("uuid")

const todos = [
  {
    name: "clean house",
    description: "Clean the kitchen, living room , and bedroom",
    imageUrl: "https://images.unsplash.com/photo-1556037843-347ddff9f4b0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xlYW4lMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D",
    completed: false,
    _id: uuidv4()
  },
  {
    name: "wash car",
    description: "wash the car and wax it and vaccum the inside",
    imageUrl: "https://images.unsplash.com/photo-1619431856706-ca2cc58258f6?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    completed: false,
    _id: uuidv4()
  },
  {
    name: "cook dinner",
    description: "prepare a homemade meal from scratch",
    imageUrl: "https://plus.unsplash.com/premium_photo-1677518437635-e285fb38b916?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29va2luZyUyMGRpbm5lcnxlbnwwfHwwfHx8MA%3D%3D",
    completed: false,
    _id: uuidv4()
  },
]

todoRouter.route("/")
  .get((req, res) => {
    res.send(todos)
  })
  .post((req, res) => {
    const newTodo = req.body
    newTodo._id = uuidv4()
    todos.push(newTodo)
    res.send(`Successfully added new todo ${newTodo.name} to your list`)
  })

// get a single todo
todoRouter.get("/:todoId", (req, res) => {
  const todoId = req.params.todoId
  const foundTodo = todos.find(todo => todo._id === todoId)
  res.send(foundTodo)
})

// delete a todo
todoRouter.delete("/:todoId", (req, res) => {
  const todoId = req.params.todoId 
  const todoIndex = todos.findIndex(todo => todo._id === todoId)
  todos.splice(todoIndex, 1)
  res.send("Successfully deleted your todo") 
})

// update a todo
todoRouter.put("/:todoId", (req, res) => {
  const todoId = req.params.todoId
  const todoIndex = todos.findIndex(todo => todo._id === todoId)
  const updatedTodo = Object.assign(todos[todoIndex], req.body)
  res.send(updatetdTodo)
})

module.exports = todoRouter