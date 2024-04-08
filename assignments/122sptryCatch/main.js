
// var input = "";

// try {
//   if(input == "") {
//     throw "Input can not be empty";
//   } else if(input.length > 5) {
//     throw "Input is to big";
//   } else {
//     console.log("You code runs fine!");
//   }
// } catch(err) {
//   console.log(err);
// } finally {
//   console.log("Runs no matter what");
//   console.log("And the input was " + input);
// }

// const isNumber = typeof parameter === 'number' ? true : false;


function sum(x, y){
  // check data first to make sure they are numbers

  try{
    if(typeof x === !"number"){
      throw "this parameter must be a number";
    } else if(typeof y === !"number"){
      throw "this parameter must also be only a number";
    } else {
      console.log(" parameters meet requirements continue")
    }
  } catch(err) {
    console.log(err);
  } finally {
    console.log("runs noo matter what");
    console.log("and the answer is!!! what for it, what for it,")
  }
  return x + y;
}

// console.log(sum(1,2))

const user = {username: "sam", password: "123abc"};
function login(username, password){
  //check credentials
  try{
    if(username !== user.username || password !== user.password ){
      throw "Sorry User Name or Password does not match Please try again";
    } else {
      console.log("they got the right stuff");
    }
  } catch(err) {
    console.log(err);
  } finally {
    console.log("its gonna run regardless")
  }
}

console.log(login("sam","123abc"))

