function verificaMaiorIndice(array) {
  let arrayDeInteiros = array;
  let indice = 0;
  for (let index = 0; index < array.length; index++) {
    if (arrayDeInteiros[index] > indice) {
      indice = index;
    }
  }
  return indice;
}

let arrayTeste = [2, 3, 6, 7, 10, 1];
console.log(verificaMaiorIndice(arrayTeste));
