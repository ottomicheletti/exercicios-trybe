let moradores = {
  blocoUm: [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ],
};

let nomes = [];

for (let bloco = 0; bloco < 2; bloco++) {
  for (let key = 0; key < 2; key++) {
    if (bloco === 0) {
      nomes.push(
        moradores.blocoUm[key].nome + ' ' + moradores.blocoUm[key].sobrenome
      );
    } else {
      nomes.push(
        moradores.blocoDois[key].nome + ' ' + moradores.blocoDois[key].sobrenome
      );
    }
  }
}

console.log(nomes.join(', '));
