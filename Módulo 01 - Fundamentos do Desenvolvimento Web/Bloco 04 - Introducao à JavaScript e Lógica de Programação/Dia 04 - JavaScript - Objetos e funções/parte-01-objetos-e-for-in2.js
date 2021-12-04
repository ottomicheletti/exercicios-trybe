let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

// exercicio 06

console.log(
  'O livro favorito de ' +
    leitor.nome +
    ' ' +
    leitor.sobrenome +
    ' se chama "' +
    leitor.livrosFavoritos[0].titulo +
    '".'
);

// exercicio 07

leitor.livrosFavoritos.push({
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'Jk Rowling',
  editora: 'Rocco',
});

// exercicio 08

console.log(
  leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos'
);
