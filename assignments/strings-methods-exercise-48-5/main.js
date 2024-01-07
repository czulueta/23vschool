// capilizeAndLowercase("HelLo") // => "HELLOhello"

// const capilizeAndLowercase = (string) => {
//   const caps = string.toUpperCase()
//   const lows = string.toLowerCase() 
//   const newString = caps.concat(lows)
//   return newString
// }

// console.log(capilizeAndLowercase("Hello"))

// findMiddleIndex("Hello") // => 2
// findMiddleIndex("Hello World") // => 5

const halfOf = (string) => {
  const wordCount = string.length
  const divided2 = wordCount / 2
  return Math.floor(divided2)
}
// console.log(halfOf("Hello World"))

// returnFirstHalf("Hello") // => "He"
// returnFirstHalf("Hello World") // => "Hello"

const returnFirstHalf = (string) => {
  const wordCount = string.length
  const divided2 = wordCount / 2
  const finishNum = Math.floor(divided2)
  return string.slice(0,finishNum)
}

// console.log(returnFirstHalf("Hello World"))

// capilizeAndLowercase("Hello") // => "HEllo"
// capilizeAndLowercase("Hello World") // => "HELLO world"

const secondHalf = (string) => {
  const wordCount = string.length 
  const divided2 = wordCount / 2
  const finishNum = Math.floor(divided2)
  return string.slice(finishNum)
}

const capilizeAndLowercase = (string) => {
  const half = returnFirstHalf(string)
  const halfCaps = half.toUpperCase()
  const backHalf = secondHalf(string)
  const backHalfLows = backHalf.toLowerCase()
  return halfCaps.concat(backHalfLows)

}

console.log(capilizeAndLowercase("Hello World"))
