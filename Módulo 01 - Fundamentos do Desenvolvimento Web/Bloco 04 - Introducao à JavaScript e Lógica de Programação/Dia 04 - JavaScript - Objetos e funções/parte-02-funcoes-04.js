function verificaMaiorNome(nomes) {
  let arrayNomes = nomes;
  let nomeLength = 0;
  let nomeIndex = 0;

  for (let index = 0; index < arrayNomes.length; index++) {
    if (arrayNomes[index].length > nomeLength) {
      nomeLength = arrayNomes[index].length;
      nomeIndex = index;
    }
  }
  return arrayNomes[nomeIndex];
}

let arrayTeste = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
console.log(verificaMaiorNome(arrayTeste));
