const n = 7;
let linhaMiddle = Math.ceil(n / 2);
let posEsquerda = linhaMiddle;
let posDireita = linhaMiddle;

for (let indexLinha = 1; indexLinha <= linhaMiddle; indexLinha += 1) {
  let linha = '';
  for (let indexColuna = 1; indexColuna <= n; indexColuna += 1) {
    if (
      indexColuna == posEsquerda ||
      indexColuna == posDireita ||
      indexLinha == linhaMiddle
    ) {
      linha += ' * ';
    } else {
      linha += '   ';
    }
  }
  console.log(linha);
  posEsquerda -= 1;
  posDireita += 1;
}
