const reduceNumbers = (array) => {
  const result = array.reduce((acc, curr) => acc + curr);

  return result;
}

console.log(reduceNumbers([10,15,15]));