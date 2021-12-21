function replaceEvenNumbers(array) {
  // Se o array estiver vazio a funçao retorna -1
  if(array.length < 1) return -1;

  // O loop percorre todo o array e quando encontra algum indice com valor par, esse indice é reatribuido com o valor 0
  for(let i = 0; i < array.length; i += 1) {
    if(array[i] % 2 === 0) {
      array[i] = 0;
    }
  }

  // O array atualizado é retornado
  return array;
}

console.log(replaceEvenNumbers([1, 3, 4, 6, 80, 33, 23, 90]));
console.log(replaceEvenNumbers([]));