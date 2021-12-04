// Desafio 1
function compareTrue(a, b) {
  let resultado;
  if (a === true && b === true) {
    resultado = true;
  } else {
    resultado = false;
  }
  return resultado;
}

// Desafio 2
function calcArea(base, height) {
  let areaTriangulo = (base * height) / 2;
  return areaTriangulo;
}

// Desafio 3
function splitSentence(string) {
  let arrayResposta = string.split(' ');
  return arrayResposta;
}

// Desafio 4
function concatName(array) {
  let frase = [array[array.length - 1], array[0]];
  return frase.join(', ');
}

// Desafio 5
function footballPoints(wins, ties) {
  let resultado = wins * 3 + ties * 1;
  return resultado;
}

// Desafio 6
function highestCount(array) {
  let numeros = array;
  let maiorNumero = Math.max(...array);
  let contador = 0;

  for (let index = 0; index < array.length; index++) {
    if (numeros[index] === maiorNumero) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = Math.abs(mouse - cat1);
  let distanciaCat2 = Math.abs(mouse - cat2);
  let quemPega;

  if (distanciaCat1 < distanciaCat2) {
    quemPega = 'cat1';
  } else if (distanciaCat2 < distanciaCat1) {
    quemPega = 'cat2';
  } else if (distanciaCat1 === distanciaCat2) {
    quemPega = 'os gatos trombam e o rato foge';
  }
  return quemPega;
}

// Desafio 8
function fizzBuzz(array) {
  let resultado = [];
  for (let index = 0; index < array.length; index++) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      resultado.push('fizzBuzz');
    } else if (array[index] % 3 === 0) {
      resultado.push('fizz');
    } else if (array[index] % 5 === 0) {
      resultado.push('buzz');
    } else {
      resultado.push('bug!');
    }
  }

  return resultado;
}

// Desafio 9
const vogais = {
  decode: ['a', 'e', 'i', 'o', 'u'],
  encode: [1, 2, 3, 4, 5],
};

function encode(string) {
  let fraseCodificada = [];

  for (let index = 0; index < string.length; index++) {
    switch (true) {
      case string[index] === 'a':
        fraseCodificada.push(1);
        break;
      case string[index] === 'e':
        fraseCodificada.push(2);
        break;
      case string[index] === 'i':
        fraseCodificada.push(3);
        break;
      case string[index] === 'o':
        fraseCodificada.push(4);
        break;
      case string[index] === 'u':
        fraseCodificada.push(5);
        break;
      default:
        fraseCodificada.push(string[index]);
        break;
    }
  }
  return fraseCodificada.join('');
}

function decode(string2) {
  let fraseDecodificada = [];

  for (let index2 = 0; index2 < string2.length; index2++) {
    switch (true) {
      case string2[index2] === '1':
        fraseDecodificada.push('a');
        break;
      case string2[index2] === '2':
        fraseDecodificada.push('e');
        break;
      case string2[index2] === '3':
        fraseDecodificada.push('i');
        break;
      case string2[index2] === '4':
        fraseDecodificada.push('o');
        break;
      case string2[index2] === '5':
        fraseDecodificada.push('u');
        break;
      default:
        fraseDecodificada.push(string2[index2]);
        break;
    }
  }
  return fraseDecodificada.join('');
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
