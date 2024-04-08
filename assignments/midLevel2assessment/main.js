

// function sortNumbers(numbers) {
//   //To sort an array of numbers you want to use the sort method
//   // the sort method takes a callback function with two parameters and it compares the two parameters to determine how things will be sorted
//   return numbers.sort((a,b) => a - b)
//   } 

// // Example usage:
// // const numbers = [4, 2, 7, 1, 9, 5];
// const sortedNumbers = sortNumbers(numbers);
// // console.log(sortedNumbers);  // Output: [1, 2, 4, 5, 7, 9]

function convertToUppercase(strings) {
  // i will use the map function to iterate through the parameter of strings and then i will envoke the upperCase method to mutate the each individual string upon return
  return strings.map( string => string.toUpperCase())
  }

// Example usage:
const strings = ['hello', 'world', 'javascript'];
const uppercaseStrings = convertToUppercase(strings);
// console.log(uppercaseStrings);  // Output: ['HELLO', 'WORLD', 'JAVASCRIPT']

// Write a function that takes an array of numbers and returns a new array containing only the even numbers.
const numbers = [1, 2, 3, 4, 5, 6];

function filterEvenNumbers(numbers) {
  return numbers.filter(num => num % 2 === 0)
}

console.log(filterEvenNumbers(numbers));  // Output: [2, 4, 6]

