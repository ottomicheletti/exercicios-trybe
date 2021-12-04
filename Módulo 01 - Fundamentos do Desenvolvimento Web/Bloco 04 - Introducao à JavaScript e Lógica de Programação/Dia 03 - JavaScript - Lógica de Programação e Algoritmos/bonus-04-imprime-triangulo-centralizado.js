const n = 5;
let linha = '';
const linhaMiddle = Math.ceil(n / 2);
let posEsquerda = linhaMiddle;
let posDireita = linhaMiddle;

for (let indexLinha = 0; indexLinha <= linhaMiddle; indexLinha += 1) {
  for (let indexColuna = 0; indexColuna <= n; indexColuna += 1) {
    if (indexColuna > posEsquerda && indexColuna < posDireita) {
      linha += ' * ';
    } else {
      linha += '   ';
    }
  }
  console.log(linha);
  linha = '';
  posEsquerda -= 1;
  posDireita += 1;
}
