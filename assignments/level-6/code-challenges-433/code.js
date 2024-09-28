function extractInitials(names) {
  // turn the array into a smaller array separated by spaces, and then get the first letter of each string and add two of them together 
  let arr = [] 
  for(let i = 0; i < names.length; i ++){
    let initials = names[i][0]
    let index = -1
   for(let j = 0 ; j < names[i].length; j++){
    if(names[i][j] != " "){
      continue;
    }
    else{
      index = j
    }
   }
    
    index ++
    initials += names[i][index]
   
    console.log(names[i][index])
    arr.push(initials)
  }
  return arr
};


const fullNames = ['John Doe', 'Alice Johnson', 'Bob Smith'];
const initialsArray = extractInitials(fullNames);
// console.log(initialsArray); // Output: ['JD', 'AJ', 'BS']

  

function filterByProperty(objects, propertyName, propertyValue) {
  // for loop or a map to iterate through the array of objects to select the the country and check with an if else statement to see if the key matches the value you want
  // people.map(person => {
  //   if(person.country === propertyValue){
  //     return person
  //   }
  // })
  const filteredArr = people.filter((person) => {
    if(person[propertyName] === propertyValue){
      return true
    }
    return false
  })
  return filteredArr
}

const people = [
  { name: 'Alice', age: 30, country: 'USA' },
  { name: 'Bob', age: 25, country: 'Canada' },
  { name: 'Charlie', age: 35, country: 'USA' },
  { name: 'David', age: 28, country: 'Australia' },
];

const filteredByCountry = filterByProperty(people, 'country', 'USA');
// console.log(filteredByCountry)