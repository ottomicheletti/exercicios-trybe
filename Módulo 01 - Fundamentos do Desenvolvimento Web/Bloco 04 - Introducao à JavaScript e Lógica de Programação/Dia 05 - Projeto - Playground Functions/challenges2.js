// Desafio 10
function techList(stacks, nome) {
  let stacksObj = [];

  // recebe o input 'stacks' e os organiza por ordem alfabetica
  let organizaStacks = stacks.sort();

  // estrutura de repetição ´for' para que objetos sejam criados dentro da array 'stacksObj'
  for (let index = 0; index < stacks.length; index++) {
    stacksObj[index] = new Object({ tech: organizaStacks[index], name: nome });
  }

  // testa se a array 'stacksObj' possui mais de 5 indices
  if (stacksObj.length === 5) {
    return stacksObj;
  } else {
    return 'Vazio!';
  }
}

// Desafio 11
function generatePhoneNumber(array) {
  let resultado;
  let numeros = array;

  // verifica se o numero tem mais ou menos de 11 digitos
  if (array.length !== 11) {
    resultado = 'Array com tamanho incorreto.';
    // verifica se existe algum numero menor que 0 ou maior que 9
  } else if (Math.max(...numeros) > 9 || Math.min(...numeros) < 0) {
    resultado = 'não é possível gerar um número de telefone com esses valores';
  } else {
    let contador = 0;
    let vezesAlgumNumeroRepete = 0;

    // primeiro 'for' percorre os digitos do numero de telefone
    for (
      let numeroDaArray = 0;
      numeroDaArray < numeros.length;
      numeroDaArray++
    ) {
      let numeroQueVerifica = numeros[numeroDaArray];
      // segundo 'for' usa um 'if' pra comparar se um digito é igual a outro do telefone
      for (let index = 0; index < numeros.length; index++) {
        if (numeroQueVerifica === numeros[index]) {
          // caso o numero verificado se repita, o contador soma +1
          contador += 1;
        }
      }

      // quando acaba o 'for' interno, a variável 'vezesAlgumNumeroRepete' guarda o valor do contador para poder comparar com o contador do próximo digito caso ele se repita
      if (contador > vezesAlgumNumeroRepete) {
        vezesAlgumNumeroRepete = contador;
      }
      contador = 0;
    }
    // verifica se o digito que mais se repetiu no número é maior ou igual a 3x
    if (vezesAlgumNumeroRepete >= 3) {
      resultado =
        'não é possível gerar um número de telefone com esses valores';
    } else {
      // se o numero de telefone passar por todos os testes, a variável 'telefone' torna a 'array' em string
      let telefone = numeros.join('');

      resultado =
        '(' +
        telefone.slice(0, 2) +
        ')' +
        ' ' +
        telefone.slice(2, 7) +
        '-' +
        telefone.slice(7, 11);
    }
  }

  return resultado;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    return true;
  } else {
    return false;
  }
}

// Desafio 13
function hydrate(string) {
  // a variável 'numerosArray' busca por quaiquer números que estejam presentes no input 'string' e os retorna como elementos de uma array em 'numerosArray'
  let numerosArray = string.match(/\d+/g).map(Number);
  let coposDeAgua = 0;
  let pluralOuNao = [];

  // estrutura de repetição para que a cada numero presente na array 'numerosArray' seu valor seja incrementado na variável 'coposDeAgua'
  for (let index = 0; index < numerosArray.length; index++) {
    if (typeof numerosArray[index] == 'number') {
      coposDeAgua += numerosArray[index];
    }
  }

  // verifica a quantidade de 'coposDeAgua' para que a string que acompanha o numero coincida com sua pluralidade ou não
  if (coposDeAgua > 1) {
    pluralOuNao = ' copos de água';
  } else {
    pluralOuNao = ' copo de água';
  }
  // junta as variáveis 'coposDeAgua' e 'pluralOuNao' em uma array
  let resposta = [coposDeAgua, pluralOuNao];
  return resposta.join('');
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
