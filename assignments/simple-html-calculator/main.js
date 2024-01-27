const form = document.calculator
// let result = 0
form.addEventListener("submit", (event) => {
  // event.preventDefault();
  const num1 = form.num1.value;
  form.num1.value = "";
  const num2 = form.num2.value;
  form.num2.value = "";
  const op = form.operator.value;
  let result = 0
  if(op === "add"){
    let answer = parseInt(num1) + parseInt(num2)
    result = answer
    console.log(result)
    return result
  }else if(op === "subtract"){
    return num1 - num2
  }else if(op === "multiply"){
    return num1 * num2
  }else if( op === "divide"){
    return num1 / num2
  }

  
  document.getElementById("result").textContent = "result" 
  

})
// document.getElementById("result").textContent = parseInt(result)

