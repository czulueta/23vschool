const readline = require("readline-sync");

const userName = readline.question("what is your name? ")
console.log("Welcome to your escape room game " + userName + "!")
console.log("The objective is to get out of this room alive, and to do that you must find the key to the door, good luck  " + userName)
console.log("The key is in the either vase, under the rug, behind the picture in the picture frame, or in the hole in the wall")
const options = ["vase","rug","picture", "hole"]
const keySelection = readline.keyInSelect(options, "Where would you like to check first " + userName + "???"); {
  console.log(keySelection)
  if(keySelection === 0){
    console.log("Oh no!!! you got bitten by a posionous snake!! Now your dying from the venom!! game over")
    // const newOptions = ["rug","picture","hole"]
    // const keySelect = readline.keyInSelect(newOptions, " I hope this is a better choice for your sake")
  
  }else if(keySelection === 1){
    console.log(`Sorry there is no key in there ${userName} now the door will be locked automatically and you will never leave HAAHHHAAA game over`)
  }
  else if(keySelection === 2){
    console.log("Yes!!! " + userName + " You found the key now use it to get out of the room!!!" )
  }else if(keySelection === 3){
    console.log(`OOh Nooo!!! ${userName} Your hand got chopped off now your bleeding to death!! game over buddy`)
  }else {
    return console.log("have a good day")
  }
  
}
