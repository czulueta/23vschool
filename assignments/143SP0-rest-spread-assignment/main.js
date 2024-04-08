

function collectAnimals(...animals) {
  return [...animals];
}

// console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"));
// ["dog", "cat", "mouse", "jackolope", "platypus"]


function combineFruit(fruit, sweets, vegetables){
  return {fruit:[...fruit], sweets:[...sweets],vegetables:[...vegetables]}
}

// console.log(combineFruit(["apple", "pear"],["cake", "pie"],["carrot"]))
// //=> {
//       fruit: ["apple", "pear"],
//       sweets: ["cake", "pie"],
//       vegetables: ["carrot"]
//    }


function parseSentence({location, duration}){
  return `We're going to have a good time in ${location} for ${duration}`
}

// console.log (parseSentence({
//   location: "Burly Idaho",
//   duration: "2 weeks"
// }));

const returnFirst = (items) => {
  const [firstItem] = items; /*change this line to be es6*/
  return firstItem
}

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];
const [firstFav,secondFav,thirdFav,fourthFav,fifthFav] = favoriteActivities

function returnFavorites(arr){
    const [firstFav,secondFav,thirdFav,fourthFav,fifthFav] = arr
    return `"My top three favorite activities are, ${firstFav}, ${secondFav}, and ${thirdFav}`;
}

// console.log(returnFavorites(favoriteActivities));

function combineAnimals([...arr1], [...arr2],[...arr3]) {
  return [...arr1, ...arr2, ...arr3]
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals));

// ["dog", "cat", "mouse", "jackolope", "platypus"]

function product(a, b, c, d, e) {
  const numbers = [a,b,c,d,e];

  return numbers.reduce((acc, number) =>  acc * number, 1)
}

const unshift = (array, a, b, c, d, e) => [a, b, c, d, e,...array];

// function unshift(array, a, b, c, d, e) {
//   return [a, b, c, d, e].concat(array);
// }

function populatePeople(names){
  return names.map(function(name){
      const [firstName, lastName] = name.split(" ");
      
      return {
          firstName: firstName,
          lastName: lastName
      }
  })
}

populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"])
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]



