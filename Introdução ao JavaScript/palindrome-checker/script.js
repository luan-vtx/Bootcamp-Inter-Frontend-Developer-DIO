// Essa função verifica se uma string é um palíndromo usando o loop for
function checkIfIsPalindromeV1(string) {
  // A string é formatada para ficar com todas as letras minúsculas e os espaços em branco são removidos aqui
  const stringWithoutSpace = string.toLowerCase().replace(/\s+/g, '');

  // Uma nava variável é declarada para receber o valor da string invertida
  let reversedString = '';

  // O loop percorre a string de trás pra frente e vai adicionando cada caractere na reversedString
  for(let i = stringWithoutSpace.length - 1; i >= 0; i -= 1) {
    reversedString += stringWithoutSpace[i];
  }

  // O retorno é a comparação entre a string e sua inversa
  return stringWithoutSpace === reversedString;
}

// Essa função verifica se uma string é um palíndromo usando funções nativas do JavaScript para reescrever a string ao contrário
function checkIfIsPalindromeV2(string) {
  // A string é formatada para ficar com todas as letras minúsculas e os espaços em branco são removidos aqui
  const stringWithoutSpace = string.toLowerCase().replace(/\s+/g, '');

  // Aqui uma nova variação é criada e recebe como valor a string escrita de trás pra frente
  const reversedString = stringWithoutSpace.split('').reverse().join('');

  // O retorno é a comparação entre a string e sua inversa
  return stringWithoutSpace === reversedString;
}

console.log(checkIfIsPalindromeV1('Anotaram a data da maratona'));
console.log(checkIfIsPalindromeV2('O lobo ama o bolo'));