// Exercício 1
const fatorial = (n) => {
  let resultado = n;
  let numeros = [];
  for(let index = n - 1; index > 0; index -= 1) {
    numeros.push(index);
    resultado *= index;
  }
  return `${n}! = ${numeros.join(' * ')} = ${resultado}`;
}

console.log(fatorial(8));

// Exercício 2
const maiorPalavra = (frase) => {
  const fraseArray = frase.split(' ');
  let palavra = '';
  
  for (let index = 0; index < fraseArray.length; index += 1) {
    fraseArray[index].length > palavra.length ? palavra = fraseArray[index] : '';
  }
  return `A maior palavra é: ${palavra}`;
}

console.log(maiorPalavra('Antônio foi no banheiro e não sabemos o que aconteceu'));