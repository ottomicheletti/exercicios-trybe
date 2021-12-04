const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor = 100;

for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] < menor) {
    menor = numbers[index];
  }
}

console.log(menor);
