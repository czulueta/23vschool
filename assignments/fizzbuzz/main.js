const fizzbuzz = [];
const fizz = [];
const buzz = [];

function fizzBuuz(){
    for(let i = 0; i <= 100; i++){
      
        if(i === 0){
            console.log(i)
        }else if(i % 15 === 0){
            
            fizzbuzz.push(i)
        }else if(i % 3 === 0){
            
            fizz.push(i)
        }else if(i % 5 === 0){
            
            buzz.push(i)
        }
        
    }
    console.log(`Fizzbuzz: ${fizzbuzz.length}, Fizz: ${fizz.length}, Buzz: ${buzz.length}`)
}

console.log(fizzBuuz())