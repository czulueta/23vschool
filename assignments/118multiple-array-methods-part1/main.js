
const people = [
  {name:"Kyle Mooney", age:27},
  {name:"Sarah Palin", age:47},
  {name:"Rick Sanchez", age:78},
  {name:"Morty Smith", age:29},
  {name:"Lev Tolstoy", age: 82}
];

var peopleArray = [
  {
      firstName: "Sarah",
      lastName: "Palin",
      age: 47
  },
  {
      firstName: "Frank",
      lastName: "Zappa",
      age: 12
  },
  {
      firstName: "Rick",
      lastName: "Sanchez",
      age: 78
  },
  {
      firstName: "Morty",
      lastName: "Smith",
      age: 29
  },
  {
      firstName: "Kyle",
      lastName: "Mooney",
      age: 27
  },
  {
      firstName: "Pasha",
      lastName: "Datsyuk",
      age: 13
  },
  {
      firstName: "Lev",
      lastName: "Tolstoy",
      age: 82
  }
]



function sortedOfAge(arr){
  return arr.sort((a,b) => a.lastName.localeCompare(b.lastName))
  .reduce((final, person) => {
    if(person.age >= 18){
      sortedPerson = `<li>${person.firstName } ${person.lastName} is ${person.age}</li>`
      // console.log(final)
      final.push(sortedPerson)
    }
    return final
  },[])
  
}

console.log(sortedOfAge(peopleArray));

/*
Output:
[
   "<li>Kyle Mooney is 27</li>",
   "<li>Sarah Palin is 47</li>",
   "<li>Rick Sanchez is 78</li>",
   "<li>Morty Smith is 29</li>",
   "<li>Lev Tolstoy is 82</li>"
]
*/
/* You should use multiple array methods to solve these problems. Don't use `for` loops!

Using the provided `peopleArray` (bottom of this article), write a function that:

1. Returns a list of everyone older than 18, which is: if else
2. sorted alphabetically by last name, and where: localecompare
3. each name and age is embedded in a string that looks like an HTML `<li>` element. template literals
*/

// return arr.name.sort((a,b) => a.split(" ")[1].localeCompare(b.split(" ")[1]))
  // arr.reduce( (final, person) => {
  //   final += person.sort((a,b) => a.lastName.localeCompare(b.lastName))
  //   final.push(person)
  //   // console.log(person)
  //   // final.push(person.name.sort((a,b) => a.split(" ")[1].localeCompare(b.split(" ")[1]))) 
  //   // return final
  //   // if(person.age > 18){
  //   //   person.sort((a,b) => a.lastName.localeCompare(b.lastName))
  //   // //   // person.name.sort((a,b) => a.split(" ")[1].localeCompare(b.split(" ")[1]))
  //   // //   // `"<li>${person.name[0] }${person.name[1]} is ${person.age}</li>"`
  //   //   final.push(person)
      
  //   // }
  //   return final
  // },[])// return arr.name.sort((a,b) => a.split(" ")[1].localeCompare(b.split(" ")[1]))
  // arr.reduce( (final, person) => {
  //   final += person.sort((a,b) => a.lastName.localeCompare(b.lastName))
  //   final.push(person)
  //   // console.log(person)
  //   // final.push(person.name.sort((a,b) => a.split(" ")[1].localeCompare(b.split(" ")[1]))) 
  //   // return final
  //   // if(person.age > 18){
  //   //   person.sort((a,b) => a.lastName.localeCompare(b.lastName))
  //   // //   // person.name.sort((a,b) => a.split(" ")[1].localeCompare(b.split(" ")[1]))
  //   // //   // `"<li>${person.name[0] }${person.name[1]} is ${person.age}</li>"`
  //   //   final.push(person)
      
  //   // }
  //   return final
  // },[])