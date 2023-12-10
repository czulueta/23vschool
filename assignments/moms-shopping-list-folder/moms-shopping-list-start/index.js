const form = document.addItem 
const listItems = []
const list = document.getElementById("list")

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const item = form.title.value
  form.title.value = ""
  
  const li = document.createElement("li");
  const eraseButton = document.createElement("Button");
  eraseButton.id = "erase"
  const editButton = document.createElement("Button");
  editButton.id = "edit"
  const listItems = []
  
  eraseButton.textContent = "Delete"
  editButton.textContent = "Edit"
  
  li.textContent = item

 
  const bbye = () => {
    list.removeChild(li)
    list.removeChild(eraseButton)
    list.removeChild(editButton)
  }
  eraseButton.addEventListener("click", bbye);
  
  list.append(li,eraseButton,editButton)
})



console.log(listItems)