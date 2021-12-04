function percorreArray(vector) {
  let novoArray = [];
  for (let key = 0; key < vector.length; key++) {
    // percorre as propriedades de vector
    for (let indice = 0; indice < vector[key].length; indice++) {
      //percorre os indices de cada valor em cada propriedade de vector
      if (vector[key][indice] % 2 === 0) {
        novoArray.push(vector[key][indice]);
      }
    }
  }
  return novoArray;
}

let vector = [
  [1, 2],
  [3, 4, 5, 6],
  [7, 8, 9, 10],
];
console.log(percorreArray(vector));
