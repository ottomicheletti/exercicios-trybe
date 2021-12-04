const numero = 31;
let ehPrimo = 0;

for (let index = 1; index <= numero; index++) {
  if (numero % index === 0) {
    ehPrimo += 1;
  }
}
if (ehPrimo == 2) {
  console.log(''.concat(numero, ' é um número primo'));
} else {
  console.log(''.concat(numero, ' não é um número primo'));
}
