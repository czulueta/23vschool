const form = document.flightForm

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const gender = form.gender.value;
  const firstName = form.firstName.value;
  const lastName = form.lastName.value;
  const city = form.city.value
  const age = form.number.value;

  const checkedFood = [];
  for(let i = 0; i < form.food.length; i++){
    if(form.food[i].checked){
      checkedFood.push(form.food[i].value)
    }
  }
  alert(`   First Name: ${firstName} 
            Last Name: ${lastName} 
            Age: ${age} 
            Gender: ${gender} 
            Destination: ${city} 
            Dietary Restrictions: ${checkedFood}
       `)
}) 