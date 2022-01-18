const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    expect(typeof productDetails).toBe('function');
    expect(Array.isArray(productDetails('Alcool gel', 'Máscara'))).toBe(true);
    expect(productDetails('Alcool gel', 'Máscara')).toHaveLength(2);
    expect(typeof (productDetails('Alcool gel', 'Máscara'))[0] === 'object' && typeof (productDetails('Alcool gel', 'Máscara'))[1] === 'object').toBe(true);
    expect((productDetails('Alcool gel', 'Máscara'))[0] !== (productDetails('Alcool gel', 'Máscara'))[1]).toBe(true);
    expect((productDetails('Alcool gel', 'Máscara'))[0].details.productId && (productDetails('Alcool gel', 'Máscara'))[1].details.productId).toMatch('123');
  });
});
