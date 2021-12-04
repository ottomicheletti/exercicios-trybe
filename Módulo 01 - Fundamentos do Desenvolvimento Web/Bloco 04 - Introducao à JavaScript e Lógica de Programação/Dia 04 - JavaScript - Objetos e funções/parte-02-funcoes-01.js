function verificaPalindromo(palavra) {
  let word = palavra;
  let drow = word.split('').reverse().join('');
  if (word === drow) {
    return 'A palavra ' + palavra + ' é um palíndromo';
  } else {
    return 'A palavra ' + palavra + ' não é um palindromo';
  }
}

console.log(verificaPalindromo('xablau'));

console.log(verificaPalindromo('arara'));
