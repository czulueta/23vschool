

function solution(arr){
  const newArr = arr.sort()
  return newArr
}

// console.log(solution([-1, 150, 190, 170, -1, -1, 160, 180]))
// console.log(solution([5, 3, 1]))
// console.log(solution([-1, -1, -1, -1]))
// console.log(solution([100, -1, 50, -1, 75]))

let input = 'Hello, World!';
function vowelCount(input){
  let count = 0
  
  const lower = input.toLowerCase();
  const newWord = lower.split("")
  
  for(let i = 0; i < newWord.length; i++){
    
    if(newWord[i] === "a"){
      count ++
    }else if(newWord[i] === "e"){
      count ++
    }else if(newWord[i] === "i"){
      count ++
    }else if(newWord[i] === "o"){
      count ++
    }else if(newWord[i] === "u"){
      count ++
    }
    
  }
  return count
}



// console.log(vowelCount(input)); // Output: 3

// arr.length.map(word => {
//   if(word === "a"){
//     count ++
//   }else if(word === "e"){
//     count ++
//     console.log(count)
//   }else if(word === "i"){
//     count ++
//   }else if(word === "o"){
//     count ++
//   }else if(word === "u"){
//     count ++
//   }
//   return count
//   console.log(count)
// })

// const input = 'Hello, World!';
// function vowelCount(input) {
//   let count = 0;
//   const vowels = ['a', 'e', 'i', 'o', 'u'];
//   const newWord = input.toLowerCase().split("");
//   newWord.map(char => {
//     if (vowels.includes(char)) {
//       count++;
//     }
//   });
//   return count;
// }

// console.log(vowelCount(input)); // Output: 3

//Instructions
// Write a JavaScript function called **`findSumOfTwo`** that takes in an array of numbers and a target number. The function should find two numbers in the array that add up to the target number and return them as an array. If there are multiple pairs that satisfy the condition, return any one of them. If no such pair exists, return an empty array.
// Implement the **`findSumOfTwo`** function using either the provided example solutions or your own solution.
//Template
function findSumOfTwo(numbers, target) {
  let targetEquals = []
  for (let i = 0; i < numbers.length; i++) {
      for (let j = i + 1; j < numbers.length; j++) {
          if (numbers[i] + numbers[j] === target) {
            //  targetEquals.push(numbers[i], numbers[j]);
            return [numbers[i], numbers[j]]
          }
            
          
      }
      
  }
  return []
  
}

console.log(findSumOfTwo([2, 4, 7, 11, 15], 91)); // Output: [2, 7]
console.log(findSumOfTwo([5, 12, 3, 9, 1], 8)); // Output: [3, 5]