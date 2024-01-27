// test data
// console.log(largest([6, 13, 250, 3)) // => 250
// console.log(largest([3, 5, 2, 8, 1])) // => 8
// console.log(largest([-13, 40, 3, 0, 19, 22])) // => 40



function largest(arr) {
  let maximum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maximum) {
      maximum = arr[i];
    }
  }
  return maximum;
}

// console.log(largest([6,13,250,3]));

// const regex = /([a-zA-Z\W])/g

// function matchString(arr) {
//   let string = arr;
//   let result = string.match(regex);
//   console.log("Output : " + result);
// } 

function matchStr(arr, character) {
  return arr.filter((item, index) => {
    if (item.includes(character)) {
      return item
    }
  })
}

console.log(matchStr(["$hello!", "%%^%%", "test!"], "!"));

function isDivisble(num1,num2) {
  if(num1 % num2 === 0){
    console.log(true)
  }else{
    console.log(false)
  }
}

console.log(isDivisble(4,2))