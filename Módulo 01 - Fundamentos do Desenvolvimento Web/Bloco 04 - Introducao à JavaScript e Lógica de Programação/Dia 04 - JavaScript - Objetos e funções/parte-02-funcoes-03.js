function verificaMaiorIndice(array) {
  let arrayDeInteiros = array;
  let indice = 0;
  let menorNumero = array[0];
  for (let index = 0; index < array.length; index++) {
    if (arrayDeInteiros[index] < menorNumero) {
      indice = index;
      menorNumero = array[index];
    }
  }
  return indice;
}

let arrayTeste = [2, 4, 6, 7, 10, 0, -3];
console.log(verificaMaiorIndice(arrayTeste));
