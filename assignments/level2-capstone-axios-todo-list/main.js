
const todoForm = document.inputForm
let ref = []
const newTodo = {
  title: todoForm.title.value,
  description: todoForm.description.value,
  price: todoForm.price.value,
  imgUrl: todoForm.imgUrl.value,
  completed: false
}

todoForm.addEventListener("submit", function(event) {
  event.preventDefault()
  const newTodo = {
    title: todoForm.title.value,
    description: todoForm.description.value,
    price: todoForm.price.value,
    imgUrl: todoForm.imgUrl.value,
    completed: false
  }
  axios.post("https://api.vschool.io/cesarzulueta/todo", newTodo)
    .then(res => {
      console.log(res.data)
      getTodos()
    })
    .catch(err => console.log(err))

    // getTodos()
    console.log(newTodo)

})


// const todo = document.getElementById("todoContainer")
let doOnce = false
const listTodos = (data) => {
  // reference data for checkbox later on
  ref = data
  const clearList = () => {
    const div = document.getElementById("todoContainer")
    while(div.firstChild){
        div.removeChild(div.firstChild)
    }
  }
  clearList()
  
  for(let i = 0; i < data.length; i ++){

    
    // todo container with div inside container
    const todo = document.getElementById("todoContainer")
    const div = document.createElement("div")
    div.id = "individualTodo"

    
    // const todo = document.getElementById("todoContainer")
    
    // delet button and edit buttoon
    const deleteBtn = document.createElement("button")
    deleteBtn.id = "deleteBtn"
    const editBtn = document.createElement("button")
    editBtn.id = "editBtn"
    
    // element tags created for title, description,price, and image url
    const title = document.createElement("h3")
    const desc = document.createElement("p")
    const price = document.createElement("p")
    const img = document.createElement("img")
    
    // assigning todos information to designated div of a complete todo
    title.textContent = data[i].title
    desc.textContent = data[i].description
    price.textContent = parseInt(data[i].price)
    img.src = data[i].imgUrl
    deleteBtn.textContent = "Delete"
    editBtn.textContent = "Edit"

    

    // the function to delete a todo when delete buttton is pressed
    deleteBtn.addEventListener("click", function(e){
      e.preventDefault()
      axios.delete(`https://api.vschool.io/cesarzulueta/todo/${data[i]._id}`)
      .then(res => todo.removeChild(div))
      .catch(err => console.log(err))
    })
    
    // the function to edit a todo
    editBtn.addEventListener("click", function(e){
      if(!doOnce){
        doOnce = true
      // edit todo form is created along with a save button and completed checkbox
      const editTodo = document.editForm
      const newTodo = document.createElement("form")
      newTodo.id = "editForm"
      const saveBtn = document.createElement("button")
      saveBtn.id = "saveButton"
      saveBtn.textContent = "Save"
      div.append(saveBtn)

      // checkbox div with label and input checkbox inside
      const checkboxDiv = document.createElement("div")
      const completedLabel = document.createElement("label")
      completedLabel.textContent = "Completed"
      const checkbox = document.createElement("input")
      checkbox.setAttribute("name", "completedTodo")
      checkbox.setAttribute("type", "checkbox")
      checkbox.setAttribute("value", "completed")
      if(data[i].completed){
        checkbox.checked = true
      }
      // reference is equal todos from api purpose to make completed checkbox true or false
      const check = (id) => {
        updateObject = ref.filter(item => item._id === id)
        updateObject[0].completed = updateObject[0].completed? false : true
        const updateCheck = {
          completed: updateObject[0].completed
        }

        axios.put(`https://api.vschool.io/cesarzulueta/todo/${id}`,updateCheck)
        .then(res => location.reload())
        .catch(err => console.log(err))
      }
      checkbox.addEventListener("click", () => check(data[i]._id))
      checkboxDiv.append(completedLabel, checkbox)
      

      const titleInput = document.createElement("input")
      titleInput.id = "title" 
      titleInput.placeholder = "title"
      const descInput = document.createElement("input")
      descInput.id = "description"
      descInput.placeholder = "description"
      const priceInput = document.createElement("input")
      priceInput.id = "price"
      priceInput.placeholder = "price"
      const imageInput = document.createElement("input")
      imageInput.id = "imgUrl"
      imageInput.placeholder = "image url"

      newTodo.append(titleInput,descInput,priceInput,imageInput,checkboxDiv)
      div.append(newTodo)
      
      saveBtn.addEventListener("click", function(e){

        // const completedTodo = () => {
        //   if(newTodo.completedTodo.checked){
        //     newTodo.completedTodo
            
        //   }
        // }
        // completedTodo()

        const updatedTodo = {
            title: newTodo.title.value,
            description: newTodo.description.value,
            price: newTodo.price.value,
            imgUrl: newTodo.imgUrl.value,
            
          }
            axios.put(`https://api.vschool.io/cesarzulueta/todo/${data[i]._id}`, updatedTodo)
          .then(res => {
            title.textContent = res.data.title,
            desc.textContent = res.data.description,
            price.textContent = res.data.price,
            img.src = res.data.imgUrl
          })
          //console.log(res.data))
          .catch(err => console.log(err))

          //newTodo.removeChild(titleInput)
          div.removeChild(newTodo)
          div.removeChild(saveBtn)
          doOnce = false
      })
      
    }})
    if(data[i].completed){
      div.style.textDecoration = "line-through"
    }
    div.append(title,desc,price,img,deleteBtn, editBtn)

    todo.append(div)
  }
}

const getTodos = () => {
  axios.get("https://api.vschool.io/cesarzulueta/todo")
  // .then(res => console.log(res.data))
  .then(res => listTodos(res.data))
  .catch(err => console.log(err))
}






// const updateTodo = () => {
//   axios.put("https://api.vschool.io/cesarzulueta/todo/_id")
//   .then(res => console.log(res.data))
//   .catch(err => console.log(err))
// }

getTodos()

