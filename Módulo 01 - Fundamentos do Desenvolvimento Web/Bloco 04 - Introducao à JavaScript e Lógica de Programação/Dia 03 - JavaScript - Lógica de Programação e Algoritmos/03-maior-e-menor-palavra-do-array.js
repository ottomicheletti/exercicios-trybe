let array = ['java', 'javascript', 'python', 'html', 'css', 'angular'];
let container = [array[0]];
let menorPalavra = '';
let maiorPalavra = '';

for (let index = 0; index < array.length; index++) {
  if (array[index].length > maiorPalavra.length) {
    maiorPalavra = array[index];
  } else if (array[index].length < container[0].length) {
    container = array[index];
    menorPalavra = container;
  }
}

console.log(
  'Menor Palavra: ' + menorPalavra + ', ' + 'Maior Palavra: ' + maiorPalavra
);
