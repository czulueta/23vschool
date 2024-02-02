// localStorage.setItem("name", "steve")
// localStorage.setItem("age", 10)
// localStorage.setItem("isAlive", true)
// localStorage.setItem("friends", JSON.stringify(["mark", "tina", "jay"]))
// localStorage.setItem("address", JSON.stringify({street: "123 street, city: SLC"}))

// const name = localStorage.getItem("name");
// console.log(name);
// const age = localStorage.getItem("age");
// console.log(age);
// const boolean = localStorage.getItem("isAlive");
// console.log(boolean);
// const friends = JSON.parse(localStorage.getItem("friends"));
// console.log(friends);
// const address = JSON.parse(localStorage.getItem("address"));
// console.log(address);


let count = sessionStorage.getItem("count") ? sessionStorage.getItem("count") : 0

// const add = count =>  count ++;
function add(){
  
  count++
  sessionStorage.setItem("count", count)
  
  showNum.textContent = count
  
}
const minus = () => {
  count --
  sessionStorage.setItem("count",count)
  
  showNum.textContent = count
  
};

const showNum = document.getElementById("display");

const minusBtn = document.getElementById("minus");
minusBtn.addEventListener("click", minus);

const addBtn = document.getElementById("add");
addBtn.addEventListener("click", add)

showNum.textContent = count

// showNum.addEventListener("submit", (event) => {
//   event.preventDefault()
//   if(showNum.addUp){
//     add()
//   }else if(showNum.takeAway){
//     minus()
//   }
// })