const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let novoArray = [];

for (let index = 0; index < numbers.length; index++) {
  if (typeof numbers[index + 1] === 'number') {
    novoArray.push(numbers[index] * numbers[index + 1]);
  } else {
    novoArray.push(numbers[index] * 2);
  }
}

console.log(novoArray);
