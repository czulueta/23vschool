const form = document.airlineForm;
console.log(form)
// const submit = document.getElementById(submit);
// const query = document.querySelector;
const submit = form.submit
function test(event){
    alert("check");
}
function formAlert() {
    
    const firstName = form["first-name"].value;
    form["first-name"].value = ""
    const lastName = form["last-name"].value;
    form["last-name"].value = ""
    const age = form.age.value;
    form.age.value = ""
    const gender = form.gender.value;
    const location = form["travel-location"].value;
    const diet = [];
    for(let i = 0; form.diet[i].length; i++){
        if(form.diet[i].checked){
            diet.push(form.diet[i].value)
        }
    }
    


    alert("First Name: " + firstName + "Last Name: " + lastName + "Age: " + age + "Gender: " + gender + "Travel Location: " + location + "Diet: " + diet + "Awesome, now if you die, it won't be an accident..");
    
}



form.addEventListener("submit", () => formAlert());