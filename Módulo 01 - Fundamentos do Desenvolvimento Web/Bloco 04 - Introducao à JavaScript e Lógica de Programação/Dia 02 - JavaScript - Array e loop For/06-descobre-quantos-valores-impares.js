const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impares = 0;

for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] % 2 === 1) {
    impares += 1;
  }
}

if (impares > 0) {
  console.log(impares + ' valor(es) ímpar(es) encontrado(s)');
} else {
  console.log('Nenhum valor ímpar encontrado');
}
