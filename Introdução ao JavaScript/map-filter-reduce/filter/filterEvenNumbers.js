function filterEvenNumbers(array) {
  const filteredEvenNumbers = array.filter((num) => num % 2 === 0)
  return filteredEvenNumbers;
}

console.log(filterEvenNumbers([1,5,8,7,22,65,100,154,789]));