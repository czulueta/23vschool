function Book(title, author, year) {

  this.bookTitle = title;
  this.bookAuthor = author;
  this.bookYear = year;
  this.getDetails = () => {
    return "Title: " + this.bookTitle + ", " + "Author: " + this.bookAuthor + ", " + "Year: " + this.bookYear 
  }
}

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
console.log(book1.getDetails()); // Expected output: Title: The Great Gatsby, Author: F. Scott Fitzgerald, Year: 1925

const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
console.log(book2.getDetails()); // Expected output: Title: To Kill a Mockingbird, Author: Harper Lee, Year: 1960

// Challenge: Write a function called findEvenNumbersthat takes in an array of numbers and returns a new array containing only the even numbers from the input array. Can you implement this function using arrays and loops? Remember to consider the condition for determining even numbers. Use the below code to test your solution.
// Here's the template:
// function findEvenNumbers(arr) {
// // Your code here
// }
// console.log(findEvenNumbers([1,2,3,4,5,6,7,8,9,10])) // Expected Output:  [2,4,6,8,10]
// console.log(findEvenNumbers([11, 22, 33, 44, 55, 66, 77, 88, 99, 100])) // Expected Output:  [22, 44, 66, 88, 100]

const findEvenNumbers = (arr) => {
  for( var i = 0; i <= arr.length; i ++){ 
    if(arr[i] % 2 == 0){
      console.log(arr[i])
    }
  }
}
console.log(findEvenNumbers([1,2,3,4,5,6,7,8,9,10]))

console.log(findEvenNumbers([11, 22, 33, 44, 55, 66, 77, 88, 99, 100]))