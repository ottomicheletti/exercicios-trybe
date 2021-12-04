const custoPorProduto = 40;
const precoPorProduto = 50;
const quantidadeVendida = 1000;

const lucroPorProduto = precoPorProduto - custoPorProduto * 1.2;

if (custoPorProduto > 0 && precoPorProduto > 0 && quantidadeVendida > 0) {
  console.log(quantidadeVendida * lucroPorProduto);
} else if (
  custoPorProduto < 0 ||
  precoPorProduto < 0 ||
  quantidadeVendida < 0
) {
  console.log('Verifique os valores, algo está negativo!');
}
