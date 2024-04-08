
const name = "John"
const age = 101

function runForLoop(pets) {
    let petObjects = []
    for (let i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
        let name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}

// runForLoop(["cat", "dog"])

const carrots = ["bright orange", "ripe", "rotten"]

function mapVegetables(arr) {
    return arr.map((carrot) => {
        return { type: "carrot", name: carrot }
    })
}

// console.log(mapVegetables(carrots))

const people = [
  {
      name: "Princess Peach",
      friendly: false
  },
  {
      name: "Luigi",
      friendly: true
  },
  {
      name: "Mario",
      friendly: true
  },
  {
      name: "Bowser",
      friendly: false
  }
]

function filterForFriendly(arr) {
  return arr.filter((person) => person.friendly)
}

// console.log(filterForFriendly(people))

const doMathSum = (a, b) => a + b;

console.log(doMathSum(2,3))

const produceProduct = (a, b) =>  a * b;

console.log(produceProduct(2,3))

// Hi Kat Stark, how does it feel to be 40?

const printString = (firstName = "Jane", lastName = "Doe", age = 100) => {
  return `Hi ${firstName} ${lastName}, how does it feel to be ${age}`
}

// console.log(printString("firstName", "lastName", age))

const animals = [
  {
      type: "dog",
      name: "theodore"
  },
  {
      type: "cat",
      name: "whiskers"
  },
  {
      type: "pig",
      name: "piglette"
  },
  {
      type: "dog",
      name: "sparky"
  }
];

function filterForDogs(arr) {
   return arr.filter(animal => animal.type === "dog" ? true : false)
}
console.log(filterForDogs(animals))