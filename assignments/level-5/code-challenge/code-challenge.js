function extractUniqueCharacters(strings) {
  const uniqueCharsObj = {
    // "a": true,
    // "p": true
  }

  const uniqueCharsArray = []

  const combinedArr = strings.join("").split("")

  combinedArr.map(char => {
    if (!uniqueCharsArray.includes(char)) {
      uniqueCharsArray.push(char)
    }
  })
  // for ( const str of strings ) {
  //   for ( const char of str ) {
  //     if ( !uniqueCharsObj[char] ) {
  //       uniqueCharsObj[char] = true
  //       uniqueCharsArray.push(char)
  //     }
  //   }
  // }
  return uniqueCharsArray
}
const words = ['apple', 'banana', 'cherry'];
const uniqueChars = extractUniqueCharacters(words);
console.log(uniqueChars); // Output: ['a', 'p', 'l', 'e', 'b', 'n', 'c', 'h', 'r', 'y']
// let uniqueChars = newString.filter((item, i, string) => string.indexOf(item) === i);

// let unique = a.filter((item, i, ar) => ar.indexOf(item) === i);

