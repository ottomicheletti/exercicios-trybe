function verificaMaisRepetido(array) {
  let contador = 0;
  let numeroRepetido = 0;
  let indiceNumeroRepetido = 0;

  for (let key in array) {
    let verificaNumero = array[key];
    for (const key2 in array) {
      if (verificaNumero === array[key2]) {
        contador += 1;
      }
    }
    if (contador > numeroRepetido) {
      numeroRepetido = contador;
      indiceNumeroRepetido = key;
    }
    contador = 0;
  }
  return array[indiceNumeroRepetido];
}

let arrayTeste = [2, 3, 2, 5, 8, 2, 3];
console.log(verificaMaisRepetido(arrayTeste));
