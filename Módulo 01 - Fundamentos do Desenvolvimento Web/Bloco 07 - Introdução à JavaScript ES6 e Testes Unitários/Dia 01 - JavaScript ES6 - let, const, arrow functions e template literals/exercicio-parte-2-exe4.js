// Função 1
const retorno = (x) => {
  return `Tryber ${x} aqui!`;
}

// console.log(retorno('Bebeto'));

// Array de escopo global
var skills = ['html', 'css', 'javascript', 'jquery', 'bootstrap'];

// Função 2 
const resultado = (x, y) => {
  return `${retorno(x)} Minhas cinco principais habilidades são: ${y.sort().join(', ')}`;
}

console.log(resultado(retorno('Bebeto'), skills));
