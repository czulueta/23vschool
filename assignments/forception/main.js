var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"

const newP = people.length
console.log(newP)
// var alpha = alphabet.toString(" , ")
var alpha = alphabet.split()
// console.log(alpha)

const forception = (people, alphabet) => {
  // var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
  // var alphabet = "abcdefghijklmnopqrstuvwxyz"
  // var newAlpha = alphabet.split("").toString(" ")
  // console.log(newAlpha)
  const newArr = []
  for(var i = 0; i < people.length; i++){
    newArr.push(people[i])
    for(var j = 0; j < alphabet.length; j++){
      newArr.push(alphabet[j])
    }
  }
  return newArr
}

console.log(forception(people, alphabet))