const multiplyNumbers = (array) => {
  const newArray = array.map((elem) => elem * 2);
  return newArray;
}

console.log(multiplyNumbers([5,7,8,9,15,100]));