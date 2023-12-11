const readline = require("readline-sync");

const add = (a,b) => {
 return a + b
};
const times = (a,b) => {
  return a * b
};
const divide = (a,b) => {
  return a / b
};
const sub = (a,b) => {
  return a - b
};

const options = ["addition", "subtraction","multiplication","division"]

const userName = readline.question("Hello what is your name? ")
let operation = ""
if(readline.keyInYNStrict("Would like to calculate some numbers " + userName + " today?")) {
   operation = readline.keyInSelect(options, "what kind of operation would you want to use?")
   console.log(operation)
} else{
  console.log("Ok have blessed day " + userName + " Hope to hear from you soon")
}

if(operation === 0){
  num1 = readline.questionInt("what is your first number? ")
  num2 = readline.questionInt("what is the next number you would like to add? ")
  console.log(add(num1,num2))
} else if(operation === 1){
  num1 = readline.questionInt("what is your first number? ")
  num2 = readline.questionInt("what is the second number you would like to subtract? ")
  console.log(sub(num1, num2))
} else if(operation === 2){
  num1 = readline.questionInt("what is your first number? ")
  num2 = readline.questionInt("what is the second number you would like to multiply? ")
  console.log(times(num1, num2))
} else if(operation === 3){
  num1 = readline.questionInt("what is your first number?")
  num2 = readline.questionInt("what is the second number you would like to multiply?")
  console.log(divide(num1, num2))
} else {
  return console.log(" if you want to calculate more numbers start again")
}