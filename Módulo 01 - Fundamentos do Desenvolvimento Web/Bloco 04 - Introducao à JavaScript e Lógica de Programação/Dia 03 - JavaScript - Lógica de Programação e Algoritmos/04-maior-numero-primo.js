const n = 50;
let arrayNumeros = [];
let posicaoDoPrimo = [];
let ehPrimo = 0;

// estrutura For para criar arrayNumeros com valores de 0 a n
for (let index = 0; index <= n; index++) {
  arrayNumeros.push(index);
}

//! console.log(arrayNumeros);

// estrutura For para testar cada posição da arrayNumeros com outra estrutura For para servir como divisor dos numeros.
for (let posicao = 0; posicao < arrayNumeros.length; posicao++) {
  for (let divisor = 1; divisor < arrayNumeros.length; divisor++) {
    // se o if for verdadeiro, soma +1 na variavel ehPrimo
    if (arrayNumeros[posicao] % divisor === 0) {
      ehPrimo += 1;
    }
  }
  // empurra o valor de ehPrimo para a array posicaoDoPrimo e depois reseta a variavel ehPrimo para que possa ser usada de novo
  posicaoDoPrimo.push(ehPrimo);
  ehPrimo = 0;
}

//! console.log(posicaoDoPrimo);

//  busca pelo último índice do numero 2, cujo representa que um numero só tem dois divisores -> 1 e ele mesmo,
//  com o índice do último numero 2, busca o mesmo índice na arrayNumeros e retorna o valor
console.log(
  'O maior número primo dessa array é: ' +
    arrayNumeros[posicaoDoPrimo.lastIndexOf(2)]
);
