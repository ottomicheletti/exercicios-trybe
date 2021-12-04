function somaDeN(n) {
  let soma = 0;
  for (let index = n; index > 0; index--) {
    soma += index;
  }
  return soma;
}

let numeroTeste = 5;
console.log(somaDeN(numeroTeste));
