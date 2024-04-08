function product(...numbers) {
  const numbers = [a,b,c,d,e];

  return numbers.reduce((acc, number) => {
    return acc * number;
  }, 1)
}

function unshift(array, ... letters) {
  return [...letters, ...array];
}
