function total(arr) {
  return arr.reduce((final, current) => {
    final += current
    return final 
  })
}

// console.log(total([1,2,3])); // 6

function stringConcat(arr) {
  return arr.reduce((final, num) => {
    final.push(num)
    return final
  },[])
}

// console.log(stringConcat([1,2,3])); // "123"

function totalVotes(arr) {
  return arr.reduce((final, voter) => {
    if(voter.voted === true){
      final++
    }
    return final
  }, 0)
}

var voters = [
   {name:'Bob' , age: 30, voted: true},
   {name:'Jake' , age: 32, voted: true},
   {name:'Kate' , age: 25, voted: false},
   {name:'Sam' , age: 20, voted: false},
   {name:'Phil' , age: 21, voted: true},
   {name:'Ed' , age:55, voted:true},
   {name:'Tami' , age: 54, voted:true},
   {name: 'Mary', age: 31, voted: false},
   {name: 'Becky', age: 43, voted: false},
   {name: 'Joey', age: 41, voted: true},
   {name: 'Jeff', age: 30, voted: true},
   {name: 'Zack', age: 19, voted: false}
];
// console.log(totalVotes(voters)); // 7

function shoppingSpree(arr) {
  // get total of all prices 
  return arr.reduce((final, item) => {
    final += item.price++
    return final
  },0)
  
}

var wishlist = [
   { title: "Tesla Model S", price: 90000 },
   { title: "4 carat diamond ring", price: 45000 },
   { title: "Fancy hacky Sack", price: 5 },
   { title: "Gold fidgit spinner", price: 2000 },
   { title: "A second Tesla Model S", price: 90000 }
];

// console.log(shoppingSpree(wishlist)); // 227005

function flatten(arr) {
  // iterate through arrays and make one array
  return arr.reduce((final, string) => {
    final.push(...string) 
    return final
  },[])
}

var arrays = [
   ["1", "2", "3"],
   [true],
   [4, 5, 6]
];

// console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

// function voterResults(arr) {
//    // keep count of how many people in certain age brackets and whether or not they voted 
//    return arr.reduce((final, voter) => {
//     voter.age <= 25 || voter.voted ? numYoungPeople++ : numYoungVotes++
//     return final
//    },{numYoungVotes: 0, numYoungPeople: 0})
// }

function voterResults(arr) {
  // Initialize variables for counting
  

  // Reduce the array to count young people and young people who voted
  return arr.reduce((final, voter) => {
    if(voter.age <= 25){
      final.numYoungPeople++;
      if(voter.voted) {
        final.numYoungVotes++;
      }
    }else if(voter.age <=35 && voter.age >=26){
      final.numMidsPeople++
      if(voter.voted){
        final.numMidVotesPeople++
      }
    }else if(voter.age <= 55 && voter.age >= 36){
      final.numOldsPeople++
      if(voter.voted){
        final.numOldVotesPeople++
      }
    }
    return final;
  }, { numYoungVotes: 0, numYoungPeople: 0, numMidVotesPeople:0, numMidsPeople:0,numOldVotesPeople:0, numOldsPeople:0 });
}

// console.log(voterResults(voters));

console.log(voterResults(voters)); // Returned value shown below:
/*
{ numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidVotesPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4  , numMidVotesPeople: 0, numMidsPeople: 0, numOldVotesPeople: 0, numOldsPeople: 0
}
*/


