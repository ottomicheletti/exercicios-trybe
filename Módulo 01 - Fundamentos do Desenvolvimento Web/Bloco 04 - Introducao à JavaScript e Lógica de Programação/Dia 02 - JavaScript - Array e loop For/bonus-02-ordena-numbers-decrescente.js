const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let direita = 1; direita < numbers.length; direita++) {
  for (let esquerda = 0; esquerda < direita; esquerda++) {
    // ordena do maior pro menor - Bubble Sort
    if (numbers[direita] > numbers[esquerda]) {
      let guardaNumero = numbers[direita];
      numbers[direita] = numbers[esquerda];
      numbers[esquerda] = guardaNumero;
    }
  }
}

console.log(numbers);
