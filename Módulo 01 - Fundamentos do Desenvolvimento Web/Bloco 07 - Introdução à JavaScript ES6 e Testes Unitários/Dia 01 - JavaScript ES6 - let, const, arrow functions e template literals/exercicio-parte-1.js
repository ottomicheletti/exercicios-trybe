// Exercício 1
const escopo = (a) => {
  if (a === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope}. Ótimo, fui utilizada no escopo !`;
    return ifScope;
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    return elseScope;
  }
}

console.log(escopo(true));

// Exercício 2
const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const sorted = oddsAndEvens.sort((a ,b) => a - b);

console.log(`Os números ${sorted.join(', ')} se encontram ordenados de forma crescente!`);