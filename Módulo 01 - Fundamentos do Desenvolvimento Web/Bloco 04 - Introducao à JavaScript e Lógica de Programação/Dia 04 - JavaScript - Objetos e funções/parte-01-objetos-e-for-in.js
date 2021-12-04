let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
//*exercicio 01
// console.log('Bem vinda, ' + info.personagem);

//*exercicio 02
info.recorrente = 'Sim';
// console.log(info.recorrente);

//*exercicio 03
// for (const key in info) {
//   console.log(key);
// }

//*exercicio 04
// for (const key in info) {
//   console.log(info[key]);
// }

//*exercicio 05
let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Colour Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};
if (info.recorrente === info2.recorrente) {
}

for (const key in info) {
  if (key === 'recorrente' && info[key] === 'Sim' && info2[key] === 'Sim') {
    console.log('Ambos recorrentes');
  } else {
    console.log(info[key] + ' e ' + info2[key]);
  }
}
