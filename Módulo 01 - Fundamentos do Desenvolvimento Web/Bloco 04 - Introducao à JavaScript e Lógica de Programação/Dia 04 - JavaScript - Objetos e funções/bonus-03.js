const basket = [
  'Melancia',
  'Abacate',
  'Melancia',
  'Melancia',
  'Uva',
  'Laranja',
  'Jaca',
  'Pera',
  'Melancia',
  'Uva',
  'Laranja',
  'Melancia',
  'Banana',
  'Uva',
  'Pera',
  'Abacate',
  'Laranja',
  'Abacate',
  'Banana',
  'Melancia',
  'Laranja',
  'Laranja',
  'Jaca',
  'Uva',
  'Banana',
  'Uva',
  'Laranja',
  'Pera',
  'Melancia',
  'Uva',
  'Jaca',
  'Banana',
  'Pera',
  'Abacate',
  'Melancia',
  'Melancia',
  'Laranja',
  'Pera',
  'Banana',
  'Jaca',
  'Laranja',
  'Melancia',
  'Abacate',
  'Abacate',
  'Pera',
  'Melancia',
  'Banana',
  'Banana',
  'Abacate',
  'Uva',
  'Laranja',
  'Banana',
  'Abacate',
  'Uva',
  'Uva',
  'Abacate',
  'Abacate',
  'Melancia',
  'Uva',
  'Jaca',
  'Uva',
  'Banana',
  'Abacate',
  'Banana',
  'Uva',
  'Banana',
  'Laranja',
  'Laranja',
  'Jaca',
  'Jaca',
  'Abacate',
  'Jaca',
  'Laranja',
  'Melancia',
  'Pera',
  'Jaca',
  'Melancia',
  'Uva',
  'Abacate',
  'Jaca',
  'Jaca',
  'Abacate',
  'Uva',
  'Laranja',
  'Pera',
  'Melancia',
  'Jaca',
  'Pera',
  'Laranja',
  'Jaca',
  'Pera',
  'Melancia',
  'Jaca',
  'Banana',
  'Laranja',
  'Jaca',
  'Banana',
  'Pera',
  'Abacate',
  'Uva',
];

let cestaDeFrutas = {};
function criaCestaDeFrutas(basket) {
  cestaDeFrutas[basket[0]] = 1;
  // percorre array 'basket' - começa em 1 pois o indice 0 já foi usado para iniciar o objeto 'cestaDeFrutas'
  for (let index = 1; index < basket.length; index++) {
    // se 'cestaDeFrutas' tiver uma propriedade com o nome que está na array 'basket', soma +1 em seu valor, senão, cria a propriedade começando em 1
    if (cestaDeFrutas.hasOwnProperty(basket[index]) === true) {
      cestaDeFrutas[basket[index]] += 1;
    } else {
      cestaDeFrutas[basket[index]] = 1;
    }
  }
  return cestaDeFrutas;
}

console.log(criaCestaDeFrutas(basket));

console.log(
  'Sua cesta possui: ' +
    cestaDeFrutas['Melancia'] +
    ' Melancias, ' +
    cestaDeFrutas['Abacate'] +
    ' Abacates, ' +
    cestaDeFrutas['Uva'] +
    ' Uvas, ' +
    cestaDeFrutas['Laranja'] +
    ' Laranjas, ' +
    cestaDeFrutas['Jaca'] +
    ' Jacas, ' +
    cestaDeFrutas['Pera'] +
    ' Peras e ' +
    cestaDeFrutas['Banana'] +
    ' Bananas.'
);
