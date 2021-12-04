const n = 5;
let linha = '';
let posicao = n;

for (let index = 0; index < n; index += 1) {
  for (let coluna = 0; coluna <= n; coluna += 1) {
    if (coluna < posicao) {
      linha += '   ';
    } else {
      linha += ' * ';
    }
  }
  console.log(linha);
  linha = '';
  posicao -= 1;
}
