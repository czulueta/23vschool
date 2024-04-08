



function getData(){
  axios.get("https://api.vschool.io/pokemon")
  .then(res =>  {console.log(res.data)
    for(let i = 0; i <= res.data.objects[0].pokemon.length; i ++){
      
      const h1 = document.createElement("h1")
      console.log(res.data.objects[0].pokemon[i].name)
      h1.textContent = res.data.objects[0].pokemon[i].name

      document.body.appendChild(h1)
    }
})
  .catch(error => console.log(error))
  
}

const btnId = document.getElementById("btn")
btnId.addEventListener("click", () => {
  getData()
})


