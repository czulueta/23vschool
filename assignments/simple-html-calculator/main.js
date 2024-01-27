const form = document.calculator

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const num1 = form.num1.value;
  form.num1.value = "";
  const num2 = form.num2.value;
  form.num2.value = "";
  const op = form.operator.value;
  let result = 0
  if(op === "add"){
    let answer = parseInt(num1) + parseInt(num2)
    document.getElementById("result").textContent = answer 
    return result
  }else if(op === "subtract"){
    let answer = parseInt(num1) - parseInt(num2)
    document.getElementById("result").textContent = answer 
    return result
  }else if(op === "multiply"){
    let answer = parseInt(num1) * parseInt(num2)
    document.getElementById("result").textContent = answer 
    return result
  }else if( op === "divide"){
    let answer = parseInt(num1) / parseInt(num2)
    document.getElementById("result").textContent = answer 
    return result
  }

})



